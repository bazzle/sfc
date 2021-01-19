<?php
/**
* Template Name: Basic info page template
*/
?>



<?php get_header(); ?>


<?php 
if ( have_posts() ) : 
    while ( have_posts() ) : the_post();
    $pagetitle = get_the_title();
    $intro = get_field("page_intro");
?>

    <article class="article page-info">
        <?php if ($intro) : ?>
            <div class="panel">
                <div class="panel__inner-narrow">
                    <h1 class="page-info__title">
                        <?php echo $pagetitle ?>
                    </h1>
                    <p class="article__intro"><?php echo $intro ?></p>
                </div>
            </div>
        <?php endif; ?>
            <div class="panel page-info__main">
                <div class="panel__inner-narrow">
                    <?php if (!$intro) : ?>
                    <h1 class="page-info__title">
                        <?php echo $pagetitle ?>
                    </h1>
                    <?php endif ?>
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