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