
const menu=document.querySelector('.container');

const menulist=document.querySelector('nav ul');

menu.addEventListener('click',()=>{
menulist.classList.toggle('show')
console.log(menulist);
})
