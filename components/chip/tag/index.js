import html from '!!raw-loader!./index.html';


export const createChip = () => {
    const wrapper = document.createElement('div');
    wrapper.insertAdjacentHTML('afterbegin', html);

    const chips = wrapper.querySelectorAll('.ids2-chip-remove');
    const chipGroup = wrapper.querySelector('.ids2-chip-group');
    const reopenButton = wrapper.querySelector('.ids2-chip-examples-open-button');


    function addChipsEvent(targetChips) {
        targetChips.forEach(chip => {
            chip.addEventListener('click', () => {
                chip.parentElement.remove();

                if(chipGroup.children.length === 0) {
                    reopenButton.style.display = 'block';
                }
            });
        });
    }

    addChipsEvent(chips);

    reopenButton.addEventListener('click', () => {
        reopenButton.style.display = 'none';
        chipGroup.insertAdjacentHTML(
            'afterbegin',
            '<div class="ids2-chip ids2-chip-tag">\n' +
            '            <div class="ids2-chip-text">#레이블1</div>\n' +
            '            <div class="ids2-chip-remove">Remove</div>\n' +
            '        </div>\n' +
            '        <div class="ids2-chip ids2-chip-tag">\n' +
            '            <div class="ids2-chip-text">#레이블2</div>\n' +
            '            <div class="ids2-chip-remove">Remove</div>\n' +
            '        </div>\n' +
            '        <div class="ids2-chip ids2-chip-tag">\n' +
            '            <div class="ids2-chip-text">#레이블3</div>\n' +
            '            <div class="ids2-chip-remove">Remove</div>\n' +
            '        </div>');

        setTimeout(() => {
            addChipsEvent(chipGroup.querySelectorAll('.ids2-chip-remove'));
        });
    })

    return wrapper.firstElementChild;
}