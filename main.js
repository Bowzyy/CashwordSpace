import {Button} from './button.js';

window.addEventListener('load', function(){
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');

    canvas.width = 700;
    canvas.height = 500;

    const buttons = [];

    class Game {
        constructor(width, height){
            this.width = width;
            this.height = height;
            
            for (let i = 0; i < 24; i++) {
                    buttons.push(new Button(this));
                
            }      
        }

        update(){

        }

        draw(context){
            for (let i = 0; i < 24; i++) {
                for (let j = 0; j < 4; j++) {
                    for (let k = 0; k < 6; k++) {
                        buttons[i].draw(context, j, k);
                    }
                }
            }  
            
        }
    }

    const game = new Game(canvas.width, canvas.height);
    console.log(game);

    function animate(){
        game.draw(ctx);
        requestAnimationFrame(animate);
    }

    animate();

});