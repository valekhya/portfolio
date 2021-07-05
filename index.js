const hero = popmotion.styler(document.querySelector('#hero'));
const contactMe = popmotion.styler(document.querySelector('#contact-me-form'));

const skillsDiv = document.querySelector('.flex-row');
const skillsIcon = skillsDiv.querySelectorAll('.skill-icons');

// Hero container ****************************************
popmotion.tween({
    from: {
        scale: .5,
        opacity: 0
    },
    to: {
        scale: 1,
        opacity: 1
    },
    duration: 500

}).start(hero.set);



// Contact me*********************************

// Default
$(function () {
    popmotion.tween({
        from: {
            scale: 1,
        },
        to: {
            scale: .9,
        },
        duration: 500

    }).start(contactMe.set);
})

// Scale up
$('#contact-me-form').on("mouseenter", function () {
    popmotion.tween({
        from: {
            scale: .9,
        },
        to: {
            scale: 1,
        },
        duration: 500

    }).start(contactMe.set);
});

// Scale Down
$('#contact-me-form').on("mouseleave", function () {
    popmotion.tween({
        from: {
            scale: 1,
        },
        to: {
            scale: .9,
        },
        duration: 500

    }).start(contactMe.set);
});