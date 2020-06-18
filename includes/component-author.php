<?php
    $authorname = get_the_author_meta('display_name');
    $authoremail = get_the_author_meta('user_email');
    $authordescription = get_the_author_meta('description');
    $authorpagelink = get_the_author_meta( 'url' );
    $twitter = get_the_author_meta( 'twitter', $post->post_author );
    $instagram = get_the_author_meta( 'instagram', $post->post_author );
?>

<div class="author">
    <div class="author__profile">
        <img class="author__profile__image" src="<?php echo get_avatar_url($authoremail) ?>" alt="" class="author__profile__image">
    </div>
    <div class="author__about">
        <p class="author__about__description">
            <?php echo $authordescription ?>
        </p>
        <p class="author__about__link">
            <a href="<?php echo $authorpagelink ?>">More about <?php echo $authorname ?></a>
        </p>
    </div>
    <div class="author__socials">
        <hr class="author__socials__divider" />
        <p class="author__socials__title">
            Follow me on my socials
        </p>
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