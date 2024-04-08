const fileInput = document.querySelector('[type="file"]');
const preview = document.getElementById("preview");

fileInput.addEventListener("change", () => {
  const fr = new FileReader();

  fr.readAsText(fileInput.files[0]);

  fr.addEventListener("load", () => {
    const data = fr.result;
    let arr = data.split(/\r\n/);
    console.log(arr)
    let arr2 = data.match(regexp);
    console.log(arr2);
    let str = "";
    str += "<table><tr><th>Line</th></tr>"
    for(let i = 0; i < arr.length; i++){
        str += "<tr><td>";
        str += arr[i];
        // str += "<br><br>";
        str += "</td></tr>";
    }
    str += "</table>";
    preview.innerHTML = str;

  });
});
