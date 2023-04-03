const submit=document.querySelector(".btn button");
const ok=document.querySelector(".box button");
const box=document.querySelector(".box");
submit.addEventListener("click",()=>{
   box.classList.add("active-box")
})
ok.addEventListener("click",()=>{
    box.classList.remove("active-box")
 })