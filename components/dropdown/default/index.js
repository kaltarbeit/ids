import html from '!!raw-loader!./index.html';


export const createDropdown = () => {
    const wrapper = document.createElement('div');
    wrapper.insertAdjacentHTML('afterbegin', html);
    const bottomSheet = wrapper.querySelector('.ids-bottom-sheet');
    const bottomSheetContainer = wrapper.querySelector('.ids-bottom-sheet-container');
    const backdrop = wrapper.querySelector('.ids-dimmed');
    const button = wrapper.querySelector('.ids-dropdown-container');
    const closeButton = wrapper.querySelector('.ids-bottom-sheet-close');

    const dropdownItem = wrapper.querySelectorAll('.ids-dropdown-item');


    bottomSheet.classList.add('ids-bottom-sheet-hide');

    const showBottomSheet = () => {
        bottomSheet.style.display = 'block';
        bottomSheetContainer.style.display = 'flex';
        backdrop.style.display = 'block';
        setTimeout(() => {
            bottomSheet.classList.remove('ids-bottom-sheet-hide');
            backdrop.classList.remove('ids-dimmed-hide');
        }, 10);
    }

    const hideBottomSheet = () => {
        bottomSheet.classList.add('ids-bottom-sheet-hide');
        backdrop.classList.add('ids-dimmed-hide');
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
        selectedItem.classList.add('ids-dropdown-item-selected');
        button.classList.add('ids-dropdown-button-selected');

        dropdownItem.forEach(item => {
            if(item !== selectedItem) item.classList.remove('ids-dropdown-item-selected');
        })
    }


    dropdownItem.forEach(item => {
        item.addEventListener('click', () => {
            selectItem(item);
        })
    })

    return wrapper.firstElementChild;
}