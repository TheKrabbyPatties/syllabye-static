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
    const doc = new jsPDF({
        orientation: 'portrait',
        unit: 'pt',
        format: 'a4'
    });

    const targetElement = document.getElementById(element);
    if (!targetElement) {
        console.error(`Element with id '${element}' not found.`);
        return;
    }

    const pageWidth = doc.internal.pageSize.getWidth();
    const contentWidth = targetElement.offsetWidth;

    const scaleFactor = contentWidth > pageWidth ? pageWidth / contentWidth : 1;

    doc.html(targetElement, {
        callback: function (doc) {
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


