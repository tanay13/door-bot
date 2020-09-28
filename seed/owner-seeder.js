require('dotenv').config({path:'../.env'})
var Owner = require('../model/owner')
var mongoose = require('mongoose')

const db = process.env.DB_CONNECT


//Connnect Mongo
mongoose.connect(db,{useNewUrlParser:true,useUnifiedTopology:true})
  .then(()=>console.log("db connected"))
  .catch(err=>console.log(err))

var owner = [
    new Owner({
    imagePath:'https://content3.jdmagicbox.com/comp/jabalpur/z4/9999px761.x761.170819131901.k5z4/catalogue/lenovo-laptop-store-wright-town-jabalpur-laptop-dealers-tdwu256.jpg',
    Shopname:'Laptop repair3',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lorem felis, rhoncus lobortis nisl in, congue sagittis enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra ligula ultrices dolor malesuada ornare. Mauris ullamcorper malesuada urna in semper. Donec accumsan tincidunt facilisis. Suspendisse nec dolor facilisis, iaculis orci sed, posuere mauris. Donec tempor sollicitudin ligula ac aliquam. Aliquam maximus, magna vel facilisis aliquam, ipsum mi lobortis dui, sit amet placerat neque nulla et augue. Aenean in ligula eu metus porta laoreet sit amet eu ipsum. Nulla facilisi.",
    timing:"9am to 8pm",
    category:"Laptop",
    address:"MG Road , Pune"
}),
new Owner({
    imagePath:'https://phoneshopdesign.com/wp-content/uploads/2018/08/041-dell-laptop-experience-store-shopping-mall-1-720x480.jpg',
    Shopname:'Laptop repair4',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lorem felis, rhoncus lobortis nisl in, congue sagittis enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra ligula ultrices dolor malesuada ornare. Mauris ullamcorper malesuada urna in semper. Donec accumsan tincidunt facilisis. Suspendisse nec dolor facilisis, iaculis orci sed, posuere mauris. Donec tempor sollicitudin ligula ac aliquam. Aliquam maximus, magna vel facilisis aliquam, ipsum mi lobortis dui, sit amet placerat neque nulla et augue. Aenean in ligula eu metus porta laoreet sit amet eu ipsum. Nulla facilisi.",
    timing:"9am to 10pm",
    category:"Laptop",
    address:"Golibar maidan , Pune"
}),

new Owner({
    imagePath:'https://upload.wikimedia.org/wikipedia/commons/1/13/Supermarkt.jpg',
    Shopname:'Grocery Store2',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lorem felis, rhoncus lobortis nisl in, congue sagittis enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra ligula ultrices dolor malesuada ornare. Mauris ullamcorper malesuada urna in semper. Donec accumsan tincidunt facilisis. Suspendisse nec dolor facilisis, iaculis orci sed, posuere mauris. Donec tempor sollicitudin ligula ac aliquam. Aliquam maximus, magna vel facilisis aliquam, ipsum mi lobortis dui, sit amet placerat neque nulla et augue. Aenean in ligula eu metus porta laoreet sit amet eu ipsum. Nulla facilisi.",
    timing:"Monday to Sunday 10 am to 8 pm",
    category:"Grocery",
    address:"Wanworie , Pune"
}),
new Owner({
    imagePath:'https://thumbor.thedailymeal.com/d5Uau-OAI-QEm1BpO5lr3LR-kHw=//https://www.thedailymeal.com/sites/default/files/2019/07/03/supermarketcart_main.JPG',
    Shopname:'Grocery Store3',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lorem felis, rhoncus lobortis nisl in, congue sagittis enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra ligula ultrices dolor malesuada ornare. Mauris ullamcorper malesuada urna in semper. Donec accumsan tincidunt facilisis. Suspendisse nec dolor facilisis, iaculis orci sed, posuere mauris. Donec tempor sollicitudin ligula ac aliquam. Aliquam maximus, magna vel facilisis aliquam, ipsum mi lobortis dui, sit amet placerat neque nulla et augue. Aenean in ligula eu metus porta laoreet sit amet eu ipsum. Nulla facilisi.",
    timing:"Monday to Sunday 10 am to 8 pm",
    category:"Grocery",
    address:"Wanworie , Pune"
}),
new Owner({
    imagePath:'https://images.squarespace-cdn.com/content/v1/529fc0c0e4b088b079c3fb6d/1585146336141-0OCXTG4Z39U2COQPIOCA/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/shutterstock_373602469.jpg',
    Shopname:'Grocery Store4',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lorem felis, rhoncus lobortis nisl in, congue sagittis enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra ligula ultrices dolor malesuada ornare. Mauris ullamcorper malesuada urna in semper. Donec accumsan tincidunt facilisis. Suspendisse nec dolor facilisis, iaculis orci sed, posuere mauris. Donec tempor sollicitudin ligula ac aliquam. Aliquam maximus, magna vel facilisis aliquam, ipsum mi lobortis dui, sit amet placerat neque nulla et augue. Aenean in ligula eu metus porta laoreet sit amet eu ipsum. Nulla facilisi.",
    timing:"Monday to Sunday 10 am to 8 pm",
    category:"Grocery",
    address:"Wanworie , Pune"
}),

new Owner({
    imagePath:'https://images.squarespace-cdn.com/content/v1/585c624ebe6594527e0c44e0/1543354184974-0US7H3GLPULRT97RK098/ke17ZwdGBToddI8pDm48kPTrHXgsMrSIMwe6YW3w1AZ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0k5fwC0WRNFJBIXiBeNI5fKTrY37saURwPBw8fO2esROAxn-RKSrlQamlL27g22X2A/20181102_180557.jpg',
    Shopname:'Car repair',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lorem felis, rhoncus lobortis nisl in, congue sagittis enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra ligula ultrices dolor malesuada ornare. Mauris ullamcorper malesuada urna in semper. Donec accumsan tincidunt facilisis. Suspendisse nec dolor facilisis, iaculis orci sed, posuere mauris. Donec tempor sollicitudin ligula ac aliquam. Aliquam maximus, magna vel facilisis aliquam, ipsum mi lobortis dui, sit amet placerat neque nulla et augue. Aenean in ligula eu metus porta laoreet sit amet eu ipsum. Nulla facilisi.",
    timing:"Monday to Sunday 8 am to 8 pm",
    category:"Car",
    address:"Hadapsar , Pune"
}),
new Owner({
    imagePath:'https://sandmautomotive.com/wp-content/uploads/sites/1084/2019/04/Slide2-1-1024x436.png',
    Shopname:'Car repair2',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lorem felis, rhoncus lobortis nisl in, congue sagittis enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra ligula ultrices dolor malesuada ornare. Mauris ullamcorper malesuada urna in semper. Donec accumsan tincidunt facilisis. Suspendisse nec dolor facilisis, iaculis orci sed, posuere mauris. Donec tempor sollicitudin ligula ac aliquam. Aliquam maximus, magna vel facilisis aliquam, ipsum mi lobortis dui, sit amet placerat neque nulla et augue. Aenean in ligula eu metus porta laoreet sit amet eu ipsum. Nulla facilisi.",
    timing:"Monday to Sunday 8 am to 8 pm",
    category:"Car",
    address:"Hadapsar , Pune"
}),
new Owner({
    imagePath:'https://esatjournals.net/wp-content/uploads/2019/05/Auto-Repair-Shop0.jpg',
    Shopname:'Car repair3',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lorem felis, rhoncus lobortis nisl in, congue sagittis enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra ligula ultrices dolor malesuada ornare. Mauris ullamcorper malesuada urna in semper. Donec accumsan tincidunt facilisis. Suspendisse nec dolor facilisis, iaculis orci sed, posuere mauris. Donec tempor sollicitudin ligula ac aliquam. Aliquam maximus, magna vel facilisis aliquam, ipsum mi lobortis dui, sit amet placerat neque nulla et augue. Aenean in ligula eu metus porta laoreet sit amet eu ipsum. Nulla facilisi.",
    timing:"Monday to Sunday 8 am to 8 pm",
    category:"Car",
    address:"Hadapsar , Pune"
}),

]

var done = 0;

for(var i=0;i<owner.length;i++){
    owner[i].save((err,result)=>{
        done++;
        if(done===owner.length){
            exit();
        }
    });
}
function exit(){
    mongoose.disconnect()
    console.log("saved!!!!!")
}
