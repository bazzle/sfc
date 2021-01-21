<?php
if (empty($blocktitlelevel)){
    $blocktitlelevel = 3;
};
?>
<div class="block-card">
    <?php if ($imagepath) : ?>
    <div class="block-card__image">
        <a class="block-card__image__link" href="<?php echo $link ?>">
        <img class="block-card__image__image" src="<?php echo $imagepath ?>" alt="<?php echo $imagealt ?>" />
        </a>
    </div>
    <?php endif; ?>
    <h<?php echo $blocktitlelevel ?> class="block-card__title">
        <a href="<?php echo $link ?>"><?php echo $blocktitle ?></a>
    </h<?php echo $blocktitlelevel ?>>
    <div class="block-card__text">
        <?php echo $text ?>
    </div>
    <a class="block-card__link" href="<?php echo $link ?>">Read more</a>
</div>