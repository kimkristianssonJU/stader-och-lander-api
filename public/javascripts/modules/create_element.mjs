export function customCreateElement(tag, attribute, attributeName, parent) {
    const element = document.createElement(tag);
    if(attribute) {
        element.setAttribute(attribute, attributeName);
    }
    if(parent) {
        parent.appendChild(element);
    }
    
    return element;
}