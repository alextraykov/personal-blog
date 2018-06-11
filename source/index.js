import inView from 'in-view'
import {
    TweenMax
} from 'gsap'

const saySomething = () => {
    const tweenOptions = {
        y: 0,
        opacity: 1,
        delay: 0.3,
        ease: Power1.easeOut
    }
    const animationDelay = .35;
    TweenMax.staggerTo(".myClass", animationDelay, tweenOptions, 0.3);

    setTimeout(() => {
        TweenMax.staggerTo(".myClass1", animationDelay, tweenOptions, 0.3);
    }, animationDelay * 1000);

    setTimeout(() => {
        TweenMax.staggerTo(".myClass2", animationDelay, tweenOptions, 0.3);
    }, animationDelay * 2000);

    setTimeout(() => {
        TweenMax.staggerTo(".myClass3", animationDelay, tweenOptions, 0.3);
    }, animationDelay * 3000);

    setTimeout(() => {
        TweenMax.staggerTo(".myClass4", animationDelay, tweenOptions, 0.3);
    }, animationDelay * 4000);

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
    inView('#section8').once('enter', el => {
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