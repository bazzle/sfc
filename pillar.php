<?php /* Template Name: Pillar */ ?>

<?php get_header(); ?>

    <article class="pillar">

        <?php get_template_part('includes/section', 'hero-pillar') ?>


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