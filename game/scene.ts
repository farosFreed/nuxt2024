import { Types } from "phaser";
// Player Assets
import { TuxPlayer } from "./player";
import tuxImage from "~/assets/tux.png";
import tuxJSON from "~/assets/tux.json";
// Scene Assets
import sceneAssets from "~/assets/texture.png";
import sceneJSON from "~/assets/texture.json";
import stove from "~/assets/stove.png";
import kettle from "~/assets/kettle.png";
import tea from "~/assets/tea1.png";
import counter from "~/assets/counter.png";
import window from "~/assets/window.png";

export class BootScene extends Phaser.Scene {
  player!: TuxPlayer;
  player2!: TuxPlayer;
  cursors!: Types.Input.Keyboard.CursorKeys; //player 1 controls?
  gamepad!: Phaser.Input.Gamepad.Gamepad; //player 2 controls?

  //scene objects
  stove!: Phaser.GameObjects.Image;
  kettle!: Phaser.GameObjects.Image;
  cup!: Phaser.GameObjects.Image;
  orderwindow!: Phaser.GameObjects.Image;
  counter!: Phaser.GameObjects.Image;

  constructor(config: Phaser.Types.Scenes.SettingsConfig) {
    super({
      ...config,
      key: "default",
    });
  }

  preload() {
    // tux character
    this.load.atlas("tux", tuxImage, tuxJSON);

    // scene objects
    // this.load.atlas("furniture", sceneAssets, sceneJSON);
    this.load.image("stove", stove);
    this.load.image("kettle", kettle);
    this.load.image("tea", tea);
    this.load.image("counter", counter);
    this.load.image("window", window);
  }

  create() {
    // this.physics.world.gravity.y = 60;
    // Initialize keyboard
    this.cursors = this.input.keyboard!.createCursorKeys();

    // Intialize players
    this.player = new TuxPlayer(this, 75, 75);
    // this.player2 = new TuxPlayer(this, 5, 5);

    // Initialize objects
    this.stove = this.add.image(100, 100, "stove");
    this.orderwindow = this.add.image(220, 80, "window");
    this.counter = this.add.image(160, 100, "counter");

    this.kettle = this.add.image(93, 87, "kettle");
    this.cup = this.add.image(170, 87, "tea");

    // if (this.input.gamepad) { // bypass gamepad for now if not connected // this.add.sprite(100, 100, "avatarA");
    //   this.input.gamepad.once(
    //     "down",
    //     (pad, button, index) => {
    //       // text.setText(`Playing with ${pad.id}`);

    //       this.gamepad = pad;
    //       console.log("Gamepad connected", pad);

    //       // this.sprite = this.add.image(400, 300, 'elephant');
    //     },
    //     this
    //   );
    // }

    // NuxtPhaser.eventEmitter?.addListener("jump", this.jump, this);
    // NuxtPhaser.eventEmitter?.addListener("interact", this.interact, this);
    NuxtPhaser.eventEmitter?.addListener("walkLeft", this.walkLeft, this);
    NuxtPhaser.eventEmitter?.addListener("walkRight", this.walkRight, this);
  }

  // jump() {
  //   this.cursors.up.isDown = true;
  //   setTimeout(() => {
  //     this.cursors.up.isDown = false;
  //   }, 100);
  // }
  interact() {
    this.cursors.space.isDown = true;
    setTimeout(() => {
      this.cursors.space.isDown = false;
    }, 100);
  }

  // debounce movement?? TODO check
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

  update() {
    const { cursors, player, gamepad, player2 } = this;

    // TODO switch statement?
    if (cursors.space.isDown) return player.interact();
    else if (cursors.left.isDown) return player.walkLeft();
    else if (cursors.right.isDown) return player.walkRight();
    else if (cursors.down.isDown) return player.walkDown();
    else if (cursors.up.isDown) return player.walkUp();
    // else if (cursors.up.isDown) return player.jump();

    // old jump / falling logic - interferes with movement
    // if (cursors.up.isDown && player.body?.touching.down)
    //   player.setVelocityY(-330);

    player.idle();
    // player2.idle();

    // if player2
    // if (gamepad) {
    //   // if (gamepad.A) return player2.interact();
    //   if (gamepad.left) return player2.walkLeft();
    //   else if (gamepad.right) return player2.walkRight();
    // }
  }
}
