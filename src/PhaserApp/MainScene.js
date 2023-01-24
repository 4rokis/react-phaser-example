import Phaser from 'phaser'

const SPEED = 0.1
export class MainScene extends Phaser.Scene {
  create() {
    this.direction = null
    this.rect = this.add.graphics()
    this.rect.fillStyle(0x00ff00, 1);
    this.rect.fillRect(100, 100, 100, 100);
    this.game.events.on('update', (direction) => {
      this.direction = direction
    })
  }

  update(time, delta) {
    switch (this.direction) {
      case 'up':
        this.rect.setY(this.rect.y - delta * SPEED)
        break
      case 'down':
        this.rect.setY(this.rect.y + delta * SPEED)
        break
      case 'left':
        this.rect.setX(this.rect.x - delta * SPEED)
        break
      case 'right':
        this.rect.setX(this.rect.x + delta * SPEED)
        break
      default:
        break
    }
  }
}