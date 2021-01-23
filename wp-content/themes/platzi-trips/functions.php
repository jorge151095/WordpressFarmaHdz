<?php
function trips_init() {
	$labels = array(
			'name'              => _x( 'Trips', 'posttype general name', 'your-plugin-textdomain' ),
			'singular_name'     => _x( 'Trip', 'posttype general name', 'your-plugin-textdomain' ),
			'menu_name'         => _x( 'My trips', 'admin menu', 'your-plugin-textdomain' ),
			'name_admin_bar'    => _x( 'Trips', 'add new on admin bar', 'your-plugin-textdomain' ),
			'add_new'           => _x( 'Add new', 'trip', 'your-plugin-textdomain' ),
			'add_new_item'      => __( 'Add new trip', 'your-plugin-textdomain' ),
			'new_item'          => __( 'New trip', 'your-plugin-textdomain' ),
			'edit_item'         => __( 'Edit trip', 'your-plugin-textdomain' ),
			'view_item'         => __( 'View trip', 'your-plugin-textdomain' ),
			'all_items'         => __( 'All trips', 'your-plugin-textdomain' ),
			'search_items'      => __( 'search trips', 'your-plugin-textdomain' ),
			'parent_item_colon' => __( 'Trips parent', 'your-plugin-textdomain' ),
			'not_found'         => __( 'We havent found trips', 'your-plugin-textdomain' ),
			'not_found_in_trash'=> __( 'We havent found trips in trash', 'your-plugin-textdomain' ),
	);

	$args = array(
			'labels'            => $labels,
			'description'       => __('Description', 'your-plugin-textdomain'),
			'public'            => true,
			'public_queryable'  => true,
			'show_ui'           => true,
			'show_in_menu'      => true,
			'show_in_rest'      => true,
			'query_var'         => true,
			'rewrite'           => array( 'slug' => 'trip' ),
			'capability_type'   => 'post',
			'has_archive'       => true,
			'hierarchical'      => false,
			'menu_position'     => null,
			'menu_icon'         => 'dashicons-admin-multisite',
			'supports'          => array( 'title', 'editor', 'author', 'thumbnail' )
	);

	register_post_type( 'trip', $args );
}

add_action( 'init', 'trips_init' );

function routes_init() {
	$labels = array(
			'name'              => _x( 'Routes', 'posttype general name', 'your-plugin-textdomain' ),
			'singular_name'     => _x( 'Route', 'posttype general name', 'your-plugin-textdomain' ),
			'menu_name'         => _x( 'My routes', 'admin menu', 'your-plugin-textdomain' ),
			'name_admin_bar'    => _x( 'Routes', 'add new on admin bar', 'your-plugin-textdomain' ),
			'add_new'           => _x( 'Add new', 'route', 'your-plugin-textdomain' ),
			'add_new_item'      => __( 'Add new route', 'your-plugin-textdomain' ),
			'new_item'          => __( 'New route', 'your-plugin-textdomain' ),
			'edit_item'         => __( 'Edit route', 'your-plugin-textdomain' ),
			'view_item'         => __( 'View route', 'your-plugin-textdomain' ),
			'all_items'         => __( 'All routes', 'your-plugin-textdomain' ),
			'search_items'      => __( 'search routes', 'your-plugin-textdomain' ),
			'parent_item_colon' => __( 'Routes parent', 'your-plugin-textdomain' ),
			'not_found'         => __( 'We havent found routes', 'your-plugin-textdomain' ),
			'not_found_in_trash'=> __( 'We havent found routes in trash', 'your-plugin-textdomain' ),
	);

	$args = array(
			'labels'            => $labels,
			'description'       => __('Description', 'your-plugin-textdomain'),
			'public'            => true,
			'public_queryable'  => true,
			'show_ui'           => true,
			'show_in_menu'      => true,
			'show_in_rest'      => true,
			'query_var'         => true,
			'rewrite'           => array( 'slug' => 'route' ),
			'capability_type'   => 'post',
			'has_archive'       => true,
			'hierarchical'      => false,
			'menu_position'     => null,
			'menu_icon'         => 'dashicons-chart-line',
			'supports'          => array( 'title', 'editor', 'author', 'thumbnail' )
	);

	register_post_type( 'route', $args );
}

add_action( 'init', 'routes_init' );

function register_custom_fields()
{
	register_rest_field(
		'route',
		'time',
		array(
				'get_callback' => 'show_fields'
		)
	);
	register_rest_field(
		'trip',
		'destination',
		array(
				'get_callback' => 'show_fields'
		)
	);
}

add_action('rest_api_init', 'register_custom_fields');

function show_fields( $object, $field_name, $request ) {
  return get_post_meta( $object[ 'id' ], $field_name, true );
}
