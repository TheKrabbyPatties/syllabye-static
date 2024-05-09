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

// Turns the syllabus into JSON and sends it to the server-side
document.addEventListener("DOMContentLoaded", () => {
  function handleSubmit(event) {
      event.preventDefault();

      // Object to hold all JSON outputs
      const jsonData = {};

      // Select each div section individually
      const instructorInfo = document.querySelector('.instructor-info');
      const courseInformation = document.querySelector('.course-information');
      const courseMaterials = document.querySelector('.course-materials');

      // Extract data from Instructor Info section
      const instructorData = {};
      instructorInfo.querySelectorAll('input, textarea').forEach(input => {
          instructorData[input.name] = input.value;
      });
      jsonData['instructor-info'] = instructorData;

      // Extract data from Course Information section except for the checkbox days
      const courseData = {};
      courseInformation.querySelectorAll('input, textarea').forEach(input => {
          if (!(input.name == 'day')){
            courseData[input.name] = input.value;
          }
      });

      // Extract the meeting days in one list
      const days = [];
      courseInformation.querySelectorAll('input[type="checkbox"]:checked').forEach(checkbox => {
          days.push(checkbox.value);
      });
      courseData['meeting-days'] = days;
      jsonData['course-information'] = courseData;

      // Extract data from Course Materials section
      const materialsData = {};
      courseMaterials.querySelectorAll('input').forEach(input => {
          materialsData[input.name] = input.value;
      });
      jsonData['course-materials'] = materialsData;

      // Log JSON outputs
      console.log(JSON.stringify(jsonData, null, 4));

      // Convert JSON to string
      var jsonString = JSON.stringify(jsonData);

      // Send the data to the server
      fetch('https://syllabye-server.azurewebsites.net/endpoint', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: jsonString
      })
      .then(response => response.json())
      .then(data => console.log('Success:', data))
      .catch((error) => console.error('Error:', error));
  }

  const form = document.querySelector('#form');
  form.addEventListener('submit', handleSubmit);
});
