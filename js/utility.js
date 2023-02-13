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