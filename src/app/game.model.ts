export class GameOfLife {

    private board = [];

    constructor(private turns: number, private length: number, private height: number) {
        for (var i = 0; i < height; i++) {
            let array: number[] = [];
            this.board.push(array);
            for (var j = 0; j < length; j++) {
                this.board[i].push(Math.floor(Math.random() * 2));
            }
        }
        // console.table(this.board);
    }

    evaluateCell(row: number, col: number) {
        let currentState = this.board[row][col];
        let liveCells = 0;

        for (var i = row - 1; i <= row + 1; i++) {
            for (var j = col - 1; j <= col + 1; j++) {
                if (i >= 0 && i <= this.height-1 && j >= 0 && j <= this.length-1 && !(i === row && j === col)) {
                    liveCells += this.board[i][j];
                }
            }
        }

        if (liveCells === 0 || liveCells === 1 || liveCells > 3) {
            return 0;
        }
        else if (liveCells === 2) {
            return (currentState && 1);
        }
        else if(liveCells === 3){
            return 1;
        }
    }

    play() {
        for (var count = 0; count < this.turns; count++) {

            let tempBoard = [];
            
            for(var i=0;i<this.height;i++){
            let array: number[] = [];
            tempBoard.push(array);                
                for(var j=0;j<this.length;j++){
                    tempBoard[i].push( this.evaluateCell(i, j) );
                }
            }

            this.board = tempBoard;
        }
        // console.table(this.board);
        return this.board;
    }

    getBoard(){
        return this.board;
    }


}