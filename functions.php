<?php
    add_action('admin_head', 'acf_cat_edit');

    function acf_cat_edit() {
      echo '<style>
        #edittag{
            max-width:1400px;
        }
      </style>';
    }
?>


<?php
function consoleLog($message) {
    echo '<script type="text/javascript">' .
      'console.log(' . '"' . $message . '"' . ');</script>';
}

function add_theme_scripts() {
    wp_enqueue_style( 'style', get_stylesheet_uri() );
    wp_enqueue_script( 'main_script', get_template_directory_uri() . '/build/scripts/main.js', array(), '1.0.0', true );
}

add_action( 'wp_enqueue_scripts', 'add_theme_scripts' );

add_theme_support('menus');
add_theme_support('post-thumbnails');
add_theme_support('widgets');

// register sidebars
function my_sidebars(){
    register_sidebar(
        array(
            'name' => 'Standard sidebar',
            'id' => 'standard-sidebar'
        )
    );
};
add_action('widgets_init','my_sidebars');

register_nav_menus(
    array(
        'main-menu' => 'Main menu location',
        'mobile-menu' => 'Mobile menu location',
        'footer-menu-1' => 'Footer menu 1',
        'footer-menu-2' => 'Footer menu 2'
    )
);


function the_field_without_wpautop( $field_name ) {
	remove_filter('acf_the_content', 'wpautop');
	the_field( $field_name );
	add_filter('acf_the_content', 'wpautop');
}


if( function_exists('acf_add_options_page') ) {
	acf_add_options_page(array(
		'page_title' 	=> 'Menus',
		'menu_title'	=> 'Menus',
		'menu_slug'	=> 'menus',
    ));
	acf_add_options_page(array(
		'page_title' 	=> 'Global',
		'menu_title'	=> 'Global',
		'menu_slug'	=> 'global',
	));
}


?>