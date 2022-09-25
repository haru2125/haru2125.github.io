const loading_effect = true;

const mode_normal_btn = `Switch mode <span class="beta_feature"></span>`;

if (loading_effect) {
    setTimeout(function () {
        document.getElementById('load').classList.add('baymau');
    }, 2000);
}

// document.getElementById('switch_font').addEventListener('click', function () {
//     if (document.getElementById('theme').classList.contains('normal-font')) {
//         document.getElementById('theme').classList.remove('normal-font');
//     } else {
//         document.getElementById('theme').classList.add('normal-font');
//     }
// });

click('switch_mode', function () {
    if (document.getElementById('theme').classList.contains('own_mode')) {
        document.getElementById('theme').classList.remove('own_mode');
        this.innerHTML = mode_normal_btn;
    } else {
        document.getElementById('theme').classList.add('own_mode');
        this.innerHTML = "Go back to old mode";
    }
});

hover('badge', function () {
    document.getElementById('badge_tooltip').classList.add('show');
}, function () {
    document.getElementById('badge_tooltip').classList.remove('show');
});

click('badge', function () {
    window.open("https://discord.com/developers");
});

function hover(id, mouseenter, mouseleave) {
    document.getElementById(id).addEventListener('mouseenter', mouseenter);
    document.getElementById(id).addEventListener('mouseleave', mouseleave);
}

function click(id, event) {
    document.getElementById(id).addEventListener('click', event);
}