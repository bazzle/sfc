
<?php $sectiontitle = get_sub_field('title'); ?>
<?php include(locate_template('includes/component-section-header.php')); ?>
<div class="panel__inner--margins">
    <?php if (have_rows('blocks')) : ?>
        <?php while( have_rows('blocks') ): the_row() ; ?>
        <div class="grid grid-4x">
            <div class="grid__item grid-4x__item grid-4x__block-1">
                <?php $block = 'block_1_feature_block' ?>
                <?php include( locate_template( 'includes/component-acf-card.php', false, false ) );  ?>
            </div>
            <div class="grid__item grid-4x__item grid-4x__block-2">
                <?php $block = 'block_2_feature_block' ?>
                <?php include( locate_template( 'includes/component-acf-card.php', false, false ) );  ?>
            </div>
            <div class="grid__item grid-4x__item grid-4x__block-3">
                <?php $block = 'block_3_feature_block' ?>
                <?php include( locate_template( 'includes/component-acf-card.php', false, false ) );  ?>
            </div>
            <div class="grid__item grid-4x__item grid-4x__block-4">
                <?php $block = 'block_4_feature_block' ?>
                <?php include( locate_template( 'includes/component-acf-card.php', false, false ) );  ?>
            </div>
        </div>
        <?php endwhile; ?>
    <?php endif; ?>
</div>