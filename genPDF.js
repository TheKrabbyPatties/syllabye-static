document.getElementById('btn-to-pdf').onclick = function() {
    const docName = formObject['course-information'].courseName + " (" +
        formObject['course-information'].courseNumber + "-" +
        formObject['course-information'].courseSection + ")";
    Export2PDF('content', docName);
};

function Export2PDF(elementId, filename = 'document') {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Get the HTML content from the specified element
    const element = document.getElementById(elementId);

    // Capture the content of the element as HTML text
    doc.html(element, {
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
