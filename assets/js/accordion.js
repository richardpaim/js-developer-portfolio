const btnAccordion = document.querySelectorAll('.accordion .trigger')
    btnAccordion.forEach((el) =>{
        el.addEventListener('click' , (e) => {
            const accordion = el.parentElement
            const isOpen = accordion.classList.contains('open')

            if(isOpen){
                accordion.classList.remove('open')
            }else{
                accordion.classList.add('open')
            }
        })
    })