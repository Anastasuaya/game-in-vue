import { KaboomCtx } from 'kaboom';
export const getLevels = (k:KaboomCtx)=>{

    const levels = [
      [
    "_cttttttttttd",
    "l           r",
    "l           r",
    "l           r",
    "l           r",
    "l           r",
    "l           r",
    "l           r",
    "l     rwwwwwb",
    "l     r",
    "l     tttttttttttttd",
    "l                  r",
    "l                  r",
    "l                  r",
    "l                  r",
    "l            g     r",
    "l                  r",
    "l                  r",
    "l                  r",
    "l                  r",
    "awwwwwwwwwwwwwwwwwwb",  
    ],
    [            
    "_cttttttttttttttttttttttd",
    "l                       r",
    "l                       r",
    "l                       r",
    "l                       r",
    "l                       r",
    "l                       tttttd",
    "l            cttttd          r",
    "l            r___l           r",
    "l            r___l           r",
    "l            r___l     h     r",
    "l            r___l           r",
    "l            r___l           r",
    "l            r___l       rwwwb",
    "l            r___l       r",
    "l            r___l       r",
    "awwwwwwwwwwwwb___awwwwwwwb",
    ],
    [
    "_ctttttttttttttttttd_____cttttttttd",            
    "l                  r____l         r",
    "l                  rtttttt        r",
    "l                                 r",
    "l                                 r",
    "l                                 r",
    "l                  rwwwwl         r",
    "l                  r____l         r",
    "l                  r____l         r",
    "l                  r____l         r",
    "awwwwwww    wwwwwwwb____l         r",
    "|______l    r___________l         r",
    "|______l    r___________l         r",
    "|______l    r___________l         r",
    "|______l    r___________awwwwwwwwwb",
    "|____cttt   rtttd________________|",
    "|___l           r",
    "|___l           r",
    "|___l           r",
    "|___l           r",
    "|___l           r",
    "|___l           r",
    "|___l      j    r",
    "|___l           r",
    "|___l           r",
    "|___awwwwwwwwwwwb",
    ],
    [
    "_ctttttttttd",
    "l          r",
    "l          r",
    "l          r____ctttttttttd",
    "l          r___l          r",
    "l          r___l          r___cttttttd",
    "l          r___l          r__l       r",
    "l          r___l          r__l       r",
    "l          wwwwwb         r__l    o  r",
    "l                         r__l       r",
    "l                         r__l       r",
    "l                       cwb__awwd  cwb",
    "l          cwwwwwd      r|____|l   r",
    "l          r___|l       r_____|l   r",
    "l          r___|l       ttd___|l   r",
    "l          r___|l         r___|l   r",
    "l          r___|l         r___|l   r",
    "l          r___|l         wwwwwwb  r",
    "l          r___|l                  r",
    "l          r___|l                  r",
    "awwwwwwwwwwb___|awwwwwwwwwwwwwwwwwwb",
    ],
    ]
    const tilesForMap = {
      tileHeight: 32,
      tileWidth: 32,
      pos: k.vec2(64, 64),
      tiles: {
          " ": () => [
              k.sprite('floor_stone', {frame: ~~k.rand(4)}),
              k.pos(70,70),
              k.z(-1)
      ],
      't': () => [
              k.sprite('wall-top'),
              k.pos(70,71),
              k.area(),
              k.body({isStatic:true})
          ],
          'd': () => [
              k.sprite('wall-topLeft'),
              k.pos(70,70),
          ],
          'c': () => [
              k.sprite('wall-topRight'),
              k.pos(70,70),
          ],
          'l': () => [
              k.sprite('wall-Left'),
              k.pos(100,70),
              k.area(),
              k.body({isStatic:true})
          ],
          'r': () => [
              k.sprite('wall-Right'),
              k.pos(70,70),
              k.area(),
              k.body({isStatic:true})
          ],
          'w': () => [
              k.sprite('wall-Bottom'),
              k.pos(70,69),
              k.area(),
              k.body({isStatic:true})
          ],
          'b': () => [
              k.sprite('wall-BotR'),
              k.pos(73,70),
              k.area(),
              k.body({isStatic:true})
          ],
          'a': () => [
              k.sprite('wall-BotL'),
              k.pos(100,70),
              k.area(),
              k.body({isStatic:true})
          ],
          'g': () => [
              k.sprite('ladder_lvlTwo'),
              k.pos(60, 70),
              k.area(),
              'ladder_lvlTwo'
          ],
          'h': () => [
              k.sprite('ladder_lvlTwo'),
              k.pos(60, 70),
              k.area(),
              'ladder_lvlThree'
          ],
          'j': () => [
              k.sprite('ladder_lvlTwo'),
              k.pos(60, 70),
              k.area(),
              'ladder_lvlFour'
          ],
          'o': () => [
              k.sprite('ladder_lvlTwo'),
              k.pos(60, 70),
              k.area(),
              'ladder_lvlFive'
          ],
          'e': () => [
          k.sprite('kid'),
          k.pos(620,30),
          k.scale(1.2),
          k.area(),
          k.body({isStatic:true}),
          ],
      },
    
    }
    return {levels, tilesForMap}
}

