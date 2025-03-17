import html from '!!raw-loader!./index.html';


export const createTooltip = () => {
    const wrapper = document.createElement('div');
    wrapper.insertAdjacentHTML('afterbegin', html);

    const tooltipIcon = wrapper.querySelector('.ids2-tooltip-icon');
    const tooltip = wrapper.querySelector('.ids2-tooltip');
    const tooltipClose = wrapper.querySelector('.ids2-tooltip__close');

    tooltipIcon.addEventListener('click', () => {
        tooltip.style.display = 'block';
    });

    tooltipClose.addEventListener('click', () => {
        tooltip.style.display = 'none';
    });

    return wrapper.firstElementChild;
}