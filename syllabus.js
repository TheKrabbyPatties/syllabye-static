//Pull object from localStorage and parse it to JSON
const formObject = JSON.parse(localStorage.getItem('data'));

//Change values for instructor info
document.getElementById('name').innerHTML = formObject.name;
document.getElementById('officeHours').innerHTML = formObject.officeHours;
document.getElementById('officeLocation').innerHTML = formObject.officeLocation;
document.getElementById('email').innerHTML = formObject.email;
document.getElementById('phoneNumber').innerHTML = formObject.phoneNumber;
document.getElementById('zoomLink').innerHTML = formObject.zoomLink;

//Change values for course info
document.getElementById('course').innerHTML = formObject.courseName + " (" + formObject.courseNumber + "-" + formObject.courseSection + ")";
document.getElementById('courseName').innerHTML = formObject.courseName;
document.getElementById('courseNumber').innerHTML = formObject.courseNumber + "-" + formObject.courseSection;
document.getElementById('term').innerHTML = formObject.term + " " + formObject.year;
document.getElementById('creditHours').innerHTML = formObject.creditHours;
document.getElementById('meetingTimes').innerHTML = formObject.meetingTimes;
document.getElementById('days').innerHTML = formObject.day;
document.getElementById('courseDescription').innerHTML = formObject.courseDescription;

//Change values for course mats
document.getElementById('textbooks').innerHTML = formObject.textbooks;
document.getElementById('supplements').innerHTML = formObject.supplements;