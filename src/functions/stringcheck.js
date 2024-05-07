const stringcheck = (text, reg) => {
    let regArray = regToArray(reg); // coverts the regex string to array of variables and constants
    let textArray = textParser(text, regArray);
    if (regArray.length === textArray.length) {
        return {
            regexArray: regArray,
            variables: textArray
        };
    }
    else {
        return false;
    }
};
const regToArray = (reg) => {
    let regArray = [];
    let regTracker = {
        index: 0,
        buffer: "",
    };
    const emptyBuffer = () => {
        if (regTracker.buffer.replace(/\s/g, "").length) {
            regArray.push(regTracker.buffer.trim());
        }
        regTracker.buffer = "";
    };
    while (regTracker.index < reg.length) {
        let current = reg[regTracker.index];
        if (current === "'" || current === "$") {
            emptyBuffer();
            regArray.push(current);
            regTracker.index += 1;
        }
        else if (current === "`") {
            emptyBuffer();
            if (reg[regTracker.index + 1] === "`") {
                regArray.push("``");
                regTracker.index += 2;
            }
            else {
                regArray.push("`");
                regTracker.index += 1;
            }
        }
        else {
            regTracker.buffer += current;
            regTracker.index += 1;
        }
    }
    emptyBuffer();
    return regArray;
};
const textParser = (text, regArray) => {
    let textArray = [];
    let textTracker = {
        index: 0,
        buffer: "",
    };
    let regIndex = 0;
    while (regIndex < regArray.length) {
        textTracker.buffer = "";
        if (regArray[regIndex] === "'") {
            let numberFound = true;
            while (numberFound) {
                if (text[textTracker.index] != " " &&
                    Number(text[textTracker.index]) == text[textTracker.index]) {
                    textTracker.buffer += text[textTracker.index];
                }
                else {
                    numberFound = false;
                }
                textTracker.index += 1;
            }
        }
        else if (regArray[regIndex] === "`" || regArray[regIndex] === "``") {
            if (text[textTracker.index] === " ") {
                textTracker.index += 1;
            }
            const allowSpaces = regArray[regIndex] === "``";
            let textFound = true;
            while (textFound && textTracker.index < text.length) {
                if ((allowSpaces && /[A-Za-z\s]/.test(text[textTracker.index])) ||
                    /[A-Za-z]/.test(text[textTracker.index])) {
                    textTracker.buffer += text[textTracker.index];
                    textTracker.index += 1;
                }
                else {
                    textFound = false;
                }
            }
        }
        else if (regArray[regIndex] === "$") {
            if (text[textTracker.index] == " ") {
                textTracker.index += 1;
            }
            let matching = true;
            while (matching && textTracker.index < text.length) {
                if (/[A-Za-z0-9\+\-\.]/.test(text[textTracker.index])) {
                    textTracker.buffer += text[textTracker.index];
                    textTracker.index += 1;
                }
                else {
                    matching = false;
                }
            }
        }
        else {
            let regItemLength = regArray[regIndex].length;
            let regItemIndex = 0;
            let matching = true;
            while (matching && regItemIndex < regItemLength) {
                if (regItemIndex == 0 && text[textTracker.index] == " ") {
                    textTracker.index += 1;
                }
                if (text[textTracker.index] === regArray[regIndex][regItemIndex]) {
                    textTracker.buffer += text[textTracker.index];
                    textTracker.index += 1;
                    regItemIndex += 1;
                }
                else {
                    matching = false;
                }
            }
        }
        if (textTracker.buffer != "") {
            textArray.push(textTracker.buffer.trim());
        }
        regIndex++;
    }
    return textArray;
};
export { regToArray };
export default stringcheck;
