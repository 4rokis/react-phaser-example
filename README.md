# React-Phaser

[https://github.com/4rokis/react-phaser-example](https://github.com/4rokis/react-phaser-example)

There are multiple reasons why you might want to combine **React** with **Phaser.** One of them being that you have a bigger React application and only a certain scene/part is a canvas.

<aside>
💡 Phaser is a fast, free, and fun open source HTML5 game framework that offers WebGL and Canvas rendering across desktop and mobile web browsers.

</aside>

React application then can either passively render a canvas or actively send new data to it.

React application re-renders multiple times and that is not desired for canvas base library. To mitigate that we are creating a component that will bridge those two environments.

```jsx
export const ROOT_ID = 'root-id'

const Root = memo(() => {
  return <div id={ROOT_ID} />
})

class PhaserApp {
  constructor(id) {
    this.game = new Phaser.Game({
      type: Phaser.AUTO,
      width: 1000,
      height: 1000,
      parent: ROOT_ID,
    })
  }

  destroy = () => {
    this.game.destroy(true)
  }
}

export const PhaserBridge = () => {
  const app = useRef(null)

  useLayoutEffect(() => {
    app.current = new PhaserApp(ROOT_ID)

    return () => {
      app.current?.destroy()
    }
  }, [])

  return <Root />
}
```

useLayoutEffect will ensure that PhaserApp is initialized only once and is destroyed on unmount.

We can upgrade the bridge to include an update logic to emit an event to Phaser.

```jsx
export class PhaserApp {
  ...
  update = (direction) => {
    this.game.events.emit('update', direction)
  }
  ...
}

export const PhaserBridge = ({ direction }) => {
  ...
  useEffect(() => {
    if (!app.current) {
      return
    }

    app.current.update(direction)
  }, [direction])
  ...
}
```

PhaserBridge now includes a useEffect hook that waits for the prop direction to change. Once changed it will trigger the update method with it. The update method then emits an update event to the whole phaser app.
A phaser scene can then listen to it and update.

```jsx
this.game.events.on('update', (direction) => {
  this.direction = direction
})
```

React app just needs to render the bridge with particular properties.

```jsx
function App() {
  const [direction, setDirection] = useState(null)
  return (
    <div className="App">
      <AppBridge direction={direction} />
    </div>
  );
}
```

This solution works well with [PIXI.js](https://pixijs.com/) or a custom canvas solution.

## ****Kudos****

Architecture, Code, and Configs come from **[Style Space](https://wwwh.stylespace.com/?utm_medium=arokis-blog)***Connect with expert stylists, over 1-on-1 video styling sessions for clothing, hair, and makeup/skincare styling. Elevate your style, simplify getting ready and save time and money.*

## ****Links****

- [https://phaser.io](https://phaser.io/)
- [https://arokis.me/articles/react-phaser](https://arokis.me/articles/react-phaser)