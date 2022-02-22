(function( $ ) {
	'use strict';

    var menu    = jQuery(".menu-toggle"),
        menu_close = jQuery('.sidebar-menu-close'),
        sidebar = jQuery('.sidebar-container');

    jQuery(menu).on('click', function() {
        jQuery(sidebar).addClass("active");
    });
    jQuery(menu_close).on('click', function() {
        jQuery(sidebar).removeClass("active");
    });

})( jQuery );
