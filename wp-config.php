<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'my_course' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'v7l_Q St9!T3Qs>FkHt0I||bR![ 7tK_q *[.1Y-~{$]qS;?K@ )]Lp0zo(0[X!<' );
define( 'SECURE_AUTH_KEY',  '_gg/C(.&`&XrYz?@-h(}$#rf,`V~ZJZCKSsm^u:l7*X`ts;CgvR|Lp+ls__nO:?W' );
define( 'LOGGED_IN_KEY',    'r hGa{ZUvuNMgtvJ}rX:N*Rs?(xTuzEzDNlky&> LJ2LKv5B^LRy4b$8u.x8WEQP' );
define( 'NONCE_KEY',        '{GrTkIK<T^11]3BRL?dN,a.TV47Rf#I]e.`Wyg&lbPGKAnFkmUQp/Z,(@`hzA@q|' );
define( 'AUTH_SALT',        '6p)h@AG9[K/[M>abakCUqxhww8xBWBPk=^RZQU9aj$Rsjd]?+GzVaAj0z~c@~[I)' );
define( 'SECURE_AUTH_SALT', 'UE%/qvO5-NUKh;XxXVjuB34h$6g 8B;oc)6bT>*Af6]h=8td)dLJ`jp&|r2[upl?' );
define( 'LOGGED_IN_SALT',   'l8m@]IEM/{xjod32b/FXI}PVtFav1Z+sD0?L}T-iSWZ%X1.qYFS:!JTugc./D#`;' );
define( 'NONCE_SALT',       ':JwomwvkH^o?p~U*P?l~|(8?(7 _zo0]a)_E3/@8ig%[*G,hY{Wq6]n*@N+KVLN ' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
