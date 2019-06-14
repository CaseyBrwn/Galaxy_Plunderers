import GameCanvas from './game/game_canvas';
import ProjectileHandler from "./game/projectileHandler";
import Plunderers from './game/plunderers';
import Barriers from "./game/barriers";
import SpaceShip from "./game/spaceship";
import Starfield from './game/starfield';
import Counter from './game/counters';







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

    const lasersound = document.createElement("audio")
    lasersound.src = "./assets/sounds/laser1.wav"
    const plundererlaser = document.createElement("audio")
    plundererlaser.src = "./assets/sounds/plunderersfire.wav"
    const plundererexplode = document.createElement("audio")
    plundererexplode.src = "./assets/sounds/pludnererexplode.wav"
    const shipexplode = document.createElement("audio")
    shipexplode.src = "./assets/sounds/shipexplode.wav"
    const nextlevel = document.createElement("audio")
    nextlevel.src = './assets/sounds/thenextlevel.wav'



    let soundObject = {
        lasersound: lasersound,
        plundererlaser: plundererlaser,
        plundererexplode: plundererexplode,
        shipexplode: shipexplode,
        nextlevel: nextlevel
    }


    const game = new GameCanvas(canvas, ctx, ProjectileHandler, Plunderers, Barriers, SpaceShip, startscreen, Starfield, Starfieldpic, SpaceShippic, alienspic, Counter, soundObject)
  
    

    // startscreen.addEventListener("load", ()=> {Starfieldpic.addEventListener("load", () => {SpaceShippic.addEventListener("load", ()=> {alienspic.addEventListener("load", () => {game.gameStart()}, false)}, false)} ,false)}, false)
    
    setTimeout(()=> {game.gameStart()}, 1000)





      
})

