import GameCanvas from './game/game_canvas';


document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d');
   
    const game = new GameCanvas(canvas, ctx)

    game.draw(10)
    

})

