<div class="panel panel--nopad panel--no-inner pillar-head">
    
    <div class="grid-space article__space-left"></div>

    <div class="pillar-head__share">
        <?php get_template_part('includes/component','share'); ?>
    </div>
    <div class="pillar-head__body">
        <p class="article__intro">
            <?php echo $intro ?>
        </p>
        <div class="article__body__main">
            <?php echo $overview ?>
        </div>
    </div>

    <?php if ($asidecontent) : ?>
        <aside class="pillar-head__asidecontent">
            <?php echo $asidecontent; ?>
        </aside>
    <?php endif; ?>
    <?php if ($asidemain) : ?>
        <aside class="pillar-head__asidemain">
            <?php echo $asidemain; ?>
        </aside>
    <?php endif; ?>

    <div class="grid-space article__space-right"></div>

</div>