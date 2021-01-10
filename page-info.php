<?php
/**
* Template Name: Basic info page template
*/
?>



<?php get_header(); ?>


<?php 
if ( have_posts() ) : 
    while ( have_posts() ) : the_post();
    $title = get_the_title();
?>

    <article class="page-info">
        <div class="panel page-info__main">
            <div class="panel__inner-narrow">
                <h1 class="page-info__title">
                    <?php echo $title ?>
                </h1>
                <div class="page-info__body">
                    <?php wpautop(the_content()); ?>
                </div>
            </div>
        </div>
    </article>

    <?php endwhile; 
endif; 
?>

<?php get_footer(); ?>