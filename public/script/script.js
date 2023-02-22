const personas = document.querySelectorAll('.members')

personas.forEach((persoon)=>{
    persoon.addEventListener('click', () => {
        const dataId = persoon.dataset.id
        const card = document.getElementById(dataId)
        // card.classList.add('active')
        card.showModal();

        const close_buttons = document.querySelectorAll(".close");
        close_buttons.forEach((close) => {
            close.addEventListener("click", () => {
                card.close()
            }); 
        })

    })
})







// sluit.forEach((sluiter)=>{
// sluiter.addEventListener('click', clicker)
// })

// function clicker() {
//     modal.classList.toggle('visible');
//     body.classList.toggle('invisible');
//     console.log('werkt');
// }
