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
  
  
function addAssignment() {
  var name = document.getElementById("add-new-name").value;
  var description = document.getElementById("add-description").value;
  var week = document.getElementById("week").value;

  if (name === "" || description === "") {
      alert("Please enter assignment name and description.");
      return;
  }

  var listItem = document.createElement("li");
  listItem.innerHTML = `<input type="checkbox" class="assignment-checkbox"> ${name} (Week ${week}):<br>${description}`;
  document.getElementById("assignment-list").appendChild(listItem);

  // Resets input fields once assignment is added
  document.getElementById("add-new-name").value = "";
  document.getElementById("add-description").value = "";
}

function deleteChecked() {
  var checkboxes = document.getElementsByClassName("assignment-checkbox");
  var assignments = document.getElementById("assignment-list").getElementsByTagName("li");

  for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
          assignments[i].remove();
          i--; // Adjusted index (to account for removed item)
      }
  }
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


async function testFirebaseConnection() {
  try {
    // Reference to a location in your database
    const ref = db.ref('test'); // 'test' is a sample path

    // Write data to the database
    await ref.set({
      message: 'Hello, Firebase!'
    });
    console.log('Data written successfully.');

    // Read data from the database
    const snapshot = await ref.once('value');
    const data = snapshot.val();
    console.log('Data read from database:', data);

  } catch (error) {
    console.error('Error connecting to Firebase:', error);
  }
}

testFirebaseConnection();






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
          };
          // Properlly display the selected term length
          if (input.name == 'term'){
            document.querySelectorAll('input[type="radio"]:checked').forEach(radio => {
              courseData[input.name] = radio.id;
            });
            if (courseData[input.name] == "on") {
              courseData[input.name] = "";
            }
          };
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
      fetch('https://syllabye-server.azurewebsites.net/save/json', {
        method: 'POST',
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
