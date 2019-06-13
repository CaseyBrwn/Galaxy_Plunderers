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
    Starfieldpic.src = './assets/images/starfield2.jpg'
    const SpaceShippic = new Image ();
    SpaceShippic.src = './assets/images/Hunter1.png'
    const alienspic = new Image();
    alienspic.src = './assets/images/alien.png'
    const game = new GameCanvas(canvas, ctx, ProjectileHandler, Plunderers, Barriers, SpaceShip, startscreen, Starfield, Starfieldpic, SpaceShippic, alienspic)
   




    // const animation = () => {
    //     game.draw(10)
    //     window.requestAnimationFrame(animation)
    // }


    startscreen.addEventListener("load", ()=> {Starfieldpic.addEventListener("load", () => {SpaceShippic.addEventListener("load", ()=> {alienspic.addEventListener("load", game.gameStart(), false)}, false)} ,false)}, false)
    




    // animation()

      
})

