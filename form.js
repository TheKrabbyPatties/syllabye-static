const form = document.querySelector('.form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const entries = [...formData.entries()];
    console.log(entries);

    const formObject = Object.fromEntries(formData);
    formObject.day = formData.getAll('day')
    console.log(formObject);

    e.currentTarget.reset();

    console.log(formObject.name)

    localStorage.setItem('data', JSON.stringify(formObject));

    window.location.href = 'syllabus.html'
})

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
