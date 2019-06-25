import GameCanvas from './game/game_canvas';
import ProjectileHandler from "./game/projectileHandler";
import Plunderers from './game/plunderers';
import Barriers from "./game/barriers";
import SpaceShip from "./game/spaceship";
import Starfield from './game/starfield';
import Counter from './game/counters';
import PowerUps from './game/powerups';







document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d');
    const startscreen = new Image();
    let soundObject = {}


        
        const Starfieldpic = new Image();
        
        const SpaceShippic = new Image ();
       
        const alienspic = new Image();
        
        const lasersound = document.createElement("audio")
       
        const plundererlaser = document.createElement("audio")
    
        const plundererexplode = document.createElement("audio")
       
        const shipexplode = document.createElement("audio")
        
        const nextlevel = document.createElement("audio")
       

        // soundObject = {
        //     lasersound: lasersound,
        //     plundererlaser: plundererlaser,
        //     plundererexplode: plundererexplode,
        //     shipexplode: shipexplode,
        //     nextlevel: nextlevel
        // }

        
 


    const init = async ()=> {
        startscreen.src = './assets/images/planetexpress.jpg';
        console.log(startscreen)
        Starfieldpic.src = './assets/images/starfield2.jpg' 
        SpaceShippic.src = './assets/images/Hunter1.png'
        alienspic.src = './assets/images/alien.png' 
        lasersound.src = "./assets/sounds/laser1.wav"    
        plundererlaser.src = "./assets/sounds/plunderersfire.wav" 
        plundererexplode.src = "./assets/sounds/pludnererexplode.wav"
        shipexplode.src = "./assets/sounds/shipexplode.wav"
        nextlevel.src = './assets/sounds/thenextlevel.wav'
    }

    let game = null;
    init().then(res=>{
        soundObject = {
            lasersound: lasersound,
            plundererlaser: plundererlaser,
            plundererexplode: plundererexplode,
            shipexplode: shipexplode,
            nextlevel: nextlevel
        }
        game = new GameCanvas(canvas, ctx, ProjectileHandler, Plunderers, Barriers, SpaceShip, startscreen, Starfield, Starfieldpic, SpaceShippic, alienspic, Counter, soundObject, PowerUps);
        setTimeout(()=> game.gameStart(), 1)
    });


    //  = new GameCanvas(canvas, ctx, ProjectileHandler, Plunderers, Barriers, SpaceShip, startscreen, Starfield, Starfieldpic, SpaceShippic, alienspic, Counter, soundObject, PowerUps)
  
    

    // startscreen.addEventListener("load", ()=> {Starfieldpic.addEventListener("load", () => {SpaceShippic.addEventListener("load", ()=> {alienspic.addEventListener("load", () => {game.gameStart()}, false)}, false)} ,false)}, false)
    
   





      
})

