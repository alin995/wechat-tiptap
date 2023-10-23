export const createElementWithAttributes = (name: string, attrs?: Record<string, any>, events?: Record<string, any>) => {
    const el = document.createElement(name);

    if (!el) {
        throw new Error(`Element with name ${name} can't be created.`);
    }

    if (attrs) {
        Object.entries(attrs).forEach(([key, val]) => el.setAttribute(key, val));
    }

    if (events) {
        Object.entries(events).forEach(([key, val]) =>
            el.addEventListener(key, val)
        );
    }

    return el;
};
