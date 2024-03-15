// class Character {
//     constructor() {
//         this.coordonnees = createVector(100, 100); 
//         this.speed = 5;
//     }

//     draw() {
//         fill(125, 145, 43); 
//         translate(this.coordonnees.x, this.coordonnees.y)
//         ellipse(50, 500, 30, 30);   
//     }

//     update(){
//         let xSpeed = 0;
//         let ySpeed = 0;

//         if (keyIsDown(90)) {
//             ySpeed = -2;
//         }

//         if (keyIsDown(83)) {
//             ySpeed = 2;
//         }

//         if (keyIsDown(68)) {
//             xSpeed = 2;
//         }

//         if (keyIsDown(81)) {
//             xSpeed = -2;
//         }

//         this.coordonnees.add(xSpeed, ySpeed);
//     }

    
// }

let characterImage;

class Character {
    constructor() {
        this.coordonnees = createVector(100, 100); 
        this.speed = 5;
    }

    draw() {
        fill(125, 145, 43); 
        //translate(this.coordonnees.x, this.coordonnees.y)
        image(characterImage, this.coordonnees.x, this.coordonnees.y, 50, 50);
    }

    update(){
        let xSpeed = 0;
        let ySpeed = 0;

        if (keyIsDown(90)) {
            ySpeed = -2;
        }

        if (keyIsDown(83)) {
            ySpeed = 2;
        }

        if (keyIsDown(68)) {
            xSpeed = 2;
        }

        if (keyIsDown(81)) {
            xSpeed = -2;
        }

        this.coordonnees.add(xSpeed, ySpeed);

    }    
}

function preload() {
    characterImage = loadImage('../img/ninja.png');
}



