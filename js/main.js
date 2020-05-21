
let welcomecontent=document.getElementById('welcome-content'),
    timecontent=document.getElementById('time-content'),
    btn=document.getElementById('btn'),
    person;

showAlert=()=>{
    person = prompt("Please enter your name", "  ").trim().toLowerCase();
    welcomecontent.innerHTML= person?(person==='sajida'?`“Oh, its my name`:`Hello ${person}`)
                          :(`Oh No! that’s not a name`);

}
showTime=()=>{
    
    let date=new Date(),
        hour=date.getHours(),
        minutes=date.getMinutes(),
        secounds=date.getSeconds();
        hour=hour<12?(`0${hour}`):(hour);
        minutes=minutes<10?(`0${minutes}`):(minutes);
        secounds=secounds<10?(`0${secounds}`):(secounds);

    timecontent.innerHTML=`${hour}:${minutes}:${secounds}`;
    console.log(date.getHours);


}
btn.addEventListener('mouseover',showTime);
btn.addEventListener('click',showAlert);





