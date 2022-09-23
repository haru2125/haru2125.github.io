const loading_effect = true;

if (loading_effect) {
    setTimeout(function () {
        document.getElementById('load').classList.add('baymau');
    }, 2000);
}

document.getElementById('switch_font').addEventListener('click', function () {
    if (document.getElementById('theme').classList.contains('normal-font')) {
        document.getElementById('theme').classList.remove('normal-font');
    } else {
        document.getElementById('theme').classList.add('normal-font');
    }
});