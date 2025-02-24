import './styles.css';
import '../../button/button.css';
import html from '!!raw-loader!./index.html';

export const createBottomSheet = () => {
    const wrapper = document.createElement('div');
    wrapper.insertAdjacentHTML('afterbegin', html);
    const bottomSheet = wrapper.getElementsByClassName('ids2-bottom-sheet')[0];
    const backdrop = wrapper.getElementsByClassName('ids2-backdrop')[0];
    const button = wrapper.getElementsByClassName('ids2-button')[0];
    const closeButton = wrapper.getElementsByClassName('ids2-button-close')[0];

    button.addEventListener('click', () => {
        bottomSheet.classList.remove('ids2-bottom-sheet-hide');
        backdrop.classList.add('ids2-backdrop-open');
    })

    closeButton.addEventListener('click', () => {
        bottomSheet.classList.add('ids2-bottom-sheet-hide');
        backdrop.classList.remove('ids2-backdrop-open');
    })

    return wrapper.firstElementChild;
}