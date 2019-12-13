var initHighlight = false;
// setup the vino views
async function setup() {
    await vinoStart([
        await newView('main', 'views/main.html'),
        await newView('faust', 'views/faust/dir.html'),
    ]);
}
setup().then(function() {
    highlight();
    initHighlight = true;
});

function highlight() {
    document.querySelectorAll('pre code').forEach((block) => {
        var code = Prism.highlight(block.innerHTML, Prism.languages.javascript, 'javascript');
        block.innerHTML = code;
    });
}