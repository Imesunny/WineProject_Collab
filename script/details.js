var details=JSON.parse(localStorage.getItem("details"));
console.log(details);
var product=document.querySelector("#Details");
product.innerHTML="";

    var topBar=document.createElement("div");
    topBar.className="topBar";
    var Home=document.createElement("h5");
    var cata=document.createElement("h5");
    var wine=document.createElement("h5");
    var Name=document.createElement("h5");
    Home.textContent="Home > ";
    cata.textContent="Catalog > ";
    wine.textContent=details.category+" > ";
    Name.textContent=details.name;
    topBar.append(Home,cata,wine,Name);

    var bigName=document.createElement("h2");
    bigName.setAttribute("class","bname");
    bigName.textContent=details.name;

    var container=document.createElement("div");
    container.setAttribute("id","cont");
    var imgDiv=document.createElement("div");
    imgDiv.setAttribute("class","imgDiv");
    var Wimg=document.createElement("img");
    Wimg.src=details.img_url;

    var smallImg=document.createElement("div");
    smallImg.setAttribute("class","smallImg");
    var Simg=document.createElement("img");
    Simg.src="./img/wine1.jpg";
    var Simg2=document.createElement("img");
    var Simg3=document.createElement("img");
    var Simg4=document.createElement("img");
    Simg2.src="./img/wine2.jpg";
    Simg3.src="./img/wine3.jpg";
    Simg4.src="./img/wine4.jpg";
    smallImg.append(Simg,Simg2,Simg3,Simg4);
    imgDiv.append(Wimg,smallImg);
    
    var side=document.createElement("div");
    side.setAttribute("id","side");
    var ratingDiv=document.createElement("div");
    ratingDiv.setAttribute("class","ratingDiv");
    var rating=document.createElement("span");
    rating.textContent="★ "+details.rating;
    var review=document.createElement("span");
    review.textContent="57 reviews";
    var stock=document.createElement("span");
    stock.textContent="In stock";
    var heart=document.createElement("span");
    heart.setAttribute("class","heart");
    heart.textContent="🤍";
    heart.addEventListener("click",function(){
        if (heart.textContent === "🤍") {
            heart.textContent = "❤️"; // Change the heart emoji
          } else {
            heart.textContent = "🤍"; // Change it back to original
          }
    })
    var Num=document.createElement("p");
    Num.textContent="Product code: 12457"
    var line=document.createElement("hr");

    var detailsDiv=document.createElement("div");
    detailsDiv.setAttribute("class","detilsDiv");
    var inner=document.createElement("div");
    var color=document.createElement("p");
    color.textContent="Color: ";
    var wineE=document.createElement("p");
    wineE.textContent=details.category;
    inner.append(color,wineE);
    var newLine=document.createElement("hr");
    var newLine2=document.createElement("hr");
    var newLine3=document.createElement("hr");
    var newLine4=document.createElement("hr");
    var newLine5=document.createElement("hr");


    newLine.setAttribute("id","line");
    var inner1=document.createElement("div");
    var Type=document.createElement("p");
    Type.textContent="Type: ";
    var type1=document.createElement("p");
    type1.textContent="Dry";
    inner1.append(Type,type1);
    
    var inner2=document.createElement("div");
    var alcohol=document.createElement("p");
    alcohol.textContent="Alcohol: ";
    var alcohol1=document.createElement("p");
    alcohol1.textContent="13.5%";
    inner2.append(alcohol,alcohol1);
    
    var inner3=document.createElement("div");
    var country=document.createElement("p");
    country.textContent="Country: ";
    var country1=document.createElement("p");
    country1.textContent=details.region;
    inner3.append(country,country1);

    var MoreDetails=document.createElement("div");
    MoreDetails.setAttribute("class","moreDetails");
    var desc=document.createElement("p");
    desc.textContent="A mix of red and blue fruit thc nose unfolds with distinctive layers of violets. spice notes, and the fresh, haunting quality of an evergreen forest";
    var map=document.createElement("img");
    map.src="./img/map.png";
    MoreDetails.append(desc,map);
    

    var button1=document.createElement("button");
    button1.setAttribute("id","button1");
    var button2=document.createElement("button");
    button2.setAttribute("id","button2");
    button1.textContent="0,75 L"
    button2.textContent="Case of 6 bottles";
    button1.style.borderColor="gray";
    button2.style.borderColor="gray";
    button1.addEventListener("click",function(){
      if(button1.style.borderColor="gray"){
      button1.style.borderColor="green";
      button1.style.color="green";
      }
      else{
        button1.style.borderColor="gray";
        button1.style.color="gray";
      }
    })
    button2.addEventListener('click',function() {
if(button2.style.borderColor="gray"){
        button2.style.borderColor="green";
        button2.style.color="green";
      }
      else{
        button2.style.borderColor="gray";
        button2.style.color="gray";
      }
      });

      var priceDiv=document.createElement("div");
      priceDiv.setAttribute("class","priceDiv");
      var price=document.createElement("h2");
      price.textContent="₹ "+details.price;
      var cart=document.createElement("button");
      cart.setAttribute("class","cart");
      cart.textContent='Add to Cart';
      var Quick=document.createElement("button");
      Quick.setAttribute("id","Quick");
      Quick.textContent="Quick order";
      priceDiv.append(price,cart,Quick);

      cart.addEventListener("click",function(){
        var kart = JSON.parse(localStorage.getItem("cart")) || [];
  kart.push(details);
  localStorage.setItem("cart", JSON.stringify(kart));
  
  const cartPopup = document.createElement("div");
  cartPopup.setAttribute("class", "cart-popup");

  const popupContent = document.createElement("div");

  const popupHeading = document.createElement("h2");
  popupHeading.textContent = "Added to Cart Successfully";

  const popupButton = document.createElement("button");
  popupButton.textContent = "Close";
  popupButton.addEventListener("click", () => {
    cartPopup.classList.remove("active");
  });

  popupContent.append(popupHeading, popupButton);
  cartPopup.append(popupContent);
  document.body.appendChild(cartPopup);

  cartPopup.classList.add("active");
      })
    
      var Divdiv=document.createElement("div");
      Divdiv.setAttribute("class","Divdiv");
     var deliveryDiv=document.createElement("div");
     deliveryDiv.setAttribute("class","deliveryDiv");
     var delivery=document.createElement("img");
     delivery.src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/trust_icon_free_shipping_81px._CB630870460_.png";
     var delivery1=document.createElement("p");
     delivery1.textContent="Free Delivery";
     deliveryDiv.append(delivery,delivery1);

     var coinDiv=document.createElement("div");
     var coinLogo=document.createElement("img");
     coinLogo.setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgHcaVLWr1861HUjZGI_lske8h3dGAEPwn-yqLBiQ&s");
     var coin=document.createElement("p");
     coin.textContent="180 coins";
     coinDiv.append(coinLogo,coin);

     var bottleDiv=document.createElement("div");
     var bottleImg=document.createElement("img");
     bottleImg.setAttribute("src","https://static.vecteezy.com/system/resources/thumbnails/007/634/442/small/bottle-logo-icon-design-template-free-vector.jpg");
     var bottle=document.createElement("p");
     bottle.textContent="Top Brand";
     bottleDiv.append(bottleImg,bottle);

     var oneDiv=document.createElement("div");
     var one=document.createElement("img");
     one.src="https://media.istockphoto.com/id/1375716890/vector/same-day-delivery-icon-vector-for-graphic-design-logo-website-social-media-mobile-app-ui.jpg?s=612x612&w=0&k=20&c=f0tCmdUgj9Fq0pC1Ni9V6v6Jp0LV0UdrKXSUOUd-0gs=";
     var one1=document.createElement("p");
     one1.textContent="One day delivery";
     oneDiv.append(one,one1);

     var review=document.createElement("img");
     review.setAttribute("class","review");
     review.src="./img/review.png";
     

     var rate=document.createElement("img");
     rate.setAttribute("class","rate");
     rate.src="./img/rate.png";


Divdiv.append(deliveryDiv,coinDiv,bottleDiv,oneDiv);
    detailsDiv.append(inner,newLine,inner1,newLine2,inner2,newLine3,inner3)
    ratingDiv.append(rating,review,stock,heart,Num);
    side.append(ratingDiv,line,detailsDiv,MoreDetails,button1,button2,newLine4,priceDiv,newLine5,Divdiv);
    container.append(imgDiv,side)
    product.append(topBar,bigName,container,review,rate);

