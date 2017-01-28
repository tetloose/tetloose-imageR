<?php

    add_theme_support( 'post-thumbnails' );

    add_action( 'after_setup_theme', 'tetloose_thumbnail_sizes' );
    function tetloose_thumbnail_sizes () {
        add_image_size( 'imageR_small', 480 );
        add_image_size( 'imageR_medium', 768 );
    }

?>
