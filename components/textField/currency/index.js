import html from '!!raw-loader!./index.html';


export const createTextField = () => {
    const wrapper = document.createElement('div');
    wrapper.insertAdjacentHTML('afterbegin', html);

    const textField = wrapper.querySelector('.ids2-text-field-currency input');

    document.addEventListener("wheel", function(){
        if(document.activeElement.type === "number"){
            document.activeElement.blur();
        }
    });

    textField.addEventListener('input', (e) => {
        e.target.value = (Number(e.target.value.replace(/\D/g, "")) / 100).toFixed(2);
    });

    return wrapper.firstElementChild;
}