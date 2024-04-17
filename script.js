//Function to check full name or not 
function validateFullName(name) {
    return name.length >= 5;
}
//Function to check email
function validateEmail(email) {
    return email.includes('@');
}
//Functon to check phone number
function validatePhoneNumber(phone) {
    return phone.length === 10 && phone !== '123456789';
}
//Function to check password
function validatePassword(password,confirm) {
    return password.length >= 8 && password !== 'password' && password !== fullName && password === confirm;
}
//form subission
document.getElementById('myForm').addEventListener('submit',function(event){
    event.preventDefault();
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if(!validateFullName(fullName)) {
        alert("Enter a valid full name(minimum 5 characters)");
        return;
    }
    if(!validateEmail(email)) {
        alert("Enter a valid email address");
        return;
    }
    if(!validatePhoneNumber(phone)) {
        alert("Enter a valid phone number (10 digits)");
        return;
    }
    if(!validatePassword(password,confirmPassword)) {
        alert("Password must be at least 8 characters long,not 'password',match confirm password,and not the same as full name");
        return;
    }
    // After all checking process is succesfull,submit the form
    alert("Form submited successfully!");
    
})