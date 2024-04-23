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


function generatePdf() {
  var element = document.getElementById('syllabus');
  var gridCells = generateGridCells();
  element.innerHTML += gridCells;
  element.innerHTML += courseOutcomes(); 
  html2pdf('syllabus').from(element).save();
}

// function generatePdf() {
//     var element = document.getElementById('syllabus');
//     var gridCells = document.querySelectorAll('td[contenteditable="true"]');
//     gridCells.forEach(cell => {
//       element.innerHTML += `<p>${cell.innerText}</p>`; 
//     });
//     html2pdf(element);
// }

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
  output.textContent += '${key}: ${value}\n}'
}


// This code will create a JSON of all the fill-ins from the "form" tag

// document.addEventListener("DOMContentLoaded", () => {
//   function handleSubmit(event) {
//     event.preventDefault();
//     const data = new FormData(event.target);
//     const value = Object.fromEntries(data.entries());
//     console.log(JSON.stringify(value, null, 4));
//   }
//   
//   const form = document.querySelector('form');
//   form.addEventListener('submit', handleSubmit);
// });