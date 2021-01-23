<?php
  /*
  Plugin Name:  Platzi plugin
  Plugin URI:   https://developer.wordpress.org/plugins/the-basics/
  Description:  Plugin to connect CPT trip
  Version:      1.0
  Author:       jorgeahg
  Author URI:   https://github.com/jorge151095/
  License:      GPL2
  License URI:  https://www.gnu.org/licenses/gpl-2.0.html
  Text Domain:  platziplugin
  Domain Path:  /languages
  */

function add_role_viajero()
{
    remove_role( 'traveler' );
    add_role(
        'traveler',
        'Traveler',
        [
            'read'         => true,
            'edit_posts'   => true,
            'upload_files' => true,
            'publish_posts' => true,
            'edit_published_posts' => true,
            'delete_published_posts' => true,
        ]
    );
}
