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

    ratingDiv.append(rating,review,stock,heart,Num);
    side.append(ratingDiv,line);
    container.append(imgDiv,side)
    product.append(topBar,container);
