// Initialize elements
const joinDateInput = document.getElementById('joinDate');
const resumeInput = document.getElementById("resume");
const uploadedResumeDiv = document.getElementById("uploadedResume");
const clearFormButton = document.getElementById("clearForm");
const form = document.getElementById("jobForm");

// Set the minimum selectable date to tomorrow's date
const today = new Date();
const tomorrow = new Date(today);
tomorrow.setDate(today.getDate() + 1);
const formattedDate = tomorrow.toISOString().split('T')[0];
joinDateInput.setAttribute('min', formattedDate);

resumeInput.addEventListener("change", () => {
  const file = resumeInput.files[0];
  if (file && file.type !== "application/pdf") {
      alert("Please upload a PDF file.");
      resumeInput.value = ""; // Clear the invalid file
  }
});

// // Handle form submission
// form.addEventListener("submit", (e) => {
//     e.preventDefault(); // Prevent the default form submission behavior

//     // Collect form data
//     const formData = new FormData(form);
//     const data = {};
//     formData.forEach((value, key) => {
//         data[key] = value;
//     });

//     // Store data in localStorage
//     localStorage.setItem("formData", JSON.stringify(data));

//     // Redirect to the details page
//     window.location.href = "details.html";
// });

// Handle form submission
form.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent default form submission behavior

  // Clear form data
  form.reset();

  // Reload the page
  window.location.reload();
});