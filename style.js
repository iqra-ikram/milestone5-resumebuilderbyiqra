var _a;
//listing element
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    //Get references to form elements using their IDs
    var profilePictureInput = document.getElementById('profilePicture');
    var firstnameElement = document.getElementById('firstname');
    var lastnameElement = document.getElementById('lastname');
    var emailaddressElement = document.getElementById('emailaddress');
    var contactnumberElement = document.getElementById('contactnumber');
    var addressElement = document.getElementById('address');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    //
    var usernameElement = document.getElementById("username");
    if (profilePictureInput && firstnameElement && lastnameElement && emailaddressElement && contactnumberElement && addressElement && educationElement && experienceElement && skillsElement && usernameElement) {
        var firstname = firstnameElement.value;
        var lastname = lastnameElement.value;
        var emailaddress = emailaddressElement.value;
        var contactnumber = contactnumberElement.value;
        var address = addressElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        var username = usernameElement.value;
        var uniquepath = "resume/".concat(username.replace(/\s+/g, ''), "_cv.html");
        // picture elements
        var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';
        var downloadLink = document.createElement('a');
        downloadLink.href = 'data:text/html;charset=utf-8,' + encodeURIComponent(resumeOutput);
        downloadLink.download = uniquepath;
        downloadLink.textContent = 'Download your 2024 Resume';
        // Create the Resume Output
        var resumeOutput = "\n<h1>Resume</h1>\n\n".concat(profilePictureURL ? "<img src=\"".concat(profilePictureURL, "\" alt=\"Profile Picture\" class=\"profilePicture\">") : "", "\n<p><strong>First Name:</strong> <span id=\"edit-firstname\" class=\"editable\">  ").concat(firstname, " </span> </p>\n<p><strong>Last Name:</strong> <span id=\"edit-lastname\" class=\"editable\">  ").concat(lastname, "  </span> </p>\n<p><strong>Email Address:</strong> <span id=\"edit-emailaddress\" class=\"editable\">  ").concat(emailaddress, " </span> </p>\n<p><strong>Contact Number:</strong> <span id=\"edit-contactnumber\" class=\"editable\"> ").concat(contactnumber, " </span> </p>\n<p><strong>Address:</strong> <span id=\"edit-address\" class=\"editable\"> ").concat(address, " </span> </p>\n\n\n<h3>Education</h3>\n<p id=\"edit-education\" class=\"editable\">").concat(education, "</p>\n\n<h3>Experience</h3>\n<p id=\"edit-experience\" class=\"editable\">").concat(experience, "</p>\n\n<h3>Skills</h3>\n<p id=\"edit-skills\" class=\"editable\">").concat(skills, "</p>\n");
        // Display the resume Output
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            resumeOutputElement.appendChild(downloadLink);
        }
    }
    else {
        console.error('one or more output elements are missing');
    }
});
function makeEditable() {
    var editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(function (element) {
        element.addEventListener('click', function () {
            var _a;
            var currentElement = element;
            var currentvalue = currentElement.textContent || "";
            // replace content
            if (currentElement.tagName === "P" || currentElement.tagName === 'SPAN') {
                var input_1 = document.createElement('input');
                input_1.type = 'text';
                input_1.value = currentvalue;
                input_1.classList.add('editing-input');
                input_1.addEventListener('blur', function () {
                    currentElement.textContent = input_1.value;
                    currentElement.style.display = 'inline';
                    input_1.remove();
                });
                currentElement.style.display = 'none';
                (_a = currentElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input_1, currentElement);
                input_1.focus();
            }
        });
    });
}
