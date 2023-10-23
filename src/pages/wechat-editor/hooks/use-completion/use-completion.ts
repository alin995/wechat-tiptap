// import useEventStream from "@/hooks/use-event-stream";
import OpenAI from "openai";
import { Stream } from "openai/streaming";
import { ChatCompletionChunk } from "openai/resources";
import { useCallback, useState } from "react";

export interface CompletionProps {
    onDataEvent?: (currentAnswer: string, lastAnswer: string, business: any) => void
    onFinish?: (currentAnswer: string, business: any) => void
}

export const useCompletion = ({onDataEvent, onFinish}: CompletionProps) => {

    const [isLoading, setLoading] = useState(false)

    const openai = new OpenAI({
        baseURL: 'http://172.30.35.51:8000/v1/',
        apiKey: 'none',
        dangerouslyAllowBrowser: true,
    });

    const triggerCompletion = async (requestMessages: any, businessParams: any) => {
        try {
            setLoading(true)
            const stream: Stream<ChatCompletionChunk> = await openai.chat.completions.create({
                model: 'gpt-3.5-turbo',
                stream: true,
                messages: [{
                    role: 'user',
                    content: 'Say this is a test'
                }],
            })

            let currentContent = ''
            for await (const part of stream) {
                const deltaContent = part.choices[0]?.delta?.content || ''
                console.log(part)
                console.log(deltaContent)

                const lastContent = currentContent
                currentContent = currentContent + deltaContent
                if (onDataEvent) {
                    onDataEvent(currentContent, lastContent, businessParams)
                }
            }

            onFinish?.(currentContent, businessParams)

        } finally {
            setLoading(false)
        }
    }

    // const {process: complete, isLoading, stop} = useEventStream({
    //     fetcher: (params: any, signal: AbortSignal): Promise<Response> => {
    //         return service.requestComplete({...params, history: []}, {
    //             options: {
    //                 signal
    //             }
    //         })
    //     },
    //     onDataEvent: (lastAnswer = '', block) => {
    //         const {answer, answerAdd} = block
    //         const currentAnswer = answer || (lastAnswer + answerAdd)
    //
    //         const answerDiff = currentAnswer.substring(lastAnswer.length)
    //
    //         if (answerDiff?.length > 0) {
    //             props.onDataEvent?.(currentAnswer, lastAnswer)
    //         }
    //
    //         return currentAnswer
    //     },
    //     onFinish: (currentAnswer, businessParams) => {
    //         props.onFinish?.(currentAnswer, businessParams)
    //     },
    //     onError: (err) => {
    //         console.log('onError')
    //         console.log(err)
    //     },
    // })

    const completion = useCallback(async (requestParams: any, businessParams?: any) => {
        return triggerCompletion(requestParams, businessParams)
    }, [triggerCompletion])

    const stop = useCallback(() => {
        // if (abortController) {
        //     abortController.abort?.();
        //     setAbortController(null);
        // }
    }, []);

    return {
        completion,
        isLoading,
        stop,
    }
}

export default useCompletion
