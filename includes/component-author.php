<?php
    $authorid = '1';
    $authoridacf = 'user_' . $authorid;
    $authorname = get_field('author_box', $authoridacf)['author_name'];
    $authoremail = get_field('author_box', $authoridacf)['author_email'];
    $authorimage = get_field('author_box', $authoridacf)['author_image'];
    $authorbio = get_field('author_box', $authoridacf)['author_short_bio'];
    $authorpagelink = get_author_posts_url($authorid);
    $twitter = get_field( 'author_box', $authoridacf)['author_twitter'];
    $instagram = get_field( 'author_box', $authoridacf)['author_instagram'];
?>

<div class="author">
    <div class="author__profile">
        <img class="author__profile__image" src="<?php echo get_avatar_url($authoremail) ?>" alt="" class="author__profile__image">
    </div>
    <div class="author__about">
        <p class="author__about__description">
            <?php echo $authorbio ?>
        </p>
        <p class="author__about__link">
            <a href="<?php echo $authorpagelink ?>">More about <?php echo $authorname ?></a>
        </p>
    </div>
    <div class="author__socials">
        <hr class="author__socials__divider" />
        <p class="author__socials__links">
            <?php if ( $twitter ){
                echo '<a class="author__socials__links__item" href="https://twitter.com/' . $twitter .'" rel="nofollow" target="_blank">Twitter</a>';
            };
            if ( $instagram ){
                echo '<a class="author__socials__links__item" href="'. $instagram .'" rel="nofollow" target="_blank">instagram</a>';
            }; ?>
        </p>
    </div>
</div>