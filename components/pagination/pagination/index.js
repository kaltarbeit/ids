import html from '!!raw-loader!./index.html';


export const createPagination = () => {
    const wrapper = document.createElement('div');
    wrapper.insertAdjacentHTML('afterbegin', html);

    const pageNumbers = wrapper.querySelectorAll('.ids2-pagination-number');
    const pageFirst = wrapper.querySelector('.ids2-pagination-first');
    const pagePrev = wrapper.querySelector('.ids2-pagination-prev');
    const pageLast = wrapper.querySelector('.ids2-pagination-last');
    const pageNext = wrapper.querySelector('.ids2-pagination-next');

    pageNumbers.forEach(pageNumber => {
        pageNumber.addEventListener('click', () => {
            pageNumbers.forEach(anotherPageNumber => {
                anotherPageNumber.classList.remove('ids2-pagination-number-active');
            });

            pageNumber.classList.add('ids2-pagination-number-active');

            if(pageNumber.innerText === '1') {
                pageFirst.disabled = true ;
                pagePrev.disabled = true ;
                pageLast.disabled = false ;
                pageNext.disabled = false ;
            }
            else if(pageNumber.innerText === '10') {
                pageFirst.disabled = false ;
                pagePrev.disabled = false ;
                pageLast.disabled = true ;
                pageNext.disabled = true ;
            } else {
                pageFirst.disabled = false ;
                pagePrev.disabled = false ;
                pageLast.disabled = false ;
                pageNext.disabled = false ;
            }
        })
    })

    return wrapper.firstElementChild;
}