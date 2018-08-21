var app = {};

app.show = function (heading) {
    return function () {
        var majHead = document.getElementById('majorHead');
        majHead.innerHTML = heading;
        console.log('Hello World - show called');
    }
    //alert('Hello World');
}
app.init = function () {
    var greetButton = document.getElementById('greet');
    greetButton.addEventListener('click', app.show("Java Scripts Example"));

    // with app.show() gets called directly without clicking
    // greetButton.addEventListener('click',app.show());
}
app.init()