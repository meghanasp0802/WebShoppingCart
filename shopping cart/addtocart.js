
const product = [
   {
       id: 0,
       image: 'https://sm.ign.com/t/ign_za/news/s/samsung-in/samsung-introduces-the-galaxy-z-flip-foldable-phone_pv2t.1200.jpg',
       title: 'Z Flip Foldable Mobile',
       price: 120,
   },
   {
       id: 1,
       image: 'https://images.thequint.com/thequint/2019-10/e1dd655f-57f4-4263-9ba3-bb557c5e704f/Screen_Shot_2019_10_28_at_10_30_45_PM.png?auto=format%2Ccompress',
       title: 'Air Pods Pro',
       price: 60,
   },
   {
       id: 2,
       image: 'https://th.bing.com/th/id/OIP.RLLu6auWC3ixfSkf2h0kfQHaGk?rs=1&pid=ImgDetMain',
       title: '250D DSLR Camera',
       price: 230,
   },
   {
       id: 3,
       image: 'https://th.bing.com/th/id/OIP.to_TlBUYvK-3Jokwki905AHaHa?rs=1&pid=ImgDetMain',
       title: 'Head Phones',
       price: 100,
   }
];
const categories = [...new Set(product.map((item)=>
   {return item}))]
   let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
   var {image, title, price} = item;
   return(
       `<div class='box'>
           <div class='img-box'>
               <img class='images' src=${image}></img>
           </div>
       <div class='bottom'>
       <p>${title}</p>
       <h2>$ ${price}.00</h2>`+
       "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
       `</div>
       </div>`
   )
}).join('')

var cart =[];

function addtocart(a){
   cart.push({...categories[a]});
   displaycart();
}
function delElement(a){
   cart.splice(a, 1);
   displaycart();
}

function displaycart(){
   let j = 0, total=0;
   document.getElementById("count").innerHTML=cart.length;
   if(cart.length==0){
       document.getElementById('cartItem').innerHTML = "Your cart is empty";
       document.getElementById("total").innerHTML = "$ "+0+".00";
   }
   else{
       document.getElementById("cartItem").innerHTML = cart.map((items)=>
       {
           var {image, title, price} = items;
           total=total+price;
           document.getElementById("total").innerHTML = "$ "+total+".00";
           return(
               `<div class='cart-item'>
               <div class='row-img'>
                   <img class='rowimg' src=${image}>
               </div>
               <p style='font-size:12px;'>${title}</p>
               <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
               "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
           );
       }).join('');
   }

   
}
