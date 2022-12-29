const buttens = document.querySelectorAll(".filters ul li a")
const grifItems = document.querySelectorAll(".grid-item")

buttens.forEach((btn) => {
    btn.addEventListener("click", (e) =>{
        e.preventDefault();
        buttens.forEach((btn2) =>{
            btn2.parentElement.classList.remove("active")
        })
        e.target.parentElement.classList.add("active")
        const value = e.target.getAttribute("data-filter")

        grifItems.forEach((item) => {
            const filtervaliu = item.dataset.filter;
            if(value === filtervaliu || value =="all"){
                item.style.display = "block"
            }
            else{
                item.style.display = "none"
            }
        })
        
    })
})