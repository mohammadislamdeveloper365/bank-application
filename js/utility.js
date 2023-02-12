function getInputFieldValue(id) {
    return getElement(id).value;
}

function getValueOfElement(id) {
    return getElement(id).innerText;
}

function getElement(id) {
    return document.getElementById(id);
}