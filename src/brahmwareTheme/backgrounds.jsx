import { colors } from "./colors";

export const backgrounds = {
    boxes: {
        background: `
            repeating-conic-gradient(from 30deg, ${colors.color_reset} 0 120deg, ${colors.darker__card} 0 180deg) calc(.5*200px) calc(.5*200px*0.577),
            repeating-conic-gradient(from 30deg, ${colors.body__bg} 0 60deg, ${colors.dark__card} 0 120deg, ${colors.darker__card} 0 180deg)`,
        backgroundSize: '200px calc(200px*0.577)'
    },
    infiniteL: {
        background: `
            conic-gradient(from    0deg at calc(500%/6) calc(100%/3), ${colors.body__bg} 0 120deg, ${colors.color_reset} 0),
            conic-gradient(from -120deg at calc(100%/6) calc(100%/3), ${colors.darker__card} 0 120deg, ${colors.color_reset} 0),
            conic-gradient(from  120deg at calc(100%/3) calc(500%/6), ${colors.dark__card} 0 120deg, ${colors.color_reset} 0),
            conic-gradient(from  120deg at calc(200%/3) calc(500%/6), ${colors.dark__card} 0 120deg, ${colors.color_reset} 0),
            conic-gradient(from -180deg at calc(100%/3) 50%, ${colors.darker__card}  60deg, ${colors.dark__card} 0 120deg, ${colors.color_reset} 0),
            conic-gradient(from   60deg at calc(200%/3) 50%, ${colors.dark__card}  60deg, ${colors.body__bg} 0 120deg, ${colors.color_reset} 0),
            conic-gradient(from  -60deg at 50% calc(100%/3), ${colors.dark__card} 120deg, ${colors.darker__card} 0 240deg, ${colors.body__bg} 0)`,
        backgroundSize: `calc(84px*1.732) 84px`,
    },
    bark: {
        background: `
              radial-gradient(
                    100% 100% at 100% 0, ${colors.color_reset} 24%,
                        ${colors.body__bg} 26% 34%, ${colors.darker__card} 36% 44%,
                        ${colors.body__bg} 46% 54%, ${colors.darker__card} 56% 64%,
                        ${colors.body__bg} 66% 74%, ${colors.color_reset} 76%),
              radial-gradient(
                    100% 100% at 0 100%, ${colors.color_reset} 24%,
                        ${colors.body__bg} 26% 34%, ${colors.darker__card} 36% 44%,
                        ${colors.body__bg} 46% 54%, ${colors.darker__card} 56% 64%,
                        ${colors.body__bg} 66% 74%, ${colors.color_reset} 76%),
            radial-gradient(${colors.body__bg} 14%, ${colors.darker__card} 16%) calc(100px/2) calc(100px/2)`,
        backgroundSize: `100px 100px`,
    },
    hook: {
        background:
            `radial-gradient(37.5% 12.5% at 62.5% 100%, ${colors.color_reset} 32%, ${colors.darker__card} 34% 99%, ${colors.color_reset} 101%),
              radial-gradient(37.5% 12.5% at 62.5% 0   , ${colors.color_reset} 32%, ${colors.darker__card} 34% 99%, ${colors.color_reset} 101%) 0                calc(3*30px),
              radial-gradient(37.5% 12.5% at 62.5% 100%, ${colors.color_reset} 32%, ${colors.body__bg} 34% 99%, ${colors.color_reset} 101%) 30px         calc(3*30px),
              radial-gradient(37.5% 12.5% at 62.5% 0   , ${colors.color_reset} 32%, ${colors.body__bg} 34% 99%, ${colors.color_reset} 101%) 30px         calc(6*30px),
              radial-gradient(37.5% 12.5% at 62.5% 100%, ${colors.color_reset} 32%, ${colors.darker__card} 34% 99%, ${colors.color_reset} 101%) calc(2*30px) calc(6*30px),
              radial-gradient(37.5% 12.5% at 62.5% 0   , ${colors.color_reset} 32%, ${colors.darker__card} 34% 99%, ${colors.color_reset} 101%) calc(2*30px) calc(9*30px),
              radial-gradient(37.5% 12.5% at 62.5% 100%, ${colors.color_reset} 32%, ${colors.body__bg} 34% 99%, ${colors.color_reset} 101%) calc(3*30px) calc(9*30px),
              radial-gradient(37.5% 12.5% at 62.5% 0   , ${colors.color_reset} 32%, ${colors.body__bg} 34% 99%, ${colors.color_reset} 101%) calc(3*30px) 0,
              repeating-linear-gradient( ${colors.darker__card} 0 25%, ${colors.body__bg} 0 50%)`,
        backgroundSize: `calc(4*30px) calc(12*30px)`,
    },
    carbon: {
        background: `
                linear-gradient(27deg, #151515 5px, transparent 5px) 0 5px,
                linear-gradient(207deg, #151515 5px, transparent 5px) 10px 0px,
                linear-gradient(27deg, #222 5px, transparent 5px) 0px 10px,
                linear-gradient(207deg, #222 5px, transparent 5px) 10px 5px,
                linear-gradient(90deg, #1b1b1b 10px, transparent 10px),
                linear-gradient(#1d1d1d 25%, #1a1a1a 25%, #1a1a1a 50%, transparent 50%, transparent 75%, #242424 75%, #242424)`,
        backgroundColor: `#131313`,
        backgroundSize: `20px 20px`,
    },
    carbonFiber: {
        background: `
                radial-gradient(black 15%, transparent 16%) 0 0,
                radial-gradient(black 15%, transparent 16%) 8px 8px,
                radial-gradient(rgba(255,255,255,.1) 15%, transparent 20%) 0 1px,
                radial-gradient(rgba(255,255,255,.1) 15%, transparent 20%) 8px 9px`,
        backgroundColor: `#282828`,
        backgroundSize: `16px 16px`,
    },
    cloth: {
        backgroundColor: `${colors.darker__card}`,
        backgroundImage: `
                repeating-linear-gradient(transparent, transparent 50px, rgba(0,0,0,.8) 50px, rgba(0,0,0,.8) 53px, transparent 53px, transparent 63px, rgba(0,0,0,.8) 63px, rgba(0,0,0,.8) 66px, transparent 66px, transparent 116px, rgba(0,0,0,.5) 116px, rgba(0,0,0,.5) 166px, rgba(255,255,255,0) 166px, rgba(255,255,255,0) 169px, rgba(0,0,0,.5) 169px, rgba(0,0,0,.5) 179px, rgba(255,255,255,0) 179px, rgba(255,255,255,0) 182px, rgba(0,0,0,.5) 182px, rgba(0,0,0,.5) 232px, transparent 232px),
                repeating-linear-gradient(270deg, transparent, transparent 50px, rgba(0,0,0,.8) 50px, rgba(0,0,0,.8) 53px, transparent 53px, transparent 63px, rgba(0,0,0,.8) 63px, rgba(0,0,0,.8) 66px, transparent 66px, transparent 116px, rgba(0,0,0,.5) 116px, rgba(0,0,0,.5) 166px, rgba(255,255,255,0) 166px, rgba(255,255,255,0) 169px, rgba(0,0,0,.5) 169px, rgba(0,0,0,.5) 179px, rgba(255,255,255,0) 179px, rgba(255,255,255,0) 182px, rgba(0,0,0,.5) 182px, rgba(0,0,0,.5) 232px, transparent 232px),
                repeating-linear-gradient(125deg, transparent, transparent 2px, rgba(0,0,0,0) 2px, rgba(0,0,0,0) 3px, transparent 3px, transparent 5px, rgba(0,0,0,0) 5px)`,
    }

}