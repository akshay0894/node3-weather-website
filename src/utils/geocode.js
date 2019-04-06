const request=require('request');
const geocode=(address,callback)=>{
    const url='https://api.mapbox.com/geocoding/v5/mapbox.places/' +address+ '.json?types=country&access_token=pk.eyJ1IjoiYWtzaGF5MDg5NCIsImEiOiJjanR5azdjYTYxazk4NGFsejc5b2QxMmh1In0.S_INr53mBD42Nf-QT6PRfA';
    
    request({url, json:true},(error,{body})=>{
        if(error)
        {
            callback('Unable to connect',undefined);
        }
        else if(body.features.length==0){
    
            callback("undefined loaction", undefined);
        }
        else{
        callback(undefined,
            {latitude:body.features[0].center[1],
             longitude:body.features[0].center[0],
             location:body.features[0].place_name
            }
        );
        }
    })
    }
    
    module.exports=geocode;