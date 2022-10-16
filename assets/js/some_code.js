const light_mode = false;

const custom_profile_theme = { // Custom Profile Theme Dark/Light mode
    "enabled": false,
    "border": "#3496ff",
    "background": "#a8d0fb"
};

const avatar_decoration = {
    "enabled": true,
    "decoration_type": 4
}

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
    classManager('av_to_left', 'light', 'add');
    getId('switch_mode').innerHTML = `<i class="fas fa-moon"></i>`;
} else {
    getId('switch_mode').innerHTML = `<i class="fas fa-sun"></i>`;
}

if (classManager('_av', 'to-left', 'find')) {
    getId('av_to_left').innerHTML = `<i class="fas fa-align-center"></i>`;
} else {
    getId('av_to_left').innerHTML = `<i class="fas fa-align-left"></i>`;
}

if (avatar_decoration.enabled) {
    classManager('_av_decoration', 'active', 'add');
    getId('_av_decoration').setAttribute('decoration_type', avatar_decoration.decoration_type);
}

if (getId('left-toggle').getElementsByClassName('badge').length > 3) {
    classManager('_av', 'to-left', 'add');
    classManager('left-toggle', 'left-toggle', 'add');
    getId('av_to_left').setAttribute('disabled', '');
}

click('switch_mode', function () {
    if (classManager('card', 'light-theme', 'find')) {
        classManager('card', 'light-theme', 'remove');
        classManager('switch_mode', 'light', 'remove');
        classManager('av_to_left', 'light', 'remove');
        getId('switch_mode').innerHTML = `<i class="fas fa-sun"></i>`;
    } else {
        classManager('card', 'light-theme', 'add');
        classManager('switch_mode', 'light', 'add');
        classManager('av_to_left', 'light', 'add');
        getId('switch_mode').innerHTML = `<i class="fas fa-moon"></i>`;
    }
});

click('av_to_left', function () {
    if (classManager('_av', 'to-left', 'find')) {
        classManager('_av', 'to-left', 'remove');
        classManager('left-toggle', 'left-toggle', 'remove');
        getId('av_to_left').innerHTML = `<i class="fas fa-align-left"></i>`;
    } else {
        classManager('left-toggle', 'left-toggle', 'add');
        classManager('_av', 'to-left', 'add');
        getId('av_to_left').innerHTML = `<i class="fas fa-align-center"></i>`;
    }
});

var badges = document.getElementsByClassName("badge");

var hover_tooltip_1 = function() {
    this.querySelector('.badge_tooltip').classList.add('show');
};

var hover_tooltip_2 = function() {
    this.querySelector('.badge_tooltip').classList.remove('show');
};

for (var i = 0; i < badges.length; i++) {
    badges[i].addEventListener('mouseenter', hover_tooltip_1, false);
}

for (var i = 0; i < badges.length; i++) {
    badges[i].addEventListener('mouseleave', hover_tooltip_2, false);
}

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

function click(id, event) {
    if (getId(id)) {
        getId(id).addEventListener('click', event);
    }
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