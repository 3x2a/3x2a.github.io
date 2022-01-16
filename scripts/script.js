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


//notify
window.setInterval(function(){

    var current = new Date();
    var expiry  = new Date("December 31")
    var expiry2 = new Date("January 5")
    var expiry3 = new Date("January 5")
    var expiry4 = new Date("January 5")
  
    if(current.getTime()=expiry.getTime()){
      $('#test-alert-idle').hide();
      $('#test-alert').show();
    }
  
    if(current.getTime()=expiry2.getTime()){
         $('#test-alert').hide();
         $('#test-alert-1').show();
     }

     if(current.getTime()=expiry3.getTime()){
        $('#test-alert-1').hide();
        $('#test-alert-2').show();
      }
    
      if(current.getTime()=expiry4.getTime()){
           $('#test-alert-2').hide();
           $('#test-alert-e').show();
       }
  
  }, 3000);
  
  $('#test-alert-idle').show(); 
  $('#test-alert-e').hide();
