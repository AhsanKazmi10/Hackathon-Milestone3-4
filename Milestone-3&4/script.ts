// script.ts
interface Resume {
  name: string;
  email: string;
  phone: string;
  education: {
    qualification: string;
    institute: string;
    year: number;
  };
  experience: {
    company: string;
    designation: string;
    duration: string;
  };
  skills: string;
}

const form: HTMLFormElement = document.querySelector('form')!;
let resumeContainer: HTMLDivElement | null = null;

form.addEventListener('submit', (event: Event) => {
  event.preventDefault();

  const formData: Resume = {
    name: (document.getElementById(' name') as HTMLInputElement).value,
    email: (document.getElementById(' email') as HTMLInputElement).value,
    phone: (document.getElementById(' phone') as HTMLInputElement).value,
    education: {
      qualification: (document.getElementById('qualification') as HTMLInputElement).value,
      institute: (document.getElementById('institute') as HTMLInputElement).value,
      year: parseInt((document.getElementById('year') as HTMLInputElement).value),
    },
    experience: {
      company: (document.getElementById('company') as HTMLInputElement).value,
      designation: (document.getElementById('designation') as HTMLInputElement).value,
      duration: (document.getElementById('duration') as HTMLInputElement).value,
    },
    skills: (document.getElementById('skills') as HTMLTextAreaElement).value,
  };

  if (!resumeContainer) {
    resumeContainer = document.createElement('div');
    resumeContainer.classList.add('resume-container');
    document.body.appendChild(resumeContainer);
  }

  const resumeHTML: string = `
    <h2>${formData.name}</h2>
    <p>Email: ${formData.email}</p>
    <p>Phone: ${formData.phone}</p>
    <h3>Education</h3>
    <p>Qualification: ${formData.education.qualification}</p>
    <p>Institute: ${formData.education.institute}</p>
    <p>Year: ${formData.education.year}</p>
    <h3>Experience</h3>
    <p>Company: ${formData.experience.company}</p>
    <p>Designation: ${formData.experience.designation}</p>
    <p>Duration: ${formData.experience.duration}</p>
    <h3>Skills</h3>
    <p>${formData.skills}</p>
  `;

  resumeContainer.innerHTML = resumeHTML;
});
