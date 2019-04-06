const request=require('request');
const forecast=(latitude,longitude,callback)=>{
    const url="https://api.darksky.net/forecast/9474c67e280cd8b8be2e8ce31a0a25cb/" + latitude + "," +longitude;
    
    request({url, json:true},(error,{body})=>{
        if(error)
        {
            callback('Unable to connect',undefined);
        }
        else if(body.error==0){
    
            callback("undefined loaction", undefined);
        }
        else{
        callback(undefined,body.daily.data[0].summary);
        }
    })
    }
    
    module.exports=forecast;