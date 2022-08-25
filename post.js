const submitBtn = document.getElementById("button");

const url = 'http://localhost:3001/api/v1/email';

submitBtn.addEventListener('click', async () => {
    const formInputs = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    };

    const body = JSON.stringify(formInputs);

    const response = await fetch(url, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body
    });

    console.log(response);
});