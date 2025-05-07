import html from '!!raw-loader!./index.html';


export const createChip = () => {
    const wrapper = document.createElement('div');
    wrapper.insertAdjacentHTML('afterbegin', html);

    const chips = wrapper.querySelectorAll('.ids-chip');

    chips.forEach(chip => {
        chip.addEventListener('click', () => {
            chips.forEach(anotherChip => {
                if (anotherChip === chip) return;
                anotherChip.classList.remove('ids-chip-selected');
            });
            chip.classList.add('ids-chip-selected');
        });
    });

    return wrapper.firstElementChild;
}