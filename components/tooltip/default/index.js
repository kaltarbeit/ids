import html from '!!raw-loader!./index.html';


export const createTooltip = () => {
    const wrapper = document.createElement('div');
    wrapper.insertAdjacentHTML('afterbegin', html);

    const tooltipIcons = wrapper.querySelectorAll('.ids-tooltip-icon');
    const tooltips = wrapper.querySelectorAll('.ids-tooltip');

    const getPositionHorizontalAlign = (targetElement, sourceElement) => {
        if(targetElement.className.match(/ids-tooltip-.+-left/)) {
            targetElement.style.left = `${sourceElement.offsetLeft + (sourceElement.offsetWidth / 2 - 26)}px`;
        } else if(targetElement.className.match(/ids-tooltip-.+-right/)) {
            targetElement.style.left = `${sourceElement.offsetLeft - (targetElement.offsetWidth - 36)}px`;
        } else {
            targetElement.style.left = `${sourceElement.offsetLeft - (targetElement.offsetWidth / 2 - 9)}px`;
        }

        if(targetElement.className.match(/ids-tooltip-bottom-.+/)) {
            targetElement.style.top = `${sourceElement.offsetTop - (targetElement.offsetHeight + 15)}px`;
        } else if(targetElement.className.match(/ids-tooltip-top-.+/)) {
            targetElement.style.top = `${sourceElement.offsetTop + (sourceElement.offsetHeight + 15)}px`;
        }
    }

    const getPositionVerticalAlign = (targetElement, sourceElement) => {
        if(targetElement.className.match(/ids-tooltip-.+-top/)) {
            targetElement.style.top = `${sourceElement.offsetTop - 4}px`;
        } else if(targetElement.className.match(/ids-tooltip-.+-bottom/)) {
            targetElement.style.top = `${sourceElement.offsetTop - (targetElement.offsetHeight - (sourceElement.offsetHeight / 2 + 12))}px`;
        } else {
            targetElement.style.top = `${sourceElement.offsetTop - (targetElement.offsetHeight / 2) + (sourceElement.offsetHeight / 2)}px`;
        }

        if(targetElement.className.match(/ids-tooltip-left-.+/)) {
            targetElement.style.left = `${sourceElement.offsetLeft + sourceElement.offsetWidth + 15}px`;
        } else if(targetElement.className.match(/ids-tooltip-right-.+/)) {
            targetElement.style.left = `${sourceElement.offsetLeft - (targetElement.offsetWidth + 15)}px`;
        }
    }

    tooltipIcons.forEach((tooltipIcon) => {
        const tooltip = wrapper.querySelector(`#${tooltipIcon.dataset.tooltipId}`);

        tooltipIcon.addEventListener('click', () => {
            tooltips.forEach(anotherTooltip => anotherTooltip.style.display = 'none')

            tooltip.style.display = 'block';

            if(tooltip.className.match(/ids-tooltip-(top|bottom)-.+/)) {
                getPositionHorizontalAlign(tooltip, tooltipIcon);
            } else if(tooltip.className.match(/ids-tooltip-(left|right)-.+/)) {
                getPositionVerticalAlign(tooltip, tooltipIcon);
            }

        });

        tooltip.querySelector('.ids-tooltip-close').addEventListener('click', () => {
            tooltip.style.display = 'none';
        });
    });

    setTimeout(() =>{
        document.body.addEventListener('click', (e) => {
            let clickedIcon = false;

            tooltipIcons.forEach(tooltipIcon => {
                if(tooltipIcon.contains(e.target)) clickedIcon = true;
            });

            if (!clickedIcon) {
                tooltips.forEach(tooltip => {
                    if(!tooltip.contains(e.target)) {
                        tooltip.style.display = 'none';
                    }
                });
            }
        });
    }, 100);


    return wrapper.firstElementChild;
}