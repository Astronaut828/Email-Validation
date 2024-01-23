// User validation
const inputs = document.querySelectorAll("input");
// console.log(inputs);

const patterns = {
  username: /^[a-z\d]{5,12}$/i,
  email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
  password: /^[\w@-]{8,20}$/,
  telephone: /^\d{10}$/,
  slug: /^[a-z\d-]{8,20$/
};

function validate(field, regex) {
  //console.log(regex.test(field.value));
  if (regex.test(field.value)) {
    field.className = "valid";
  } else {
    field.className = "invalid"
  }
}

inputs.forEach((input) => {
  input.addEventListener("keyup", (event) => {
    //console.log(e.target.attributes.name.value);
    validate(event.target, patterns[event.target.attributes.name.value]);
  });
});
