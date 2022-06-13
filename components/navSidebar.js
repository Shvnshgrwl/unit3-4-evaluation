function navbar(){
    return`<nav id="navbar">
        <div id="home"><h2><a href="index.html"> NewsApp </a></h2></div>
      
        <div><input type="text" id="search_input" placeholder="Search for news">
        </div>


    </nav>`;
    
    
}
function sidebar(){
    return  ` <buttton id="in">India</buttton>
    <buttton id="ch">China</buttton>
    <buttton id="us">USA</buttton>
    <buttton id="uk">UK</buttton>
    <buttton id="nz">Newzeland</buttton>`;
}
export {navbar,sidebar};