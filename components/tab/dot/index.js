import html from '!!raw-loader!./index.html';


export const createTab = () => {
    const wrapper = document.createElement('div');
    wrapper.insertAdjacentHTML('afterbegin', html);

    const tabs = wrapper.querySelectorAll('.ids2-tab');

    const overflowTabs = wrapper.querySelectorAll('.ids2-tab-overflow');

    tabs.forEach(tab => {
        const tabItems = tab.querySelectorAll('.ids2-tab-item');

        tabItems.forEach(tabItem => {
            tabItem.addEventListener('click', () => {
                tabItems.forEach(anotherTabItem => {
                    anotherTabItem.classList.remove('ids2-tab-item-active');
                });
                tabItem.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
                tabItem.classList.add('ids2-tab-item-active');
            });
        });
    });


    setTimeout(() => {
        overflowTabs.forEach(overflowTab => {
            let totalWidth = 0;
            const tab = overflowTab.querySelector('.ids2-tab');
            overflowTab.querySelectorAll('.ids2-tab-item').forEach(overflowItem => {
                totalWidth += overflowItem.getBoundingClientRect().width;
            });

            tab.style.width = totalWidth+'px';
        });
    }, 100);

    return wrapper.firstElementChild;
}