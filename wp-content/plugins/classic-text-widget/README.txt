=== Plugin Name ===
Contributors: vfontj, carasmo
Tags: text widget, text, classic text widget,
Requires at least: 4.8
Tested up to: 5.2
Stable tag: 1.0.2
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

The classic pre-WordPress version 4.8 text widget

== Description ==

Brings back the classic WordPress text widget without TinyMCE. This is based on the code from WordPress Ver. 4.7.5

Functionality is exactly the same as the pre-version 4.8 text widget. Additional default functionality includes shortcode execution and custom class filter.

Note: This widget uses PHP namespaces to prevent conflicts with other widgets of a similar nature. PHP namespaces are only supported in PHP Version 5.3.0 and higher. If your site uses a PHP version earlier than 5.3.0, do not install this widget unless your PHP version is upgraded first.


== Installation ==

1. Activate the plugin through the 'Plugins' menu in WordPress



== Frequently Asked Questions ==

= Do the original text widget filters work with the Classic Text Widget? =

Yes and no. Filters that apply to the widget title remain the same to maintain compatibility across WordPress. Filters that apply to to the widget's content now use add_filter('classic_widget_text', 'my_function')

= Does the plugin support shortcodes? =

Yes, out of the box. To disable shortcode support, add remove_filter( 'classic_widget_text', 'do_shortcode' ) to your theme's function file.

= Does the plugin directly execute PHP? =

No, it does not directly support executing PHP. The widget does support shortcodes however. If you want to execute PHP in this widget, write your code as a shortcode and it will run.

= I have a lot of text widgets on my site, is there a way to bulk transfer the content from the new WordPress text widget and place it into the Classic Text Widget? =

Yes, but you have to be very careful and do it with SQL. See this post for details about how to <a href="https://christinacreativedesign.com/how-to-bulk-replace-the-4-8-wordpress-text-widget-with-the-classic-text-widget/" target="_blank">bulk replace</a>.

== Screenshots ==

1. Classic Text Widget on WordPress Admin Appearance/Widgets menu
2. Classic Text Widget added to Primary Sidebar


== Changelog ==

= 1.0.2 =
Bumped "Tested up to" tag

= 1.0.1 =
Added filter so you can provide your own custom class for the widget. If you choose not to create your own class, the default secondary class is custom-classic-textwidget.

Usage:

add_filter( 'classic_text_widget_class', 'my_classic_text_widget_class' );
function my_classic_text_widget_class( $class ) {
    return 'my_classic_text_widget_class';
}

= 1.0.0 =
* Initial commit based on WordPress 4.7.5 Text Widget and plugin conversion by carasmo
* Restores the pre 4.8 Classic WordPress text widget just like the good old days.
