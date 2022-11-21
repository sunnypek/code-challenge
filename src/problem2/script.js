const inputs = document.querySelectorAll('input');

const patterns = {
    address: /^0x[a-fA-F0-9]{40}$/i,
    number: /^[0-9]+$/i,
    opt: /^[0-9]{6}/i,
};

inputs.forEach((input) => {
    ["keyup", "keydown"].forEach(
        eventName => {
            input.addEventListener(eventName, (e) => {
                validate(e.target, patterns[e.target.attributes.customType.value]);
            });
        }
    )
});
  
function validate(field, regex) {
    if (regex.test(field.value)) {
        field.className = 'form-control valid';
    } else {
        field.className = 'form-control invalid';
    }
}