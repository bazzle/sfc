<?php get_header(); ?>


<?php 
if ( have_posts() ) : 
    while ( have_posts() ) : the_post(); ?>

<?php
$bgcolor1 = get_field( "background_colour_1" );
$bgcolor2 = get_field( "background_colour_2" );
$intro = get_field("intro" );
$image = get_field("main_image");
$asidecontent = get_field("aside_content");
$asidemain = get_field("aside_main");
$title = get_field("title");
$content = wpautop( get_the_content() );
if (empty($title)){
    $title = get_the_title();
}
?>

    <article class="article">
        <?php include( locate_template('includes/section-hero-standard.php') ) ?>


        <div class="panel panel--nospaced article__main">
            
            <div class="grid-space article__space-left"></div>

            <div class="article__share">
                <?php get_template_part('includes/component','share'); ?>
            </div>

            <div class="article__body">
                <?php echo $content; ?>
            </div>
            <aside class="article__asidecontent">
                <?php echo $asidecontent; ?>
            </aside>
            <aside class="article__asidemain">
                <?php echo $asidemain; ?>
            </aside>

            <div class="grid-space article__space-right"></div>

        </div>
    </article>

    <?php endwhile; 
endif; 
?>


<?php get_template_part('includes/component', 'backtop'); ?>
<?php get_footer(); ?>