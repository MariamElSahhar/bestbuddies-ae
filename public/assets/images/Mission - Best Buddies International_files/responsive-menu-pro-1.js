jQuery(document).ready(function($) {

    var ResponsiveMenuPro = {
        trigger: 'button#responsive-menu-pro-button',
        animationSpeed:500,
        breakpoint:471,        isOpen: false,
        activeClass: 'is-active',
        container: '#responsive-menu-pro-container',
        openClass: 'responsive-menu-pro-open',
        activeArrow: '▼',
        inactiveArrow: '▼',
        wrapper: '#responsive-menu-pro-wrapper',
        linkElement: '.responsive-menu-pro-item-link',
        subMenuTransitionTime:200,
        originalHeight: '',
        openMenu: function() {
            $(this.trigger).addClass(this.activeClass);
            $('html').addClass(this.openClass);
            $('.responsive-menu-pro-button-icon-active').hide();
            $('.responsive-menu-pro-button-icon-inactive').show();                $(this.container).removeClass('responsive-menu-pro-no-transition');                this.fadeMenuIn();
            this.isOpen = true;
        },
        closeMenu: function() {
            $(this.trigger).removeClass(this.activeClass);
            $('html').removeClass(this.openClass);
            $('.responsive-menu-pro-button-icon-inactive').hide();
            $('.responsive-menu-pro-button-icon-active').show();                this.fadeMenuOut();
            $("#responsive-menu-pro > li").removeAttr('style');
            this.isOpen = false;
        },        triggerMenu: function() {
            this.isOpen ? this.closeMenu() : this.openMenu();
        },
        triggerSubArrow: function(subarrow) {
            var sub_menu = $(subarrow).parent().siblings('.responsive-menu-pro-submenu');
            var self = this;                        var top_siblings = sub_menu.parents('.responsive-menu-pro-item-has-children').last().siblings('.responsive-menu-pro-item-has-children');
                        var first_siblings = sub_menu.parents('.responsive-menu-pro-item-has-children').first().siblings('.responsive-menu-pro-item-has-children');                        top_siblings.children('.responsive-menu-pro-submenu').slideUp(self.subMenuTransitionTime, 'linear').removeClass('responsive-menu-pro-submenu-open');                        top_siblings.each(function() {
                            $(this).find('.responsive-menu-pro-subarrow').first().html(self.inactiveArrow);
                            $(this).find('.responsive-menu-pro-subarrow').first().removeClass('responsive-menu-pro-subarrow-active');
                        });                        first_siblings.children('.responsive-menu-pro-submenu').slideUp(self.subMenuTransitionTime, 'linear').removeClass('responsive-menu-pro-submenu-open');
                        first_siblings.each(function() {
                            $(this).find('.responsive-menu-pro-subarrow').first().html(self.inactiveArrow);
                            $(this).find('.responsive-menu-pro-subarrow').first().removeClass('responsive-menu-pro-subarrow-active');
                        });
                if(sub_menu.hasClass('responsive-menu-pro-submenu-open')) {
                    sub_menu.slideUp(self.subMenuTransitionTime, 'linear',function() {
                        $(this).css('display', '');
                    }).removeClass('responsive-menu-pro-submenu-open');
                    $(subarrow).html(this.inactiveArrow);
                    $(subarrow).removeClass('responsive-menu-pro-subarrow-active');
                } else {
                    sub_menu.slideDown(self.subMenuTransitionTime, 'linear').addClass('responsive-menu-pro-submenu-open');
                    $(subarrow).html(this.activeArrow);
                    $(subarrow).addClass('responsive-menu-pro-subarrow-active');
                }
        },
        menuHeight: function() {
            return $(this.container).height();
        },
        menuWidth: function() {
            return $(this.container).width();
        },
        wrapperHeight: function() {
            return $(this.wrapper).height();
        },            fadeMenuIn: function() {
                $(this.container)
                    .fadeIn(this.animationSpeed);
            },
            fadeMenuOut: function() {
                $(this.container)
                    .fadeOut(this.animationSpeed, function() {
                        $(this).css('display', '');
                    });

            },
        init: function() {

            var self = this;
            $(this.trigger).on('click', function(e){
                e.stopPropagation();
                self.triggerMenu();
            });

            $(this.trigger).on( 'mouseup', function(){
                $(self.trigger).trigger('blur');
            });

            $('.responsive-menu-pro-subarrow').on('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                self.triggerSubArrow(this);
            });

            $(window).on( 'resize', function() {
                if($(window).width() >= self.breakpoint) {
                    if(self.isOpen){
                        self.closeMenu();
                    }
                    $('#responsive-menu-pro, .responsive-menu-pro-submenu').removeAttr('style');
                } else {                        $(self.container).addClass('responsive-menu-pro-no-transition');                }
            });                $(document).on('click', 'body', function (e) {
                    if($(window).width() < self.breakpoint) {
                        if(self.isOpen) {
                            if (
                                $(e.target).closest('#responsive-menu-pro-container').length ||
                                $(e.target).closest('#responsive-menu-pro-button').length
                            ) {
                                return;
                            }
                        }
                        self.closeMenu();
                    }
                });                $(window).scroll(function (e) {
                    if( $(window).width() < self.breakpoint ) {
                       var menuSearchBox = $( '.responsive-menu-pro-search-box' );
                       /* If focus is on search-box then menu will not be close. */
                       if( menuSearchBox && menuSearchBox.is( ':focus' ) ) {
                          return;
                       }
                       else if( self.isOpen ) {
                           self.closeMenu();
                       }
                    }
                });                $('.responsive-menu-pro-item-has-children > ' + this.linkElement).on('click', function(e) {
                    if($(window).width() < self.breakpoint) {
                        e.preventDefault();
                        self.triggerSubArrow(
                            $(this).children('.responsive-menu-pro-subarrow').first()
                        );
                    }
                });
             /* Desktop menu : hide on scroll down / show on scroll Up */            $(this.trigger).on( 'mousedown', function(e){
                e.preventDefault();
                e.stopPropagation();
            });            if (jQuery('#responsive-menu-pro-button').css('display') != 'none') {

                $('#responsive-menu-pro-button,#responsive-menu-pro a.responsive-menu-pro-item-link,#responsive-menu-pro-wrapper input').on( 'focus', function() {
                    $(this).addClass('is-active');
                    $('html').addClass('responsive-menu-pro-open');
                    $('#responsive-menu-pro li').css({"opacity": "1", "margin-left": "0"});
                });

                $('a,input,button').on( 'focusout', function( event ) {
                    if ( ! $(this).parents('#responsive-menu-pro-container').length ) {
                        $('html').removeClass('responsive-menu-pro-open');
                        $('#responsive-menu-pro-button').removeClass('is-active');
                    }
                });
            } else {                    $('#responsive-menu-pro li a.responsive-menu-pro-item-link').on( 'focus', function() {                        if ( $(this).parent('li').prev().children('.responsive-menu-pro-submenu').length ) {
                            $(this).parent('li').prev().children('.responsive-menu-pro-submenu').hide();
                        } else if ( $(this).parent('li').next().children('.responsive-menu-pro-submenu').length ) {
                            $(this).parent('li').next().children('.responsive-menu-pro-submenu').hide();
                        }
                    });

                    $('#responsive-menu-pro .responsive-menu-pro-submenu a.responsive-menu-pro-item-link').on( 'focusout', function() {
                        if ( $(this).is( $('#responsive-menu-pro .responsive-menu-pro-submenu a.responsive-menu-pro-item-link').last() ) ) {
                            $(this).parents('.responsive-menu-pro-submenu').hide();
                        }
                    });            }            $('#responsive-menu-pro a.responsive-menu-pro-item-link').on( 'keydown', function(event) {
                if ( [13,27,32,35,36,37,38,39,40].indexOf( event.keyCode) == -1) {
                    return;
                }
                var link = $(this);
                switch(event.keyCode) {
                    case 13:                        link.click();
                        break;
                    case 27:                        var dropdown = link.parent('li').parents('.responsive-menu-pro-submenu');
                        if ( dropdown.length > 0 ) {
                            dropdown.hide();
                            dropdown.prev().focus();
                        }
                        break;
                    case 32:                        var dropdown = link.parent('li').find('.responsive-menu-pro-submenu');
                        if ( dropdown.length > 0 ) {
                            dropdown.show();
                            dropdown.find('a, input, button, textarea').filter(':visible').first().focus();
                        }
                        break;
                    case 35:                        var dropdown = link.parent('li').find('.responsive-menu-pro-submenu');
                        if ( dropdown.length > 0 ) {
                            dropdown.hide();
                        }
                        $(this).parents('#responsive-menu-pro').find('a.responsive-menu-pro-item-link').filter(':visible').last().focus();
                        break;
                    case 36:                        var dropdown = link.parent('li').find('.responsive-menu-pro-submenu');
                        if( dropdown.length > 0 ) {
                            dropdown.hide();
                        }

                        $(this).parents('#responsive-menu-pro').find('a.responsive-menu-pro-item-link').filter(':visible').first().focus();
                        break;
                    case 37:
                        event.preventDefault();
                        event.stopPropagation();                        if ( link.parent('li').prevAll('li').filter(':visible').first().length == 0) {
                            link.parent('li').nextAll('li').filter(':visible').last().find('a').first().focus();
                        } else {
                            link.parent('li').prevAll('li').filter(':visible').first().find('a').first().focus();
                        }                        if ( link.parent('li').children('.responsive-menu-pro-submenu').length ) {
                            link.parent('li').children('.responsive-menu-pro-submenu').hide();
                        }
                        break;
                    case 38:                        var dropdown = link.parent('li').find('.responsive-menu-pro-submenu');
                        if( dropdown.length > 0 ) {
                            event.preventDefault();
                            event.stopPropagation();
                            dropdown.find('a, input, button, textarea').filter(':visible').first().focus();
                        } else {
                            if ( link.parent('li').prevAll('li').filter(':visible').first().length == 0) {
                                link.parent('li').nextAll('li').filter(':visible').last().find('a').first().focus();
                            } else {
                                link.parent('li').prevAll('li').filter(':visible').first().find('a').first().focus();
                            }
                        }
                        break;
                    case 39:
                        event.preventDefault();
                        event.stopPropagation();                        if( link.parent('li').nextAll('li').filter(':visible').first().length == 0) {
                            link.parent('li').prevAll('li').filter(':visible').last().find('a').first().focus();
                        } else {
                            link.parent('li').nextAll('li').filter(':visible').first().find('a').first().focus();
                        }                        if ( link.parent('li').children('.responsive-menu-pro-submenu').length ) {
                            link.parent('li').children('.responsive-menu-pro-submenu').hide();
                        }
                        break;
                    case 40:                        var dropdown = link.parent('li').find('.responsive-menu-pro-submenu');
                        if ( dropdown.length > 0 ) {
                            event.preventDefault();
                            event.stopPropagation();
                            dropdown.find('a, input, button, textarea').filter(':visible').first().focus();
                        } else {
                            if( link.parent('li').nextAll('li').filter(':visible').first().length == 0) {
                                link.parent('li').prevAll('li').filter(':visible').last().find('a').first().focus();
                            } else {
                                link.parent('li').nextAll('li').filter(':visible').first().find('a').first().focus();
                            }
                        }
                        break;
                    }
            });

        }
    };
    ResponsiveMenuPro.init();
});
