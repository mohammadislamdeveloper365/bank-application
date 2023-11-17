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
    let balanceAmount = getNumberOfFieldValue(balanceFieldId);
    let inputAmount =  getNumberOfFieldValue(inputFieldId, true).toFixed(2);
    let inputValidationField = getElementById('input-field-error');
    const inputField = getElementById(inputFieldId);
    let targetFieldAmount = getNumberOfFieldValue(targetFieldId);
    let targetField = getElementById(targetFieldId);
    let balanceField = getElementById(balanceFieldId);
    
    if(inputValidationField) {
        inputValidationField.parentNode.removeChild(inputValidationField);
    }
    
    if(!isNaN(inputAmount) && inputAmount >= 0 && (inputFieldId === 'input-withdraw' && (balanceAmount > parseFloat(inputField.value)) )) {
        targetFieldAmount = parseFloat(inputAmount) + targetFieldAmount;
        targetField.innerText = targetFieldAmount;    
        balanceField.innerText = (balanceAmount - inputAmount).toFixed(2); 

    } else if(inputFieldId !== 'input-withdraw' && !isNaN(inputAmount) && inputAmount >= 0) {
        targetFieldAmount = parseFloat(inputAmount) + targetFieldAmount;
        targetField.innerText = targetFieldAmount;
        balanceField.innerText = (balanceAmount + parseFloat(inputAmount)).toFixed(2);
    } else {
        let targetedElement;
        let errorField;
        if((inputFieldId === 'input-withdraw' && (balanceAmount < parseFloat(inputField.value)))) {
            errorField = createElement('p',"Withdraw can't be bigger than your balance");
        } else {
            errorField = createElement('p','Please enter a valid number');
        }
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