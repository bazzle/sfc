<div class="block-card">
    <?php if ($imagepath) : ?>
    <div class="block-card__image">
        <a class="block-card__image__link" href="<?php echo $link ?>"></a>
        <img class="block-card__image__image" src="<?php echo $imagepath ?>" alt="<?php echo $imagealt ?>" />
    </div>
    <?php endif; ?>
    <h3 class="block-card__title"><a href="<?php echo $link ?>"><?php echo $title ?></a></h3>
    <div class="block-card__text">
        <?php echo $text ?>
    </div>
    <a class="block-card__link" href="<?php echo $link ?>">Read more</a>
</div>