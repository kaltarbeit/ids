import html from '!!raw-loader!./index.html';


export const createTable = () => {
    const wrapper = document.createElement('div');
    wrapper.insertAdjacentHTML('afterbegin', html);

    const expands = wrapper.querySelectorAll('.ids-row-expandable > th');

    expands.forEach(expand => {
        expand.addEventListener('click', () => {

            const subRows = expand.parentElement.parentElement.querySelectorAll('tr[data-parent-id="'+expand.parentElement.id+'"]');

            if(expand.parentElement.classList.contains('ids-row-expendable-collapsed')) {
                expand.parentElement.classList.remove('ids-row-expendable-collapsed');
                subRows.forEach(subRow => {
                    subRow.classList.remove('ids-row-sub-collapsed');
                })
            } else {
                expand.parentElement.classList.add('ids-row-expendable-collapsed');
                subRows.forEach(subRow => {
                    subRow.classList.add('ids-row-sub-collapsed');
                })
            }
        })
    })

    return wrapper.firstElementChild;
}