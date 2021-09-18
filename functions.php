<?php

$widgets = [
    'widget-info.php'
];

foreach ($widgets as $w) {
    require_once(__DIR__ . '/assets/build/inc/' . $w);
}

add_action('after_setup_theme', 'lux_setup');
add_action('wp_enqueue_scripts', 'lux_scripts');
add_action('widgets_init', 'lux_register');



add_filter('nav_menu_link_attributes', 'add_anchor_class', 10, 3);
add_filter('nav_menu_css_class', 'add_class_li', 10, 3);

function lux_setup()
{
    register_nav_menu('menu-header', 'Меню в шапке');
    register_nav_menu('menu-footer', 'Меню в подвале');
    register_nav_menu('menu-pol', 'Меню для police');

    add_theme_support('custom-logo');
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
}


function add_class_li($classes, $item, $args)
{
    if (isset($args->li_class)) {
        $classes[] = $args->li_class;
    }
    return $classes;
}

function add_anchor_class($attr, $item, $args)
{
    if (isset($args->a_class)) {
        $attr['class'] = $args->a_class;
    }
    return $attr;
}

function lux_scripts()
{
    wp_enqueue_script(
        'js',
        _lux_assets_path('js/main.min.js'),
        [],
        '1.0',
        true
    );
    wp_enqueue_style(
        'lux-style',
        _lux_assets_path('css/main.css'),
        [],
        '1.0',
        'all'
    );
}

function lux_register()
{
    register_sidebar([
        'name'          => 'Cайдбар для Copy',
        'id'            => 'lux-copy',
        'before_widget' => '<div id="%1$s" class="paragraph  paragraph__copy">',
        'after_widget' => '</div>'
    ]);
    register_sidebar([
        'name'          => 'Cайдбар для адрес',
        'id'            => 'lux-adres',
        'before_widget' => null,
        'after_widget' => null
    ]);
    register_sidebar([
        'name'          => 'Cайдбар для почты',
        'id'            => 'lux-email',
        'before_widget' => null,
        'after_widget' => null
    ]);
    register_sidebar([
        'name'          => 'Cайдбар для телефона',
        'id'            => 'lux-phone',
        'before_widget' => null,
        'after_widget' => null
    ]);
    register_widget('lux_widget_info');
}

function _lux_assets_path($path)
{
    return get_template_directory_uri() . '/assets/build/' . $path;
}
