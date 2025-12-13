export class Button {
    constructor(game){
        this.game = game;
        this.width = 25;
        this.height = 25;
        this.x = 0;
        this.y = 0;

        this.spacing = 35;

        this.text = "?";
        this.clicked = false;
    }

    onClick() {
        if (this.clicked) return;

        const letter = this.game.getNextLetter();
        if (letter !== "") {
            this.text = letter;
            this.clicked = true;
        }
    }

    update(){
        
    }

    draw(context){
        context.fillStyle = "yellow";
        context.fillRect(this.x, this.y, this.width, this.height);

        context.fillStyle = "black";
        context.font = "20px EffraHeavy";
        context.textAlign = "center";
        context.textBaseline = 'middle';
        context.fillText(this.text , this.x + 12.5, this.y + 15);
    }
}
