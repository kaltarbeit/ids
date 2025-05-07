const docs = document.querySelector('.ids-docs');


/**
 * Code to Example
 */

document.querySelectorAll('.ids-docs-example-code').forEach(function (example) {

    const code = example.querySelector('.language-markup');

    if(code) {
        example.querySelector('.ids-docs-example').innerHTML = code.innerHTML;
    }
});


/**
 * TOC
 */

const toc = document.createElement('ul');
toc.classList.add('ids-docs-toc');

const title = document.querySelector('.ids-docs-header h1');

const pageMenu = document.createElement('li');
pageMenu.classList.add('ids-docs-toc-page');
pageMenu.innerHTML = title.innerHTML;
pageMenu.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
})
toc.appendChild(pageMenu);


document.querySelectorAll('.ids-docs-section-title').forEach(el => {

    const menu = document.createElement('li');
    menu.classList.add('ids-docs-toc-section');
    menu.innerHTML = el.innerHTML;
    menu.addEventListener('click', () => {
        el.scrollIntoView({
            behavior: 'smooth'
        });
    })
    toc.appendChild(menu);
});

docs.appendChild(toc);



/**
 * Style Reference Table
 */

document.querySelectorAll('.ids-docs-reference').forEach(function (reference) {
    const button = reference.querySelector('.ids-docs-reference-button');

    button.addEventListener('click', () => {
        const isOpen = reference.classList.contains('ids-docs-reference-open');

        if(isOpen) {
            reference.classList.remove('ids-docs-reference-open');
            reference.style.height = '30px';
        } else {
            reference.classList.add('ids-docs-reference-open');
            reference.style.height = reference.scrollHeight + 'px';
        }
    });
});