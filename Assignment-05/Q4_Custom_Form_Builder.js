class FormBuilder {
    constructor(fields, containerId) {
        this.fields = fields;
        this.container = document.getElementById(containerId);
    }

    createForm() {
        const fieldMarkup = this.fields.map((field, index) => `
            <label for="field-${index}">${field.label}</label>
            <input id="field-${index}" name="${field.name}" type="${field.type}" required>
        `).join("");

        this.container.innerHTML = `
            <form id="generatedForm">
                ${fieldMarkup}
                <button type="submit">Submit</button>
            </form>
            <pre id="formOutput"></pre>
        `;

        document.getElementById("generatedForm").addEventListener("submit", event => {
            event.preventDefault();
            const formData = this.getFormData();
            document.getElementById("formOutput").textContent = JSON.stringify(formData, null, 2);
        });
    }

    getFormData() {
        const formData = {};
        this.fields.forEach((field, index) => {
            formData[field.name] = document.getElementById(`field-${index}`).value;
        });
        return formData;
    }
}

const formFields = [
    { type: "text", label: "Username", name: "username" },
    { type: "email", label: "Email", name: "email" },
    { type: "password", label: "Password", name: "password" }
];

const formBuilder = new FormBuilder(formFields, "formContainer");
formBuilder.createForm();
