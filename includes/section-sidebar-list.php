<ul class="sidebar-list">
<?php
if (have_posts()) :
    while (have_posts()) : the_post() ?>
        <li class="sidebar-list__item block-card--horiz">
            <?php if ( has_post_thumbnail()) : ?>
                <a class="block-card--horiz__image" href="<?php echo get_permalink() ?>"><img src="<?php echo get_the_post_thumbnail_url()?>"/></a>
            <?php endif; ?>
            <a class="block-card--horiz__title" href="<?php echo get_permalink() ?>"><?php echo get_the_title() ?></a>
        </li>
    <?php endwhile;
endif; ?>
</ul>