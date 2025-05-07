import html from '!!raw-loader!./index.html';


export const createTextField = () => {
    const wrapper = document.createElement('div');
    wrapper.insertAdjacentHTML('afterbegin', html);


    const dateField = wrapper.querySelector('.ids-text-field-date');
    const dateFieldInput = dateField.querySelector('.ids-text-field-date input');

    dateFieldInput.addEventListener('input', (e) => {
        const dates = ["", "", ""];
        const value = e.target.value.replace(/\D/g, "");
        dates[0] = value.substring(0, Math.min(value.length, 4));
        let dateIndex = 0;

        if(value.length > 4) {
            let month = value.substring(4, Math.min(value.length, 6));
            if(month > 12) {
                month = '0'+value.substring(4, Math.min(value.length, 5));
                dateIndex = 1;
            }

            dates[1] = month;
        }

        if(value.length > (6 - dateIndex)) {
            dates[2] = value.substring((6 - dateIndex), Math.min(value.length, 8));
        }


        dateFieldInput.value = dates.filter(Boolean).join(".");

    });

    return wrapper.firstElementChild;
}