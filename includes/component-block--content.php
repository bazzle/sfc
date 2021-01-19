<?php
$heading_level = get_sub_field('block_title_level');
if (empty($heading_level)){
    $heading_level = 3;
};
?>
<div class="block-content">
    <h<?php echo $heading_level ?> class="block-content__title"><?php echo $blocktitle ?></h<?php echo $heading_level ?>>
    <div class="block-content__content">
        <?php echo $text ?>
    </div>
    <?php include (locate_template('includes/component-cta-line.php')); ?>
</div>