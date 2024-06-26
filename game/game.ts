import { BootScene } from "./scene";

export const createGame = (config: Phaser.Types.Core.GameConfig = {}) =>
  new Phaser.Game({
    parent: "phaser",
    type: Phaser.AUTO,
    width: 300,
    height: 300,
    scene: [BootScene],
    backgroundColor: "#bdae58",
    physics: {
      default: "arcade",
      arcade: {
        gravity: { y: 0, x: 0 },
      },
    },
    // input: {
    //   gamepad: true,
    // },
    render: {
      pixelArt: true,
    },
    ...config,
  });
