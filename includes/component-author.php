<?php
    if ( is_tax()){
        $authorid = get_field('taxonomy_author_id', $term );
    } else {
        $authorid = get_the_author_meta('ID');
    }
    $authoridacf = 'user_' . $authorid;
    $authorname = get_field('author_box', $authoridacf)['author_name'];
    $authoremail = get_field('author_box', $authoridacf)['author_email'];
    $authorimage = get_field('author_box', $authoridacf)['author_image'];
    $authorgravatar = get_avatar_url($authoremail);
    $authorbio = get_field('author_box', $authoridacf)['author_short_bio'];
    $authorpagelink = get_author_posts_url($authorid);
    $twitter = get_field( 'author_box', $authoridacf)['author_twitter'];
    $instagram = get_field( 'author_box', $authoridacf)['author_instagram'];
    $skin = get_field('author_skin');
    if ($skin = 'dark') {
        $authorbg = 'author-box--dark';
    } elseif ($skin = 'light') {
        $authorbg = 'author-box--light';
    }
    if (empty($authorimage)){
        $authorimage = $authorgravatar;
    };
?>

<div class="author-box <?php echo $authorbg ?>">
    <a href="<?php echo $authorpagelink ?>" class="author-box__profile">
        <img class="author-box__profile__image" src="<?php echo $authorimage ?>" alt="Profile image of <?php echo $authorname ?>" class="author-box__profile__image">
    </a>
    <div class="author-box__about">
        <p class="author-box__about__description">
            <?php echo $authorbio ?>
        </p>
        <p class="author-box__about__link">
            <a href="<?php echo $authorpagelink ?>">More about <?php echo $authorname ?></a>
        </p>
    </div>
    <div class="author-box__socials">
        <hr class="author-box__socials__divider" />
        <p class="author-box__socials__links">
            <?php if ( $twitter ){
                echo '<a class="author-box__socials__links__item" href="https://twitter.com/' . $twitter .'" rel="nofollow" target="_blank">Twitter</a>';
            };
            if ( $instagram ){
                echo '<a class="author-box__socials__links__item" href="'. $instagram .'" rel="nofollow" target="_blank">instagram</a>';
            }; ?>
        </p>
    </div>
    <div class="author-box__arrow"><span></span></div>
</div>