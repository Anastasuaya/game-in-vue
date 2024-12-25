import { KaboomCtx } from 'kaboom';
export const getLevels = (k: KaboomCtx) => {

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
            "l            0     r",
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
            "l            r___l     1     r",
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
            "|___l      2    r",
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
            "l          r___l     vvvv r___cttttttd",
            "l          r___l     vvvv r__l       r",
            "l          r___l     vvvv r__l       r",
            "l          tttttt         r__l    3  r",
            "l                         r__l       r",
            "l                         r__l       r",
            "l                       cwb__awwd  cwb",
            "l          cwwwwwd      r|____|l   r",
            "l  vvvvvv  r___|l       r_____|l   r",
            "l  v    v  r___|l       ttd___|l   r",
            "l  v    v  r___|l         r___|l   r",
            "l  v    v  r___|l         r___|l   r",
            "l  v    v  r___|l         ttttttt  r",
            "l  vvvvvv  r___|l                  r",
            "l          r___|l                  r",
            "awwwwwwwwwwb___|awwwwwwwwwwwwwwwwwwb",
        ],
        [
            "_________________cttttttttttttttd",
            "_ctttttttttd____l               r",
            "l          r____l               r",
            "l          r____l       4       r",
            "l          r____l               r",
            "l          r____l               r",
            "l          r____l               r",
            "l          r____awww        wwwwb",
            "l          r_______l        r________",
            "awl      wwb_______l        r________",
            "__l      r_________l        r________",
            "__l      r_________l        tttd_____",
            "_ctt     ttd_____cttt          r_____",
            "l          r____l              r_____",
            "l          ttttttt             r_____",
            "l                              r_____",
            "l                              r_____",
            "l                              r_____",
            "l          rwwwwwwd            r_____",
            "l          r_____l             r_____",
            "l          r_____l             r_____",
            "l          r_____l             r_____",
            "awwwwwwwwwwb_____awwwwwwwwwwwwwb_____",
        ],
        [
            "_cttttttttd_________________________ctttttd",
            "l         r______________cttttttttttr     r",
            "l         r_____________l              5  r",
            "l         r_____________l                 r",
            "l         r_____________l                 r",
            "l         r_____________l         cwwwwwwwb",
            "l         tttttttttttttttt        r",
            "l                              cwwb",
            "l                              r",
            "l                              r",
            "l                              r",
            "awwwwwwwwwwwwd                 r",
            "____________l                  r",
            "____________l                  r",
            "____________l                  r",
            "____________l                  r",
            "____________l                  r",
            "____________l                  r",
            "____________l                  r",
            "____________awwwwwwwwwwwwwwwwwwb",
        ],
        [
            "eeeeeeeeee____eeeeeeeeeeeeeeeeee",
            "oiiiiiiiio____oiiiiiiiiiiiiiiiio",
            "oiiiiiiiioeeeeoiiiiiiiiiiiiiiiio",
            "oiiiiiiiikkkkkkiiiiiiiiiiiiiiiio",
            "oiiiiiiiikkkkkkiiiiiiiiiiiiiiiio",
            "oiiiiiiiioggggoiiiiiiiiiiiiiiiio",
            "oiiiiiiiio____oiiiiiiiiiiiiiiiio",
            "gggggggggg____oiiiiiiiiiiiiiiiio",
            "______________oiiiiiiiiiiiiiiiio",
            "______________oiiiiiiiiiiiiiiiio",
            "______________oiiiiiiiiiiiiiiiio",
            "______________oiiiiiiiiiiiiiiiio",
            "______________oiiiiiiiiiiiiiiiio",
            "______________oiiiiiiiiiiiiiiiio",
            "______________oggggggggggggggggo",
            "________________________________"
        ],
    ]
    const tilesForMap = {
        tileHeight: 32,
        tileWidth: 32,
        pos: k.vec2(64, 64),
        tiles: {
            " ": () => [
                k.sprite('floor_stone', { frame: ~~k.rand(4) }),
                k.pos(70, 70),
                k.z(-1)
            ],
            't': () => [
                k.sprite('wall-top'),
                k.pos(70, 71),
                k.area(),
                'wall',
                k.body({ isStatic: true })
            ],

            'd': () => [
                k.sprite('wall-topLeft'),
                k.pos(70, 70),
                'wall'
            ],
            'c': () => [
                k.sprite('wall-topRight'),
                k.pos(70, 70),
                'wall'
            ],
            'l': () => [
                k.sprite('wall-Left'),
                k.pos(100, 70),
                k.area(),
                'wall',
                k.body({ isStatic: true })
            ],
            'r': () => [
                k.sprite('wall-Right'),
                k.pos(70, 70),
                k.area(),
                'wall',
                k.body({ isStatic: true })
            ],
            'w': () => [
                k.sprite('wall-Bottom'),
                k.pos(70, 69),
                k.area(),
                'wall',
                k.body({ isStatic: true })
            ],
            'b': () => [
                k.sprite('wall-BotR'),
                k.pos(73, 70),
                k.area(),
                'wall',
                k.body({ isStatic: true })
            ],
            'a': () => [
                k.sprite('wall-BotL'),
                k.pos(100, 70),
                k.area(),
                'wall',
                k.body({ isStatic: true })
            ],
            'v': () => [
                k.sprite('lava'),
                k.pos(85, 70),
                k.area(),
                k.body({ isStatic: true }),
                'lava'
            ],
            '0': () => [
                k.sprite('ladder_lvlTwo'),
                k.pos(60, 70),
                k.area(),
                'ladder_lvlTwo'
            ],
            '1': () => [
                k.sprite('ladder_lvlTwo'),
                k.pos(60, 70),
                k.area(),
                'ladder_lvlThree'
            ],
            '2': () => [
                k.sprite('ladder_lvlTwo'),
                k.pos(60, 70),
                k.area(),
                'ladder_lvlFour'
            ],
            '3': () => [
                k.sprite('ladder_lvlTwo'),
                k.pos(60, 70),
                k.area(),
                'ladder_lvlFive'
            ],
            '4': () => [
                k.sprite('ladder_lvlTwo'),
                k.pos(60, 70),
                k.area(),
                'ladder_lvlSix'
            ],
            '5': () => [
                k.sprite('ladder_lvlTwo'),
                k.pos(60, 70),
                k.area(),
                'ladder_lvlSix'
            ],
            'g': () => [
                k.sprite('ground'),
                k.pos(70, 71),
                k.area(),
                'wall',
                k.body({ isStatic: true })
            ],
            "i": () => [
                k.sprite('grass'),
                k.pos(70, 70),
                k.z(-1)
            ],
            'o': () => [
                k.sprite('wall_ground'),
                k.pos(70, 71),
                k.area(),
                'wall',
                k.body({ isStatic: true })
            ],
            'e': () => [
                k.sprite('ground'),
                k.pos(70, 75),
                k.area(),
                'wall',
                k.body({ isStatic: true })
            ],
            "k": () => [
                k.sprite('cobble'),
                k.pos(70, 70),
                k.z(-1)
            ],
        },
    }
    return { levels, tilesForMap }
}

