<div class="post-list">
    <ul class="post-list__list">
    <?php
    if (have_posts()) :
        while (have_posts()) : the_post() ?>
            <?php $intro = get_field( "intro" ); ?>
            <li class="post-list__item">
                <h3 class="post-list__item__title">
                    <a href="<?php echo get_permalink() ?>"><?php echo get_the_title() ?></a>
                </h3>
            <?php if($intro) : ?>
                <p class="post-list__item__description">
                    <?php echo $intro ?>
                </p>
            <?php endif; ?>
            </li>
        <?php endwhile;
    endif; ?>
    </ul>
</div>