//code to open the humberger menu
const rightPart =document.querySelector('.right__part')
const openMenu=document.querySelector('.fa-bars')
const closeMenu=document.querySelector('.fa-times')
const homeSection=document.getElementById('home')

openMenu.addEventListener('click',()=>{
    rightPart.style.visibility='visible';
    closeMenu.style.display='inline-block';
    openMenu.style.display='none';
})
closeMenu.addEventListener('click',()=>{
    rightPart.style.visibility='hidden';
    closeMenu.style.display='none';
    openMenu.style.display='inline-block';
})
homeSection.addEventListener('click',()=>{
    rightPart.style.visibility='hidden';
    closeMenu.style.display='none';
    openMenu.style.display='inline-block';
})
/* //code to change the active menu

const navLinks=document.querySelectorAll('ul li a');

navLinks.forEach(navLink=>{

    navLink.addEventListener('click',()=>{
        if(navLink.className==='active'){
            navLink.className=''
        }
        navLink.className='active';
    })
}) */
