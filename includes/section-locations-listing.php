<div class="panel locations-listing">
    <div class="panel__inner panel__inner--margins">
        <h3 class="panel__title"><?php echo get_field(''); ?></h3>
        <div class="grid-5x">
            <?php while( have_rows('card_group_5x') ): the_row();
                $image = get_sub_field('card_group_5x_image');
                $title = get_sub_field('card_group_5x_title');
                $link = get_sub_field('card_group_5x_link');
            ?>
            <div class="grid-5x__item">
                <div class="card locations-listing__card">
                    <div class="locations-listing__card__image">
                        <img class="locations-listing__card__image__image" src="<?php echo $image['url'] ?>" alt="<?php echo $image['alt'] ?>"/>
                    </div>
                    <h4 class="locations-listing__card__title"><?php echo $title ?></h4>
                </div>
            </div>
            <?php endwhile; ?>
        </div>
    </div>
</div>