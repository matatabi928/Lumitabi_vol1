<?php
function my_theme_styles() {
    $theme_dir = get_template_directory_uri() . '/Your Theme Name';

    wp_enqueue_style('style-main', $theme_dir . '/style.css');
    wp_enqueue_style('style-mobile', $theme_dir . '/stylesheets/style-mobile.css', array('style-main'));
    wp_enqueue_style('style-mobile-l', $theme_dir . '/stylesheets/style-mobile-l.css', array('style-main'));
    wp_enqueue_style('style-tablet', $theme_dir . '/stylesheets/style-tablet.css', array('style-main'));
    wp_enqueue_style('style-laptop', $theme_dir . '/stylesheets/style-laptop.css', array('style-main'));
}

add_action('wp_enqueue_scripts', 'my_theme_styles');
