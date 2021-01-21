<?php
if (empty($blocktitlelevel)){
    $blocktitlelevel = 3;
};
?>
<div class="block-image">
    <img class="block-image__image" src="<?php echo $imagepath ?>" alt="<?php echo $imagealt ?>" />
    <a class="block-image__link" href="<?php echo $link ?>"></a>
    <h<?php echo $blocktitlelevel ?> class="block-image__title">
        <a href="<?php echo $link ?>"><span><?php echo $blocktitle ?></span></a>
    </h<?php echo $blocktitlelevel ?>>
</div>