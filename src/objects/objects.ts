import { KaboomCtx } from 'kaboom';
export const getTiles = (k:KaboomCtx)=>{



k.loadSpriteAtlas('objects/Objects_blood.png', {
  'kid': {
      'x': 1,
      'y': 10,
      'width': 25,
      'height': 48,
      // sliceX: 1,
      // sliceY: 1
  },
  'skull': {
      'x': 5,
      'y': 85,
      'width': 26,
      'height': 25,

  },
})
// --- ТАЙЛЫ ДЛЯ КАРТЫ ---
k.loadSpriteAtlas('map/base_tileset.png', {
  'ladder': {
     'x': 290,
     'y': 3,
     'width': 96,
     'height': 96, 
  //    sliceX: 12,
  //    sliceY: 9
  },
  'ladder_lvlTwo': {
     'x': 290,
     'y': 95,
     'width': 96,
     'height': 96, 
  //    sliceX: 12,
  //    sliceY: 9
  },
  'floor': {
     'x': 9,
     'y': 3,
     'width': 288,
     'height': 96, 
     sliceX: 9,
     sliceY: 3,
     
  },
  'floor_stone': {
      'x': 25,
      'y': 135,
      'width': 200,
     'height': 200, 
     sliceX: 4,
     sliceY: 6,
  },
  'wall-top': {
     'x': 60,
     'y': 194,
     'width': 32,
     'height': 32, 
  },
  'wall-topLeft': {
      'x': 95,
     'y': 194,
     'width': 32,
     'height': 32, 
  },
  'wall-topRight': {
      'x': 5,
     'y': 194,
     'width': 32,
     'height': 32, 
  },
  'wall-Left': {
      'x': 5,
     'y': 200,
     'width': 32,
     'height': 32, 
  },
  'wall-Right': {
      'x': 96,
     'y': 209,
     'width': 32,
     'height': 32, 
  },
  'wall-Bottom': {
      'x': 25,
     'y': 290,
     'width': 64,
     'height': 32, 
  },
  'wall-BotR': {
      'x': 100,
     'y': 290,
     'width': 32,
     'height': 32, 
  },
  'wall-BotL': {
      'x': 1,
     'y': 290,
     'width': 32,
     'height': 32, 
  },
  'obstacle': {
      'x': 160,
      'y': 240,
      'width': 125,
      'height': 32, 
  },
  'obstacle1': {
   'x': 160,
   'y': 240,
   'width': 90,
   'height': 32, 
},
})
k.loadSpriteAtlas('map/Ground.png', {
'ground': {
   'x': 60,
   'y': 100,
   'width': 32,
   'height': 32, 
},
'ground_bot': {
   'x': 60,
   'y': 110,
   'width': 32,
   'height': 32, 
},
'wall_ground': {
   'x': 128,
   'y': 95,
   'width': 32,
   'height': 32, 
},
})
k.loadSpriteAtlas('map/Grass.png', {
   'grass': {
      'x': 60,
      'y': 90,
      'width': 32,
      'height': 32, 
   },
   'cobble': {
      'x': 80,
      'y': 150,
      'width': 32,
      'height': 32, 
   }
   })
   

k.loadSprite('lava','objects/lava.png', {
   sliceX:4,
   sliceY:1,
   anims:{
      boil:{ from: 0, to: 3, loop: true}
   }
})


k.loadSpriteAtlas('objects/Dungeon_Tileset.png', {
   'thorns': {
      'x': 160,
      'y':480,
      'width':32,
      'height':37,
      'sliceX': 1,
      'sliceY': 1,
      anims: {
         movement: {from: 5 , to: 3, speed: 3, loop: true},
      }, 
   },
   'thorns1': {
      'x': 130,
      'y':480,
      'width':32,
      'height':37,
   },
   'thorns2': {
      'x': 100,
      'y':480,
      'width':32,
      'height':37,
   }
})

k.loadSpriteAtlas('objects/Dungeon_Collectables.png', {
   'healthPotion': {
      'x': 30,
      'y': 150,
      'width':16,
      'height':32,
   }
})

// k.loadSpriteAtlas('objects/Dungeon_Tileset.png', {
//    'thorns': {
//       'x': 160,
//       'y':480,
//       'width':32,
//       'height':37,
//       'sliceX': 1,
//       'sliceY': 1,
//       anims: {
//          movement: {from: 5 , to: 3, speed: 3, loop: true},
//       }, 
//    }
// })

k.loadSpriteAtlas('objects/Objects.png', {
   'children': {
      'x': 200,
      'y': 370,
      'sliceX': 1,
      'sliceY': 1,
      'width':64,
      'height':64,
   },
   'three': {
      'x': 0,
      'y': 224,
      'width': 64,
      'height': 80,
      'sliceX': 1,
      'sliceY': 1,
   },
   'kid': {
      'x': 340,
      'y': 460,
      'sliceX': 1,
      'sliceY': 1,
      'width':32,
      'height':32,
   }
})

k.loadSpriteAtlas('map/Props.png', {
   'statue': {
      'x': 445,
      'y': 20,
      'width':64,
      'height':75,
   },
   'coffin': {
      'x': 210,
      'y': 240,
      'width':64,
      'height':40,
   },
})
}