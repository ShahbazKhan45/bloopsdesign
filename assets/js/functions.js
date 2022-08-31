$(document).ready(function () {

    AOS.init();
    AOS.init({ disable: 'mobile' });
    $(".menu-btn").click(function () {
        $(".mobile-In").fadeIn();
        $(".mobile-In").css("transform", "translateX(0px)");
    });
    $(".close-btn").click(function () {
        $(".mobile-In").fadeOut();
        $(".mobile-In").css("transform", "translateX(2000px)");
    });
    // Start Counter======================================

    (function ($) {
        $.fn.countTo = function (options) {
            options = options || {};

            return $(this).each(function () {
                // set options for current element
                var settings = $.extend({}, $.fn.countTo.defaults, {
                    from: $(this).data('from'),
                    to: $(this).data('to'),
                    speed: $(this).data('speed'),
                    refreshInterval: $(this).data('refresh-interval'),
                    decimals: $(this).data('decimals')
                }, options);

                // how many times to update the value, and how much to increment the value on each update
                var loops = Math.ceil(settings.speed / settings.refreshInterval),
                    increment = (settings.to - settings.from) / loops;

                // references & variables that will change with each update
                var self = this,
                    $self = $(this),
                    loopCount = 0,
                    value = settings.from,
                    data = $self.data('countTo') || {};

                $self.data('countTo', data);

                // if an existing interval can be found, clear it first
                if (data.interval) {
                    clearInterval(data.interval);
                }
                data.interval = setInterval(updateTimer, settings.refreshInterval);

                // initialize the element with the starting value
                render(value);

                function updateTimer() {
                    value += increment;
                    loopCount++;

                    render(value);

                    if (typeof (settings.onUpdate) == 'function') {
                        settings.onUpdate.call(self, value);
                    }

                    if (loopCount >= loops) {
                        // remove the interval
                        $self.removeData('countTo');
                        clearInterval(data.interval);
                        value = settings.to;

                        if (typeof (settings.onComplete) == 'function') {
                            settings.onComplete.call(self, value);
                        }
                    }
                }

                function render(value) {
                    var formattedValue = settings.formatter.call(self, value, settings);
                    $self.text(formattedValue);
                }
            });
        };

        $.fn.countTo.defaults = {
            from: 0,               // the number the element should start at
            to: 0,                 // the number the element should end at
            speed: 1000,           // how long it should take to count between the target numbers
            refreshInterval: 100,  // how often the element should be updated
            decimals: 0,           // the number of decimal places to show
            formatter: formatter,  // handler for formatting the value before rendering
            onUpdate: null,        // callback method for every time the element is updated
            onComplete: null       // callback method for when the element finishes updating
        };

        function formatter(value, settings) {
            return value.toFixed(settings.decimals);
        }
    }(jQuery));

    jQuery(function ($) {

        // start all the timers
        $('.timer').each(count);

        // restart a timer when a button is clicked
        $(window).scroll(function () {
            console.log($(window).scrollTop());
            if ($(window).scrollTop() > 300 && $(window).scrollTop() < 850) {
                $('.timer').each(count);
            }
        });

        function count(options) {
            var $this = $(this);
            options = $.extend({}, options || {}, $this.data('countToOptions') || {});
            $this.countTo(options);
        }
    });
    // End Counter======================================================

    //owlcarousel
    $('.banner-slider').owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        margin: 0,
        responsiveClass: true,
        autoplay: true,
        autoplayTimeout: 8000,
        autoplaySpeed: 800,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            1000: {
                items: 1,
            },
            360: {
                items: 1
            }
        }
    });
    $('.cus-logo').owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        margin: 0,
        responsiveClass: true,
        autoplay: true,
        autoplayTimeout: 8000,
        autoplaySpeed: 800,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 3,
            },
            1000: {
                items: 5,
            },
            360: {
                items: 3
            }
        }
    });
    $('.tabs-carousel').owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        margin: 15,
        responsiveClass: true,
        autoplay: true,
        autoplayTimeout: 8000,
        autoplaySpeed: 800,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            1000: {
                items: 1,
            },
            360: {
                items: 1
            }
        }
    });

    // Arrow Btn goto up
    var scrollBtn = $('#goto-top');
    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            scrollBtn.addClass('show');
        } else {
            scrollBtn.removeClass('show');
        }
    });
    scrollBtn.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, '300');
    });

    // Tabs Click To Remove active class 
    $(".tab").click(function () {
        $(".tab").addClass("active"); // instead of this do the below 
        $(".tab").removeClass("active");
        // $(this).addClass("active");   
    });
    // remove active classs navigation
    var path = window.location.href; // because the 'href' property of the DOM element is the absolute path
    $('#menu-list .menu li a').each(function () {
        if (this.href === path) {
            $(this).addClass('active');
            e.preventDefault();
        }
    });
    // Tabs Click To Remoe active class End

    $('#list-btn').click(function () {

        document.getElementById('list-btn').style.display = "none";
        document.getElementById('cross').style.display = "block";
        document.getElementById('menu-list').style.left = "0px";
        // document.getElementById('form-cross').style.display = "none";
        // document.getElementById('cpyRight-cross').style.display = "none";
    });
    $('#cross').click(function () {

        document.getElementById('list-btn').style.display = "block";
        document.getElementById('cross').style.display = "none";
        document.getElementById('menu-list').style.left = "150%";
        // document.getElementById('form-cross').style.display = "block";
        // document.getElementById('cpyRight-cross').style.display = "none";
    });


    // $('.lazy').lazy();

    // Validation Form******************************************
    $(".validate-popupform").validate({});
    // End Validation***********************************






    // $('.authors-quote').owlCarousel({
    //     loop: true,
    //     dots: false,
    //     margin: 15,
    //     responsiveClass: true,
    //     autoplay: true,
    //     autoplayTimeout: 8000,
    //     autoplaySpeed: 800,
    //     nav: true,
    //     lazyLoad: true,
    //     // navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
    //     navText: ["<i class='fal fa-long-arrow-left'></i>", "<i class='fal fa-long-arrow-right'></i>"],
    //     responsive: {
    //         0: {
    //             items: 1,
    //         },
    //         600: {
    //             items: 2,
    //         },
    //         1000: {
    //             items: 3,
    //         },
    //         360: {
    //             items: 3
    //         }
    //     }
    // });




    /*PORTFOLIO*/
    // $('.various').click(function () {
    //     var leadprice = $(this).attr('name');
    //     $(".popupform .leadprice").val(leadprice)
    // });


    // change is-checked class on buttons
    $('.button-group').each(function (i, buttonGroup) {
        var $buttonGroup = $(buttonGroup);
        $buttonGroup.on('click', 'button', function () {
            $buttonGroup.find('.is-checked').removeClass('is-checked');
            $(this).addClass('is-checked');
        });
    });

    //****************************
    // Isotope Load more button
    //****************************
    var initShow = 8; //number of items loaded on init & onclick load more button
    var counter = initShow; //counter for load more button
    var iso = $container.data('isotope'); // get Isotope instance

    // loadMore(initShow); //execute function onload //Error In console this is why committed

    function loadMore(toShow) {
        $container.find(".hidden").removeClass("hidden");

        var hiddenElems = iso.filteredItems.slice(toShow, iso.filteredItems.length).map(function (item) {
            return item.element;
        });
        $(hiddenElems).addClass('hidden');
        $container.isotope('layout');

        //when no more to load, hide show more button
        if (hiddenElems.length == 0) {
            jQuery("#showMore").hide();
        } else {
            jQuery("#showMore").show();
        };

    }





    //when filter button clicked
    $("#filters").click(function () {
        $(this).data('clicked', true);

        loadMore(initShow);
    });

    $('.filter-dis').click(function () {
        $('.zz button').prop("disabled", true);
    });

    $('.filter-enb').click(function () {
        $('.zz button').removeAttr("disabled");
    });



    $('.filter-disable').on('click', function () {
        $('.zzz button').addClass('disable_element');
    });




    /*
    end*/


});


