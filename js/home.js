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
    let depositError = getElementById('deposit-error');

    if(!isNaN(inputAmount) && inputAmount >= 0) {
        let balanceAmount = getNumberOfFieldValue(balanceFieldId);
        let targetFieldAmount = getNumberOfFieldValue(targetFieldId);
        let targetField = getElementById(targetFieldId);
        let balanceField = getElementById(balanceFieldId);
        let inputField = getElementById(inputFieldId);
    
        targetFieldAmount = inputAmount + targetFieldAmount;
        targetField.innerText = targetFieldAmount;
        if(isIncrease) {
            balanceField.innerText = balanceAmount + inputAmount;
        } else {
            balanceField.innerText = balanceAmount - inputAmount; 
        }

        inputField.value = '';
        depositError.innerText = '';
    }

    else depositError.innerText = "Please enter a valid number"
}