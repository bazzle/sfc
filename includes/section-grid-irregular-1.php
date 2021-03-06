<?php if (have_rows('blocks')) : ?>
    <?php while( have_rows('blocks') ): the_row() ; ?>
    <div class="grid grid-irregular-1">
        <div class="grid-irregular-1__item grid-irregular-1__main">
            <?php $block = 'main_feature_block' ?>
            <?php include( locate_template( 'includes/component-acf-card.php', false, false ) );  ?>
        </div>
        <div class="grid-irregular-1__item grid-irregular-1__small-1">
            <?php $block = 'small_1_feature_block' ?>
            <?php include( locate_template( 'includes/component-acf-card.php', false, false ) );  ?>
        </div>
        <div class="grid-irregular-1__item grid-irregular-1__small-2">
            <?php $block = 'small_2_feature_block' ?>
            <?php include( locate_template( 'includes/component-acf-card.php', false, false ) );  ?>
        </div>
        <div class="grid-irregular-1__item grid-irregular-1__small-3">
            <?php $block = 'small_3_feature_block' ?>
            <?php include( locate_template( 'includes/component-acf-card.php', false, false ) );  ?>
        </div>
        <div class="grid-irregular-1__item grid-irregular-1__small-4">
            <?php $block = 'small_4_feature_block' ?>
            <?php include( locate_template( 'includes/component-acf-card.php', false, false ) );  ?>
        </div>
    </div>
    <?php endwhile; ?>
<?php endif; ?>
