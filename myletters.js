export class MyLetters {
    constructor(game){
        this.game = game;
        this.width = 25;
        this.height = 25;
        this.x = 0;
        this.y = 400;

        this.spacing = 26;

        this.text = "";

        this.image = document.getElementById('letter_button');
    }

    updateLetter(){
        const letter = this.game.getNextLetter();
        this.text = letter;
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