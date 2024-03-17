
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
