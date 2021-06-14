const BOARD = `
800010000100001000010008
000000000000001000010000
100100001000000000000000
000011111110011100011001
100010001000010100001008
100010001000010100001001
000000000000000000000000
800000100000000000100008
`
const board = BOARD.trim().split("\n").map(line => line.split(""))

const game = document.querySelector(".game");

console.log(board);
const frag = document.createDocumentFragment();
board.forEach(row => {
    row.forEach(item => {
        const div = document.createElement("div");
        div.classList.add("square")
        const modifier = item === "8" ? "candy" : === "1" ? "wall" : "dot";
        div.classList.add("square", "modifier")
        frag.append(div);
    })
})
game.append(frag);