<?php
    $authorname = get_the_author_meta('display_name');
    $authoremail = get_the_author_meta('user_email');
    $authordescription = get_the_author_meta('description');
    $authorpagelink = get_the_author_meta( 'url' );
?>

<div class="author">
    <div class="author__profile">
        <duv class="author__profile__arrow"><span></span></duv>
        <img class="author__profile__image" src="<?php echo get_avatar_url($authoremail) ?>" alt="" class="author__profile__image">
        <p class="author__profile__name">
            <?php echo $authorname ?>
        </p>
    </div>
    <div class="author__about">
        <div class="author__about__inner">
            <p class="author__about__description">
                <?php echo $authordescription ?>
            </p>
            <a class="author__about__link" href="<?php echo $authorpagelink ?>">More about <?php echo $authorname ?></a>
        </div>
    </div>
</div>