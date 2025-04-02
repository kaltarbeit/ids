import html from '!!raw-loader!./index.html';


export const createPagination = () => {
    const wrapper = document.createElement('div');
    wrapper.insertAdjacentHTML('afterbegin', html);

    const pageNumbersContainer = wrapper.querySelector('.ids2-pagination-numbers');
    const pagePrev = wrapper.querySelector('.ids2-pagination-prev');
    const pageNext = wrapper.querySelector('.ids2-pagination-next');

    const totalPages = 15;
    let currentPage = 1;
    const pageNumbersToShow = 7;

    pagePrev.addEventListener('click', () => {
        changePage(currentPage - 1);
    });

    pageNext.addEventListener('click', () => {
        changePage(currentPage + 1);
    });

    const createPageNumber = (page) => {
        const pageNumber = document.createElement('button');
        pageNumber.type = 'button';
        pageNumber.innerText = page;
        pageNumber.classList.add('ids2-pagination-number');
        pageNumber.classList.add('ids2-pagination-button');
        if(page === currentPage) {
            pageNumber.classList.add('ids2-pagination-number-active');
        }

        pageNumber.addEventListener('click', () => {
            changePage(page);
        });

        return pageNumber;
    }

    const createMoreButton = (page) => {
        const moreButton = document.createElement('button');
        moreButton.type = 'button';
        moreButton.innerText = '...';
        moreButton.classList.add('ids2-pagination-ellipsis');
        moreButton.classList.add('ids2-pagination-button');

        moreButton.addEventListener('click', () => {
            changePage(page);
        });

        return moreButton;
    }

    const changePage = (page) => {
        pageNumbersContainer.innerHTML = '';
        currentPage = page;

        if(totalPages > 1)
            pageNumbersContainer.appendChild(createPageNumber(1));

        let start = 2;
        let end = Math.min(pageNumbersToShow - 2, totalPages - 1);


        if(pageNumbersToShow < totalPages) {
            if(page > 4) {
                start = Math.max(page - 1, 2);
                pageNumbersContainer.appendChild(createMoreButton(Math.max(page-5, 1)));

                if(page < totalPages - 4 && pageNumbersToShow < totalPages) {
                    end = Math.min(page + 1, totalPages - 1);
                } else {
                    start = totalPages - 4;
                    end = totalPages - 1;
                }
            }
        } else if(pageNumbersToShow === totalPages) {
            end = totalPages - 1;
        }

        for(let i = start; i <= end; i++) {
            pageNumbersContainer.appendChild(createPageNumber(i));
        }


        if(pageNumbersToShow < totalPages) {
            if(page < Math.max(totalPages - 4, 5)) {
                pageNumbersContainer.appendChild(createMoreButton(Math.min(page+5, totalPages)));
            }
        }

        pageNumbersContainer.appendChild(createPageNumber(totalPages));

        pagePrev.disabled = page === 1;
        pageNext.disabled = page === totalPages;
    }

    changePage(1);

    return wrapper.firstElementChild;
}