import React, { ReactNode, useCallback, useEffect, useLayoutEffect, useRef, useState, } from "react";
import { Editor, Extension, Range, ReactRenderer } from "@tiptap/react";
import Suggestion from "@tiptap/suggestion";
import tippy from "tippy.js";
import { BulletListIcon, Heading1Icon, Heading2Icon, Heading3Icon, MagicIcon, NumberedListIcon, QuoteIcon, TaskListIcon, TextIcon, } from "@wechat-editor/icons"


interface CommandItemProps {
	title: string;
	description: string;
	icon: ReactNode;
}

interface CommandProps {
	editor: Editor;
	range: Range;
}

// @ts-ignore
const Command = Extension.create({
	name: "slash-command",
	addOptions() {
		return {
			suggestion: {
				char: "/",
				command: ({editor, range, props}: { editor: Editor; range: Range; props: any; }) => {
					props.command({editor, range});
				},
			},
		};
	},
	addProseMirrorPlugins() {
		return [
			Suggestion({
				editor: this.editor,
				...this.options.suggestion,
			}),
		];
	},
});

const getSuggestionItems = () => {
	return [
		{
			key: "magic",
			title: "AI",
			description: "使用 AI 扩展思路",
			icon: <MagicIcon/>,
			command: ({editor, range}: CommandProps) => {
				editor.chain().focus()
					.deleteRange(range)
					.activateMagic()
					.run()
			},
		},
		{
			title: "正文",
			description: "输入正文",
			searchTerms: ["p", "paragraph"],
			icon: <TextIcon/>,
			command: ({editor, range}: CommandProps) => {
				editor.chain().focus()
					.deleteRange(range)
					.toggleNode("paragraph", "paragraph")
					.run();
			},
		},
		{
			title: "代办事项",
			description: "使用待办事项列表跟踪任务",
			searchTerms: ["todo", "task", "list", "check", "checkbox"],
			icon: <TaskListIcon/>,
			command: ({editor, range}: CommandProps) => {
				editor.chain().focus().deleteRange(range).toggleTaskList().run();
			},
		},
		{
			title: "标题 1",
			description: "大标题",
			searchTerms: ["title", "big", "large"],
			icon: <Heading1Icon/>,
			command: ({editor, range}: CommandProps) => {
				editor.chain().focus().deleteRange(range).setNode("heading", {level: 1}).run();
			},
		},
		{
			title: "标题 2",
			description: "中等标题",
			searchTerms: ["subtitle", "medium"],
			icon: <Heading2Icon/>,
			command: ({editor, range}: CommandProps) => {
				editor.chain().focus().deleteRange(range).setNode("heading", {level: 2}).run();
			},
		},
		{
			title: "标题 3",
			description: "小标题",
			searchTerms: ["subtitle", "small"],
			icon: <Heading3Icon/>,
			command: ({editor, range}: CommandProps) => {
				editor.chain().focus().deleteRange(range).setNode("heading", {level: 3}).run();
			},
		},
		{
			title: "项目符号",
			description: "创建简单项目的列表",
			searchTerms: ["unordered", "point"],
			icon: <BulletListIcon/>,
			command: ({editor, range}: CommandProps) => {
				editor.chain().focus().deleteRange(range).toggleBulletList().run();
			},
		},
		{
			title: "数字标号",
			description: "创建数字编号的列表",
			searchTerms: ["ordered"],
			icon: <NumberedListIcon/>,
			command: ({editor, range}: CommandProps) => {
				editor.chain().focus().deleteRange(range).toggleOrderedList().run();
			},
		},
		{
			title: "引用",
			description: "引用段落",
			searchTerms: ["blockquote"],
			icon: <QuoteIcon/>,
			command: ({editor, range}: CommandProps) =>
				editor.chain().focus().deleteRange(range)
					.toggleNode("paragraph", "paragraph")
					.toggleBlockquote()
					.run(),
		},
	]
};

export const updateScrollView = (container: HTMLElement, item: HTMLElement) => {
	const containerHeight = container.offsetHeight;
	const itemHeight = item ? item.offsetHeight : 0;

	const top = item.offsetTop;
	const bottom = top + itemHeight;

	if (top < container.scrollTop) {
		container.scrollTop -= container.scrollTop - top + 5;
	} else if (bottom > containerHeight + container.scrollTop) {
		container.scrollTop += bottom - containerHeight - container.scrollTop + 5;
	}
};

interface CommandListOptions {
	items: CommandItemProps[]
	command: any
	editor: any
}

const CommandList = ({items, command, editor}: CommandListOptions) => {
	const [selectedIndex, setSelectedIndex] = useState(0);

	const selectItem = useCallback(async (index: number) => {
		const item = items[index];
		if (item) {
			command(item);
		}
	}, [command, editor, items],);

	useEffect(() => {
		const navigationKeys = ["ArrowUp", "ArrowDown", "Enter"];
		const onKeyDown = (e: KeyboardEvent) => {
			if (navigationKeys.includes(e.key)) {
				e.preventDefault();
				if (e.key === "ArrowUp") {
					setSelectedIndex((selectedIndex + items.length - 1) % items.length);
					return true;
				}
				if (e.key === "ArrowDown") {
					setSelectedIndex((selectedIndex + 1) % items.length);
					return true;
				}
				if (e.key === "Enter") {
					selectItem(selectedIndex);
					return true;
				}
				return false;
			}
		};
		document.addEventListener("keydown", onKeyDown);
		return () => {
			document.removeEventListener("keydown", onKeyDown);
		};
	}, [items, selectedIndex, setSelectedIndex, selectItem]);

	useEffect(() => {
		setSelectedIndex(0);
	}, [items]);

	const commandListContainer = useRef<HTMLDivElement>();

	useLayoutEffect(() => {
		const container = commandListContainer?.current;

		const item = container?.children[selectedIndex] as HTMLElement;

		if (item && container) {
			updateScrollView(container, item);
		}
	}, [selectedIndex]);

	return items.length > 0 ? (
		<div
			id="slash-command"
			ref={(x) => commandListContainer.current = x!}
			className="z-50 w-[18em] max-h-[330px] p-2 bg-white border rounded-lg shadow-lg"
		>
			{items.map((item: CommandItemProps, index: number) => {
				return (
					<button
						className={`flex w-full mt-2 first:mt-0 px-2 py-1 items-center text-sm leading-5 rounded hover:bg-stone-300 ${index === selectedIndex ? 'bg-stone-100' : ''}`}
						key={index}
						onClick={() => selectItem(index)}
					>
						<div className="flex justify-center items-center w-9 h-9 border rounded">
							{item.icon}
						</div>
						<div className="flex flex-col items-start  ml-2">
							<p className="text-sm font-medium">{item.title}</p>
							<p className="text-xs text-stone-400">{item.description}</p>
						</div>
					</button>
				);
			})}
		</div>
	) : null;
};

const renderItems = () => {
	let component: ReactRenderer | null = null;
	let popup: any | null = null;

	return {
		onStart: (props: { editor: Editor; clientRect: DOMRect }) => {
			component = new ReactRenderer(CommandList, {
				props,
				editor: props.editor,
				className: "wechat-editor-popup"
			});

			popup = tippy("body", {
				getReferenceClientRect: props.clientRect,
				appendTo: () => document.body,
				content: component.element,
				showOnCreate: true,
				interactive: true,
				trigger: "manual",
				placement: "bottom-start",
			});
		},
		onUpdate: (props: { editor: Editor; clientRect: DOMRect }) => {
			component?.updateProps(props);

			if (popup?.[0]) {
				popup[0].setProps({
					getReferenceClientRect: props.clientRect,
				});
			}
		},
		onKeyDown: (props: { event: KeyboardEvent }) => {
			if (props.event.key === "Escape") {
				popup?.[0].hide();

				return true;
			}

			return component?.ref?.onKeyDown(props);
		},
		onExit: () => {
			popup?.[0].destroy();
			component?.destroy();
		},
	};
};

export const SlashCommand = Command.configure({
	suggestion: {
		items: getSuggestionItems,
		render: renderItems,
	},
});
