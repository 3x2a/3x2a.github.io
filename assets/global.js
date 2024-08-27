function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}

document.addEventListener('keydown', function(e) {
    if (e.which == 27) {
        alert("you cannot esc");
        console.log("esc")
    } else if (e.altKey && e.shiftKey && e.which == 75) {
        alert("you're a Mac User huh. '' there");

    } else if (e.altKey && e.which == 49) { // 1
        setDefaultTheme()
    } else if (e.altKey && e.which == 48) { // 0
        setDarkTheme()  
    }
});

function themeModeToggle() {
    switch (localStorage.getItem('3x2a.com')) {
        case '1': 
            setDarkTheme();
            break;
        case '0':
            setDefaultTheme();
            break;
        default:
            setDefaultTheme();
            break;
    }
}

const themeColor = document.querySelector(':root'); 

const defaultTheme = {
    primary:                            '#161a1d', // Muted Obsidian
    secondary:                          '#1a237e', // Twilight Indigo
    neutral:                            '#f8f9fa', // Satin Snow
    accent:                             '#ff3333', // Sharp Red

    hover:                              '#ff8888', // 
    contr:                              '#f8f9fa', // Satin Snow
    mjtfc:                              '#212529', // Midnight Slate
};
function enableDefaultTheme() {
    themeColor.style.setProperty('--primary', defaultTheme.primary)
    themeColor.style.setProperty('--secondary', defaultTheme.secondary)
    themeColor.style.setProperty('--neutral', defaultTheme.neutral)
    themeColor.style.setProperty('--accent', defaultTheme.accent)

    themeColor.style.setProperty('--hover', defaultTheme.hover)
    themeColor.style.setProperty('--contr', defaultTheme.contr)
    themeColor.style.setProperty('--mjtfc', defaultTheme.mjtfc)
}
function setDefaultTheme() {
    localStorage.setItem('3x2a.com', '1');
    enableDefaultTheme();
    console.log('Theme: Default')
}

const darkTheme = {
    primary:                            '#f8f9fa', // Satin Snow
    secondary:                          '#1a237e', // Twilight Indigo
    neutral:                            '#212529', // Midnight Slate
    accent:                             '#db4437', // Solid Red

    hover:                              '#487aa4', // 
    contr:                              '#f8f9fa', // Satin Snow
    mjtfc:                              '#f8f9fa', // Satin Snow
};
function enableDarkTheme() {
    themeColor.style.setProperty('--primary', darkTheme.primary)
    themeColor.style.setProperty('--secondary', darkTheme.secondary)
    themeColor.style.setProperty('--neutral', darkTheme.neutral)
    themeColor.style.setProperty('--accent', darkTheme.accent)

    themeColor.style.setProperty('--hover', darkTheme.hover)
    themeColor.style.setProperty('--contr', darkTheme.contr)
    themeColor.style.setProperty('--mjtfc', darkTheme.mjtfc)
}
function setDarkTheme() {
    localStorage.setItem('3x2a.com', '0');
    enableDarkTheme();
    console.log('Theme: Default Dark')
}

switch (localStorage.getItem('3x2a.com')) {
    case '1':
        enableDefaultTheme();
        break;
    case '0':
        enableDarkTheme();
        break;
    default:
        enableDefaultTheme();    
        break;
}