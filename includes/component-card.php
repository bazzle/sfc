<?php if (have_rows($block)) : ?>    
    <?php while( have_rows($block) ): the_row() ; ?>

        <?php
        $block_type = get_sub_field('block_type');
        $title = get_sub_field('block_title');
        $moduletitle = get_sub_field('module_title');
        $imagepath = get_sub_field('block_image')['url'];
        $imagealt = get_sub_field('block_image')['alt'];
        $text = get_sub_field('block_text');
        $link = get_sub_field('block_link');
        $readmorelink = get_sub_field('read_more_link');
        $readmorelinktext = get_sub_field('read_more_link_text') ?>
        <?php
        if ($block_type === 'image_block') {
            include( locate_template( 'includes/component-block--image.php', false, false ) );
        } elseif ($block_type === 'card_block') {
            include( locate_template( 'includes/component-block--card.php', false, false ) );
        } elseif ($block_type === 'content_block') {
            include( locate_template( 'includes/component-block--content.php', false, false ) );
        } ?>

    <?php endwhile; ?>
<?php endif; ?>