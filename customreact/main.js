
function main(reactElement, container) {
    // const domElement = document.createElement(reactElement.type)
    // domElement.innerHTML = reactElement.children
    // document.setAttribute("href", reactElement.props.href)
    // document.setAttribute("target", reactElement.props.target)
    // container.appendChild(domElement)


    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in domElement.props) {
        if (prop === "children") continue
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement)
}

const reactElement = {
    type: "a",
    props: {
        href: "https://google.com",
        target: "_blank"
    },
    children: "Click me to visit google"
}


const mainContainer = document.querySelector("#root")

main(reactElement, mainContainer)