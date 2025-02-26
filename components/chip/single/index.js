import html from '!!raw-loader!./index.html';


export const createChip = () => {
    const wrapper = document.createElement('div');
    wrapper.insertAdjacentHTML('afterbegin', html);

    const chips = wrapper.querySelectorAll('.ids2-chip');

    chips.forEach(chip => {
        chip.addEventListener('click', () => {
            chips.forEach(anotherChip => {
                if (anotherChip === chip) return;
                anotherChip.classList.remove('ids2-chip-selected');
            });
            chip.classList.add('ids2-chip-selected');
        });
    });

    return wrapper.firstElementChild;
}