<?php $term = get_queried_object();
$bgcolor1 = get_field( "background_colour_1", $term );
$bgcolor2 = get_field( "background_colour_2", $term );
$title = get_field( "pillar_page_title", $term );
$intro = get_field("pillar_intro", $term );
$image = get_field("pillar_main_image", $term);
?>

<?php get_header(); ?>
    <article class="pillar">
        <?php include( locate_template('includes/section-hero-pillar.php') ) ?>

        <div class="panel panel--nospaced pillar-head">
            
            <div class="grid-space article__space-left"></div>

            <div class="pillar-head__share">
                <?php get_template_part('includes/component','share'); ?>
            </div>

            <div class="pillar-head__body">
                <?php echo get_field("overview"); ?>
            </div>
            <aside class="pillar-head__asidecontent">
                <?php echo get_field( "aside_content" ); ?>
            </aside>
            <aside class="pillar-head__asidemain">
                <?php echo get_field("aside_main"); ?>
            </aside>

            <div class="grid-space article__space-right"></div>

        </div>



        <?php get_template_part('includes/section', 'pillar_sections'); ?>
    </article>

    <?php if( have_rows('card_group') ): ?>
        <?php get_template_part('includes/section', 'card_grid'); ?>
    <?php endif; ?>

    <?php get_template_part('includes/component', 'backtop'); ?>
    
<?php get_footer(); ?>