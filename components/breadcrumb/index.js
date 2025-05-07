import html from '!!raw-loader!./index.html';


export const createBreadcrumb = () => {
    const wrapper = document.createElement('div');
    wrapper.insertAdjacentHTML('afterbegin', html);

    let breadcrumbItems = wrapper.querySelectorAll('.ids-breadcrumb-item');

    const moveItem = (selectedIndex) => {
        breadcrumbItems.forEach((item, index) => {
            if(selectedIndex === 0 && index !== 0) {
                console.log(selectedIndex, index, item);
                item.parentElement.removeChild(item);
            } else if(selectedIndex !== 0 && selectedIndex <= index && index !== breadcrumbItems.length - 1) {
                item.parentElement.removeChild(item);
            }
        });
    }

    breadcrumbItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            moveItem(index);
        });
    })

    return wrapper.firstElementChild;
}