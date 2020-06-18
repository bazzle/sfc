<div class="panel card-grid">
    <div class="panel__inner panel__inner--margins">
    <hr class="panel__divider" />
    <h3 class="panel__title">Card grid</h3>
        <div class="grid">
            <?php while( have_rows('card_group') ): the_row();
                $image = get_sub_field('card_image');
                $title = get_sub_field('card_title');
                $description = get_sub_field('card_description');
                $link = get_sub_field('card_link');
            ?>
            <div class="grid__item">
                <div class="card">
                    <div class="card__image">
                        <img class="card__image__image" src="<?php echo $image['url'] ?>" alt="<?php echo $image['alt'] ?>"/>
                    </div>
                    <h4 class="card__title"><?php echo $title ?></h4>
                    <p class="card__description">
                        <?php echo $description ?>
                    </p>
                </div>
            </div>
            <?php endwhile; ?>
        </div>
    </div>
</div>