<?php
$title = get_field( "title", $term );
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

            <?php $sectiontitle = 'Korean street food articles' ?>
            <?php include(locate_template('includes/component-section-header.php')); ?>
            <div class="panel__inner--margins">
                    <div class="grid grid-4x grid-4x--repeat">

                        <?php while ( have_posts() ) : the_post(); ?>

                            <?php
                            $id = get_the_ID();
                            $title = get_the_title();
                            $imagepath = get_the_post_thumbnail_url();
                            $imagealt = get_the_title();
                            $text = wpautop(get_sub_field('block_text'));
                            $link = get_the_permalink();
                            ?>

                            <div class="grid__item grid-4x__item">
                                <?php $block = 'block_1_feature_block' ?>
                                <?php include( locate_template( 'includes/component-block--card.php', false, false ) ); ?>
                            </div>

                        <?php endwhile; // end of the loop. ?>

                    </div>
            </div>

        </div>
    </div>
    <?php endif; ?>
    
    
<?php get_template_part('includes/component', 'backtop'); ?>
<?php get_footer(); ?>