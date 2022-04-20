const burger = document.querySelector('.burger');
const brandName = document.querySelector('.brandName');
const nav = document.querySelector('.navLinks');
const navlinks = document.querySelectorAll('.navLinks li');

const navSlide = () => {
    burger.addEventListener('click',() => {
        //toggle nav
        nav.classList.toggle('nav-active');

        //animate links
        navlinks.forEach((link,index)=>{
            if(link.style.animation){
                link.style.animation= '';
            }else{
                link.style.animation = `navLinkFade 0.2s ease forwards ${index/5 + 0.3}s`;
            }
            
        });

        burger.classList.toggle('toggle');
    });
   
}

navSlide();