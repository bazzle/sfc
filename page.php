<?php get_header(); ?>


<?php 
if ( have_posts() ) : 
    while ( have_posts() ) : the_post(); ?>

<?php
$bgcolor1 = get_field( "background_colour_1" );
$bgcolor2 = get_field( "background_colour_2" );
$image = get_field("hero_image");
$intro = get_field("page_intro" );
$asidecontent = get_field("aside_content");
$asidemain = get_field("aside_main");
$title = get_the_title();
$content = wpautop(get_the_content());
?>

    <article class="article">
        <?php include( locate_template('includes/section-hero-page.php') ) ?>


        <div class="panel panel--nospaced article__main">
            
            <div class="grid-space article__space-left"></div>

            <div class="article__share">
                <?php get_template_part('includes/component','share'); ?>
            </div>

            <div class="article__body">
                <div class="article__intro">
                    <?php echo $intro ?>
                </div>
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