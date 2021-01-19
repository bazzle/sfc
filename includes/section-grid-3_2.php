<?php if (have_rows('blocks')) : ?>
    <?php while( have_rows('blocks') ): the_row() ; ?>
    <div class="grid grid-3_2">
        <div class="grid__item grid-3_2__item grid-3_2__block-1">
            <?php $block = 'block_1_feature_block' ?>
            <?php include( locate_template( 'includes/component-acf-card.php', false, false ) );  ?>
        </div>
        <div class="grid__item grid-3_2__item grid-3_2__block-2">
            <?php $block = 'block_2_feature_block' ?>
            <?php include( locate_template( 'includes/component-acf-card.php', false, false ) );  ?>
        </div>
    </div>
    <?php endwhile; ?>
<?php endif; ?>