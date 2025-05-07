import html from '!!raw-loader!./index.html';


export const createChip = () => {
    const wrapper = document.createElement('div');
    wrapper.insertAdjacentHTML('afterbegin', html);

    const chips = wrapper.querySelectorAll('.ids-chip');

    chips.forEach(chip => {
        chip.addEventListener('click', () => {
            chip.classList.toggle('ids-chip-selected');
        });
    });

    return wrapper.firstElementChild;
}