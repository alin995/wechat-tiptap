export const readAsImage = (src: string): Promise<any> => {
    return new Promise((resolve, reject) => {
        const image = new Image();
        image.onload = () => {
            resolve(image);
        };
        image.onerror = () => {
            reject('Unknown error occurred during loading the image');
        };
        image.src = src;
    });
};
