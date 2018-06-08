import inView from 'in-view'
import {
    TweenMax
} from 'gsap'

const saySomething = () => {
    console.log('IN');
    const animationDelay = .5;
    TweenMax.staggerFrom(".myClass", animationDelay, {
        y: 40,
        opacity: 0,
        delay: 0.3,
        ease: Power1.easeOut
    }, 0.3);
    setTimeout(() => {
        TweenMax.staggerFrom(".myClass1", animationDelay, {
            y: 40,
            opacity: 0,
            delay: 0.3,
            ease: Power1.easeOut
        }, 0.3);
    }, animationDelay * 1000);
    setTimeout(() => {
        TweenMax.staggerFrom(".myClass2", animationDelay, {
            y: 40,
            opacity: 0,
            delay: 0.3,
            ease: Power1.easeOut
        }, 0.3);
    }, animationDelay * 2000);
    inView('#section1').once('enter', el => {
        el.classList.add('active');
    });
    inView('#section2').once('enter', el => {
        el.classList.add('active');
    });
    inView('#section3').once('enter', el => {
        el.classList.add('active');
    });
    inView('#section4').once('enter', el => {
        el.classList.add('active');
    });
    inView('#section5').once('enter', el => {
        el.classList.add('active');
    });
    inView('#section6').once('enter', el => {
        el.classList.add('active');
    });
    inView('#section7').once('enter', el => {
        el.classList.add('active');
    });
    inView('#section9').once('enter', el => {
        el.classList.add('active');
    });
    inView('#section10').once('enter', el => {
        el.classList.add('active');
    });
    inView('#section11').once('enter', el => {
        el.classList.add('active');
    });

    var hoverContainer = document.querySelector('.list-container');
    var _gradient = null;
    var body = document.getElementsByTagName('body')[0];
    if (hoverContainer) {
        hoverContainer.addEventListener('mouseover', function (e) {
            if (e.target && e.target.classList.contains('sectionContent')) {
                if (_gradient) {
                    body.classList.remove(_gradient);
                }
                _gradient = e.target.dataset.gradient;
                if (_gradient) {
                    body.classList.add(_gradient);
                }
            }
            // do something with the hovered element here.
        });
    }
};
saySomething();

/*
To use jQuery, first install it as a dependency: `npm install --save jquery`.
Then include `import $ from 'jquery';` at the top every JavaScript file that uses jQuery.
$('span').mouseover(() => {
  alert('span span!');
});
*/