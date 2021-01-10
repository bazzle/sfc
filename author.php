<?php get_header(); ?>


<?php 
if ( have_posts() ) : 
    while ( have_posts() ) : the_post(); ?>

<?php
$bgcolor1 = "yellow";
$bgcolor2 = "orange";
$authorid = get_the_author_meta('ID');
$authoridacf = 'user_' . $authorid;
$authorname = get_field('author_box', $authoridacf)['author_name'];
$authoremail = get_field('author_box', $authoridacf)['author_email'];
$authorimage = get_field('author_box', $authoridacf)['author_image'];
$authorgravatar = get_avatar_url($authoremail);
$authorbio = get_field('author_box', $authoridacf)['author_short_bio'];
$authorpagelink = get_author_posts_url($authorid);
$twitter = get_field( 'author_box', $authoridacf)['author_twitter'];
$instagram = get_field( 'author_box', $authoridacf)['author_instagram'];
$intro = get_field("page_intro" );
$content = wpautop(get_the_content());
?>

    <article class="article">
        <?php include( locate_template('includes/section-hero-page.php') ) ?>


        <div class="panel panel--nopad article__main">
            
            <div class="grid-space article__space-left"></div>

            <div class="article__body">
                <div class="article__intro">
                    <?php echo $intro ?>
                </div>
                <?php echo $content; ?>
            </div>
            <aside class="article__asidecontent">
                <?php echo $asidecontent; ?>
            </aside>
            <aside class="article__asidemain">
                <?php echo $asidemain; ?>
            </aside>

            <div class="grid-space article__space-right"></div>

        </div>
    </article>

    <?php endwhile; 
endif; 
?>


<?php get_template_part('includes/component', 'backtop'); ?>
<?php get_footer(); ?>