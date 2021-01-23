<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'root' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'GHTxbopayvGLvAO2eigU/mRGkc338j8d7qidgNGXN8qa5P+MbqIVr7fdTzV+fbKFWMTgpVRv3kHaecCvh5Tj+w==');
define('SECURE_AUTH_KEY',  'kSy0YkB2YV6qSsBN4xuMI0BYSWvX+RbjByQwyW7UfVN2nHI4rOVJMvHjoglA0KylJqpKq5h2Bqj82lmuAcU/hw==');
define('LOGGED_IN_KEY',    'SmngE9c9/qGO/7tg2PMSa41UR29qRHXi+383d1c+SsKjUuCk8962NEcdh9HWnNdRCH0xGYtApAYqVNpTXXWmQA==');
define('NONCE_KEY',        'XoQap0ZwElLA2VN4huVzFpJDvlyqXr4nSAr2YWCRqaUzYaUZRPaKzbLqwaK4jYjBFt02N769o2147yJyoFxPnA==');
define('AUTH_SALT',        't5c/m2fRVoCq/7OWDtIZEXhH+p1cyNlsPaxzvP5idQ5bvhRn7rCR0W+pxtg0+NXWoylw/G8Pz1/lxbqturhTDw==');
define('SECURE_AUTH_SALT', '420kbc2u9LYBvDYccfAe5A38KW10TacOdokMmnpmj1RBv7mjKaznXAPEPw3Bvl7LAoRu4POh6JOO2AS1JH+EQg==');
define('LOGGED_IN_SALT',   '9su5d46O1hViM7c1usiAhsNb1gAY5nJSbuogkb0uMAVxzBcWFw8HOBEeMlceuZY8rHGmBQcEIZgLfeI3wZz1uQ==');
define('NONCE_SALT',       'WYa96kmeKfJ7J8wkVAqSXFzbi89/X9RlpvOEtdQptziNI8Lv2q+e/Jv3O/WChXbwUYLxwIzcIhjsFBrI+vE9Cg==');

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';




/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
