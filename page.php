<?php get_header(); ?>


<?php 
if ( have_posts() ) : 
    while ( have_posts() ) : the_post(); ?>

<?php
$bgcolor1 = get_field( "background_colour_1" );
$bgcolor2 = get_field( "background_colour_2" );
$image = get_field("hero_image");
$intro = get_field("page_intro" );
$asidecontent = get_field("page_aside_content");
$asidemain = get_field("page_aside_main");
$title = get_the_title();
?>

    <article class="article">
        <?php include( locate_template('includes/section-hero-page.php') ) ?>


        <div class="panel panel--no-inner panel--nopad article__main">
            
            <div class="grid-space article__space-left"></div>

            <div class="article__share">
                <?php get_template_part('includes/component','share'); ?>
            </div>

            <div class="article__body">
                <p class="article__intro">
                    <?php echo $intro ?>
                </p>
                <div class="article__body__main">
                    <?php wpautop(the_content()); ?>
                </div>
            </div>
            <?php if ($asidecontent) : ?>
                <aside class="article__asidecontent">
                    <?php echo $asidecontent; ?>
                </aside>
            <?php endif; ?>
            <?php if ($asidemain) : ?>
                <aside class="article__asidemain">
                    <?php echo $asidemain; ?>
                </aside>
            <?php endif; ?>
            <div class="grid-space article__space-right"></div>

        </div>
    </article>

    <?php endwhile; 
endif; 
?>


<?php get_template_part('includes/component', 'backtop'); ?>
<?php get_footer(); ?>