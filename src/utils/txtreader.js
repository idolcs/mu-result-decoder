function txtToString(file, divider) {

    return new Promise((resolve, reject) => {
        const fr = new FileReader();
        fr.onload = () => {
            const data = fr.result;
            let arr = data.split(divider); // /\r\n/
            console.log(arr);
            resolve(arr);
        };
        fr.onerror = reject;
        fr.readAsText(file);
    });
}

export {txtToString};