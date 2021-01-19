<?php
if (empty($paneltitle)){
    $paneltitle = 'Title here';
};
if (empty($titleLevel)){
    $titleLevel = 2;
};
?>
<?php if ($paneltitle) : ?>
<div class="panel__title">
    <h<?php echo $titleLevel ?>><?php echo $paneltitle ?></<?php echo $titleLevel ?>>
</div>
<?php endif; ?>