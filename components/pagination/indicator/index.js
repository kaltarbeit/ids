import html from '!!raw-loader!./index.html';


export const createIndicator = () => {
    const wrapper = document.createElement('div');
    wrapper.insertAdjacentHTML('afterbegin', html);

    const indicators = wrapper.querySelectorAll('.ids2-indicator-dot-item');
    const indicatorPageAuto = wrapper.querySelector('.ids2-indicator-page-auto');

    indicators.forEach((indicator) => {

        indicator.addEventListener('click', () => {
            indicators.forEach((otherIndicator) => otherIndicator.classList.remove(`active`));
            indicator.classList.add(`active`);
        })
    })


    const indicatorPages = wrapper.querySelectorAll('.ids2-indicator-page');
    indicatorPages.forEach((indicator) => {
        const indicatorPageButtons = indicator.querySelectorAll('.ids2-indicator-page-button');
        const page = indicator.querySelector('.ids2-indicator-page-number');
        indicatorPageButtons.forEach((indicatorPageButton) => {

            indicatorPageButton.addEventListener('click', () => {
                if(indicatorPageButton.classList.contains('ids2-indicator-page-button-prev')) {
                    const prevPage = Number(page.innerText) - 1;
                    page.innerText = prevPage < 1 ? 5 : prevPage;
                } if(indicatorPageButton.classList.contains('ids2-indicator-page-button-next')) {
                    const nextPage = Number(page.innerText) + 1;
                    page.innerText = nextPage > 5 ? 1 : nextPage;
                } if(indicatorPageButton.classList.contains('ids2-indicator-page-button-play')) {
                    indicator.dataset.auto = 'true';
                } if(indicatorPageButton.classList.contains('ids2-indicator-page-button-pause')) {
                    indicator.dataset.auto = 'false';
                }
            })
        });
    });

    setInterval(() => {
        if(indicatorPageAuto.dataset.auto === 'true') {
            const page = indicatorPageAuto.querySelector('.ids2-indicator-page-number');
            const nextPage = Number(page.innerText) + 1;
            page.innerText = nextPage > 5 ? 1 : nextPage;
        }
    }, 2000);




    return wrapper.firstElementChild;
}