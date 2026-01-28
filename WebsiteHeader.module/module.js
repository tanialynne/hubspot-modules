var duration = 200;

jQuery('.business-has-submenu')
    .on('mouseenter', function() {
    jQuery('.business-submenu', this).first().stop().css({ display: 'block' }).animate({ opacity: '1' }, duration);
})
    .on('mouseleave', function() {
    jQuery('.business-submenu', this).first().stop().animate({ opacity: '0' }, duration, function() {
        jQuery(this).css({ display: 'none' });
    });
});

var ffmn_title = jQuery(".business-header__mobile-nav__mmenu").data('navigation-title');
var ffmn_position = jQuery(".business-header__mobile-nav__mmenu").data('position');
var ffmn_content = jQuery("#business-header__mobile-nav__mmenu");

if (ffmn_content.length) {

    new Mmenu("#business-header__mobile-nav__mmenu",{
        "extensions": ["pagedim-black", "fx-menu-slide", "position-"+ffmn_position+"" ],
        "navbar": {
            "title": ffmn_title
        },
        "navbars": [ {
            content: ['prev', 'breadcrumbs', 'close']
        },
                   ],

    }, {

    });

}

var ffsf_content = jQuery("#business-header__icons--search__mmenu");

if (ffsf_content.length) {

    new Mmenu("#business-header__icons--search__mmenu",{
        "extensions": [ "position-top" ],
        "navbars": [ {
            content: ['close']
        },
                   ],
    }, {

    });

}

for (var i = 1; i < 99; i++) {

    var menu_item = jQuery(".mega-menu-"+i+"");
    var mega_menu = jQuery(".business-mega-menu.mega-menu-"+i+"");

    mega_menu.remove();
    menu_item.parents('.business-menu-item').addClass('business-mega-menu-item');
    menu_item.parents('.business-menu-item').find('.business-submenu').remove();
    menu_item.parents('.business-menu-item').append(mega_menu);

}

jQuery('.business-menu-item')
    .on('mouseenter', function() {
    if (jQuery('.business-menu-item').children('.business-mega-menu').length) {
        jQuery('.business-mega-menu', this).first().stop().css({ display: 'block' }).animate({ opacity: '1' }, duration);
    }
})
    .on('mouseleave', function() {
    if (jQuery('.business-menu-item').children('.business-mega-menu').length) {
        jQuery('.business-mega-menu', this).first().stop().animate({ opacity: '0' }, duration, function() {
            jQuery(this).css({ display: 'none' });
        });
    }
});


var hsSearch = function(_instance) {
    var TYPEAHEAD_LIMIT = 3;
    var searchTerm = '',
        searchForm = _instance,
        searchField = _instance.querySelector('.hs-search-field__input'),
        searchResults = _instance.querySelector('.hs-search-field__suggestions'),
        searchOptions = function() {
            var formParams = [];
            var form = _instance.querySelector('form');
            for (
                var i = 0;
                i < form.querySelectorAll('input[type=hidden]').length;
                i++
            ) {
                var e = form.querySelectorAll('input[type=hidden]')[i];
                if (e.name !== 'limit') {
                    formParams.push(
                        encodeURIComponent(e.name) + '=' + encodeURIComponent(e.value)
                    );
                }
            }
            var queryString = formParams.join('&');
            return queryString;
        };

    var debounce = function(func, wait, immediate) {
        var timeout;
        return function() {
            var context = this,
                args = arguments;
            var later = function() {
                timeout = null;
                if (!immediate) {
                    func.apply(context, args);
                }
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait || 200);
            if (callNow) {
                func.apply(context, args);
            }
        };
    },
        emptySearchResults = function() {
            searchResults.innerHTML = '';
            searchField.focus();
            searchForm.classList.remove('hs-search-field--open');
        },
        fillSearchResults = function(response) {
            var items = [];
            items.push(
                "<li id='results-for'>Results for \"" + response.searchTerm + '"</li>'
            );
            response.results.forEach(function(val, index) {
                items.push(
                    "<li id='result" +
                    index +
                    "'><a href='" +
                    val.url +
                    "'>" +
                    val.title +
                    '</a></li>'
                );
            });

            emptySearchResults();
            searchResults.innerHTML = items.join('');
            searchForm.classList.add('hs-search-field--open');
        },
        getSearchResults = function() {
            var request = new XMLHttpRequest();
            var requestUrl =
                '/_hcms/search?&term=' +
                encodeURIComponent(searchTerm) +
                '&limit=' +
                encodeURIComponent(TYPEAHEAD_LIMIT) +
                '&autocomplete=true&analytics=true&' +
                searchOptions();

            request.open('GET', requestUrl, true);
            request.onload = function() {
                if (request.status >= 200 && request.status < 400) {
                    var data = JSON.parse(request.responseText);
                    if (data.total > 0) {
                        fillSearchResults(data);
                        trapFocus();
                    } else {
                        emptySearchResults();
                    }
                } else {
                    console.error('Server reached, error retrieving results.');
                }
            };
            request.onerror = function() {
                console.error('Could not reach the server.');
            };
            request.send();
        },
        trapFocus = function() {
            var tabbable = [];
            tabbable.push(searchField);
            var tabbables = searchResults.getElementsByTagName('A');
            for (var i = 0; i < tabbables.length; i++) {
                tabbable.push(tabbables[i]);
            }
            var firstTabbable = tabbable[0],
                lastTabbable = tabbable[tabbable.length - 1];
            var tabResult = function(e) {
                if (e.target == lastTabbable && !e.shiftKey) {
                    e.preventDefault();
                    firstTabbable.focus();
                } else if (e.target == firstTabbable && e.shiftKey) {
                    e.preventDefault();
                    lastTabbable.focus();
                }
            },
                nextResult = function(e) {
                    e.preventDefault();
                    if (e.target == lastTabbable) {
                        firstTabbable.focus();
                    } else {
                        tabbable.forEach(function(el) {
                            if (el == e.target) {
                                tabbable[tabbable.indexOf(el) + 1].focus();
                            }
                        });
                    }
                },
                lastResult = function(e) {
                    e.preventDefault();
                    if (e.target == firstTabbable) {
                        lastTabbable.focus();
                    } else {
                        tabbable.forEach(function(el) {
                            if (el == e.target) {
                                tabbable[tabbable.indexOf(el) - 1].focus();
                            }
                        });
                    }
                };
            searchForm.addEventListener('keydown', function(e) {
                switch (e.which) {
                    case 9:
                        tabResult(e);
                        break;
                    case 27:
                        emptySearchResults();
                        break;
                    case 38:
                        lastResult(e);
                        break;
                    case 40:
                        nextResult(e);
                        break;
                }
            });
        },
        isSearchTermPresent = debounce(function() {
            searchTerm = searchField.value;
            if (searchTerm.length > 2) {
                getSearchResults();
            } else if (searchTerm.length == 0) {
                emptySearchResults();
            }
        }, 250),
        init = (function() {
            searchField.addEventListener('input', function(e) {
                if (
                    e.which != 9 &&
                    e.which != 40 &&
                    e.which != 38 &&
                    e.which != 27 &&
                    searchTerm != searchField.value
                ) {
                    isSearchTermPresent();
                }
            });
        })();
};

if (
    document.attachEvent
    ? document.readyState === 'complete'
    : document.readyState !== 'loading'
) {
    var searchResults = document.querySelectorAll('.hs-search-field');
    Array.prototype.forEach.call(searchResults, function(el) {
        var hsSearchModule = hsSearch(el);
    });
} else {
    document.addEventListener('DOMContentLoaded', function() {
        var searchResults = document.querySelectorAll('.hs-search-field');
        Array.prototype.forEach.call(searchResults, function(el) {
            var hsSearchModule = hsSearch(el);
        });
    });
}

"use strict";

var sticky = jQuery('.business-header').data('sticky');

var delay = 0;
var delay1 = 100;

var fired = 0;
var fired1 = 0;
var fired2 = 0;

var fired_sp = 0;
var fired1_sp = 0;
var fired2_sp = 0;


function stickyNavigation() {

    if (jQuery('.business-sticky-header').length) {

        var offset_top = jQuery('.business-header').offset().top;
        var outer = jQuery('.business-header').outerHeight();

        var distance = parseInt(offset_top) + parseInt(delay) + parseInt(outer) ;
        var distance1 = parseInt(offset_top) + parseInt(delay1) + parseInt(outer) ;
        var distance2 = parseInt(offset_top) + parseInt(delay1+100) + parseInt(outer) ;

        var scroll_top = jQuery(window).scrollTop();

        if (scroll_top > distance && fired == '0') {

            jQuery('.business-header').addClass('business-sticky-header-active');

            fired = '1';

        } else if (scroll_top < distance && fired == '1') {

            jQuery('.business-header').removeClass('business-sticky-header-active');


            fired = '0';

        }

        if (scroll_top > distance1 && fired1 == '0') {

            jQuery('.business-header').addClass('business-sticky-header-active1');

            fired1 = '1';

        } else if (scroll_top < distance1 && fired1 == '1') {

            jQuery('.business-header').removeClass('business-sticky-header-active1');


            fired1 = '0';

        }

        if (scroll_top > distance2 && fired2 == '0') {

            jQuery('.business-header').addClass('business-sticky-header-active2');

            fired2 = '1';

        } else if (scroll_top < distance2 && fired2 == '1') {

            jQuery('.business-header').removeClass('business-sticky-header-active2');


            fired2 = '0';

        }

    }

};

if(sticky) {

    jQuery(window).scroll(function() {

        stickyNavigation();

    });

}