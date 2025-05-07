import html from '!!raw-loader!./index.html';


export const createTab = () => {
    const wrapper = document.createElement('div');
    wrapper.insertAdjacentHTML('afterbegin', html);

    const tabItems = wrapper.querySelectorAll('.ids-tab-secondary-item');

    tabItems.forEach(item => {
        item.addEventListener('click', function () {
            tabItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
        });
    });

    return wrapper.firstElementChild;
}