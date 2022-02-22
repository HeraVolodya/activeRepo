//ПГЗ//******************************************************* */

document.getElementById("pgzResult").onclick = function (){
    let postX = Number(document.getElementById("myCoordX").value);
    let postY = Number(document.getElementById("myCoordY").value);
    let post_a = Number(document.getElementById("myA").value);
    let postD = Number(document.getElementById("myD").value);
    

    function decKut (post_a){
        return (((post_a*6) * Math.PI) / 180);
    };

    function coord_target_X(postX,postD){
        return postX + (postD * Math.cos(decKut(post_a)));
    };
    function coord_target_Y(postY,postD){
        return postY + (postD * Math.sin(decKut(post_a)));
    };
    
    function showTargetX(classNameX){
        document.querySelector(classNameX).textContent = coord_target_X(postX,postD); 
    }
    function showTargetY(classNameY){
        document.querySelector(classNameY).textContent = coord_target_Y(postY,postD); 
    }
    let z = coord_target_X(postX,postD);
    
    showTargetX('.coord_target_x');
    showTargetY('.coord_target_y');
}
