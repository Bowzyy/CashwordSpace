import {Button} from './button.js';
import { MyLetters } from './myletters.js';

window.addEventListener('load', function(){
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');

    canvas.width = 700;
    canvas.height = 500;


    // mouse click
    canvas.addEventListener('click', (e) => {
        const { x, y } = getMousePos(e);

        game.buttons.forEach(button => {
            if (
                x >= button.x &&
                x <= button.x + button.width &&
                y >= button.y &&
                y <= button.y + button.height
            ) {
                console.log('clicked', button);
                button.onClick();

                if(game.letters_left < 18){
                    game.myletters[parseInt((game.letters_left) * -1 ) + 17].updateLetter();
                    game.letters_left--;
                }

                game.letters.shift();
            }
        });

    });

    function getMousePos(e) {
        const rect = canvas.getBoundingClientRect();

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        return { x: mouseX, y: mouseY };
    }

    class Game {
        constructor(width, height){
            this.width = width;
            this.height = height;

            this.buttons = [];
            this.letters = ["F", "R", "O", "M", "E"];
            
            // set positions of buttongs
            for (let x = 0; x < 4; x++) {
                for (let y = 0; y < 6; y++) {
                    const button = new Button(this);
                    button.x = x * button.spacing + 80;
                    button.y = y * button.spacing + 150;
                    this.buttons.push(button);       
                }
            }

            this.myletters = [];
            this.letters_left = 17;

            // set postion of myletters
            for (let x = 0; x < 18; x++){
                const myletter = new MyLetters(this);
                myletter.x = x * myletter.spacing + 100;
                this.myletters.push(myletter);
            }

        }

        update(){ 
            
        }

        draw(context){
            // letter grid
            this.buttons.forEach(button => button.draw(context));
            this.myletters.forEach(myletter => myletter.draw(context));  
        }

        getNextLetter() {
            if(this.letters.length > 0){
                return this.letters[0];
            }
            else {
                return "";
            }
        }
    }

    const game = new Game(canvas.width, canvas.height);
    console.log(game);

    function animate(){
        game.update();
        game.draw(ctx);
        requestAnimationFrame(animate);
    }

    animate();

});