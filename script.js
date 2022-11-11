//menu show hidden
const navMenu=document.getElementById('nav-menu'),
      navToggle=document.getElementById('nav-toggle'),
      navClose=document.getElementById('nav-close')

//menu show
//if conditons
if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu')
    })
}    

//menu close
if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu')
    })
}


//remove menu mobile
const navLink=document.querySelectorAll('.nav_link')
function linkAction(){
    const navMenu=document.getElementById('nav-menu')
    //when we click on each menu it will remove the show menu class 
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n=>n.addEventListener('click',linkAction))


//skills arrow function
const skillsContent =document.getElementsByClassName('skills__content'),
      skillsHeader=document.querySelectorAll('.skills__header')


function toggleSkills(){
    let itemClass=this.parentNode.className

    for(i=0;i<skillsContent.length;i++){
    skillsContent[i].className='skills__content skills__close'
    }

    if(itemClass==='skills__content skills__close'){
        this.parentNode.className='skills__content skills__open'
    }
} 

skillsHeader.forEach((el)=>{
    el.addEventListener('click',toggleSkills)
})

//swiperjs
let swiper=new Swiper('.portfolio__container',{
    cssMode:true,
    loop:true,
    navigation:{
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev',
    },
    pagination:{
        el:'.swiper-pagination',
        clickable:true
    },
    mousewheel:true,
    keyboard:true,
});
//scrolltop
function scrollUp(){
    const scrollUp=document.getElementById('scroll-up');
    if(this.scrollY>=560)scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll',scrollUp)