document.querySelectorAll('.ids2-docs-examples').forEach(function (example) {


    example.querySelectorAll('.ids2-docs-example-code').forEach(function (box) {

        const pre = document.createElement('pre');
        const code = document.createElement('code');
        const text = document.createTextNode(box.querySelector('.ids2-docs-example').innerHTML);
        code.appendChild(text);

        code.className = 'language-markup';
        pre.appendChild(code);
        pre.className = 'ids2-docs-example-code-highlight';

        box.appendChild(pre);
    });
});