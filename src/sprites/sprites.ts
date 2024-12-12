import { KaboomCtx } from 'kaboom';
export const getSprites = (k:KaboomCtx)=> {


    
  k.loadSprite('cat', 'sprites/cat_sprite.png', {
    sliceX: 4,
    sliceY: 9,
    anims: {
        idle: {from: 0, to: 3, loop: false },
        Forward: {from: 4, to: 7, loop: true  },
        SideL: {from: 8, to: 11, loop: true  },
        Back: {from: 12, to: 15, loop: true  },
        SideR: {from: 16, to: 19, loop: true  },
        fall: {from: 20, to: 23, loop: false},
        idleBack: { from: 24, to: 27, loop: false},
        idleR: {from: 28, to: 31, loop: false },
        idleL: {from: 32, to: 35, loop: false },
  
    }
  })
  
//   k.loadSprite('cat', 'sprites/catWait.png',{
//     sliceX: 5,
//     anims: {
//         Wait: {from: 0, to: 4, loop: false}
//     }
//   }) 
  // --- НПС ---
//   --- FOX---
  k.loadSprite('fox', 'sprites/Fox.png', {
      sliceX: 14,
      sliceY: 7,
      anims: {
          idle: {from: 0, to: 4, loop: false},
          look: {from: 5, to: 18, loop: true},
          run: { from: 19 , to: 26 , loop: true},
      }
  })
//   --- BAT ---
  k.loadSprite('bat','sprites/Bat.png', {
      sliceX: 5,
      sliceY: 3,
      anims: {
          walk: {from: 5, to: 9, loop: true }
      }
  })
  
//   --- COBRA ---
  k.loadSprite('cobra', 'sprites/Cobra.png', {
      sliceX: 8,
      sliceY: 5,
      anims: {
          idle: {from: 0, to: 7, loop: true },
          walk: {from: 8, to: 15, loop: true},
          attack: {from: 16, to:21, loop: false},
      }
  })
//   --- DRAGON ---
  k.loadSprite('dragon', 'sprites/Dragon.png', {
      sliceX: 8,
      sliceY: 9,
      anims: {
          idle: { from: 0, to: 6, loop: true},
          walk: {from: 8, to: 14, loop: true},
      }
  })
}
