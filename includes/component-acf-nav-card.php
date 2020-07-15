<?php
$block_type = $block['dd_block_type'];
$title = $block['dd_block_title'];
$link = $block['dd_block_link'];
$imagepath = $block['dd_block_image']['url'];
$imagealt = $block['dd_block_image']['alt'];
$list = $block['dd_block_list'];
$excerpt = $block['dd_block_excerpt'];
?>
<?php
if ($block_type === 'card_block') : ?>
    <div class="dropdown__block">
        <div class="dropdown__block__image">
            <a class="dropdown__block__image__link" href="<?php echo $link ?>"></a>
            <img class="dropdown__block__image__image" src="<?php echo $imagepath ?>" alt="<?php echo $imagealt ?>" />
        </div>
        <h3 class="dropdown__block__title"><a href="<?php echo $link ?>"><?php echo $title ?></a></h3>
        <div class="dropdown__block__text">
            <?php echo $excerpt ?>
        </div>
    </div>
<?php elseif ($block_type === 'card_list_block') : ?>
    <div class="dropdown__block">
        <div class="dropdown__block__image">
            <a class="dropdown__block__image__link" href="<?php echo $link ?>"></a>
            <img class="dropdown__block__image__image" src="<?php echo $imagepath ?>" alt="<?php echo $imagealt ?>" />
        </div>
        <h3 class="dropdown__block__title"><a href="<?php echo $link ?>"><?php echo $title ?></a></h3>
        <div class="dropdown__block__text">
            <?php echo $excerpt ?>
        </div>
        <div class="dropdown__block__list">
            <?php echo $list ?>
        </div>
    </div>
<?php elseif ($block_type === 'list_block') : ?>
<?php endif; ?>