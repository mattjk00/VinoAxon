// setup the vino views
async function setup() {
    await vinoStart([
        await newView('main', 'views/main.html'),
    ]);
}
setup().then(highlight);

function highlight() {
    document.querySelectorAll('pre code').forEach((block) => {
        var code = Prism.highlight(block.innerHTML, Prism.languages.javascript, 'javascript');
        block.innerHTML = code;
    });
}