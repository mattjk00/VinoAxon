// setup the vino views
async function setup() {
    await vinoStart([
        await newView('main', 'views/main.html'),
    ]);
}
setup();