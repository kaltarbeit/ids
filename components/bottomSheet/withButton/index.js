import html from '!!raw-loader!./index.html';

export const createBottomSheet = () => {
    const wrapper = document.createElement('div');
    wrapper.insertAdjacentHTML('afterbegin', html);
    const bottomSheet = wrapper.querySelector('.ids2-bottom-sheet');
    const bottomSheetContainer = wrapper.querySelector('.ids2-bottom-sheet-container');
    const backdrop = wrapper.querySelector('.ids2-backdrop');
    const button = wrapper.querySelector('.ids2-button');
    const closeButton = wrapper.querySelector('.ids2-bottom-sheet-close');
    const todayHide = wrapper.querySelector('.ids2-checkbox-input');


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
    todayHide.addEventListener('change', (e) => {
        hideBottomSheet();
        e.target.checked = false;
    });

    bottomSheetContainer.addEventListener("transitionend", () => {
        if(bottomSheet.classList.contains('ids2-bottom-sheet-hide')) {
            bottomSheet.style.display = 'none';
            bottomSheetContainer.style.display = 'none';
            backdrop.style.display = 'none';
        }
    });

    setTimeout(() => {
        showBottomSheet();
    }, 500);

    return wrapper.firstElementChild;
}