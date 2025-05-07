import html from '!!raw-loader!./index.html';

export const createOverflowMenu = () => {
    const wrapper = document.createElement('div');
    wrapper.insertAdjacentHTML('afterbegin', html);
    const bottomSheet = wrapper.querySelector('.ids-bottom-sheet');
    const bottomSheetContainer = wrapper.querySelector('.ids-bottom-sheet-container');
    const backdrop = wrapper.querySelector('.ids-backdrop');
    const button = wrapper.querySelector('.ids-button');
    const closeButton = wrapper.querySelector('.ids-bottom-sheet-close');

    const dropdownItem = wrapper.querySelectorAll('.ids-overflow-menu-item');


    bottomSheet.classList.add('ids-bottom-sheet-hide');

    const showBottomSheet = () => {
        bottomSheet.style.display = 'block';
        bottomSheetContainer.style.display = 'flex';
        backdrop.style.display = 'block';
        setTimeout(() => {
            bottomSheet.classList.remove('ids-bottom-sheet-hide');
            backdrop.classList.remove('ids-backdrop-hide');
        }, 10);
    }

    const hideBottomSheet = () => {
        bottomSheet.classList.add('ids-bottom-sheet-hide');
        backdrop.classList.add('ids-backdrop-hide');
    }

    button.addEventListener('click', showBottomSheet);
    closeButton.addEventListener('click', hideBottomSheet);

    bottomSheetContainer.addEventListener("transitionend", () => {
        if(bottomSheet.classList.contains('ids-bottom-sheet-hide')) {
            bottomSheet.style.display = 'none';
            bottomSheetContainer.style.display = 'none';
            backdrop.style.display = 'none';
        }
    });

    const selectItem = (selectedItem) => {
        selectedItem.classList.add('ids-overflow-menu-item-selected');

        dropdownItem.forEach(item => {
            if(item !== selectedItem) item.classList.remove('ids-overflow-menu-item-selected');
        })
    }


    dropdownItem.forEach(item => {
        item.addEventListener('click', () => {
            selectItem(item);
        })
    })

    setTimeout(() => {
        showBottomSheet();
    }, 500);

    return wrapper.firstElementChild;
}