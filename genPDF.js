document.getElementById('btn-to-pdf').onclick = function() {
    // Check if formObject and its properties are populated
    const courseName = formObject['course-information'] ? formObject['course-information'].courseName : 'Unknown Course';
    const courseNumber = formObject['course-information'] ? formObject['course-information'].courseNumber : '000';
    const courseSection = formObject['course-information'] ? formObject['course-information'].courseSection : 'A';

    const docName = courseName + " (" +
        courseNumber + "-" +
        courseSection + ")";

    
    Export2PDF('content', docName); 
};

function Export2PDF(element, filename = 'document') {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Get the HTML content from the specified element
    var html = document.getElementById(element);

    // Capture the content of the element as HTML text
    doc.html(html, {
        callback: function(doc) {
            // Save the PDF with the given filename
            doc.save(filename + '.pdf');
        },
        x: 10, // Set the X coordinate for the start of content in the PDF
        y: 10, // Set the Y coordinate for the start of content in the PDF
        html2canvas: {
            scale: 0.5 // Adjust scale to fit the content better
        }
    });
}
