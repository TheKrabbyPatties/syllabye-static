const form = document.querySelector('.form');

// Leaving old code for saving JSON for now
//form.addEventListener('submit', (e) => {
//    e.preventDefault();
//    const formData = new FormData(e.currentTarget);
//    const entries = [...formData.entries()];
//    console.log(entries);
//
//    const formObject = Object.fromEntries(formData);
//    formObject.day = formData.getAll('day')
//    console.log(formObject);
//
//    e.currentTarget.reset();
//
//    console.log(formObject.name)
//
//    localStorage.setItem('data', JSON.stringify(formObject));
//
//    //window.location.href = 'syllabus.html'
//})

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);
  const entries = [...formData.entries()];

  // Create the sections
  const sections = {
      "instructor-info": {},
      "course-information": {
        "day": [] // Day needs to be initialized so is not "undefined" if nothing selected
      },
      "course-materials": {},
      "course-calendar": {},
      "no-section": {} // To catch any non-sectioned values
  };

  // Extracting calendar data from the semester calendar table
  const calendarTable = document.querySelector('#editableGrid tbody');
  const calendarRows = calendarTable.querySelectorAll('tr');
  let calendarData = [];

  calendarRows.forEach((row, index) => {
    const week = row.cells[0].textContent;
    const topic = row.cells[1].textContent;
    const readings = row.cells[2].textContent;
    const assignments = row.cells[3].textContent;

    calendarData.push({
      week: week,
      topic: topic,
      readings: readings,
      assignments: assignments
    });
  });

  sections["course-calendar"] = calendarData;

  entries.forEach(([key, value]) => {
      if (key === "day") { // Makes sure to show all selected days and not just the last one
          const selectedDays = formData.getAll('day');
          sections["course-information"]["day"] = selectedDays;
      } else {
          // Find the input element using the key (name)
          const inputElement = e.currentTarget.querySelector(`[name="${key}"]`);

          if (inputElement) {
              
              const sectionId = inputElement.closest('.section')?.id; // Finds the proper section for each value

              if (sections[sectionId]) { // Adds the values to the proper sections
                  sections[sectionId][key] = value;
              } else {
                  sections["no-section"][key] = value;
              }
          }
      }
  });

  // Console log for testing purposes, must comment out "window.location.href = 'syllabus.html'" to see
  console.log('Instructor Info:', sections["instructor-info"]);
  console.log('Course Information:', sections["course-information"]);
  console.log('Course Materials:', sections["course-materials"]);
  console.log('Course Calendar:', sections["course-calendar"]);
  console.log('No Section:', sections["no-section"]); // For any inputs that don't fit in the three sections

  localStorage.setItem('data', JSON.stringify(sections));

  window.location.href = 'syllabus.html';

});


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
