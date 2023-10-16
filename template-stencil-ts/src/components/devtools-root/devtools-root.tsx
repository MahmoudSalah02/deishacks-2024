import { Component, h } from '@stencil/core'

chrome.devtools.panels.create('StencilCrx', '', '../../devtools.html', function () {
  console.log('devtools panel create')
})

@Component({
  tag: 'devtools-root',
  styleUrl: 'devtools-root.css',
  shadow: false,
})
export class DevToolsRoot {
  private link = 'https://github.com/guocaoyi/create-chrome-ext'

  render() {
    return (
      <main>
        <h3>DevTools Page</h3>
        <a href={this.link} target="_blank">
          generated by create-chrome-ext
        </a>
      </main>
    )
  }
}