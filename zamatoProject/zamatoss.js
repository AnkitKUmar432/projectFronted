
let m = document.querySelector("#xl")
let signopen = document.querySelector(".singup-page")
let singclosed = document.querySelector('.box-right')


m.addEventListener('click',()=>{
    console.log("click hua hai")

    signopen.style.display='block';
    
})
singclosed.addEventListener('click',()=>{
    signopen.style.display='none';
})



let n = document.querySelector('#xm');
let opneSign= document.querySelector('#sinx')
let closedSign = document.querySelector('.box-r')
n.addEventListener('click', ()=>{
    console.log("H");
    opneSign.style.display='block';
})
closedSign.addEventListener('click', ()=>{
    opneSign.style.display='none';
})