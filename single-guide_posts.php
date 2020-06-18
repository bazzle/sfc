<?php get_header(); ?>
    <article class="article">
        <?php get_template_part('includes/section', 'hero-standard') ?>


        <div class="panel article__main">
            
            <div class="grid-space article__space-left"></div>

            <div class="article__share">
                <?php get_template_part('includes/component','share'); ?>
            </div>

            <div class="article__body">
                <?php get_template_part('includes/section', 'content') ?>
            </div>
            <aside class="article__asidecontent">
                <?php echo get_field( "aside_content" ); ?>
            </aside>
            <aside class="article__asidemain">
                <?php echo get_field("aside_main"); ?>
            </aside>

            <div class="grid-space article__space-right"></div>

        </div>
    </article>
    <?php get_template_part('includes/component', 'backtop'); ?>
<?php get_footer(); ?>