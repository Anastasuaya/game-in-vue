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
          idle: {from: 0, to: 4, loop: true},
          look: {from: 14, to: 27, loop: true},
          run: { from: 28 , to: 35 , loop: true},
          play: {from: 42, to: 52, loop: true},
          fright: { from: 56, to: 60, loop: false},
          sleep: { from: 70, to: 75, loop: true},
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

// --- EXPLOSION ---
k.loadSprite('purpleEffect', 'sprites/Effect_purple.png', {
  sliceX: 6,
  sliceY: 24,
  anims: {
    explosion: {from: 30, to: 35, loop: false},
    spawn: {from: 78 , to: 83, loop: false}
  }
})
k.loadSprite('orangeEffect', 'sprites/Effect_orange.png', {
  sliceX: 6,
  sliceY: 24,
  anims: {
    explosion: {from: 15, to: 16, loop: true}
  }
})

}
