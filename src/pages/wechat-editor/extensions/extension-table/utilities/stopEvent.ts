
export const stopEvent = (event: Event) => {
    event.stopPropagation()
    event.preventDefault()
}
