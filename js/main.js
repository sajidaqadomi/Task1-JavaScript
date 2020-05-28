
let welcomecontent=document.getElementById('welcome-content'),
    timecontent=document.getElementById('time-content'),
    sendBtn=document.getElementById('send-btn'),
    showBtn=document.getElementById('show-btn'),
    specialBtn=document.getElementById('special-btn'),
    personInput=document.getElementById('person-name'),
    friendsList=document.getElementById('friends-list'),
    friends=[],
    specialFriends=[],
    name,
    msg;
   

addFriend=(e)=>{
    e.preventDefault();
    name=personInput.value.trim().toLowerCase();
    personInput.value='';
    if(friends.length && friends.find(item=>item===name)){
        msg=` “Oh, it's one of my friends`;
        welcomecontent.setAttribute('data-icon','happy');
    }else if(name){
        msg=`Hello ${name}`;
        welcomecontent.setAttribute('data-icon','new');
        friends.push(name);
    }else{
        msg=`Oh No! that’s not a name`;
        welcomecontent.setAttribute('data-icon','sad');
    }
    welcomecontent.innerHTML= msg;
    addSpecial(friends);

}
addSpecial=(friends)=>{
    specialFriends=[];
    friends.length?(
        friends.forEach(element => {
            /a$/.test(element)?specialFriends.push(element):null;

            
        })
    ):(null)
    //console.log(specialFriends);


}
showFrinds=(friends)=>{
    friendsList.innerHTML='';
    friends.length?(
        friends.forEach(item=>{
            friendsList.innerHTML+=`<li>${item}</li>`
        })

    ):(friendsList.innerHTML+=`<li class='empty'>There is no any frind till now</li>`)
    
    
}
showTime=()=>{
    
    let date=new Date(),
        hour=date.getHours(),
        minutes=date.getMinutes(),
        secounds=date.getSeconds();
        hour=hour<10?(`0${hour}`):(hour);
        minutes=minutes<10?(`0${minutes}`):(minutes);
        secounds=secounds<10?(`0${secounds}`):(secounds);

    timecontent.innerHTML=`${hour}:${minutes}:${secounds}`;
    console.log(date.getHours);


}

sendBtn.addEventListener('click',addFriend);
sendBtn.addEventListener('mouseover',showTime);
showBtn.addEventListener('click',()=>showFrinds(friends));
specialBtn.addEventListener('click',()=>showFrinds(specialFriends));





