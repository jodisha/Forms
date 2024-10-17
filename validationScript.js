
const inputField = document.getElementById('inputField');
const form = document.getElementById('myForm');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    const inputValue = inputField.value;
    let isValid = true; 
    for (let i = 0; i < inputValue.length; i++) {
        const char = inputValue[i];
        if (!((char >= 'a' && char <= 'z') || 
               (char >= 'A' && char <= 'Z') || 
               (char >= '0' && char <= '9'))) {
            isValid = false;
            break;
        }
    }
    if (isValid) {
        alert('Form being submitted'); 
    } else {
        alert('Invalid input, please use valid alphanumeric characters.');
        inputField.focus(); 
    }
});




