const docs = document.querySelector('.ids2-docs');


/**
 * Code to Example
 */

document.querySelectorAll('.ids2-docs-example-code').forEach(function (example) {

    const code = example.querySelector('.language-markup');

    if(code) {
        example.querySelector('.ids2-docs-example').innerHTML = code.innerHTML;
    }
});


/**
 * TOC
 */

const toc = document.createElement('ul');
toc.classList.add('ids2-docs-toc');

const title = document.querySelector('.ids2-docs-header h1');

const pageMenu = document.createElement('li');
pageMenu.classList.add('ids2-docs-toc-page');
pageMenu.innerHTML = title.innerHTML;
pageMenu.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
})
toc.appendChild(pageMenu);


document.querySelectorAll('.ids2-docs-section-title').forEach(el => {

    const menu = document.createElement('li');
    menu.classList.add('ids2-docs-toc-section');
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
 * Show Css Reference Table
 */

document.querySelectorAll('.ids2-docs-reference').forEach(function (reference) {
    const button = reference.querySelector('.ids2-docs-reference-button');

    button.addEventListener('click', () => {
        const isOpen = reference.classList.contains('ids2-docs-reference-open');

        if(isOpen) {
            reference.classList.remove('ids2-docs-reference-open');
            reference.style.height = '30px';
        } else {
            reference.classList.add('ids2-docs-reference-open');
            reference.style.height = reference.scrollHeight + 'px';
        }
    });
});