const main = document.getElementById('root')

const reactElement = {
    type: 'a',
    props: {
        href: 'http://google.com',
        target: '_blank',
    },
    children: 'Click me'
}

function customRender(element, container) {
    // const dom = document.createElement(reactElement.type)
    // dom.innerHTML = reactElement.children
    // dom.setAttribute('href', reactElement.props.href)
    // dom.setAttribute('target', reactElement.props.target)
    // container.appendChild(dom)

   const d = document.createElement(reactElement.type)
   d.innerHTML = reactElement.children
   for (const key in reactElement.props) {
    if(key == 'children') continue ;
    d.setAttribute(key, reactElement.props[key])
   }
   container.appendChild(d)
}

customRender(reactElement, main)