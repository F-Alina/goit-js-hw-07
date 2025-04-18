const form = document.querySelector(".login-form");

form.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(e) {
  e.preventDefault();

  const form = {
    email: e.target.elements.email.value.trim(),
    password: e.target.elements.password.value.trim(),
  };

  console.log(form);
  if (!form.email || !form.password) {
    alert("All form fields must be filled in");
    return;
  }

  e.target.reset();
}
