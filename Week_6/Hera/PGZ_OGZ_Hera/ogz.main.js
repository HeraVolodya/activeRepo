document.getElementById("ogzResult").onclick = function (){
    let artPostX = Number(document.getElementById("artCoordX").value);
    let artPostY = Number(document.getElementById("artCoordY").value);
    let targetX = Number(document.getElementById("targerCoordX").value);
    let targetY = Number(document.getElementById("targetCoordY").value);

    let dX = targetX - artPostX;
    let dY = targetY - artPostY;
    console.log(`dX = ${dX}  dY = ${dY}`)
    console.log(`котангес ${1/(Math.atan(dY/dX))}`)
    let r = ((Math.atan(Math.sqrt((dY/dX)*(dY/dX)))));
    let target_a;
    console.log(`remd ${r}`)

    if((dX >= 0) && dY >= 0){
    target_a = r;
    }
    else if (dX <= 0 && dY >= 0){
    target_a = (-1 * r) + Math.PI;
    }
    else if (dX <= 0 && dY <= 0){
    target_a = Math.PI + r;
    }
    else if (dX >= 0 && dY <= 0) {
    target_a = (2 * Math.PI) - r
    }

    let D = dX/(Math.cos(target_a));
    console.log(D);
    console.log(`дерекційний кут ${target_a}`);

    function decKut (target_a){
    return (((target_a * 180)/Math.PI)/6);
    };
    console.log(decKut (target_a));
    

    function showTarget_a(classNameA){
        document.querySelector(classNameA).textContent = decKut (target_a);
    }
    function showTarget_D(classNameD){
        document.querySelector(classNameD).textContent = D;
    }
    showTarget_a('.coord_target_a');
    showTarget_D('.coord_target_D');
}
    



// let X1 = 65500;
// let X2 = 66500;
// let Y1 = 71500;
// let Y2 = 72500;

// let dX = X2 - X1;
// let dY = Y2 - Y1;
// let r = Math.atan(dY/dX);
// let target_a;

// if(dX > 0 && dY > 0){
//     target_a = r;
// }
// else if (dX < 0 && dY > 0){
//     target_a = (-1 * r) + 180;
// }
// else if (dX < 0 && dY < 0){
//     target_a = 180 + r;
// }
// else if (dX > 0 && dY < 0) {
//     target_a = (-1 * r) + 360
// }


// function decKut (target_a){
//     return (((target_a * 180)/Math.PI)/6)
// };
// console.log(decKut (target_a));
    
// let d1 = dX/(Math.cos(target_a));
// console.log(d1)