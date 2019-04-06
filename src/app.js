const express=require('express');
const app=express();
const path=require('path');
const hbs= require('hbs');
const geocode=require('./utils/geocode');
const forecast=require('./utils/forecast');
const publicDirectoryPath=path.join(__dirname,'../public');
app.use(express.static(publicDirectoryPath));

const viewpath=path.join(__dirname,'../templates/views');
const partialsPath=path.join(__dirname,'../templates/partials');
app.set('view engine','hbs');
app.set('views',viewpath);
hbs.registerPartials(partialsPath);

app.get('',(req,res)=>
{
    res.render('index',{
        title:'waether app',
        name:'akshay'
    });
})
app.get('/help',(req,res)=>
{
    res.render("help",{
        title:'help',
        name:'akshay',
        helptext:'this is some helpful text'
    });
})

app.get('/about',(req,res)=>
{
    res.send("<h1>About</h1>");
})

app.get('/weather',(req,res)=>
{
    if(!req.query.address)
    {
       return res.send({
            error:'No address'
        })
    }
    
    geocode(req.query.address,(error,{latitude,longitude,location}={})=>{
        if(error)
        {
            return res.send({error})
        }
        forecast(latitude, longitude,(error,forecastdata)=>{
            if(error)
            {
                return res.send({error});
            }
            res.send({
                forecast:forecastdata,
                location,
                address:req.query.address
               })

        })
    

    })
})    

app.get('*',(req,res)=>
{
    res.render("404-page",{
        title:'404',
        name:'akshay',
        error:'page not found   '
    });
})

app.listen(3000,()=>{
    console.log("sever is listening");
})