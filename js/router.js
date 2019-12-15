var initHighlight = false;
// setup the vino views
async function setup() {
    await vinoStart([
        await newView('main', 'views/main.html'),
        await newView('faust', 'views/faust/dir.html'),
        await newView('waves', 'views/faust/fWaves.html'),
        await newView('faustvars', 'views/faust/fVars.html'),
    ]);
}
setup().then(function() {
    highlight();
    initHighlight = true;
});

/**
 * Highlights all <pre><code> chunks in the web page
 */
function highlight() {
    document.querySelectorAll('pre code').forEach((block) => {
        var code = Prism.highlight(block.innerHTML, Prism.languages.javascript, 'javascript');
        block.innerHTML = code;
    });
}