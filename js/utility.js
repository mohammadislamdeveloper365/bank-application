function getFieldValue(id, isValue = false) {
    const element = getElementById(id);
    let value;
    
    if(isValue) {
        value = element.value;   
    } else {
        value = element.innerText;
    }

    return value;
}

function createElement(elmentType, textNode) {
    const element = document.createElement(elmentType);
    const txt = document.createTextNode(textNode);
    element.appendChild(txt);

    return element;
}

function getElementById(id) {
    return document.getElementById(id);
}

function getNumberOfFieldValue(id,isInput) {
    return parseFloat(getFieldValue(id,isInput));
}


