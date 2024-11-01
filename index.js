/*imports for firebase*/
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, set, get } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

// // Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyCQthMiRyG7rs8x-bX-uaOgpOCwGxwDogk",

  authDomain: "syllabye-7f9b8.firebaseapp.com",

  databaseURL: "https://syllabye-7f9b8-default-rtdb.firebaseio.com",

  projectId: "syllabye-7f9b8",

  storageBucket: "syllabye-7f9b8.appspot.com",

  messagingSenderId: "914730272947",

  appId: "1:914730272947:web:cb70b9b64ab37d5d0fc8c6"

};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const db = getDatabase(app);

connectDatabaseEmulator(db, 'localhost', 9000); // Adjust port as needed


// //testing the option to add in course materials to database
// document.getElementById("course-submit").addEventListener('click', function(e)
// {
//   set(ref(db, 'materials/' + document.getElementById("course-materials").value),{

  
//     textbooks: document.getElementById("course-materials-textbooks").value,
//     supplements: document.getElementById("course-materials-supplements").value

//   });
//   alert("Data entry successful!");
// })

document.getElementById("course-submit").addEventListener('click', function(e) {
  console.log("Submit button clicked"); // Log statement
  set(ref(db, 'materials/' + document.getElementById("course-materials").value), {
    textbooks: document.getElementById("course-materials-textbooks").value,
    supplements: document.getElementById("course-materials-supplements").value
  })
  .then(() => {
    console.log("Data written to Firebase successfully!");
    alert("Data entry successful!");
  })
  .catch((error) => {
    console.error("Firebase write failed:", error);
    alert("Failed to write data to Firebase.");
  });
});

//updated code to be integrated with server-side 
// Add event listener for submitting course materials to the server
// document.getElementById("course-submit").addEventListener('click', function(e) {
//   e.preventDefault();

//   const textbooks = document.getElementById("course-materials-textbooks").value;
//   const supplements = document.getElementById("course-materials-supplements").value;

//   // if (!textbooks || !supplements) {
//   //   alert("Please enter both textbooks and supplements.");
//   //   return;
//   // }

//   const courseData = {
//     textbooks: textbooks,
//     supplements: supplements
//   };

//   // Send the data to the server's /submit-course-materials route
//   fetch('https://syllabye-server.azurewebsites.net/submit-course-materials', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(courseData)
//   })
//   .then(response => response.json())
//   .then(data => {
//     alert("Data entry successful!");
//     console.log("Server Response:", data);
//   })
//   .catch(error => {
//     console.error("Error:", error);
//     alert("Failed to submit course materials.");
//   });
// });


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


// // Turns the syllabus into JSON and sends it to the server-side
// document.addEventListener("DOMContentLoaded", () => {
//   function handleSubmit(event) {
//       event.preventDefault();

//       // Object to hold all JSON outputs
//       const jsonData = {};

//       // Select each div section individually
//       const instructorInfo = document.querySelector('.instructor-info');
//       const courseInformation = document.querySelector('.course-information');
//       const courseMaterials = document.querySelector('.course-materials');

//       // Extract data from Instructor Info section
//       const instructorData = {};
//       instructorInfo.querySelectorAll('input, textarea').forEach(input => {
//           instructorData[input.name] = input.value;
//       });
//       jsonData['instructor-info'] = instructorData;

//       // Extract data from Course Information section except for the checkbox days
//       const courseData = {};
//       courseInformation.querySelectorAll('input, textarea').forEach(input => {
//           if (!(input.name == 'day')){
//             courseData[input.name] = input.value;
//           };
//           // Properlly display the selected term length
//           if (input.name == 'term'){
//             document.querySelectorAll('input[type="radio"]:checked').forEach(radio => {
//               courseData[input.name] = radio.id;
//             });
//             if (courseData[input.name] == "on") {
//               courseData[input.name] = "";
//             }
//           };
//       });
      
//       // Extract the meeting days in one list
//       const days = [];
//       courseInformation.querySelectorAll('input[type="checkbox"]:checked').forEach(checkbox => {
//           days.push(checkbox.value);
//       });
//       courseData['meeting-days'] = days;
//       jsonData['course-information'] = courseData;

//       // Extract data from Course Materials section
//       const materialsData = {};
//       courseMaterials.querySelectorAll('input').forEach(input => {
//           materialsData[input.name] = input.value;
//       });
//       jsonData['course-materials'] = materialsData;

//             // Log JSON outputs
//       console.log(JSON.stringify(jsonData, null, 4));

//       // Convert JSON to string
//       var jsonString = JSON.stringify(jsonData);
//       // Convert JSON to string and send it to Firebase
//       console.log("Writing to Firebase at:", syllabusRef);
//       console.log("Data being sent:", jsonData);
//       const syllabusRef = ref(db, 'syllabus/' + jsonData['course-information']['courseName']);
//       set(syllabusRef, jsonData)
//         .then(() => {
//           console.log("Data written to Firebase successfully!");
//           alert("Data entry successful!");
//         })
//         .catch((error) => {
//           console.error("Firebase write failed:", error);
//           alert("Failed to write data to Firebase.");
//         });
//   }


  //     // Send the data to the server
  //     fetch('https://syllabye-server.azurewebsites.net/save/json', {
  //       method: 'POST',
  //       headers: {
  //           'Content-Type': 'application/json'
  //       },
  //       body: jsonString
  //     })
  //     .then(response => response.json())
  //     .then(data => console.log('Success:', data))
  //     .catch((error) => console.error('Error:', error));
  // }

  // const form = document.querySelector('#form');
  // form.addEventListener('submit', handleSubmit);
// });




// async function testFirebaseConnection() {
//   try {
//     // Reference to a location in your database
//     const ref = db.ref('test'); // 'test' is a sample path

//     // Write data to the database
//     await ref.set({
//       message: 'Hello, Firebase!'
//     });
//     console.log('Data written successfully.');

//     // Read data from the database
//     const snapshot = await ref.once('value');
//     const data = snapshot.val();
//     console.log('Data read from database:', data);

//   } catch (error) {
//     console.error('Error connecting to Firebase:', error);
//   }
// }

// testFirebaseConnection();




