const url ="https://www.prokerala.com/general/calendar/imgs/daily/2024-08-05.png";

const date=new Date();

const btnForm=document.querySelector("#formDate");
const dateInput=document.querySelector("#dateInput");
dateInput.addEventListener("change",(e)=>{
    e.preventDefault();
    const dateInput=document.querySelector("#dateInput").value;
    const dateImg=document.querySelector("#dateImg");
    dateImg.classList.remove("hidden");
    dateImg.src=`https://www.prokerala.com/general/calendar/imgs/daily/${dateInput}.png`
    console.log(dateInput);
    
})
