//Pull object from localStorage and parse it to JSON
const formObject = JSON.parse(localStorage.getItem('data'));
console.log(formObject);

//Change values for instructor info
document.getElementById('name').innerHTML = formObject['instructor-info'].name;
document.getElementById('officeHours').innerHTML = formObject['instructor-info'].officeHours;
document.getElementById('officeLocation').innerHTML = formObject['instructor-info'].officeLocation;
document.getElementById('email').innerHTML = formObject['instructor-info'].email;
document.getElementById('phoneNumber').innerHTML = formObject['instructor-info'].phoneNumber;
document.getElementById('zoomLink').innerHTML = formObject['instructor-info'].zoomLink;

//Change values for course info
document.getElementById('course').innerHTML = formObject['course-information'].courseName + " (" + formObject['course-information'].courseNumber + "-" + formObject['course-information'].courseSection + ")";
document.getElementById('courseName').innerHTML = formObject['course-information'].courseName;
document.getElementById('courseNumber').innerHTML = formObject['course-information'].courseNumber + "-" + formObject['course-information'].courseSection;
document.getElementById('term').innerHTML = formObject['course-information'].term + " " + formObject['course-information'].year;
document.getElementById('creditHours').innerHTML = formObject['course-information'].creditHours;
document.getElementById('meetingTimes').innerHTML = formObject['course-information'].meetingTimes;
document.getElementById('days').innerHTML = formObject['course-information'].day;
document.getElementById('courseDescription').innerHTML = formObject['course-information'].courseDescription;

//Change values for course mats
document.getElementById('textbooks').innerHTML = formObject['course-materials'].textbooks;
document.getElementById('supplements').innerHTML = formObject['course-materials'].supplements;

//Change values for course calendar
if (formObject) {
    const parsedCalendarData = formObject

    const calendarData = parsedCalendarData["course-calendar"];
    const calendarTableBody = document.querySelector("#calendarTable tbody");

    console.log(parsedCalendarData);
    console.log(calendarData);
    console.log(calendarTableBody);

    // Generate rows from calendar data
    calendarData.forEach(entry => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td style="border: 1px solid black;" class="calendar-item">${entry.week}</td>
            <td style="border: 1px solid black;" class="calendar-item">${entry.topic}</td>
            <td style="border: 1px solid black;" class="calendar-item">${entry.readings}</td>
            <td style="border: 1px solid black;" class="calendar-item">${entry.assignments}</td>
        `;
        calendarTableBody.appendChild(row);
    });
};

//Change values for grading scale
if (formObject) {
    const parsedGradeData = formObject

    const gradeData = parsedGradeData["course-grading-scale"];
    const gradeTableBody = document.querySelector("#gradeTable tbody");

    console.log(parsedGradeData);
    console.log(gradeData);
    console.log(gradeTableBody);
    
    // Generate rows from grade data
    gradeData.forEach(entry => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td style="border: 1px solid black;" class="grade-item">${entry.score}</td>
            <td style="border: 1px solid black;" class="grade-item">${entry.grade}</td>
        `;
        gradeTableBody.appendChild(row);
    });
};
