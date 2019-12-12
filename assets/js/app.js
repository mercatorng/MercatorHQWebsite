(function ($) {
    'use strict';

    var resizeId;

    $('#menu-controller').on('click', function () {

        var wrapperctrl = $(this);
        var wrapper = $('#menu-wrapper');

        if ($(wrapper).hasClass('open-menu') && $(wrapperctrl).hasClass('open-menu')) {
            $("#menu-wrapper,#menu-controller").removeClass('open-menu').addClass('close-menu');
        } else {
            $("#menu-wrapper,#menu-controller").removeClass('close-menu').addClass('open-menu');
        }

    });

    /*  $(document).ready(function() {
        $('.red, .purple, .orange').each(function() {
          $(this).appear();

          $(this).on('appear', function() {
            $(this).addClass('appear');
          });

          $(this).on('disappear', function() {
            $(this).removeClass('appear');
          });
        });
      });
    */

    $('.animate-layer').appear(function () {
        $(this).addClass('appeared');
    });

    function whichTransitionEndEvent() {
        var t,
            el = document.createElement("fakeelement");

        var transitions = {
            "transition": "transitionend",
            "OTransition": "oTransitionEnd",
            "MozTransition": "transitionend",
            "WebkitTransition": "webkitTransitionEnd"
        }

        for (t in transitions) {
            if (el.style[t] !== undefined) {
                return transitions[t];
            }
        }
    }

    function whichAnimationEndEvent() {
        var t,
            el = document.createElement("fakeelement");

        var transitions = {
            "transition": "animationend",
            "OTransition": "oAnimationEnd",
            "MozTransition": "animationend",
            "WebkitTransition": "webkitAnimationEnd"
        }

        for (t in transitions) {
            if (el.style[t] !== undefined) {
                return transitions[t];
            }
        }
    }

    var transitionEndEvent = whichTransitionEndEvent();
    var animationEndEvent = whichAnimationEndEvent();

    var smoothStateOptions = {
        debug: true,
        // prefetch: true,
        // cacheLength: 2,
        onAfter: function ($container, $newContent) {
            swiperInit();
        },
        onStart: {
            duration: 1000, // Duration of our animation
            render: function ($container) {
                // Add your CSS animation reversing class
                // $container.addClass('is-exiting');
                // Restart your animation
                $('#main').data('smoothState').restartCSSAnimations();
            }
        },
        onReady: {
            duration: 0,
            render: function ($container, $newContent) {
                // Remove your CSS animation reversing class
                // $container.removeClass('is-exiting');
                // Inject the new content
                $container.html($newContent);
            }
        }
    };

})(jQuery);