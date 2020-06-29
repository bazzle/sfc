<?php 
$bgcolor1 = get_field( "background_colour_1" );
$bgcolor2 = get_field( "background_colour_2" );

if( $bgcolor1 and $bgcolor2 ) : ?>
    <style>
        .hero-home{
            background: linear-gradient(<?php echo $bgcolor1 ?>, <?php echo $bgcolor2 ?>);
        }
    </style>
<?php endif ; ?>


<div class="panel hero-home">
    <div class="grid-space hero-home__space-left"></div>
    <div class="hero-home__intro">
        <h1 class="hero-home__intro__title">
            Streetfoodcity.co.uk is the authority on Street Food in the UK
        </h1>
        <p class="hero-home__intro__intro">
            Within this website we cover markets, pop-ups and independent stalls up and down the UK and abroad too, with some recipes. It's all about the quick and easy ethnic foods you can get your hungry chops around.
        </p>
        <p class="hero-home__intro__link">
            <a class="hero-home__intro__link__link">About us</a>
        </p>
        <div class="hero-home__intro__arrow"><span></span></div>
    </div>
    <div class="hero-home__image">
        <?php echo get_the_post_thumbnail() ?>
    </div>
</div>