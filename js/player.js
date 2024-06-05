





//render
function render(someData) {

    const root = document.getElementById('root');
    root.append(
        App(someData)
    );
}

render(data);
