<?php if( have_rows('block_grid') ): ?>
    <?php while( have_rows('block_grid') ): the_row(); ?>
        <?php $layout_config = get_sub_field('Layout_configuration'); ?>
        
        <?php if($layout_config === 'irregular_1') : ?>

            <?php if (have_rows('irregular_1')) : ?>
                <?php while( have_rows('irregular_1') ): the_row(); ?>
                    <?php get_template_part('includes/section-grid-irregular-1'); ?>
                <?php endwhile; ?>
            <?php endif; ?>

        <?php elseif($layout_config === '4x') : ?>

            <?php if (have_rows('4x')) : ?>
                <?php while( have_rows('4x') ): the_row(); ?>
                    <?php get_template_part('includes/section-grid-4x'); ?>
                <?php endwhile; ?>
            <?php endif; ?>

        <?php elseif($layout_config === '3_1') : ?>

            <?php if (have_rows('3_1')) : ?>
                <?php while( have_rows('3_1') ): the_row(); ?>
                    <?php get_template_part('includes/section-grid-3_1'); ?>
                <?php endwhile; ?>
            <?php endif; ?>

        <?php endif; ?>

    <?php endwhile; ?>
<?php endif; ?>