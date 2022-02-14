## 笔记
```
"scripts": {
    "analyze": "custom-elements-manifest analyze --globs 'src/components/web-button.ts' --outdir dist",
    "dev": "vite",
    "build": "tsc && vite build && npm run copy && npm run docs",
    "copy": "cp ./index.html dist/",
    "preview": "vite preview",
    "docs": "npm run analyze && esmo scripts/docs.ts",
    "prepublishOnly": "npm run build",
    "buildOnly": "tsc && vite build"
}
```
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
1. 在package.json中添加customElements项，指定文档json生成位置。
2. 利用 @custom-elements-manifest/analyze 插件分析指定组件中的注释，自动解析 class 生成相关参数的信息 custom-elements.json。
3. 利用 @custom-elements-manifest/to-markdown 插件结合 custom-elements.json 生成文档，最后再拿到内容插入到 READ.md 中指定位置。