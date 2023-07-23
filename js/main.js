const scores = document.querySelectorAll('.rate-box');
const submitBtn = document.querySelector('.submit-btn');
const primerContainer = document.querySelector('.rating-container');
const segundoContainer = document.querySelector('.thanks-container');


scores.forEach(boton =>{
    boton.addEventListener('click', () =>{
        scores.forEach(boton2 =>{
            boton2.classList.remove('clicked');
        })
        boton.classList.add('clicked')
        let puntaje = parseInt(boton.innerText);
        submitBtn.addEventListener('click', () =>{
            primerContainer.classList.add('none');
            segundoContainer.classList.remove('none');
            const parrafoPuntaje = document.querySelector('.option-selected');
            parrafoPuntaje.innerText = `You selected ${puntaje} out of 5`
        })
    })
})