(function( $ ) {

    $.fn.imageR = function() {

        var $imageR = $(this),
            $mediaQuery = $(window).width(),
            $mediaQuery__small = '0',
            $mediaQuery__medium = '480',
            $mediaQuery__large = '1024';

        function checkSize (elm, small, medium, large, isImg) {
            if ( $mediaQuery >= $mediaQuery__large ) {
                if (isImg) {
                    elm.attr('src', large );
                } else {
                    elm.css('background-image', 'url(' + large + ')');
                }
            } else if ( $mediaQuery >= $mediaQuery__medium ) {
                if (isImg) {
                    elm.attr('src', medium );
                } else {
                    elm.css('background-image', 'url(' + medium + ')');
                }
            } else if ( $mediaQuery >= $mediaQuery__small ) {
                if (isImg) {
                    elm.attr('src', small );
                } else {
                    elm.css('background-image', 'url(' + small + ')');
                }
            }
        }

        if ($imageR.length) {
            $imageR.each(function() {
                var $t = $(this),
                    $small = $t.data('small'),
                    $medium = $t.data('medium'),
                    $large = $t.data('large');

                if ( $t.is('img') ) {
                    checkSize($t, $small, $medium, $large, true);
                } else {
                    checkSize($t, $small, $medium, $large, false);
                }
            });

            $(window).on('resize', function() {
                $mediaQuery = $(window).width();
                $imageR.each(function() {
                    var $t = $(this),
                        $small = $t.data('small'),
                        $medium = $t.data('medium'),
                        $large = $t.data('large');

                    if ( $t.is('img') ) {
                        checkSize($t, $small, $medium, $large, true);
                    } else {
                        checkSize($t, $small, $medium, $large, false);
                    }
                });
            });
        }

    };

}( jQuery ));
