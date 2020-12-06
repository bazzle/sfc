<?php get_header(); ?>

<?php get_template_part('includes/section','content'); ?>


    <div class="home">
        <?php get_template_part('includes/section','hero-home'); ?>
        <div class="home__main-rows">
            <?php get_template_part('includes/section','layout-rows'); ?>
        </div>
    </div>


<?php get_footer(); ?>