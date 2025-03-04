import html from '!!raw-loader!./index.html';


export const createDropdown = () => {
    const wrapper = document.createElement('div');
    wrapper.insertAdjacentHTML('afterbegin', html);
    const bottomSheet = wrapper.querySelector('.ids2-bottom-sheet');
    const bottomSheetContainer = wrapper.querySelector('.ids2-bottom-sheet-container');
    const backdrop = wrapper.querySelector('.ids2-backdrop');
    const button = wrapper.querySelector('.ids2-dropdown-button');
    const closeButton = wrapper.querySelector('.ids2-bottom-sheet-close');

    const dropdownItem = wrapper.querySelectorAll('.ids2-dropdown-item');


    bottomSheet.classList.add('ids2-bottom-sheet-hide');

    const showBottomSheet = () => {
        bottomSheet.style.display = 'block';
        bottomSheetContainer.style.display = 'flex';
        backdrop.style.display = 'block';
        setTimeout(() => {
            bottomSheet.classList.remove('ids2-bottom-sheet-hide');
            backdrop.classList.remove('ids2-backdrop-hide');
        }, 10);
    }

    const hideBottomSheet = () => {
        bottomSheet.classList.add('ids2-bottom-sheet-hide');
        backdrop.classList.add('ids2-backdrop-hide');
    }

    button.addEventListener('click', showBottomSheet);
    closeButton.addEventListener('click', hideBottomSheet);

    bottomSheetContainer.addEventListener("transitionend", () => {
        if(bottomSheet.classList.contains('ids2-bottom-sheet-hide')) {
            bottomSheet.style.display = 'none';
            bottomSheetContainer.style.display = 'none';
            backdrop.style.display = 'none';
        }
    });

    const selectItem = (selectedItem) => {
        selectedItem.classList.add('ids2-dropdown-item-selected');
        button.classList.add('ids2-dropdown-button-selected');

        dropdownItem.forEach(item => {
            if(item !== selectedItem) item.classList.remove('ids2-dropdown-item-selected');
        })
    }


    dropdownItem.forEach(item => {
        item.addEventListener('click', () => {
            selectItem(item);
        })
    })

    return wrapper.firstElementChild;
}