var r = document.querySelector(':root');
var darkMode = {
    //primaryColor: '',
    accentColor: '#e9ecef',
    //lightPrimary: '#',
    textColor: '#f8f9fa',
    //whiteTextColor: '#',
    backgroundColor: '#161a1d'
};

var lightMode = {
    //primaryColor: '',
    accentColor: '#343a40',
    //lightPrimary: '#',
    textColor: '#161a1d',
    //whiteTextColor: '#',
    backgroundColor: '#f8f9fa'
};

function lightModeEnable() {
    //r.style.setProperty('--primary-color', lightMode.primaryColor)
    r.style.setProperty('--accent-color', lightMode.accentColor)
    //r.style.setProperty('--light-primary', lightMode.lightPrimary)
    r.style.setProperty('--text-color', lightMode.textColor)
    //r.style.setProperty('--white-text-color', lightMode.whiteTextColor)
    r.style.setProperty('--background-color', lightMode.backgroundColor)
}

function darkModeEnable() {
    //r.style.setProperty('--primary-color', darkMode.primaryColor);
    r.style.setProperty('--accent-color', darkMode.accentColor);
    //r.style.setProperty('--light-primary', darkMode.lightPrimary);
    r.style.setProperty('--text-color', darkMode.textColor);
    //r.style.setProperty('--white-text-color', darkMode.whiteTextColor);
    r.style.setProperty('--background-color', darkMode.backgroundColor);
}

function lightModeOn() {
    localStorage.setItem('mode', 'true');
    lightModeEnable();
}

function darkModeOn() {
    localStorage.setItem('mode', 'false');
    darkModeEnable();
}

if (localStorage.getItem('mode') == 'false') {
    console.log('dark')
    darkModeEnable();
} else {
    lightModeEnable();
    console.log('light')
}


//date function
var dateObj = new Date();
var month = dateObj.getUTCMonth() + 1; //months from 1-12
var day = dateObj.getUTCDate();
var year = dateObj.getUTCFullYear();

newdate = year + "/" + month + "/" + day;

document.getElementById("current_date").innerHTML = year + "/" + month + "/" + day;