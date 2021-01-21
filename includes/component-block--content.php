<?php
if (empty($blocktitlelevel)){
    $blocktitlelevel = 3;
};
?>
<div class="block-content">
    <h<?php echo $blocktitlelevel ?> class="block-content__title"><?php echo $blocktitle ?></h<?php echo $blocktitlelevel ?>>
    <div class="block-content__content">
        <?php echo $text ?>
    </div>
    <?php include (locate_template('includes/component-cta-line.php')); ?>
</div>