 let isOnline = true , timer = 10;
 let b = document.querySelectorAll('#timer')
 let Popup = document.querySelector('.popup')
 const  checkConnection = async ()=>{
    try{
        const response = await fetch('https://randomuser.me/api')
        isOnline = response.status>= 200 && response.status<300;
    }catch(err){
        isOnline = false;
    }
    handlePopup(isOnline)
 }
 setInterval(checkConnection,3000)
 function handlePopup(status){
    if (status){
        return Popup.classList.remove("show")
    }
    Popup.classList.add("show")
     setInterval(()=>{
        timer--;
        b.innerText = timer
    },1000)
 }