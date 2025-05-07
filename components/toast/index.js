import html from '!!raw-loader!./index.html';


export const createToast = () => {
    const wrapper = document.createElement('div');
    wrapper.insertAdjacentHTML('afterbegin', html);

    const toast = wrapper.querySelector('.ids-toast');
    const reopenButton = wrapper.querySelector('.ids-toast-examples-open-button');


    const showToast = () => {
        reopenButton.style.display = 'none';
        toast.classList.remove('ids-toast-hide');

        setTimeout(() => {
            toast.classList.add('ids-toast-hide');

            setTimeout(() => {
                reopenButton.style.display = 'block';
            }, 600);
        }, 3000);
    }

    reopenButton.addEventListener('click', showToast);

    setTimeout(() => {
        showToast();
    }, 1000);


    toast.addEventListener('click', () => {})

    return wrapper.firstElementChild;
}