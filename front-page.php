<?php get_header(); ?>

    <?php get_template_part('includes/section','hero-home'); ?>



    <?php if( have_rows('grid') ): ?>
        <?php while( have_rows('grid') ): the_row(); ?>
            <?php $howmanycols = get_sub_field('how_many_cols'); ?>
            <?php if ($howmanycols === '1'): ?>
                <div class="grid-home panel">
                    <div class="grid-home__space-left"></div>
                    <div class="grid-home__col-1"><?php echo get_sub_field('1_col'); ?></div>
                    <div class="grid-home__space-right"></div>
                </div>
            <?php elseif($howmanycols === '1_1') : ?>
                <div class="grid-home panel">
                    <div class="grid-home__space-left"></div>
                    <div class="grid-home__col-1"><?php echo get_sub_field('1_1_col__column_1'); ?></div>
                    <div class="grid-home__col-2"><?php echo get_sub_field('1_1_col__column_2'); ?></div>
                    <div class="grid-home__space-right"></div>
                </div>
            <?php elseif($howmanycols === '1_2') : ?>
                <div class="grid-home panel">
                    <div class="grid-home__space-left"></div>
                    <div class="grid-home__col-1"><?php echo get_sub_field('1_2_col__column_1'); ?></div>
                    <div class="grid-home__col-2"><?php echo get_sub_field('1_2_col__column_2'); ?></div>
                    <div class="grid-home__space-right"></div>
                </div>
            <?php elseif($howmanycols === '2_1') : ?>
                <div class="grid-home panel">
                    <div class="grid-home__space-left"></div>
                    <div class="grid-home__col-1"><?php echo get_sub_field('2_1_col__column_1'); ?></div>
                    <div class="grid-home__col-2"><?php echo get_sub_field('2_1_col__column_2'); ?></div>
                    <div class="grid-home__space-right"></div>
                </div>
            <?php endif; ?>
        <?php endwhile; ?>
    <?php endif; ?>


    <?php if( have_rows('towns_cities') ): ?>
        <?php while( have_rows('grid') ): the_row(); ?>
            <?php echo get_sub_field('location_name'); ?>
            <?php echo get_sub_field('location_image'); ?>
            <?php echo get_sub_field('location_link'); ?>
        <?php endwhile; ?>
    <?php endif; ?>



<?php get_footer(); ?>