const regexin = document.getElementById("regexin");
// 509002 DHARMADHIKARI OMKAR |USCS101 |USCS102 |USCSP101 |USCS103 |USCS104 | Unsuccessful Fail
const regexout = document.getElementById("regexout");
// /(\d+)\s([\w\s]+)\s\|(USCS101)\s\|(USCS102)\s\|(USCSP101)\s\|(USCS103)\s\|(USCS104)\s\|\s([\w\s]+)\n/g

let regexp;

const strToRegex = (inp) => {
  // console.log("strToRegex called with inp: ", inp);
  let out = "";
  let currentStr = "";
  let variableOpen = false;
  let literalOpen = false;
  let matchAnyOpen = false;
  for (let i = 0; i < inp.length; i++) {
    if (!variableOpen && !literalOpen && !matchAnyOpen) {
      if (inp[i] == " ") {
        out += "\\s";
      } else if (inp[i] == "|") {
        out += "\\|";
      } else if (inp[i] == "/") {
        out += "\\/";
      }else if (inp[i] == "-") {
        out += "\\-";
      } else if (inp[i] == "`") {
        variableOpen = true;
      } else if (inp[i] == "^") {
        literalOpen = true;
      } else if (inp[i] == "$") {
        matchAnyOpen = true;
      } 
    } else {
      if (inp[i] == "`") {
        variableOpen = false;
        const processedVariable = textToRegex(currentStr);
        out += processedVariable;
        currentStr = "";
      } else if (inp[i] == "^") {
        literalOpen = false;
        out += "(" + currentStr.replaceAll("|", "\\|").replaceAll("/", "\\/").replaceAll("-", "\\-") + ")";
        currentStr = "";
      } else if (inp[i] == "$") {
        matchAnyOpen = false;
        out += "(.+)"
        currentStr = "";
      } else {
        currentStr += inp[i];
      }
    }
  }

  out += "";
  regexp = out;
  // console.log("strToRegex output: ", String(regexp));
  return String(regexp);
};

const textToRegex = (input) => {
  if (input.match(/^\d$/)) {
    return "(\\d)";
  } else if (input.match(/^\d+$/)) {
    return "(\\d+)";
  } else if (input.match(/^[A-Z]+$/)) {
    return "([A-Z]+)";
  } else if (input.match(/^[A-Z\s]+$/)) {
    return "([A-Z\\s]+)";
  } else if (input.match(/^[a-z]+$/)) {
    return "([a-z]+)";
  } else if (input.match(/^[a-z\s]+$/)) {
    return "([a-z\\s]+)";
  } else if (input.match(/^([A-Za-z]+)$/)) {
    return "([A-Za-z]+)";
  } else if (input.match(/^([A-Za-z\s]+)$/)) {
    return "([A-Za-z\\s]+)";
  } else if (input.match(/^([A-Za-z\d]+)$/)) {
    return "([A-Za-z\\d]+)";
  } else if (input.match(/^([A-Za-z\d\s]+)$/)) {
    return "([A-Za-z\\d\\s]+)";
  } else if (input.match(/^\w+$/)) {
    return "(\\w+)";
  } else if (input.match(/^[\w+]+$/)) {
    return "([\\w+]+)";
  }
};

export { strToRegex };
