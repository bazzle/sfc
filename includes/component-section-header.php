<?php
    $title = get_sub_field('title');
?>
<?php if ($title) : ?>
<div class="panel__title">
    <h3><?php echo $title ?></h3>
</div>
<?php endif; ?>