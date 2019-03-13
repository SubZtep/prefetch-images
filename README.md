## prefetch-images _:flower_playing_cards:_

**Synchronously** download images into the web browser cache **on the client side**.

Let users _(&crawlers)_ **wait** first and experience **fast** impression of your brutalist :hearts: page without the lag.

:wavy_dash:

### Example

```js
import prefetchImages from "prefetch-images"

// ...code...

prefetchImages([
  "https://media.giphy.com/media/sPuDbEFCsoN32/giphy.gif",
  "https://media.giphy.com/media/3wDD0Khwova4o/giphy.gif"
]).then(() => {
  document.location = "page2.html"
})

// ...code...
```

### Nuxt.js

This plugin is currently an `esm` module; you may need to add it to the `transpile` build option in `nuxt.config.js`.

### Browser Support

Modern browsers, **no IE**! (no Babel)

### Install

```bash
yarn add prefetch-images # npm install prefetch-images
```

### CLI Commands

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

| Command      | Effect                                        |
| ------------ | --------------------------------------------- |
| `yarn`       | Install dependencies                          |
| `yarn build` | Create release build                          |
| `yarn test`  | Run tests manually (auto run before git push) |

### TODO

- [ ] Handle timeouts (min/max excecuton time)
- [ ] Proper browser tests (and remove the current fake one)
- [ ] Make it SEO friendly somehow
- [ ] ?

### License

MIT

[![Open Source Love svg1](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)

:mushroom::herb:
