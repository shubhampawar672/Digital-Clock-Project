const hr=document.getElementById("hours")
const mt=document.getElementById("minutes")
const se=document.getElementById("seconds")
const ampme=document.getElementById("ampm")

function updateClock(){

    let h=new Date().getHours()
    let m=new Date().getMinutes()
    let s=new Date().getSeconds()
    let ampm="AM";
    if(h>12)
    {
        h=h-12;
        ampm="PM";
    }
    h=h<10?"0"+h:h;
    m=m<10?"0"+m:m;
    s=s<10?"0"+s:s;
    hr.innerText=h;
    mt.innerText=m;
    se.innerText=s;
    ampme.innerText=ampm;
    setTimeout(()=>{
        updateClock()
    },1000);

}
updateClock()