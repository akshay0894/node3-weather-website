
const weatherform=document.querySelector('form');
const search=document.querySelector('input');
const messageOne=document.querySelector('#message-1');
const messageSecond=document.querySelector('#message-2');
weatherform.addEventListener('submit',(e)=>{
    e.preventDefault();

    const location=search.value;
    messageOne.textContent='loading ..';
    messageSecond.textContent='';

    fetch('/weather?address='+location).then((response)=>
    {
        response.json().then((data)=>{
            if(data.error)
            {
                messageOne.textContent=data.error;
            }else{
                messageOne.textContent=data.location;
                messageSecond.textContent=data.forecast;
            }
    
        })
    })
    

})