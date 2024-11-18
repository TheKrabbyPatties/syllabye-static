window.onload = function() {
    document.getElementById('btn-to-pdf').onclick = function() {
        const courseName = formObject['course-information'] ? formObject['course-information'].courseName : 'Unknown Course';
        const courseNumber = formObject['course-information'] ? formObject['course-information'].courseNumber : '000';
        const courseSection = formObject['course-information'] ? formObject['course-information'].courseSection : 'A';

        const docName = courseName + " (" +
            courseNumber + "-" +
            courseSection + ")";

        Export2PDF('content', docName); 
    };
};


function Export2PDF(element, filename = 'document') {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Get the HTML content
    var html = document.getElementById(element);

    // Capture the content of the element as HTML text
    doc.html(html, {
        callback: function(doc) {
            // Save the PDF with the filename
            doc.save(filename + '.pdf');
        },
        x: 10, // Set the X coordinate 
        y: 10, // Set the Y coordinate 
        html2canvas: {
            scale: 0.5 // Adjust scale to fit the content
        }
    });
}