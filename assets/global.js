function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}

document.addEventListener('keydown', function(event) {
    if (e.which == 27) {
        alert("you cannot esc");
        console.log("esc")
    } else if (e.altKey && e.shiftKey && e.which == 75) {
        alert("you're a Mac User huh. '' there");

    } else if (e.altKey && e.which == 49) { // 1
        setDefaultTheme()
    } else if (e.altKey && e.which == 50) { // 2
        setDarkTheme()  
    }
});

const defaultTheme = {
    primary:                            '#212529', // Midnight Slate
    secondary:                          '#1a598d', // Azure Frost
    text:                               '#161a1d', // Muted Obsidian
    neutral:                            '#f8f9fa', // Satin SnowSatin Snow
    accent:                             '#db4437', // Solid Red
    additional:                         '#495057', // Delta Slate

    hover:                              '#487aa4', // 
    contr:                              '#f8f9fa', // Satin Snow
    mjtfc:                              '#212529', // Midnight Slate
    sppr0:                              '#212529',
    font:                               "'Oxanium', cursive"
};
function enableDefaultTheme() {
    themeColor.style.setProperty('--primary', defaultTheme.primary)
    themeColor.style.setProperty('--secondary', defaultTheme.secondary)
    themeColor.style.setProperty('--text', defaultTheme.text)
    themeColor.style.setProperty('--neutral', defaultTheme.neutral)
    themeColor.style.setProperty('--accent', defaultTheme.accent)
    themeColor.style.setProperty('--additional', defaultTheme.additional)

    themeColor.style.setProperty('--hover', defaultTheme.hover)
    themeColor.style.setProperty('--contr', defaultTheme.contr)
    themeColor.style.setProperty('--mjtfc', defaultTheme.mjtfc)
    themeColor.style.setProperty('--sppr0', defaultTheme.sppr0)
    themeColor.style.setProperty('--font', defaultTheme.font)
}
function setDefaultTheme() {
    localStorage.setItem('A418.org', '1');
    enableDefaultTheme();
    console.log('Theme: Default')
}

const darkTheme = {
    primary:                            '#161a1d', // Muted Obsidian
    secondary:                          '#1a598d', // Azure Frost
    text:                               '#f8f9fa', // Satin SnowSatin Snow
    neutral:                            '#212529', // Midnight Slate
    accent:                             '#db4437', // Solid Red
    additional:                         '#f8f9fa', // Satin SnowSatin Snow

    hover:                              '#487aa4', // 
    contr:                              '#f8f9fa', // Satin SnowSatin Snow
    mjtfc:                              '#f8f9fa', // Satin SnowSatin Snow
    sppr0:                              '#f8f9fa',
    font:                               "'Oxanium', cursive"
};
function enableDarkTheme() {
    themeColor.style.setProperty('--primary', darkTheme.primary)
    themeColor.style.setProperty('--secondary', darkTheme.secondary)
    themeColor.style.setProperty('--text', darkTheme.text)
    themeColor.style.setProperty('--neutral', darkTheme.neutral)
    themeColor.style.setProperty('--accent', darkTheme.accent)
    themeColor.style.setProperty('--additional', darkTheme.additional)

    themeColor.style.setProperty('--hover', darkTheme.hover)
    themeColor.style.setProperty('--contr', darkTheme.contr)
    themeColor.style.setProperty('--mjtfc', darkTheme.mjtfc)
    themeColor.style.setProperty('--sppr0', darkTheme.sppr0)
    themeColor.style.setProperty('--font', darkTheme.font)
    icon = '<svg xmlns="http://www.w3.org/2000/svg" height="28" viewBox="0 -960 960 960" width="28"><path d="M481.154-140.001q-141.666 0-240.832-99.167Q141.155-338.334 141.155-480q0-135.768 92.115-232.883 92.114-97.115 225.575-105.192 8.615 0 16.922.615t16.307 1.846q-30.615 28.615-48.768 69.153-18.154 40.539-18.154 86.461 0 98.334 68.834 167.168 68.834 68.833 167.168 68.833 46.538 0 86.768-18.153 40.23-18.153 68.461-48.768 1.231 8 1.846 16.307.616 8.307.616 16.922-7.693 133.461-104.808 225.575-97.115 92.115-232.883 92.115Zm0-59.999q88 0 158-48.5t102-126.5q-20 5-40 8t-40 3q-123 0-209.5-86.5t-86.5-209.5q0-20 3-40t8-40q-78 32-126.5 102t-48.5 158q0 116 82 198t198 82Zm-10-270Z"/></svg>';
}
function setDarkTheme() {
    localStorage.setItem('A418.org', '3');
    enabledarkTheme();
    console.log('Theme: Default Dark')
}





















document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.panel, .small-panel');
    let currentSectionIndex = 0;
    let isScrolling = false;
  
    function scrollToSection(index) {
        if (index < 0 || index >= sections.length) return;
        const targetTop = sections[index].offsetTop;
        isScrolling = true;
    
        window.scrollTo({
            top: targetTop,
            behavior: 'auto'
        });
    
        setTimeout(() => {
            currentSectionIndex = index;
            isScrolling = false;
        }, 500); // Adjust timeout as needed
    }
  
    const targetElement = document.querySelector('.panel');

    targetElement.addEventListener('wheel', function(event) {
        // Check the deltaY property of the event to determine scroll direction
        if (event.deltaY > 0) {
            e = $.Event('keyup');
            e.keyCode= 224, 72; // enter
            $('input').trigger(e);
            // Call a function or trigger an action here
        } else {
            scrollToSection(prevSectionIndex);
            e = $.Event('keyup');
            e.keyCode= 224, 80; // enter
            $('input').trigger(e);
        }
    
        // Prevent default scrolling behavior if needed
        event.preventDefault();
    });
  
    // Prevent default scroll behavior with keys
    window.addEventListener('keydown', (event) => {
        if (isScrolling) return;z
    
        if (event.key === 'ArrowDown') {
            const nextSectionIndex = currentSectionIndex + 1;
            if (nextSectionIndex < sections.length && sections[nextSectionIndex].classList.contains('panel')) {
            scrollToSection(nextSectionIndex);
            }
        } else if (event.key === 'ArrowUp') {
            const prevSectionIndex = currentSectionIndex - 1;
            if (prevSectionIndex >= 0 && sections[prevSectionIndex].classList.contains('panel')) {
            scrollToSection(prevSectionIndex);
            }
        }
    });
});
  