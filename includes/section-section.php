<?php if( have_rows('block_grid') ): ?>
    <?php while( have_rows('block_grid') ): the_row(); ?>
        <?php
        $bgcolor = get_sub_field('background_color');
        $classname = get_sub_field('css_class');
        $hidden = get_sub_field('hidden');
        $paneltitle = get_sub_field('title');
        $paneltitleLevel = get_sub_field('title_level');
        ?>

        <?php if(!$hidden) :  ?>

        <div class="panel <?php if ( $classname ) echo $classname; ?>" style="background-color:<?php echo $bgcolor; ?>">
            <div class="panel__inner">
            <?php if ($paneltitle) : ?>
                <?php include(locate_template('includes/component-panel-title.php')) ?>
            <?php endif; ?>
            <?php $layout_config = get_sub_field('Layout_configuration'); ?>
            
            <?php if ($layout_config === 'irregular_1') : ?>
                <?php if (have_rows('irregular_1')) : ?>
                    <?php while( have_rows('irregular_1')) : the_row(); ?>
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

            <?php elseif($layout_config === '3_2') : ?>

                <?php if (have_rows('3_2')) : ?>
                    <?php while( have_rows('3_2') ): the_row(); ?>
                        <?php get_template_part('includes/section-grid-3_2'); ?>
                    <?php endwhile; ?>
                <?php endif; ?>

            <?php elseif($layout_config === '2_3') : ?>

                <?php if (have_rows('2_3')) : ?>
                    <?php while( have_rows('2_3') ): the_row(); ?>
                        <?php get_template_part('includes/section-grid-2_3'); ?>
                    <?php endwhile; ?>
                <?php endif; ?>

            <?php endif; ?>
            
            </div>
        </div>

        <?php endif; ?>

    <?php endwhile; ?>
<?php endif; ?>