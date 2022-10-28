import settings from '../../settings.json' assert { type: "json" };

if (settings.loading) {
    setTimeout(function () {
        document.getElementById('load').classList.add('hide');
    }, 2000);
}

if (settings.light_mode) {
    if (!settings.profile_theme.enabled) {
        classManager('switch_mode', 'light');
        classManager('av_to_left', 'light', 'add');
        classManager('switch_ver', 'light', 'add');
        getId('switch_mode').innerHTML = `<i class="fas fa-sun"></i>`;
    }
} else {
    if (!settings.profile_theme.enabled) {
        getId('switch_mode').innerHTML = `<i class="fas fa-moon"></i>`;
    }
}

if (settings.old_version) {
    classManager('card', 'old_ver', 'add');
    classManager('switch_ver', 'focused', 'add');
}

if (settings.avatar_decoration.enabled) {
    classManager('_av_decoration', 'active', 'add');
    getId('_av_decoration').setAttribute('decoration_type', settings.avatar_decoration.type);
}

if (settings.profile_theme.enabled) {
    classManager('card', 'profile_theme');

    getId('switch_mode').style.display = 'none';

    getId('switch_ver').style.display = 'none';

    getId('card').setAttribute('style',
        '--primary:' + settings.profile_theme.primary
        + ';' +
        '--accent:' + settings.profile_theme.accent 
        + ';'
    )
}

click('switch_mode', function () {
    if (classManager('card', 'light-theme', 'find')) {
        classManager('card', 'light-theme', 'remove');
        classManager('switch_mode', 'light', 'remove');
        classManager('av_to_left', 'light', 'remove');
        classManager('switch_ver', 'light', 'remove');
        getId('switch_mode').innerHTML = `<i class="fas fa-moon"></i>`;
    } else {
        classManager('card', 'light-theme', 'add');
        classManager('switch_mode', 'light', 'add');
        classManager('av_to_left', 'light', 'add');
        classManager('switch_ver', 'light', 'add');
        getId('switch_mode').innerHTML = `<i class="fas fa-sun"></i>`;
    }
});

click('switch_ver', function () {
    if (classManager('card', 'old_ver', 'find')) {
        classManager('card', 'old_ver', 'remove');
        classManager('switch_ver', 'focused', 'remove');
    } else {
        classManager('card', 'old_ver', 'add');
        classManager('switch_ver', 'focused', 'add');
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

if (settings.light_mode) {
    classManager('card', 'light-theme');
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