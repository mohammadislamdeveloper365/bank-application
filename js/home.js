getElement('deposit-btn').addEventListener('click',function() {
    let inputDepositAmount = getInputFieldValueNumber('input-deposit');
    let depositError = getElement('deposit-error');

    if(!isNaN(inputDepositAmount) && inputDepositAmount >= 0) {
        let balanceAmount = getValueOfElementNumber('balance-amount');
        let depositAmount = getValueOfElementNumber('deposit-amount');
        let depositField = getElement('deposit-amount');
        let balanceField = getElement('balance-amount');
        let inputDepositField = getElement('input-deposit');
    
        depositAmount = inputDepositAmount + depositAmount;
        depositField.innerText = depositAmount;
        balanceField.innerText = balanceAmount + inputDepositAmount;
        inputDepositField.value = '';
        depositError.innerText = '';
    }

    else depositError.innerText = "Please enter a valid number"
})

getElement('input-deposit').addEventListener('keydown',function(event) {
    if(event.key === 'Enter') {
        let inputDepositAmount = getInputFieldValueNumber('input-deposit');
        let depositError = getElement('deposit-error');

        if(!isNaN(inputDepositAmount) && inputDepositAmount >= 0) {
            let balanceAmount = getValueOfElementNumber('balance-amount');
            let depositAmount = getValueOfElementNumber('deposit-amount');
            let depositField = getElement('deposit-amount');
            let balanceField = getElement('balance-amount');
            let inputDepositField = getElement('input-deposit');
        
            depositAmount = inputDepositAmount + depositAmount;
            depositField.innerText = depositAmount;
            balanceField.innerText = balanceAmount + inputDepositAmount;
            inputDepositField.value = '';
            depositError.innerText = '';
        }

        else depositError.innerText = "Please enter a valid number"
    }
})


getElement('withdraw-btn').addEventListener('click',function() {
    let balanceAmount = getValueOfElementNumber('balance-amount');
    let balanceField = getElement('balance-amount');
    let inputWithdrawAmount = getInputFieldValueNumber('input-withdraw');
    let inputWithdrawField = getElement('input-withdraw');
    let withdrawField = getElement('withdraw-amount');
    let withdrawAmount = getValueOfElementNumber('withdraw-amount');
    let withdrawError = getElement('withdraw-error');
    if(!isNaN(inputWithdrawAmount) && inputWithdrawAmount >= 0) {
        withdrawAmount = inputWithdrawAmount + withdrawAmount;
        withdrawField.innerText = withdrawAmount;
        balanceField.innerText = balanceAmount - inputWithdrawAmount;
        inputWithdrawField.value = '';
        withdrawError.innerText = '';
    }
    else withdrawError.innerText = "Please enter a valid number";

})

getElement('input-withdraw').addEventListener('keydown',function(event) {
    if(event.key === 'Enter') {
            let balanceAmount = getValueOfElementNumber('balance-amount');
            let balanceField = getElement('balance-amount');
            let inputWithdrawAmount = getInputFieldValueNumber('input-withdraw');
            let inputWithdrawField = getElement('input-withdraw');
            let withdrawField = getElement('withdraw-amount');
            let withdrawAmount = getValueOfElementNumber('withdraw-amount');
            let withdrawError = getElement('withdraw-error');
            if(!isNaN(inputWithdrawAmount) && inputWithdrawAmount >= 0) {
                withdrawAmount = inputWithdrawAmount + withdrawAmount;
                withdrawField.innerText = withdrawAmount;
                balanceField.innerText = balanceAmount - inputWithdrawAmount;
                inputWithdrawField.value = '';
                withdrawError.innerText = '';
            }

            else withdrawError.innerText = "Please enter a valid number";
    

    }
    
})