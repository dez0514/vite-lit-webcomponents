#### 笔记
#### 图片引入
引入图片或者svg： 
1. 可以提前使用 import，不能-使用相对路径和require , 
2. 如果想直接用静态图片，可以直接 取绝对路径'/src/xxx/xxx'
#### Css样式
1. slot样式 ::slotted(xxx){ }
2. static style的css中无法获取到属性值动态赋值，但是render返回的html是个长字符串，可以在最前面写style标签，里面写样式。
3. classMap, styleMap
4. unsafeCss, unsafeHtml, unsafeSvg
5. 利用 :host() 配合选择器，伪类，伪元素
#### 属性
类似这么使用：
```
  @property({ type: Boolean }) // attribute
  block = false
```
#### 事件
```
    //父组件标签绑定 @myevent="func"
    //子组件可以绑定 @click="funcChild"
    const funcChild = () => {
        const options = {
            detail: {name},
            bubbles: true,
            composed: true
        };
        this.dispatchEvent(new CustomEvent('myevent', options));
    }
```
#### 动态生成组件文档
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