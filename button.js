export class Button {
    constructor(game){
        this.game = game;
        this.width = 25;
        this.height = 25;
        this.x = 0;
        this.y = 0;

        this.spacing = 30;

        this.text = "?";
        this.clicked = false;

        this.image = document.getElementById('letter_button');
    }

    onClick() {
        if (this.clicked) return;

        const letter = this.game.getNextLetter();
        if (letter !== "") {
            this.text = letter;
            this.clicked = true;
        }
    }

    moveButton(x, y){
        this.x = x;
        this.y = y;
        console.log("move");
    }

    update(){
        
    }

    draw(context){
        context.drawImage(this.image, this.x, this.y);

        context.fillStyle = "black";
        context.font = "20px EffraHeavy";
        context.textAlign = "center";
        context.textBaseline = 'middle';
        context.fillText(this.text , this.x + 12.5, this.y + 15);
    }
}
