const form = document.querySelector('.login-signup');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const entries = [...formData.entries()];
    console.log(entries);

    const formObject = Object.fromEntries(formData);
    console.log(formObject);

    e.currentTarget.reset();
})