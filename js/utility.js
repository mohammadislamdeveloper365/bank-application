function getFieldValue(id, isValue = false) {
    const element = getElement(id);
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

function getInputFieldValue(id) {
    return getElement(id).value;
}

function getValueOfElement(id) {
    return getElement(id).innerText;
}

function getElement(id) {
    return document.getElementById(id);
}

function getInputFieldValueNumber(id) {
    return parseFloat(getInputFieldValue(id));
}

function getValueOfElementNumber(id) {
    return parseFloat(getValueOfElement(id));
}