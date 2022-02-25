import * as shell from 'shelljs'
// import * as fs from 'fs'
// import { resolve } from 'path';

shell.cp('-R', './index.html', 'docs/')
// const dir = resolve(__dirname, '../src/components')
// const files = fs.readdirSync(dir)
// for (let file of files) {
//   shell.exec(`custom-elements-manifest analyze --globs 'src/components/${file}/${file}.ts' --outdir docs/${file}`)
// //   shell.exec("esmo scripts/gen.ts")
// }
shell.exec(`custom-elements-manifest analyze --globs 'src/components/web-button.ts' --outdir docs/web-button`)
shell.exec("esmo scripts/gen.ts")


// package.json 里面还有 customElement 配置项。。。