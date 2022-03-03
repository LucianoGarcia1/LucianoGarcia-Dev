const toggle = document.getElementById("btn-menu");
const menuImg = document.getElementById("grid");
const aside = document.querySelector(".aside-bar");
const container = document.querySelector(".container");
const assets = document.querySelector(".assets");

const btnAssets = document.getElementById("assets");

function activeScript(){
    
    toggle.addEventListener("click", () =>{
        aside.classList.toggle("active");
        aside.classList.toggle("opacity");
        

        if(window.innerWidth <= "670"){
            aside.classList.toggle("removeClose");
        }

        if (aside.classList.contains("active")){
            menuImg.src = "assets/img/menu-outline.svg";

        }else{
            menuImg.src = "assets/img/close-outline.svg";
        }
    })

    if(window.innerWidth <= "860"){
        aside.classList.toggle("active");
    }


    if(window.innerWidth <= "860"){
        menuImg.src = "assets/img/menu-outline.svg";

    }else{
        menuImg.src = "assets/img/close-outline.svg";
        
    }

    const menu = document.getElementById("activeMenu");

    window.onscroll = () =>{
        if(document.documentElement.scrollTop > 65){
            menu.classList.add("fixedMenu");

        }else if(menu.classList.contains("fixedMenu")){
            menu.classList.remove("fixedMenu");

        }
    }

    btnAssets.addEventListener("click", () =>{
        assets.classList.toggle("activeConfig");
    })

    const btNred = document.getElementById("red");

    btNred.addEventListener("click", () =>{
        document.body.classList.toggle("subRed");
    })

    const btNorange = document.getElementById("orange");

    btNorange.addEventListener("click", () =>{
        document.body.classList.toggle("subOrange");
    })

    const btNgreen = document.getElementById("green");

    btNgreen.addEventListener("click", () =>{
        document.body.classList.toggle("subGreen");
    })


    const darkBtn = document.getElementById("darkMode");

    darkBtn.addEventListener("click", () =>{
        document.body.classList.toggle("dark-theme");
    })

    const blue = document.getElementById("blue");

    blue.addEventListener("click", () =>{
        document.body.classList.toggle("blueTheme");
    })

    const btnAside = document.querySelector(".close");


    btnAside.addEventListener("click", () =>{
        if(aside.classList.toggle("active")){
            menuImg.src = "assets/img/menu-outline.svg";
        }
        
        aside.classList.toggle("opacity");
        aside.classList.remove("removeClose");
    })
}

activeScript();