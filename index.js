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

function generatePdf() {
    var element = document.getElementById('syllabus');
    var gridCells = document.querySelectorAll('td[contenteditable="true"]');
    gridCells.forEach(cell => {
      element.innerHTML += `<p>${cell.innerText}</p>`; 
    });
    html2pdf(element);
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
/*
document.addEventListener('DOMContentLoaded', function() {
    const cells = document.querySelectorAll('td');
  
    cells.forEach(cell => {
      cell.addEventListener('click', function() {
        if (!cell.classList.contains('editing')) {
          cell.classList.add('editing');
          cell.setAttribute('contenteditable', true);
          cell.innerHTML = '';
          cell.focus();
        }
      });
  
      cell.addEventListener('blur', function() {
        cell.classList.remove('editing');
        cell.removeAttribute('contenteditable');
      });
    });
  });
  */