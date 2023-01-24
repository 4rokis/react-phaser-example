import * as Phaser from 'phaser'
import {MainScene} from "./MainScene";

export class PhaserApp {
  constructor({ width, height, id }) {
    this.game = new Phaser.Game({
      type: Phaser.AUTO,
      width,
      height,
      backgroundColor: '#efefef',
      parent: id,
      scene: [MainScene]
    })
  }

  update = (direction) => {
    this.game.events.emit('update', direction)
  }

  destroy = () => {
    this.game.destroy(true)
  }
}
