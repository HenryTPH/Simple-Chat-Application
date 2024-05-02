const BACKGROUND_COLOR = '#231f20'
const SNAKE_COLOR = '#c2c2c2'
const FOOD_COLOR = '#e66916'

const gameScreen = document.getElementById('gameScreen')

let canvas, ctx

const gameState = {
    player: {
        pos: {
            x: 3,
            y: 10
        },
        vel: {
            x: 1,
            y: 0
        },
        snake: [
            {x: 1, y: 10},
            {x: 2, y: 10},
            {x: 3, y: 10}
        ],
    },
    food: {
        x: 7,
        y: 7
    },
    gridsize: 20,
}

function init() {
    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext('2d')
    canvas.width = canvas.height = 600
    ctx.fillStyle = BACKGROUND_COLOR
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    document.addEventListener('keydown', keydown)
}

function keydown(e) {
    console.log(e.keyCode)
}

init()

function paintGame(state) {
    ctx.fillStyle = BACKGROUND_COLOR
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    const food = state.food;
    const gridsize = state.gridsize
    const size = canvas.width / gridsize

    ctx.fillStyle = FOOD_COLOR
    ctx.fillRect(food.x * size, food.y * size, size, size)

    paintPlayer(state.player, size, SNAKE_COLOR)
}

function paintPlayer(player, size, color) {
    const snake = player.snake

    for (let px of snake) {
        ctx.fillStyle = color
        ctx.fillRect(px.x * size, px.y * size, size, size)
    }
}

paintGame(gameState)