window.onload = () => {

    document.querySelector('.btn').onclick = () => {

        const len = document.querySelector('.fl').value;

        if (!len) {
            alert("enter the length of the password field");
        }

        const upp = document.getElementById('checky').checked;
        const low = document.getElementById('q').checked;
        const num = document.getElementById('w').checked;
        const sys = document.getElementById('e').checked;


        const pass = getter(len, upp, low, num, sys);
        document.querySelector('.haha').value = pass;
    }
}

function getter(len, upp, low, num, sys) {
    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const symbolChars = '@#$%&';

    let c = 0;

    let allchar = '';
    let mm = '';
    if (upp) {
        allchar += upperCaseChars;
        mm += upperCaseChars[Math.floor(Math.random() * upperCaseChars.length)];
        c++;
    }
    if (low) {
        allchar += lowerCaseChars;
        mm += lowerCaseChars[Math.floor(Math.random() * lowerCaseChars.length)];
        c++;
    }
    if (num) {
        allchar += numberChars;
        mm += numberChars[Math.floor(Math.random() * numberChars.length)];
        c++;
    }
    if (sys) {
        allchar += symbolChars;
        mm += symbolChars[Math.floor(Math.random() * symbolChars.length)];
        c++;
    }

    if (len < c) {
        alert("enter the proper length to include all the selected text in the field");
        return '';
    }


    if (allchar.length === 0) {
        alert("atleast one of the type u must enter in the field");
        return '';
    }

    if (len > 15) {
        alert("enter the lenght not more than 15");
        return '';
    }

    let pass = mm;
    for (let i = mm.length; i < len; i++) {
        const ran = Math.floor(Math.random() * allchar.length);
        pass += allchar[ran];
    }

    //this is use to again suffle the password.
    pass = pass.split('').sort(() => 0.5 - Math.random()).join('');
    return pass;
}
