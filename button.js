export class Button {
    constructor(game){
        this.game = game;
        this.width = 25;
        this.height = 25;
        this.x = 100;
        this.y = 100;

        this.spacing = 35;

        this.text = "?";
    }

    update(){

    }

    draw(context, j, k){
        context.fillStyle = "red";
        context.fillRect(this.x + (j * this.spacing), this.y + (k * this.spacing), this.width, this.height);
    }
}
