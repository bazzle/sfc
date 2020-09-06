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








<?php
function recent_posts($atts = [], $content = null, $tag = '') {
    $sc_atts = shortcode_atts([
        'number_of_posts' => '',
        'post_type' => '',
        'tag' => ''
    ], $atts, $tag);
    query_posts(array(
        'orderby' => 'date',
        'order' => 'DESC' ,
        'showposts' => $sc_atts['number_of_posts'],
        'post_type' => $sc_atts['post_type'],
        'tag' => $sc_atts['tag']
    ));
    // template
	ob_start(); ?>
    <div class="post-list">
    <ul class="post-list__list">
    <?php
    if (have_posts()) :
        while (have_posts()) : the_post() ?>
            <?php $intro = get_field( "intro" ); ?>
            <li class="post-list__item">
                <h3 class="post-list__item__title">
                    <a href="<?php echo get_permalink() ?>"><?php echo get_the_title() ?></a>
                </h3>
            <?php if($intro) : ?>
                <p class="post-list__item__description">
                    <?php echo $intro ?>
                </p>
            <?php endif; ?>
            </li>
        <?php endwhile;
    endif; ?>
    </ul>
    </div>
    <?php wp_reset_query();
    return ob_get_clean();
} ?>





<?php
function recent_guide_posts($atts = [], $content = null, $tag = '') {
    $sc_atts = shortcode_atts([
        'number_of_posts' => '',
        'guide_category' => ''
    ], $atts, $tag);
    query_posts(array(
        'orderby' => 'date',
        'order' => 'DESC' ,
        'showposts' => $sc_atts['number_of_posts'],
        'post_type' => 'guide_posts',
        'guide_categories' => $sc_atts['guide_category']
    ));
    // template
	ob_start(); ?>
    <ul class="sidebar-list">
    <?php
    if (have_posts()) :
        while (have_posts()) : the_post() ?>
            <li class="sidebar-list__item block-card--horiz">
                <?php if ( has_post_thumbnail()) : ?>
                    <a class="block-card--horiz__image" href="<?php echo get_permalink() ?>"><img src="<?php echo get_the_post_thumbnail_url()?>"/></a>
                <?php endif; ?>
                <a class="block-card--horiz__title" href="<?php echo get_permalink() ?>"><?php echo get_the_title() ?></a>
            </li>
        <?php endwhile;
    endif; ?>
    </ul>
    <?php wp_reset_query();
    return ob_get_clean();
} ?>



<?php function ad_vertical() {
    ob_start(); ?>

    <div class="ad--vertical">
        <img class="ad__image" src="<?php echo get_stylesheet_directory_uri() ?>/assets/images/ads/ad-vertical.png" alt="Ad Horizontal">
    </div>

    <?php return ob_get_clean();
} ?>

<?php function ad_square() {
    ob_start(); ?>
    <div class="ad--vertical ad--vertical-square">
    <img class="ad__image" src="<?php echo get_stylesheet_directory_uri() ?>/assets/images/ads/ad-square.png" alt="Ad Horizontal">
    </div>

    <?php return ob_get_clean();
} ?>

<?php function ad_horizontal() {
    ob_start(); ?>

    <div class="ad--horizontal">
       <img class="ad__image" src="<?php echo get_stylesheet_directory_uri() ?>/assets/images/ads/ad-horizontal.png" alt="Ad Horizontal">
    </div>

    <?php return ob_get_clean();
} ?>


<?php
function shortcodes_init(){
    add_shortcode('recent_guide_posts', 'recent_guide_posts');
    add_shortcode('recent_posts', 'recent_posts');
    add_shortcode('new_section', 'new_section');
    add_shortcode('ad_horizontal', 'ad_horizontal');
    add_shortcode('ad_vertical', 'ad_vertical');
    add_shortcode('ad_square', 'ad_square');
}

add_action('init', 'shortcodes_init');
?>



<?php
    add_shortcode('wp_caption', 'fixed_img_caption_shortcode');
    add_shortcode('caption', 'fixed_img_caption_shortcode');
    function fixed_img_caption_shortcode($attr, $content = null) {
    // New-style shortcode with the caption inside the shortcode with the link and image tags.
    if ( ! isset( $attr['caption'] ) ) {
        if ( preg_match( '#((?:<a [^>]+>s*)?<img [^>]+>(?:s*</a>)?)(.*)#is', $content, $matches ) ) {
            $content = $matches[1];
            $attr['caption'] = trim( $matches[2] );
        }
    }
 
    // Allow plugins/themes to override the default caption template.
    $output = apply_filters('img_caption_shortcode', '', $attr, $content);
    if ( $output != '' )
        return $output;
 
    extract(shortcode_atts(array(
        'id'    => '',
        'align' => 'alignnone',
        'width' => '',
        'caption' => ''
    ), $attr));
 
    if ( 1 > (int) $width || empty($caption) )
        return $content;
 
    if ( $id ) $id = 'id="' . esc_attr($id) . '" ';
 
    return '<div ' . $id . 'class="wp-caption ' . esc_attr($align) . '" style="width: ' . $width . 'px">'
    . do_shortcode( $content ) . '<p class="wp-caption-text">' . $caption . '</p></div>';
    }

?>