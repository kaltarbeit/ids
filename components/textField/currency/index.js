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
        const amounts = String((Number(e.target.value.replace(/\D/g, "")) / 100).toFixed(2)).split('.');
        e.target.value = amounts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "." + amounts[1];
    });

    return wrapper.firstElementChild;
}