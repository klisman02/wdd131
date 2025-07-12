

    // getdates.js

// Get the current year and insert it into the span with id "currentyear"
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

// Get the last modification date of the document and insert it into the paragraph with id "lastModified"
const lastModified = document.lastModified;
document.getElementById("lastModified").textContent += lastModified;