document.querySelectorAll('.ids2-docs-example-code').forEach(function (example) {

    const code = example.querySelector('.language-markup');

    if(code) {
        example.querySelector('.ids2-docs-example').innerHTML = code.innerHTML;
    }
});