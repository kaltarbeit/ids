import html from '!!raw-loader!./index.html';


export const createTab = () => {
    const wrapper = document.createElement('div');
    wrapper.insertAdjacentHTML('afterbegin', html);

    const segmentItems = wrapper.querySelectorAll('.ids-tab-segment-item');

    segmentItems.forEach(item => {
        item.addEventListener('click', function () {
            segmentItems.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });

    return wrapper.firstElementChild;
}