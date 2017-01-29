/*
 ______   ______     ______   __         ______     ______     ______     ______     ______     ______     __    __
/\__  _\ /\  ___\   /\__  _\ /\ \       /\  __ \   /\  __ \   /\  ___\   /\  ___\   /\  ___\   /\  __ \   /\ "-./  \
\/_/\ \/ \ \  __\   \/_/\ \/ \ \ \____  \ \ \/\ \  \ \ \/\ \  \ \___  \  \ \  __\   \ \ \____  \ \ \/\ \  \ \ \-./\ \
   \ \_\  \ \_____\    \ \_\  \ \_____\  \ \_____\  \ \_____\  \/\_____\  \ \_____\  \ \_____\  \ \_____\  \ \_\ \ \_\
    \/_/   \/_____/     \/_/   \/_____/   \/_____/   \/_____/   \/_____/   \/_____/   \/_____/   \/_____/   \/_/  \/_/

Version: 1.0
Author: James Tetley
Website: http://tetloose.com
Docs: https://github.com/tetloose/imageR
Repo: https://github.com/tetloose/imageR
Issues: https://github.com/tetloose/imageR/issues
FreeToUse: Yep
*/
(function( $ ) {
    $.fn.imageR = function(options) {
        var defaults = { small: '0', medium: '480', large: '1024' }
            options = $.extend(defaults, options),
            $imageR = jQuery(this),
            $mediaQuery = jQuery(window).width();
        function checkSize (elm, small, medium, large, isImg) {
            if ( $mediaQuery >= options.large ) {
                if (isImg) {
                    elm.attr('src', large );
                } else {
                    elm.css('background-image', 'url(' + large + ')');
                }
            } else if ( $mediaQuery >= options.medium ) {
                if (isImg) {
                    elm.attr('src', medium );
                } else {
                    elm.css('background-image', 'url(' + medium + ')');
                }
            } else if ( $mediaQuery >= options.small ) {
                if (isImg) {
                    elm.attr('src', small );
                } else {
                    elm.css('background-image', 'url(' + small + ')');
                }
            }
        }
        function init( elm ) {
            $imageR.each(function() {
                var $t = jQuery(this),
                    $small = $t.data('small'),
                    $medium = $t.data('medium'),
                    $large = $t.data('large'),
                    $isImage = false;

                if ($medium === undefined || $medium === null) {
                    $medium = $large;
                }

                if ($small === undefined || $small === null) {
                    $small = $medium;
                }

                if ( $t.is('img') ) {
                    $isImage = true;
                }

                checkSize( $t, $small, $medium, $large, $isImage );
            });
        }
        init();
        jQuery(window).on('resize', function() {
            $mediaQuery = jQuery(window).width();
            init();
        });
    };
}( jQuery ));
