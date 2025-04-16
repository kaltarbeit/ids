import html from '!!raw-loader!./index.html';


export const createAccountCard = () => {
    const wrapper = document.createElement('div');
    wrapper.insertAdjacentHTML('afterbegin', html);

    const transactionList = wrapper.querySelector('.ids2-account-card-transactions');
    const openButton = wrapper.querySelector('.ids2-account-card-footer');
    const openButtonLabel = wrapper.querySelector('.ids2-account-card-footer-label');


    openButton.addEventListener('click', () => {
        const currentOpen = transactionList.style.display === 'block';
        transactionList.style.display = currentOpen ? 'none' : 'block';
        openButtonLabel.innerText = currentOpen ? '최근거래내역이 궁금해요' : '최근거래내역 닫기';
    })

    return wrapper.firstElementChild;
}