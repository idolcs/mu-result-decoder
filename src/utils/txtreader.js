function txtToString(file) {
    return new Promise((resolve, reject) => {
        const fr = new FileReader();
        fr.onload = () => {
            const data = fr.result;
            let arr = data.split(/\r\n/);
            resolve(arr);
        };
        fr.onerror = reject;
        fr.readAsText(file);
    });
}

export {txtToString};