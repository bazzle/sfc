<div class="panel__inner--margins">
    <?php if (have_rows('4x_dropdown')) : ?>
        <?php while( have_rows('4x_dropdown') ): the_row() ; ?>
        <ul class="grid grid-4x grid-4x--spaced">
            <li class="grid__item grid-item grid-4x__item grid-4x__block-1">
                <?php $block = get_sub_field('block_1_dropdown_block'); ?>
                <?php include( locate_template( 'includes/component-acf-nav-card.php', false, false ) );  ?>
            </li>
            <li class="grid__item grid-4x__item grid-4x__block-2">
                <?php $block = get_sub_field('block_2_dropdown_block'); ?>
                <?php include( locate_template( 'includes/component-acf-nav-card.php', false, false ) );  ?>
            </li>
            <li class="grid__item grid-4x__item grid-4x__block-3">
                <?php $block = get_sub_field('block_3_dropdown_block'); ?>
                <?php include( locate_template( 'includes/component-acf-nav-card.php', false, false ) );  ?>
            </li>
            <li class="grid__item grid-4x__item grid-4x__block-4">
                <?php $block = get_sub_field('block_4_dropdown_block'); ?>
                <?php include( locate_template( 'includes/component-acf-nav-card.php', false, false ) );  ?>
            </li>
        </ul>
        <?php endwhile; ?>
    <?php endif; ?>
</div>