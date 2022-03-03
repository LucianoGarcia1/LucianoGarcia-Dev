function textAnimation(e){
    const textArray = e.innerHTML.split('');
    e.innerHTML = ''

    textArray.forEach((letra, index)=> {
        setTimeout(()=>{
            e.innerHTML += letra;
        }, 75 * index) 
    });
}

const titulo = document.querySelector("h1");

textAnimation(titulo);

textAnimation(document.querySelector(".stacks"));

textAnimation(document.querySelector(".pre-texto"));