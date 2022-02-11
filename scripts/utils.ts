export function injectContentBetweenTags(
    namespace: string,
    content: string,
    injectedContent: string,
  ) {
    const startTag = `<!-- ${namespace}:start -->`
    const endTag = `<!-- ${namespace}:end -->`
    const startIndex = content.indexOf(startTag)
    const endIndex = content.indexOf(endTag, startIndex)
    if (startIndex === -1 || endIndex === -1) {
      console.log(`Can not find ${startTag} and ${endTag}.`)
      return ''
    }
    return [
      content.slice(0, startIndex + startTag.length),
      '\n<!-- prettier-ignore-start -->',
      '\n<!-- markdownlint-disable -->\n',
      injectedContent,
      '\n<!-- markdownlint-restore -->',
      '\n<!-- prettier-ignore-end -->\n',
      content.slice(endIndex),
    ].join('')
}