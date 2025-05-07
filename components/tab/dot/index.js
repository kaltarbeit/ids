import html from '!!raw-loader!./index.html';


export const createTab = () => {
    const wrapper = document.createElement('div');
    wrapper.insertAdjacentHTML('afterbegin', html);

    const tabs = wrapper.querySelectorAll('.ids-tab');

    const overflowTabs = wrapper.querySelectorAll('.ids-tab-overflow');

    tabs.forEach(tab => {
        const tabItems = tab.querySelectorAll('.ids-tab-item');

        tabItems.forEach(tabItem => {
            tabItem.addEventListener('click', () => {
                tabItems.forEach(anotherTabItem => {
                    anotherTabItem.classList.remove('ids-tab-item-active');
                });
                tabItem.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
                tabItem.classList.add('ids-tab-item-active');
            });
        });
    });


    setTimeout(() => {
        overflowTabs.forEach(overflowTab => {
            let totalWidth = 1;
            const tab = overflowTab.querySelector('.ids-tab');
            overflowTab.querySelectorAll('.ids-tab-item').forEach(overflowItem => {
                totalWidth += overflowItem.getBoundingClientRect().width;
            });

            tab.style.width = totalWidth+'px';
        });
    }, 100);

    return wrapper.firstElementChild;
}