import { Types } from "phaser";
import { TuxPlayer } from "./player";
import tuxImage from "~/assets/tux.png";
import tuxJSON from "~/assets/tux.json";

export class BootScene extends Phaser.Scene {
  player!: TuxPlayer;
  player2!: TuxPlayer;
  cursors!: Types.Input.Keyboard.CursorKeys; //player 1 controls?
  gamepad!: Phaser.Input.Gamepad.Gamepad; //player 2 controls?

  constructor(config: Phaser.Types.Scenes.SettingsConfig) {
    super({
      ...config,
      key: "default",
    });
  }

  preload() {
    this.load.atlas("tux", tuxImage, tuxJSON);
  }

  create() {
    this.physics.world.gravity.y = 60;
    // Initialize keyboard
    this.cursors = this.input.keyboard!.createCursorKeys();

    // Initialize gamepad
    // if (this.input.gamepad) {
    //   this.input.gamepad.once("connected", (pad) => {
    //     this.gamepad = pad;
    //     console.log("Gamepad connected", pad);
    //   });
    // }
    this.input.gamepad.once(
      "down",
      (pad, button, index) => {
        // text.setText(`Playing with ${pad.id}`);

        this.gamepad = pad;
        console.log("Gamepad connected", pad);

        // this.sprite = this.add.image(400, 300, 'elephant');
      },
      this
    );

    this.player = new TuxPlayer(this, 100, 10);
    this.player2 = new TuxPlayer(this, 100, 30);

    NuxtPhaser.eventEmitter?.addListener("jump", this.jump, this);
    NuxtPhaser.eventEmitter?.addListener("walkLeft", this.walkLeft, this);
    NuxtPhaser.eventEmitter?.addListener("walkRight", this.walkRight, this);
  }

  jump() {
    this.cursors.up.isDown = true;
    setTimeout(() => {
      this.cursors.up.isDown = false;
    }, 100);
  }

  walkLeft() {
    this.cursors.left.isDown = true;
    setTimeout(() => {
      this.cursors.left.isDown = false;
    }, 100);
  }

  walkRight() {
    this.cursors.right.isDown = true;
    setTimeout(() => {
      this.cursors.right.isDown = false;
    }, 100);
  }

  // Add player 2 controls
  player2walkLeft() {
    console.log("player2walkLeft");
  }

  update() {
    const { cursors, player, gamepad, player2 } = this;

    if (cursors.left.isDown) return player.walkLeft();
    else if (cursors.right.isDown) return player.walkRight();
    else if (cursors.up.isDown) return player.jump();

    if (cursors.up.isDown && player.body?.touching.down)
      player.setVelocityY(-330);

    player.idle();

    // if player2
    if (gamepad) {
      if (gamepad.left) return player2.walkLeft();
      else if (gamepad.right) return player2.walkRight();
      else if (gamepad.A) return player2.jump();
    }
  }
}
