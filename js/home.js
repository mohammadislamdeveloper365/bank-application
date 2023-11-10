import { createElement, getElementById,getNumberOfFieldValue } from './utility.js'

getElementById('deposit-btn').addEventListener('click',function() {
    changeBalanceAmount('balance-amount','deposit-amount','input-deposit',true);
});

getElementById('input-deposit').addEventListener('keydown',function(event) {
    if(event.key === 'Enter') {
        changeBalanceAmount('balance-amount','deposit-amount','input-deposit',true);
    }
});


getElementById('withdraw-btn').addEventListener('click',function() {
    changeBalanceAmount('balance-amount','withdraw-amount','input-withdraw',false);
});

getElementById('input-withdraw').addEventListener('keydown',function(event) {
    if(event.key === 'Enter') {
        changeBalanceAmount('balance-amount','withdraw-amount','input-withdraw',false);
    }
});


function changeBalanceAmount(balanceFieldId,targetFieldId,inputFieldId,isIncrease) {
    let inputAmount = getNumberOfFieldValue(inputFieldId, true);
    let inputValidationField = getElementById('input-field-error');
    const inputField = getElementById(inputFieldId);
    
    if(inputValidationField) {
        inputValidationField.parentNode.removeChild(inputValidationField);
    }

    if(!isNaN(inputAmount) && inputAmount >= 0) {
        let balanceAmount = getNumberOfFieldValue(balanceFieldId);
        let targetFieldAmount = getNumberOfFieldValue(targetFieldId);
        let targetField = getElementById(targetFieldId);
        let balanceField = getElementById(balanceFieldId);
    
        targetFieldAmount = inputAmount + targetFieldAmount;
        targetField.innerText = targetFieldAmount;
        if(isIncrease) {
            balanceField.innerText = balanceAmount + inputAmount;
        } else {
            balanceField.innerText = balanceAmount - inputAmount; 
        }

    }

    else {
        let targetedElement;
        let errorField;
        errorField = createElement('p','Please enter a valid number');
        errorField.id = 'input-field-error';
        errorField.style.fontWeight = 'bold';
        errorField.style.lineHeight = '1.5';
        errorField.style.color = 'red';
        
        if(isIncrease) {
           targetedElement = getElementById('deposit-btn');
        } else {
            targetedElement = getElementById('withdraw-btn');
        }

        targetedElement.parentNode.insertBefore(errorField, targetedElement);
    }

    inputField.value = '';
}