<?php
$heading_level = get_sub_field('block_title_level');
if (empty($heading_level)){
    $heading_level = 3;
};
?>
<div class="block-image">
    <img class="block-image__image" src="<?php echo $imagepath ?>" alt="<?php echo $imagealt ?>" />
    <a class="block-image__link" href="<?php echo $link ?>"></a>
    <h<?php echo $heading_level ?> class="block-image__title">
        <a href="<?php echo $link ?>"><span><?php echo $blocktitle ?></span></a>
    </h<?php echo $heading_level ?>>
</div>