export function personalInfoValidation(name, email, phone, nameRequired, emailRequired, phoneRequired) {
    const inputName = document.getElementsByClassName(name);
    const inputEmail = document.getElementsByClassName(email);
    const inputPhone = document.getElementsByClassName(phone);
    const inputNameRequired = document.getElementsByClassName(nameRequired);
    const inputEmailRequired = document.getElementsByClassName(emailRequired);
    const inputPhoneRequired = document.getElementsByClassName(phoneRequired);
    let nextStep = true;

    if (inputName[0].value === '') {
        console.log('Name empty');
        nextStep = false;
        inputName[0].classList.add('input-name-error');
        inputNameRequired[0].classList.add('show-error');
    } else {
        if (inputName[0].classList.contains('input-name-error')) {
            inputName[0].classList.remove('input-name-error');
            inputNameRequired[0].classList.remove('show-error');
        }
    }
    if (inputEmail[0].value === '') {
        console.log('Email empty');
        nextStep = false;
        inputEmail[0].classList.add('input-email-error');
        inputEmailRequired[0].classList.add('show-error');
    } else {
        if (inputEmail[0].classList.contains('input-email-error')) {
            inputEmail[0].classList.remove('input-email-error');
            inputEmailRequired[0].classList.remove('show-error');
        }
    }
    if (inputPhone[0].value === '') {
        console.log('Phone empty');
        nextStep = false;
        inputPhone[0].classList.add('input-phone-error');
        inputPhoneRequired[0].classList.add('show-error');
    } else {
        if (inputPhone[0].classList.contains('input-phone-error')) {
            inputPhone[0].classList.remove('input-phone-error');
            inputPhoneRequired[0].classList.remove('show-error');
        }
    }

    // if (nextStep) {
    //     setStepIndicator((preValue) => preValue + 1);
    //     setInfo({
    //         ...info,
    //         name: inputName[0].value,
    //         email: inputEmail[0].value,
    //         phone: inputPhone[0].value,
    //     });
    // }

    return nextStep;
}

export function changePlan(event, name, setActivePlan) {
    if (event.currentTarget.classList.contains('active-plan')) {
        event.currentTarget.classList.remove('active-plan');
        setActivePlan(name);
    } else {
        event.currentTarget.classList.add('active-plan');
        setActivePlan(name);
    }
}

export function changeDatePlan(activeDatePlan, setActiveDatePlan) {
    if (activeDatePlan === 'Monthly') {
        setActiveDatePlan('Yearly');
    } else if (activeDatePlan === 'Yearly') {
        setActiveDatePlan('Monthly');
    }
}

export default {personalInfoValidation, changePlan, changeDatePlan};