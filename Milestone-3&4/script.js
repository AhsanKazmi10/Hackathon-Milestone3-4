var form = document.querySelector('form');
var resumeContainer = null;
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        education: {
            qualification: document.getElementById('qualification').value,
            institute: document.getElementById('institute').value,
            year: parseInt(document.getElementById('year').value),
        },
        experience: {
            company: document.getElementById('company').value,
            designation: document.getElementById('designation').value,
            duration: document.getElementById('duration').value,
        },
        skills: document.getElementById('skills').value,
    };
    if (!resumeContainer) {
        resumeContainer = document.createElement('div');
        resumeContainer.classList.add('resume-container');
        document.body.appendChild(resumeContainer);
    }
    var resumeHTML = "\n    <h2>".concat(formData.name, "</h2>\n    <p>Email: ").concat(formData.email, "</p>\n    <p>Phone: ").concat(formData.phone, "</p>\n    <h3>Education</h3>\n    <p>Qualification: ").concat(formData.education.qualification, "</p>\n    <p>Institute: ").concat(formData.education.institute, "</p>\n    <p>Year: ").concat(formData.education.year, "</p>\n    <h3>Experience</h3>\n    <p>Company: ").concat(formData.experience.company, "</p>\n    <p>Designation: ").concat(formData.experience.designation, "</p>\n    <p>Duration: ").concat(formData.experience.duration, "</p>\n    <h3>Skills</h3>\n    <p>").concat(formData.skills, "</p>\n  ");
    resumeContainer.innerHTML = resumeHTML;
});
