function customRender(reactElement, container) {
    // create the element,
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    // iterating over an my reactElement
    for (const prop in reactElement.props) {
        // we are just skipping children
        if(prop === 'children') continue
        // here main scene, prop is our object,
        
        // domElement.setAttribute("href", "http://google.com")
        domElement.setAttribute(prop, reactElement.props[prop])
        container.appendChild(domElement)
        
  }
}

const reactElement = {
    type: 'a',
    props: {
        href: "http://google.com",
        target: "_blank"
    },
    children: "click me to visit"

}

const mainContainer = document.getElementById("root")

customRender(reactElement, mainContainer)