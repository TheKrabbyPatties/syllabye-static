const url = "https://syllabye-server.azurewebsites.net"

async function ping(){
    const fetchString = url + "/api/ping"
    const response = await fetch(fetchString)
    const responseText = await response.text()
    console.log(responseText)
}

async function about(){
    const fetchString = url + "/about"
    const response = await fetch(fetchString)
    const responseText = await response.text()
    console.log(responseText)
}

function courseOutcomes(){
  var courseName = document.getElementById('courseName').value;
  var courseCred = document.getElementById('courseCred').value;
  var courseDesc = document.getElementById('courseDesc').value;
  var courseMeet = document.getElementById('courseMeet').value;
  var courseLearn = document.getElementById('courseLearn').value;

  return {
        courseName: courseName,
        courseCred: courseCred,
        courseDesc: courseDesc,
        courseMeet: courseMeet,
        courseLearn: courseLearn
      };
    }
    
    
    function generateGridCells() {
      var gridCells = [];
      document.querySelectorAll('td[contenteditable="true"]').forEach(cell => {
        gridCells.push(`<p>${cell.innerText}</p>`);
    });
    return gridCells.join('');
}

function generatePDF() {
  var element = document.getElementById('syllabus');
  var opt = {
    margin: 1,
    filename: 'syllabus.pdf',
    pagebreak: {mode: ['avoid-all']}
  }
  html2pdf().set(opt).from(element).save();
}

var changeFontFamily = function (fontstyle) {
  document.getElementById("syllabus").style.fontFamily = fontstyle.value;
}

var changeFontSize = function (fontsize) {
  document.getElementById("syllabus").style.fontSize = fontsize.value;
}

function changeDeptBanner(elem) {
  var image = document.getElementById("banner-img");
  image.src = elem.value;
}

const form = document.getElementById("form");
const submitter = document.querySelector("button[value=submit]");
const formData = new FormData(form, submitter);

const output = document.getElementById("output");

for (const [key, value] of formData) {
  output.textContent += '${key}: ${value}}'
}

