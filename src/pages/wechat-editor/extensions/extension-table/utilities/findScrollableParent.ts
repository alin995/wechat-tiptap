export const isScrollable = function (ele: Element) {
    const hasScrollableContent = ele.scrollHeight > ele.clientHeight;

    const overflowYStyle = window.getComputedStyle(ele).overflowY;
    const isOverflowHidden = overflowYStyle.indexOf("hidden") !== -1;

    return hasScrollableContent && !isOverflowHidden;
};

export const findScrollableParent = function (ele?: Element): Element {
    if (!ele || ele === document.body) {
        return document.body;
    }
    return isScrollable(ele) ? ele : findScrollableParent(ele.parentNode as Element);
};
