//listing element
document.getElementById('resumeForm')?.addEventListener('submit', function (event) {
    event.preventDefault();

    //Get references to form elements using their IDs

    const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement;

    const firstnameElement = document.getElementById('firstname') as HTMLInputElement;

    const lastnameElement = document.getElementById('lastname') as HTMLInputElement;

    const emailaddressElement = document.getElementById('emailaddress') as HTMLInputElement;

    const contactnumberElement = document.getElementById('contactnumber') as HTMLInputElement;

    const addressElement = document.getElementById('address') as HTMLInputElement;

    const educationElement = document.getElementById('education') as HTMLInputElement;

    const experienceElement = document.getElementById('experience') as HTMLInputElement;

    const skillsElement = document.getElementById('skills') as HTMLInputElement;


    //
    const usernameElement =  document.getElementById("username") as  HTMLInputElement;


    if (profilePictureInput && firstnameElement && lastnameElement && emailaddressElement && contactnumberElement && addressElement && educationElement && experienceElement && skillsElement && usernameElement) {

        const firstname = firstnameElement.value;
        const lastname = lastnameElement.value;
        const emailaddress = emailaddressElement.value;
        const contactnumber = contactnumberElement.value;
        const address = addressElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        const skills = skillsElement.value;

        const username = usernameElement.value;
        const uniquepath =`resume/${username.replace(/\s+/g,'')}_cv.html`

        // picture elements
        const profilePictureFile = profilePictureInput.files?.[0]
        const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';


   const downloadLink = document.createElement ('a')
   downloadLink.href ='data:text/html;charset=utf-8,' + encodeURIComponent(resumeOutput);
   downloadLink.download = uniquepath;
   downloadLink.textContent ='Download your 2024 Resume';






        // Create the Resume Output
        const resumeOutput = `
<h1>Resume</h1>

${profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile Picture" class="profilePicture">` : ""}
<p><strong>First Name:</strong> <span id="edit-firstname" class="editable">  ${firstname} </span> </p>
<p><strong>Last Name:</strong> <span id="edit-lastname" class="editable">  ${lastname}  </span> </p>
<p><strong>Email Address:</strong> <span id="edit-emailaddress" class="editable">  ${emailaddress} </span> </p>
<p><strong>Contact Number:</strong> <span id="edit-contactnumber" class="editable"> ${contactnumber} </span> </p>
<p><strong>Address:</strong> <span id="edit-address" class="editable"> ${address} </span> </p>


<h3>Education</h3>
<p id="edit-education" class="editable">${education}</p>

<h3>Experience</h3>
<p id="edit-experience" class="editable">${experience}</p>

<h3>Skills</h3>
<p id="edit-skills" class="editable">${skills}</p>
`;





        // Display the resume Output
        const resumeOutputElement = document.getElementById('resumeOutput')
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            
            resumeOutputElement.appendChild(downloadLink)
        }
    } else {
        console.error('one or more output elements are missing')

    }
});

function makeEditable() {
    const editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(element => {
        element.addEventListener('click', function () {
            const currentElement = element as HTMLElement;
            const currentvalue = currentElement.textContent || ""

            // replace content
            if (currentElement.tagName === "P" || currentElement.tagName === 'SPAN') {
                const input = document.createElement('input')
                input.type = 'text'
                input.value = currentvalue
                input.classList.add('editing-input')

                input.addEventListener('blur', function () {
                    currentElement.textContent = input.value;
                    currentElement.style.display = 'inline'
                    input.remove()
                })



                currentElement.style.display = 'none'
                currentElement.parentNode?.insertBefore(input, currentElement)
                input.focus()
            }

        })
    })
}