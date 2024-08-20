function setTime(){
    const date =new Date();
    let hour=date.getHours();
    const meridiem = hour>=12 ? "PM" : "AM";
    hour=hour % 12 || 12;
    hour=hour.toString().padStart(2,0)
    const minute=date.getMinutes().toString().padStart(2,0);
    const seconds=date.getSeconds().toString().padStart(2,0);
    const time=`${hour}:${minute}:${seconds} ${meridiem}`;
    document.getElementById('clock').textContent=time;
};

setTime();
setInterval(function(){
    setTime()
},1000);