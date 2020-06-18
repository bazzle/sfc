<?php get_header(); ?>

<?php get_template_part('includes/component', 'home-hero') ?>
<?php get_template_part('includes/component', 'home-wheretoeat') ?>
<?php get_template_part('includes/component', 'home-whattoeat') ?>

<div class="components-content">
    <?php get_template_part('includes/section', 'content') ?>
</div>

<?php get_footer(); ?>