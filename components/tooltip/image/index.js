import html from '!!raw-loader!./index.html';


export const createTooltip = () => {
    const wrapper = document.createElement('div');
    wrapper.insertAdjacentHTML('afterbegin', html);

    const tooltipIcons = wrapper.querySelectorAll('.ids2-tooltip-icon');
    const tooltips = wrapper.querySelectorAll('.ids2-tooltip');

    const getPositionHorizontalAlign = (targetElement, sourceElement) => {
        if(targetElement.className.match(/ids2-tooltip__.+-left/)) {
            targetElement.style.left = `${sourceElement.offsetLeft + (sourceElement.offsetWidth / 2 - 26)}px`;
        } else if(targetElement.className.match(/ids2-tooltip__.+-right/)) {
            targetElement.style.left = `${sourceElement.offsetLeft - (targetElement.offsetWidth - 36)}px`;
        } else {
            targetElement.style.left = `${(sourceElement.offsetLeft + (sourceElement.offsetWidth / 2)) - (targetElement.offsetWidth / 2 )}px`;
        }

        if(targetElement.className.match(/ids2-tooltip__bottom-.+/)) {
            targetElement.style.top = `${sourceElement.offsetTop + (sourceElement.offsetHeight + 15)}px`;
        } else if(targetElement.className.match(/ids2-tooltip__top-.+/)) {
            targetElement.style.top = `${sourceElement.offsetTop - (targetElement.offsetHeight + 15)}px`;
        }
    }

    const getPositionVerticalAlign = (targetElement, sourceElement) => {
        if(targetElement.className.match(/ids2-tooltip__.+-top/)) {
            targetElement.style.top = `${sourceElement.offsetTop - 4}px`;
        } else if(targetElement.className.match(/ids2-tooltip__.+-bottom/)) {
            targetElement.style.top = `${sourceElement.offsetTop - (targetElement.offsetHeight - (sourceElement.offsetHeight / 2 + 12))}px`;
        } else {
            targetElement.style.top = `${sourceElement.offsetTop - (targetElement.offsetHeight / 2) + (sourceElement.offsetHeight / 2)}px`;
        }

        if(targetElement.className.match(/ids2-tooltip__left-.+/)) {
            targetElement.style.left = `${sourceElement.offsetLeft - (targetElement.offsetWidth + 15)}px`;
        } else if(targetElement.className.match(/ids2-tooltip__right-.+/)) {
            targetElement.style.left = `${sourceElement.offsetLeft + sourceElement.offsetWidth + 15}px`;
        }
    }


    tooltipIcons.forEach((tooltipIcon) => {

        const tooltip = wrapper.querySelector(`#${tooltipIcon.dataset.tooltipId}`);

        tooltipIcon.addEventListener('click', () => {
            tooltips.forEach(anotherTooltip => anotherTooltip.style.display = 'none')

            tooltip.style.display = 'block';


            if(tooltip.className.match(/ids2-tooltip__(top|bottom)-.+/)) {
                getPositionHorizontalAlign(tooltip, tooltipIcon);
            } else if(tooltip.className.match(/ids2-tooltip__(left|right)-.+/)) {
                getPositionVerticalAlign(tooltip, tooltipIcon);
            }
        });

        tooltip.querySelector('.ids2-tooltip__close').addEventListener('click', () => {
            tooltip.style.display = 'none';
        });
    })


    return wrapper.firstElementChild;
}