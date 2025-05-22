const toggletheme = document.getElementById("toggletheme");
const rootHtml = document.documentElement;


function changeTheme(){
    const currenttheme = rootHtml.getAttribute("data-theme")

    if(currenttheme === "dark"){
        rootHtml.setAttribute("data-theme", "light")
    }else{
        rootHtml.setAttribute("data-theme", "dark")
    }

    toggletheme.classList.toggle("bi-sun")
    toggletheme.classList.toggle("bi-moon-stars")
}

toggletheme.addEventListener("click", changeTheme);


