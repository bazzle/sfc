<?php
$pillartitle = get_field( "title", $term );
$intro = get_field("intro", $term );
$overview = get_field("pillar_overview", $term);
$asidecontent = get_field("aside_content", $term);
$asidemain = get_field("aside_main", $term);
if (empty($title)){
    $title = $term->name;
}
?>

<?php get_header(); ?>

    <article class="pillar article">
        <?php include( locate_template('includes/section-hero-pillar.php') ) ?>
        <?php include( locate_template('includes/section-pillar-head.php') ) ?>
        <?php include( locate_template('includes/section-pillar-sections.php') ) ?>

    </article>


    <?php if ( have_posts() ) : ?>
    <div class="panel">
        <div class="panel__inner">
            <?php $paneltitle = $pillartitle . ' ' . 'articles' ?>
            <?php include(locate_template('includes/component-panel-title.php')); ?>
            <div class="panel__inner--margins">
                    <div class="grid grid-4x grid-4x--repeat">

                        <?php while ( have_posts() ) : the_post();
                            $id = get_the_ID();
                            $blocktitle = get_the_title();
                            $imagepath = get_the_post_thumbnail_url();
                            $imagealt = get_the_title();
                            $text = get_field('intro');
                            $link = get_the_permalink();
                        ?>

                            <div class="grid__item grid-4x__item">
                                <?php include( locate_template( 'includes/component-block--card.php' ) ); ?>
                            </div>

                        <?php endwhile; // end of the loop. ?>

                    </div>
            </div>

        </div>
    </div>
    <?php endif; ?>
    
    
<?php get_template_part('includes/component', 'backtop'); ?>
<?php get_footer(); ?>