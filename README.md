## Usage

```bash
npm i vite-lit-webcomponents
```

```html
<!-- cdn -->
<script type="module" src="https://cdn.jsdelivr.net/npm/vite-lit-webcomponents"><script>
<web-button>按钮</web-button>
```
### By npm
```ts
import 'vite-lit-webcomponents'
```


<!-- wc-api:start -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
### `src/components/web-button.ts`:

#### class: `WebButton`

##### Superclass

| Name         | Module | Package |
| ------------ | ------ | ------- |
| `LitElement` |        | lit     |

##### Fields

| Name       | Privacy | Type      | Default     | Description        | Inherited From |
| ---------- | ------- | --------- | ----------- | ------------------ | -------------- |
| `type`     |         | `string`  | `'default'` | button type        |                |
| `round`    |         | `boolean` | `false`     | button round shape |                |
| `circle`   |         | `boolean` | `false`     | button round cicle |                |
| `disabled` |         | `boolean` | `false`     | button disable     |                |
| `icon`     |         | `string`  | `''`        | button icon        |                |
| `loading`  |         | `boolean` | `false`     | button loading     |                |
| `block`    |         | `boolean` | `false`     | button block       |                |

<hr/>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->
<!-- wc-api:end -->