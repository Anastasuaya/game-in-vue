import { KaboomCtx } from 'kaboom';
export const getTiles = (k:KaboomCtx)=>{



k.loadSpriteAtlas('objects/Objects_blood.png', {
  'kid': {
      'x': 1,
      'y': 1,
      'width': 25,
      'height': 55,
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

})
}