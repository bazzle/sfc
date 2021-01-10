<?php 
$bgcolor1 = get_field( "background_colour_1" );
$bgcolor2 = get_field( "background_colour_2" );
$headline = get_field( "headline" );
$heropara = get_field( "hero_paragraph" );
$video = get_field("hero_video");


if( $bgcolor1 and $bgcolor2 ) : ?>
    <style>
        .page-color{
            color:<?php echo $bgcolor1 ?>;
        }
        .hero__panel{
            background: linear-gradient(<?php echo $bgcolor1 ?>, <?php echo $bgcolor2 ?>);
        }
    </style>
<?php endif ; ?>


<div class="panel hero__panel panel--nopad">
    <div class="panel__inner">
        <div class="hero-banner">
            <div class="grid-space hero-banner__space-left"></div>
            <div class="hero-banner__intro">
                <h1 class="hero-banner__intro__title">
                    <?php echo $headline ?>
                </h1>
                <p class="hero-banner__intro__intro">
                <?php echo $heropara ?>
                </p>
                <p class="hero-banner__intro__link">
                    <a class="hero-banner__intro__link__link">About us</a>
                </p>
                <div class="hero-banner__intro__arrow"><span></span></div>
            </div>
            <div class="hero-banner__image">
            <?php if ($video) : ?>                
                <video style="object-fit:cover;width:100%;height:100%;" loop autoplay>
                    <source src="<?php echo $video ?>" type="video/mp4">
                    Your browser does not support the video tag. <!-- Text to be shown incase browser doesnt support html5 -->
                    </video>
            <?php else : ?>
                <?php echo get_the_post_thumbnail() ?>
            <?php endif; ?>
            </div>
        </div>
    </div>
</div>