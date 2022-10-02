const light_mode = false;

const custom_profile_theme = { // Custom Profile Theme Dark/Light mode
    "enabled": false,
    "border": "#bf9b85",
    "background": "#e8ded9"
};

const loading_effect = true;

if (loading_effect) {
    setTimeout(function () {
        document.getElementById('load').classList.add('baymau');
    }, 2000);
}

// click('switch_mode', function () {
//     if (document.getElementById('theme').classList.contains('own_mode')) {
//         document.getElementById('theme').classList.remove('own_mode');
//         this.innerHTML = mode_normal_btn;
//     } else {
//         document.getElementById('theme').classList.add('own_mode');
//         this.innerHTML = "Go back to old mode";
//     }
// });

if (light_mode) {
    classManager('switch_mode', 'light');
    getId('switch_mode').innerHTML = `<i class="fas fa-moon"></i>`;
} else {
    getId('switch_mode').innerHTML = `<i class="fas fa-sun"></i>`;
}

click('switch_mode', function () {
    if (classManager('card', 'light-theme', 'find')) {
        classManager('card', 'light-theme', 'remove');
        classManager('switch_mode', 'light', 'remove');
        getId('switch_mode').innerHTML = `<i class="fas fa-sun"></i>`;
    } else {
        classManager('card', 'light-theme', 'add');
        classManager('switch_mode', 'light', 'add');
        getId('switch_mode').innerHTML = `<i class="fas fa-moon"></i>`;
    }
});

hover('badge_1', function () {
    classManager('badge_tooltip_1', 'show');
}, function () {
    classManager('badge_tooltip_1', 'show', 'remove');
});

hover('badge_2', function () {
    classManager('badge_tooltip_2', 'show');
}, function () {
    classManager('badge_tooltip_2', 'show', 'remove');
});

hover('badge_3', function () {
    classManager('badge_tooltip_3', 'show');
}, function () {
    classManager('badge_tooltip_3', 'show', 'remove');
});

// hover('badge_4', function () {
//     classManager('badge_tooltip_4', 'show');
// }, function () {
//     classManager('badge_tooltip_4', 'show', 'remove');
// });

// click('badge_1', function () {
//     // alert("Developer Badge");
//     // * update soon *
// });

if (light_mode) {
    classManager('card', 'light-theme');
}

if (custom_profile_theme.enabled) {
    if (!light_mode) {
        classManager('card', 'dark-theme');
    }

    getId('switch_mode').style.display = 'none';

    classManager('card', 'custom');

    getId('card').setAttribute('style', 
        '--p-bg-color:' + custom_profile_theme.background
        + ';' +
        '--p-b-color:' + custom_profile_theme.border
        + ';'
    );
}

function getId(id) {
    return document.getElementById(id);
}

function hover(id, mouseenter, mouseleave) {
    getId(id).addEventListener('mouseenter', mouseenter);
    getId(id).addEventListener('mouseleave', mouseleave);
}

function click(id, event) {
    getId(id).addEventListener('click', event);
}

function classManager(id, classname, type = 'add') {
    switch (type) {
        case 'add':
            return getId(id).classList.add(classname);
        case 'remove':
            return getId(id).classList.remove(classname);
        case 'find':
            return getId(id).classList.contains(classname);
        default:
            return false;
    }
}