const linesToCSV = (lines, lessValue, regLengths) => {
    let mainArr = [];
    console.log(lines.length);
    console.log(Number(lessValue));
    console.log(regLengths);
    for (let i = 0; i < lines.length; i++) {
        const numOfMatches = lines[i].reduce((acc, cur) => {
            return acc + cur.matches.length;
        }, 0);
        let lineArr = [];
        if (numOfMatches >= Number(lessValue)) {
            let currentRegIndex = 0;
            let lastMatchedLine = -1;
            while (currentRegIndex < regLengths.length) {
                let currentLine = 0;
                if (lastMatchedLine != -1) {
                    currentLine = lastMatchedLine + 1;
                }
                while (currentLine < lines[i].length) {
                    if (lines[i][currentLine].matches[0] === currentRegIndex) {
                        lastMatchedLine = currentLine;
                        lineArr.push(lines[i][currentLine].variables);
                        break;
                    }
                    currentLine += 1;
                }
                currentRegIndex += 1;
            }
            lineArr = lineArr.flat();
        }
        if (lineArr.length > 0) {
            mainArr.push(lineArr);
            lineArr = [];
        }
    }
    return mainArr;
};
export default linesToCSV;
