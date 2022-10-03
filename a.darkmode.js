// input: <div class="mode-switch"></div>
//
// taken from https://adminlte.io/docs/3.2/
//

document.ready = function (callback) {
    // debugger;
    if (document.readyState == "complete") {
        // complete?
        callback();
    } else if (document.addEventListener) {
        // DOMContentLoaded event
        document.addEventListener('DOMContentLoaded', function () {
            document.removeEventListener('DOMContentLoaded', arguments.callee, false);
            callback();
        }, false)
    }
    // IE
    else if (document.attachEvent) {
        document.attachEvent('onreadystatechange', function () {
            if (document.readyState == "complete") {
                document.detachEvent("onreadystatechange", arguments.callee);
                callback();
            }
        })
    }
    // others
    else if (document.lastChild == document.body) {
        callback();
    }
}

// debugger;

// anonymous function
document.ready(function(){
    // debugger;

    // create mode switch
    var els = document.getElementsByClassName('mode-switch');
    for (var el of els){
        el.outerHTML = 
            '<div class="theme-switch-wrapper">' +
                '<label class="theme-switch" for="checkbox">' +
                    '<input type="checkbox" id="checkbox">' +
                    '<span class="slider round"></span>' +
                '</label>' +
            '</div>'
        ;
    }

    var 
        toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]'),
        mainHeader = document.querySelector('.main-header'),
        sideBar = document.querySelector('aside')
        
    ;
    // os settings: https://stackoverflow.com/questions/56393880/how-do-i-detect-dark-mode-using-javascript
    if (window.matchMedia){
        if (window.matchMedia('(prefers-color-scheme: dark)').matches){
            setDarkMode(1);
        }    
    } else if (localStorage.getItem('theme') === 'dark'){
        // switch's previous settings
        setDarkMode(1);
    }

    ///

    function setDarkMode(dark){

        console.log('setDarkMode', dark);
        if (dark){

            // set dark mode
            if (!document.body.classList.contains('dark-mode')) {
                document.body.classList.add("dark-mode");
            }

            if (mainHeader && mainHeader.classList.contains('navbar-light')) {
                mainHeader.classList.add('navbar-dark');
                mainHeader.classList.remove('navbar-light');
            }
            if (sideBar){
                sideBar.className = sideBar.className.replace('-light', '-dark');
            }
            localStorage.setItem('theme', 'dark');
            toggleSwitch.checked = true;

        } else {
        
            // set light mode
            if (document.body.classList.contains('dark-mode')) {
                document.body.classList.remove("dark-mode");
            }
            if (mainHeader && mainHeader.classList.contains('navbar-dark')) {
                mainHeader.classList.add('navbar-light');
                mainHeader.classList.remove('navbar-dark');
            }
            if (sideBar){
                sideBar.className = sideBar.className.replace('-dark', '-light');
            }
            localStorage.setItem('theme', 'light');
            toggleSwitch.checked = false;

        }
    
    }

    // website switch event
    toggleSwitch.addEventListener('change', function(e){
        setDarkMode(e.target.checked?1:0);    
    }, false);

    // os switch event
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {        
        setDarkMode(event.matches ? 1 : 0);
    });    

});
