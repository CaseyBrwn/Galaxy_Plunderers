import GameCanvas from './game/game_canvas';
import ProjectileHandler from "./game/projectileHandler";
import Plunderers from './game/plunderers';
import Barriers from "./game/barriers";
import SpaceShip from "./game/spaceship";
import Starfield from './game/starfield';







document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d');
    const startscreen = new Image();
    startscreen.src = './assets/images/planetexpress.jpg'
    const Starfieldpic = new Image();
    Starfieldpic.src = './assets/images/starfield.jpg'
    const game = new GameCanvas(canvas, ctx, ProjectileHandler, Plunderers, Barriers, SpaceShip, startscreen, Starfield, Starfieldpic)
   




    // const animation = () => {
    //     game.draw(10)
    //     window.requestAnimationFrame(animation)
    // }

  game.gameStart()
    




    // animation()

      
})

