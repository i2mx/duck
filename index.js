function quack(){

    let a = Math.floor(Math.random()*2)

    switch (a) {
        case 0:
            new Audio('duck.mp3').play();
            break;
    
        case 1:
            new Audio('duck2.mp3').play();
            break;
    }
}