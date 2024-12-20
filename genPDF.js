window.onload = function() {
    document.getElementById('btn-to-pdf').onclick = function() { // Event handler for 'download pdf' button
        const courseName = formObject['course-information'] ? formObject['course-information'].courseName : 'Unknown Course';
        const courseNumber = formObject['course-information'] ? formObject['course-information'].courseNumber : '000';
        const courseSection = formObject['course-information'] ? formObject['course-information'].courseSection : 'A';

        const docName = courseName + " (" +
            courseNumber + "-" +
            courseSection + ")";

        Export2PDF('content', docName);  // Call function when user wants to download pdf
    };
};


function Export2PDF(element, filename = 'document') {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({ // Use jsPDF library to generate a pdf
        orientation: 'portrait',
        unit: 'pt', // Measurement units - points
        format: 'a4' // Paper size
    });

    const targetElement = document.getElementById(element); // Selects the element from html file
    if (!targetElement) {
        console.error(`Element with id '${element}' not found.`); // error handling
        return;
    }

    // Capture page width of pdf with html content
    const pageWidth = doc.internal.pageSize.getWidth();
    const contentWidth = targetElement.offsetWidth;

    // Ensure html content fits in the page
    const scaleFactor = contentWidth > pageWidth ? pageWidth / contentWidth : 1;

    // Render html content
    doc.html(targetElement, {
        callback: function (doc) { // Saves the pdf 
            doc.save(filename + '.pdf');
        },
        x: 20, // Add margins
        y: 20,
        html2canvas: {
            scale: scaleFactor,
            useCORS: true // Ensure external resources load correctly
        }
    });
}


