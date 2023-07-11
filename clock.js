let startb=document.getElementById("start");
let stopb=document.getElementById("stop");
let lapb=document.getElementById("lap");
let resetb=document.getElementById("reset");
let hr=document.getElementById("hour");
let min=document.getElementById("min");
let sec=document.getElementById("sec");
let div=document.getElementById("div");
let hrcount=1;
let mincount=1;
let seccount=1;
let timeInterval;
startb.addEventListener('click',function(){
    timeInterval=setInterval(startclock,1000);
});

stopb.addEventListener('click',function(){
    clearInterval(timeInterval);
});

lapb.addEventListener('click',function(){
    let p=document.createElement("p");
    p.innerHTML=`${hr.innerHTML}:${min.innerHTML}:${sec.innerHTML}`;
    div.append(p);
});

resetb.addEventListener('click',function(){
    clearInterval(timeInterval);
    div.innerHTML="";
    hrcount=1;
    mincount=1;
    seccount=1;
    hr.innerHTML="00";
    min.innerHTML="00";
    sec.innerHTML="00";
});

function startclock(){
    sec.innerHTML=`0${seccount}`;
    if(seccount>9){
        sec.innerHTML=`${seccount}`;
    }
    if(seccount>59){
        seccount=0;
        sec.innerHTML=`0${seccount}`;
        min.innerHTML=`0${mincount}`;
        if(mincount>9){
            min.innerHTML=`${mincount}`;
        }
        if(mincount>59){
            mincount=0;
            min.innerHTML=`0${mincount}`;
            hr.innerHTML=`0${hrcount}`;
            if(hrcount>9){
                hr.innerHTML=`${hrcount}`;
                if(hrcount>23){
                    hrcount=0;
                    hr.innerHTML=`0${hrcount}`;
                }
            }
            hrcount++;
        }
        mincount++;
    }
    seccount++;
}
