/**
 * Global menu behaviour.
 */

(function (Drupal, $) {
  'use strict';

  Drupal = Drupal || {};

  /**
   * The main menu behavior object.
   */
  Drupal.toollMenu = function ($links, options) {

    var defaults = {
      menuBehaviour: 'click' // or mouseover.
    };

    /**
     * The timer ID for for menu item to hide.
     *
     * @type {number}
     */
    this.timeId = 0;

    /**
     * Reference to self.
     *
     * @type {Drupal}
     * @private
     */
    var _self = this;

    /**
     * Helper method to show/hide meganav item link content.
     *
     * @param $link
     */
    var showHide = function ($link) {
      if ($link.parent('li').hasClass('open')) {
        $link.parent('li').removeClass('open');
      }
      else {
        $links.each(function () {
          $(this).parent('li').removeClass('open');
        });
        $link.parent('li').addClass('open');
      }
    };

    /**
     * Toggle mobile navigation
     */
    var mobileNavToggle = function () {
      $('.mobilenavtoggle').click(function () {
        $('#mobile-navigation').toggleClass('open');
        $('html, body').toggleClass('no-scroll');
      });
    };

    /**
     * Mobile navigation accordion.
     */
    var mobileNavAccordion = function () {

      var submenuOpen = true;

      $('.subnav-toggle').on('click', function (e) {
        var $expandable = $(this).closest('.menu-item--expanded');
        var $parents = $expandable.parents('.menu-item--expanded');

        // Adding class to parent li
        $expandable.toggleClass('expanded');

        // If this is nested menu
        if ($parents.hasClass('expanded')) {
          $parents.removeClass('expanded').addClass('parent');
        }

        // If parent is clicked - remove all classes in nested elements
        if ($expandable.hasClass('parent')) {
          $expandable.removeClass('parent').find('li').removeClass('expanded parent');
        }

        // If this is nested menu
        if ($parents.hasClass('parent')) {
          $parents.removeClass('parent').addClass('expanded');
        }

        if ($expandable.hasClass('expanded')) {
          $parents.removeClass('expanded parent');
          if ($parents.length > 0) {
            $parents.addClass('parent');
          }
        }

        // Removing expanded and parent classes on all child elements when
        // parent element is clicked
        if ($expandable.hasClass('parent')) {
          $(this).find('li').removeClass('expandable parent');
        }

        // Checking if submenu is open and adding / removing class from parent
        // nav and wrapper
        submenuOpen = $(this).closest('nav').find('.expanded, .parent').length > 0;
        $('.region-mobile-navigation').toggleClass('open', submenuOpen);
        $(this).closest('nav').toggleClass('open', submenuOpen);
      });
    };

    /**
     * Public method to initialize menu behaviour.
     */
    this.init = function () {

      var params = $.extend(true, defaults, options);

      switch (params.menuBehaviour) {
        case 'mouseover':
          $links.on('mouseover', function (e) {
            showHide($(this));

            $links.on('mouseleave', function () {
              _self.timeId = setTimeout(function () {
                showHide($(this));
              }, 500);
            });

            e.preventDefault();
            clearTimeout(_self.timeId);

          });
          break;

        case 'click':
          $links.on('click', function (e) {
            e.preventDefault();
            showHide($(this));
          });

          $('body').on('click touchstart', function (e) {
            // Hide the mega menu if clicking outside of the mega menu content.
            if ($(e.target).closest('li.open').length === 0) {
              $links.each(function () {
                $(this).parent('li').removeClass('open');
              });
            }

          });
          break;
      }
      // Initialize mobile nav open / close toggle
      mobileNavToggle();
      // Initialize mobile nav accordion behavior
      mobileNavAccordion();


    };

  };

  /**
   *
   * @type {{attach: Drupal.behaviors.toollMenu.attach}}
   */
  Drupal.behaviors.toollMenu = {
    attach: function (context, settings) {
      var $menuContainer = $('#block-tooll-main-menu');

      $menuContainer.once('toollMenu').each(function () {
        var $links = $('.menu-level-0 > li > .link-container', $(this));
        if ($links.length > 0) {
          var menu = new Drupal.toollMenu($links);
          menu.init();
        }
      });
    }
  };
})(Drupal, jQuery);
