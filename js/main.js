const lamps = document.getElementsByClassName("lamp");

function lampMethod(lamp) {
    if ( lamp === 1){
        lamps[0].classList.remove("nul");
        lamps[0].classList.add("red");
        console.log('Red');
    } else if ( lamp === 2 ){
        lamps[1].classList.remove("nul");
        lamps[1].classList.add("yellow");
        console.log('Yellow');
    }else if ( lamp === 3 ){
        lamps[2].classList.remove("nul");
        lamps[2].classList.add("green");
        console.log('Green');
    }else {
        console.log( "It's not working!" )
    
    }
}