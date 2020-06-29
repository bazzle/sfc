<?php if (have_rows($block)) : ?>    
    <?php while( have_rows($block) ): the_row() ; ?>

        <?php $block_type = get_sub_field('block_type'); ?>
        <?php $title = get_sub_field('block_title') ?>
        <?php $imagepath = get_sub_field('block_image')['url'] ?>
        <?php $imagealt = get_sub_field('block_image')['alt']; ?>
        <?php $text = get_sub_field('block_text') ?>
        <?php $link = get_sub_field('block_link') ?>

        <?php if ($block_type === 'image_block') : ?>

            <div class="image-block">
                <img class="image-block__image" src="<?php echo $imagepath ?>" alt="<?php echo $imagealt ?>" />
                <a class="image-block__link" href="<?php echo $link ?>"></a>
                <h3 class="image-block__title"><a href="<?php echo $link ?>"><?php echo $title ?></a></h3>
            </div>

        <?php elseif ($block_type === 'card_block') : ?>

            <div class="card-block">
                <div class="card-block__image">
                    <a class="card-block__image__link" href="<?php echo $link ?>"></a>
                    <img class="card-block__image__image" src="<?php echo $imagepath ?>" alt="<?php echo $imagealt ?>" />
                </div>
                <h3 class="card-block__title"><a href="<?php echo $link ?>"><?php echo $title ?></a></h3>
                <div class="card-block__text">
                    <?php echo $text ?>
                </div>
                <a class="card-block__link" href="<?php echo $link ?>">Read more</a>
            </div>

        <?php elseif ($block_type === 'content_block') : ?>

            <div class="content_block">
                <div class="content_block__text">
                    <?php echo $text ?>
                </div>
            </div>

        <?php endif; ?>

    <?php endwhile; ?>
<?php endif; ?>