<template>

</template>

<script setup lang="ts">

 
// k.addLevel([
// "            ",
// "            ",
// "            ",
// "            ",
// "            ",
// "            ",
// "            ",
// "      ",
// "      ",
// "      ",
// "                   ",
// "                   ",
// "                   ",
// "                   ",
// "                   ",
// "                   ",
// "                   ",
// "                   ",
// "                   ",
// ], {
//     tileHeight: 32,
//     tileWidth: 32,
//     tiles: {
//         " ": () => [
//             k.sprite('floor', {frame: ~~k.rand(18)}),
//             k.pos(600,100),
//             // k.area(),
//             // k.scale(1.5)
//         ]
//     }
// })

// const lvlOne = k.addLevel(
//     [
// "            ",
// "ctttttttttttd",
// "le          r",
// "l           r",
// "l           r",
// "l           r",
// "l         j r",
// "l           r",
// "l           r",
// "lppppprwwwwwwb",
// "l     r",
// "l     tttttttttttttd",
// "l                  r",
// "l            j     r",
// "l                  r",
// "l                  r",
// "l            g     r",
// "l                  r",
// "l          j       r",
// "l                  r",
// "l j                r",
// " awwwwwwwwwwwwwwwwwwb",  
//     ],

//     {
//     tileHeight: 32,
//     tileWidth: 32,
//     tiles: {
//         't': () => [
//             k.sprite('wall-top'),
//             k.pos(600,40),
//             k.area(),
//             k.body({isStatic:true})
//         ],
//         'd': () => [
//             k.sprite('wall-topLeft'),
//             k.pos(600,40),
//         ],
//         'c': () => [
//             k.sprite('wall-topRight'),
//             k.pos(600,40),
//         ],
//         'l': () => [
//             k.sprite('wall-Left'),
//             k.pos(600,40),
//             k.area(),
//             k.body({isStatic:true})
//         ],
//         'r': () => [
//             k.sprite('wall-Right'),
//             k.pos(600,40),
//             k.area(),
//             k.body({isStatic:true})
//         ],
//         'w': () => [
//             k.sprite('wall-Bottom'),
//             k.pos(568,36),
//             k.area(),
//             k.body({isStatic:true})
//         ],
//         'b': () => [
//             k.sprite('wall-BotR'),
//             k.pos(570,36),
//             k.area(),
//             k.body({isStatic:true})
//         ],
//         'a': () => [
//             k.sprite('wall-BotL'),
//             k.pos(568,36),
//             k.area(),
//             k.body({isStatic:true})
//         ],
//         'g': () => [
//             k.sprite('ladder'),
//             k.pos(650, 30)
//         ],
//         'e': () => [
//         k.sprite('kid'),
//         k.pos(620,30),
//         k.scale(1.2),
//         k.area(),
//         k.body({isStatic:true}),
//         ],
//         'j': () => [
//         k.sprite('skull'),
//         k.pos(620,30),
//         k.scale(1.2),
//         k.area(),
//         k.body({isStatic:true})
//         ],
//     }
// }
// )

// k.addLevel([
// "_________________________",
// "|                       |",
// "|                       |",
// "|                       |",
// "|                       |",
// "|                       |",
// "|                       |",
// "|            |___|            ",
// "|            |___|            ",
// "|            |___|            ",
// "|            |___|            ",
// "|            |___|            ",
// "|            |___|            ",
// "|            |___|       ",
// "|            |___|       ",
// "|            |___|       ",

// ], {
//     tileHeight: 32,
//     tileWidth: 32,
//     tiles: {
//         " ": () => [
//             k.sprite('floor_stone', {frame: ~~k.rand(4)}),

//             k.pos(600,100),
//             // k.area(),
//             // k.scale(1.5)
//         ]
//     }
// })


// const lvlTwo = k.addLevel(
//     [
            
// "                         ",
// "cttttttttttttttttttttttttd",
// "l                       r",
// "l                       r",
// "l                       r",
// "l                       r",
// "l                       r",
// "l                       atttttd",
// "l            cttttd          r",
// "l            r   l           r",
// "l            r   l           r",
// "l            r   l     g     r",
// "l            r   l           r",
// "l            r   l           r",
// "l            r   l       rwwwb",
// "l            r   l       r",
// "l            r   l       r",
// "awwwwwwwwwwwwb   awwwwwwwb",
//     ],
//  {
//     tileHeight: 32,
//     tileWidth: 32,
//     tiles: {
//         't': () => [
//             k.sprite('wall-top'),
//             k.pos(605,70),
//             k.area(),
//             k.body({isStatic:true})
//         ],
//         'd': () => [
//             k.sprite('wall-topLeft'),
//             k.pos(585,70),
//         ],
//         'c': () => [
//             k.sprite('wall-topRight'),
//             k.pos(605,70),
//         ],
//         'l': () => [
//             k.sprite('wall-Left'),
//             k.pos(605,70),
//             k.area(),
//             k.body({isStatic:true})
//         ],
//         'r': () => [
//             k.sprite('wall-Right'),
//             k.pos(615,70),
//             k.area(),
//             k.body({isStatic:true})
//         ],
//         'w': () => [
//             k.sprite('wall-Bottom'),
//             k.pos(600,69),
//             k.area(),
//             k.body({isStatic:true})
//         ],
//         'b': () => [
//             k.sprite('wall-BotR'),
//             k.pos(620,70),
//             k.area(),
//             k.body({isStatic:true})
//         ],
//         'a': () => [
//             k.sprite('wall-BotL'),
//             k.pos(605,70),
//             k.area(),
//             k.body({isStatic:true})
//         ],
//         'g': () => [
//             k.sprite('ladder_lvlTwo'),
//             k.pos(650, 30)
//         ],
//         'e': () => [
//         k.sprite('kid'),
//         k.pos(620,30),
//         k.scale(1.2),
//         k.area(),
//         k.body({isStatic:true}),
//         ],
//         'j': () => [
//         k.sprite('skull'),
//         k.pos(620,30),
//         k.scale(1.2),
//         k.area(),
//         k.body({isStatic:true})
//         ],
//     }
//  }
//  )

// k.addLevel([
// "|                  |____|         ",
// "|                  |____|         ",
// "|                                 ",
// "|                                 ",
// "|                                 ",
// "|                  |____|         ",
// "|                  |____|         ",
// "|                  |____|         ",
// "|                  |____|         ",
// "|______|    |___________|         ",
// "|______|    |___________|         ",
// "|______|    |___________|         ",
// "|______|    |___________|         ",
// "|______|    |_____________________",
// "|______|    |_____________________|",
// "|___|           ",
// "|___|           ",
// "|___|           ",
// "|___|           ",
// "|___|           ",
// "|___|           ",
// "|___|           ",
// "|___|           ",
// "|___|           ",
// ], {
//     tileHeight: 32,
//     tileWidth: 32,
//     tiles: {
//         " ": () => [
//             k.sprite('floor_stone', {frame: ~~k.rand(4)}),

//             k.pos(600,100),
//             // k.area(),
//             // k.scale(1.5)
//         ]
//     }
// })

// const lvlTwo = k.addLevel(
//     [
// "ctttttttttttttttttttd___cttttttttttd",            
// "l                  r____l         r",
// "l                  rttttl         r",
// "l                                 r",
// "l                                 r",
// "l                                 r",
// "l                  rwwwwl         r",
// "l                  r____l         r",
// "l                  r____l         r",
// "l                  r____l         r",
// "awwwwwww    wwwwwwwb____l         r",
// "|______l    r___________l         r",
// "|______l    r___________l         r",
// "|______l    r___________l         r",
// "|______l    r___________awwwwwwwwwb",
// "|___cttl    rttttd________________|",
// "|___l           r",
// "|___l           r",
// "|___l           r",
// "|___l           r",
// "|___l           r",
// "|___l           r",
// "|___l      g    r",
// "|___l           r",
// "|___l           r",
// "|___awwwwwwwwwwwb",
//     ],
//  {
//     tileHeight: 32,
//     tileWidth: 32,
//     tiles: {
//         't': () => [
//             k.sprite('wall-top'),
//             k.pos(605,70),
//             k.area(),
//             k.body({isStatic:true})
//         ],
//         'd': () => [
//             k.sprite('wall-topLeft'),
//             k.pos(585,70),
//         ],
//         'c': () => [
//             k.sprite('wall-topRight'),
//             k.pos(605,70),
//         ],
//         'l': () => [
//             k.sprite('wall-Left'),
//             k.pos(605,70),
//             k.area(),
//             k.body({isStatic:true})
//         ],
//         'r': () => [
//             k.sprite('wall-Right'),
//             k.pos(615,70),
//             k.area(),
//             k.body({isStatic:true})
//         ],
//         'w': () => [
//             k.sprite('wall-Bottom'),
//             k.pos(600,69),
//             k.area(),
//             k.body({isStatic:true})
//         ],
//         'b': () => [
//             k.sprite('wall-BotR'),
//             k.pos(620,70),
//             k.area(),
//             k.body({isStatic:true})
//         ],
//         'a': () => [
//             k.sprite('wall-BotL'),
//             k.pos(605,70),
//             k.area(),
//             k.body({isStatic:true})
//         ],
//         'g': () => [
//             k.sprite('ladder_lvlTwo'),
//             k.pos(650, 30)
//         ],
//         'e': () => [
//         k.sprite('kid'),
//         k.pos(620,30),
//         k.scale(1.2),
//         k.area(),
//         k.body({isStatic:true}),
//         ],
//         'j': () => [
//         k.sprite('skull'),
//         k.pos(620,30),
//         k.scale(1.2),
//         k.area(),
//         k.body({isStatic:true})
//         ],
//     }
//  }
//  )

// k.addLevel([
// "    __    ",
// "   ____   ",
// "   ____   ",
// "          |____|         ",
// "          |____|         ",
// "          |____|         |__|       ",
// "          |____|         |__|       ",
// "          |____|         |__|       ",
// "                         |__|       ",
// "                         |__|       ",
// "                         |____|   ",
// "          |____|       |______|   ",
// "          |____|       |______|   ",
// "          |____|       |______|   ",
// "          |____|         |____|   ",
// "          |____|         |____|   ",
// "          |____|                  ",
// "          |____|                  ",
// "          |____|                  ",

// ], {
//     tileHeight: 32,
//     tileWidth: 32,
//     tiles: {
//         " ": () => [
//             k.sprite('floor_stone', {frame: ~~k.rand(4)}),

//             k.pos(100,100),
//             // k.area(),
//             // k.scale(1.5)
//         ]
//     }
// })


// const lvlTwo = k.addLevel(
//     [
// " ctttd ctttd",
// "l  __rl_   r",
// "l __wra_   r",
// "l   r_l    r    ctttttttttd           ",
// "l __rww_   r   l          r           ",
// "l         |r___l          r   cttttttd",
// "l         |r___l          r  l       r",
// "l         |r___l         |r_|l       r",
// "l         awwwwwb        |r_|l       r",
// "l         |____|         |r_|l       r",
// "l                        |r_|l       r",
// "l                       cwb_|awwd  cwb",
// "l          cwwwwwd      r|____|l   r",
// "l          r___|l      |r_____|l   r",
// "l          r___|l      attd___|l   r",
// "l          r___|l      |__r___|l   r",
// "l          r___|l        |r___|l   r",
// "l          r___|l        awwwwwwb  r",
// "l          r___|l                  r",
// "l          r___|l                  r",
// "awwwwwwwwwwb___|awwwwwwwwwwwwwwwwwwb",

//     ],
//  {
//     tileHeight: 32,
//     tileWidth: 32,
//     tiles: {
//         't': () => [
//             k.sprite('wall-top'),
//             k.pos(70,70),
//             k.area(),
//             k.body({isStatic:true})
//         ],
//         'd': () => [
//             k.sprite('wall-topLeft'),
//             k.pos(70,70),
//         ],
//         'c': () => [
//             k.sprite('wall-topRight'),
//             k.pos(70,70),
//         ],
//         'l': () => [
//             k.sprite('wall-Left'),
//             k.pos(100,70),
//             k.area(),
//             k.body({isStatic:true})
//         ],
//         'r': () => [
//             k.sprite('wall-Right'),
//             k.pos(70,70),
//             k.area(),
//             k.body({isStatic:true})
//         ],
//         'w': () => [
//             k.sprite('wall-Bottom'),
//             k.pos(70,69),
//             k.area(),
//             k.body({isStatic:true})
//         ],
//         'b': () => [
//             k.sprite('wall-BotR'),
//             k.pos(73,70),
//             k.area(),
//             k.body({isStatic:true})
//         ],
//         'a': () => [
//             k.sprite('wall-BotL'),
//             k.pos(100,70),
//             k.area(),
//             k.body({isStatic:true})
//         ],
//         'g': () => [
//             k.sprite('ladder_lvlTwo'),
//             k.pos(60, 80)
//         ],
//         'e': () => [
//         k.sprite('kid'),
//         k.pos(620,30),
//         k.scale(1.2),
//         k.area(),
//         k.body({isStatic:true}),
//         ],
//         'j': () => [
//         k.sprite('skull'),
//         k.pos(620,30),
//         k.scale(1.2),
//         k.area(),
//         k.body({isStatic:true})
//         ],
//     }
//  }
//  )


</script>

<style scoped>


</style>