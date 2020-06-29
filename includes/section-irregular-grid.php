<?php if( have_rows('block_grid') ): ?>
            <?php while( have_rows('block_grid') ): the_row(); ?>
                <?php $layout_config = get_sub_field('Layout_configuration'); ?>
                
                    <?php if($layout_config === 'irregular_1') : ?>

                        <?php if (have_rows('irregular_1')) : ?>

                            <?php while( have_rows('irregular_1') ): the_row(); ?>

                                <div class="panel">
                                    <div class="panel__title">
                                        <h3><?php echo get_sub_field('title'); ?></h3>
                                    </div>
                                    <div class="panel__inner--margins">
                                        <?php if (have_rows('blocks')) : ?>
                                            <?php while( have_rows('blocks') ): the_row() ; ?>
                                            <div class="grid-irregular-1">
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
                                    </div>
                                </div>

                            <?php endwhile; ?>
                            
                        <?php endif; ?>

                <?php endif; ?>
            <?php endwhile; ?>
        <?php endif; ?>