
function navbar(){
    return `
       <nav>

    <div id="upper_nav">
        <div id="left">
            <h4>UA | EN</h4>
            <h4>0 800 123 456</h4>    
        </div>
        <div id="right">
            <span><a href="login.html"><i class="fa-solid fa-user"></i></a></span>
            <span><i class="fa-solid fa-scale-unbalanced"></i></span>
            <span><a href="like.html"><i class="fa-solid fa-heart"></i></a></span>
            <span><a href="cart.html"><i class="fa-solid fa-bag-shopping"></i></a></span>
        </div>
    </div> 
    <hr id="hr1">  
    <div id="lower_nav">
        
        <div><h1>Mine Wine</h1></div>
        
        <div id="nav_middle" >
            <h4>RED</h4>
            <h4>WHITE</h4>
            <h4>ROSE</h4>
            <h4>SPARKLING</h4>
            <h4>PROMOTIONS</h4>
            <h4>SETS & GIFTS</h4>
        </div>
        <div>
            <i class="fa-solid fa-magnifying-glass"></i>
            
            <input id="search" type="text" placeholder="START TYPING TO SEARCH ...">
        </div>

    </div>
    <hr id="hr2"> 
        

    </nav>`
}
export default navbar;