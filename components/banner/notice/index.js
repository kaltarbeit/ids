import html from '!!raw-loader!./index.html';

export const createButton = () => {
    const wrapper = document.createElement('div');
    wrapper.insertAdjacentHTML('afterbegin', html);

    const closeButtons = wrapper.querySelectorAll('.ids-banner-close');
    const reopenButtons = wrapper.querySelectorAll('.ids-banner-examples-open-button');
    const banners = wrapper.querySelectorAll('.ids-banner');

    for (let i = 0; i < closeButtons.length; i++) {
        const closeButton = closeButtons[i];
        const banner = banners[i];
        closeButton.addEventListener('click', () => {
            banner.classList.add('ids-banner-hide');
        });
    }

    for (let i = 0; i < reopenButtons.length; i++) {
        const reopenButton = reopenButtons[i];
        const banner = banners[i];
        reopenButton.addEventListener('click', () => {
            reopenButton.style.display = 'none';
            banner.style.display = 'flex';
            setTimeout(() => {
                banner.classList.remove('ids-banner-hide');
            });
        });

        banner.addEventListener('transitionend', () => {
            if (banner.classList.contains('ids-banner-hide')) {
                banner.style.display = 'none';
                reopenButton.style.display = 'block';
            }
        })
    }

    return wrapper.firstElementChild;
}