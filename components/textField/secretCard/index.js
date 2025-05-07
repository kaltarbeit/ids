import html from '!!raw-loader!./index.html';


export const createTextField = () => {
    const wrapper = document.createElement('div');
    wrapper.insertAdjacentHTML('afterbegin', html);

    const inputs = wrapper.querySelectorAll('.ids-secret-card-input');

    inputs.forEach((input, index) => {
        input.addEventListener('input', function (e) {
            // 한 글자 입력 후 다음 칸으로 포커스 이동
            if (e.target.value.length === 1 && index < inputs.length - 1) {
                inputs[index + 1].focus();
            }
        });

        input.addEventListener('click', function (e) {
            // 한 글자 입력 후 다음 칸으로 포커스 이동
            if (e.target.value.length === 1 && index < inputs.length - 1) {
                for(let i = index; i < inputs.length; i++) {
                    if(i < inputs.length - 1) {
                        inputs[i + 1].focus();
                        if(inputs[i + 1].value.length === 0) break;
                    }
                }
            } else if(index > 0 && e.target.value.length === 0) {
                for(let i = index; i > 0; i--) {
                    if(inputs[i - 1].value !== '') break;
                    inputs[i - 1].focus();
                }
            }
        });

        input.addEventListener('keydown', function (e) {
            if (e.key === 'Backspace' && e.target.value === '' && index > 0) {
                inputs[index - 1].focus();
            }
        });
    });

    return wrapper.firstElementChild;
}