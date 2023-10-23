export const readFileAsDataURL = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.onerror = () => {
            reader.abort();
            reject('Unknown error occurred during reading the file');
        };
        reader.onload = () => {
            resolve(reader.result);
        };
        reader.readAsDataURL(file);
    });
}
