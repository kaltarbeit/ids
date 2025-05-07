import html from '!!raw-loader!./index.html';


export const createTextField = () => {
    const wrapper = document.createElement('div');
    wrapper.insertAdjacentHTML('afterbegin', html);

    const textField = wrapper.querySelector('.ids-text-field');
    const textFieldInput = wrapper.querySelector('.ids-text-field input');
    const clearButton = wrapper.querySelector('.ids-text-field .ids-input-clear');
    const counter = wrapper.querySelector('.ids-text-field-counter');
    const amountNote = wrapper.querySelector('.ids-text-field-amount-note');
    const numberTexts = ["", "일", "이", "삼", "사","오","육","칠","팔","구","십"];
    const digitTexts = ["", "십", "백", "천", "", "십", "백", "천", "", "십", "백", "천", "", "십", "백", "천"];

    const numberToKor = (number) => {
        const numberArray = number.split("");
        let result = "";
        numberArray.forEach((item, index) => {
            let numberUnit = "";
            let transNumber = numberTexts[number.charAt(numberArray.length - (index + 1))];

            if (transNumber !== "") {
                numberUnit += transNumber + digitTexts[index];
            }
            switch (index) {
                case 4:
                    numberUnit += "만";
                    break;
                case 8:
                    numberUnit += "억";
                    break;
                case 12:
                    numberUnit += "조";
                    break;
            }
            if (numberUnit !== "") {
                result = numberUnit + result;
            }
        });

        const zeroCount = numberArray.filter((item) => item === "0").length;
        if (zeroCount === 8) {
            result = result.replace("만", "");
        }

        return result;
    };

    textFieldInput.addEventListener('input', (e) => {
        const count = e.target.value.length;
        count > 0 ? textField.classList.add('ids-text-field-filled') : textField.classList.remove('ids-text-field-filled');
        const formattedValue = e.target.value.replace(/\D/g, "");
        textFieldInput.value = formattedValue.replace(/\B(?=(\d{3})+(?!\d))/g, ",")+ '원';
        amountNote.textContent = count > 0 ? numberToKor(formattedValue)+'원' : '';
    });

    clearButton.addEventListener('click', () => {
        textFieldInput.value = '';
        amountNote.textContent = '';
        textField.classList.remove('ids-text-field-filled');
        textFieldInput.focus();
    });

    if(counter) {
        const maxLength = counter.querySelector('.ids-text-field-maxlength');
        maxLength.textContent = textFieldInput.maxLength;
    }

    return wrapper.firstElementChild;
}