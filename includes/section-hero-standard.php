<?php 
$heroimage = get_field("hero_image");
$bgcolor1 = get_field( "background_colour_1" );
$bgcolor2 = get_field( "background_colour_2" );

if( $bgcolor1 and $bgcolor2 ) : ?>
    <style>
        .hero-std{
            background: linear-gradient(<?php echo $bgcolor1 ?>, <?php echo $bgcolor2 ?>);
        }
    </style>
<?php endif ; ?>


<div class="hero-std panel panel--nospaced">
    <div class="grid-space hero-std__space-left"></div>
    <div class="hero-std__image">
        <img src="<?php echo $heroimage['url'] ?>" alt="<?php echo $heroimage['alt'] ?>">
    </div>
    <div class="grid-space hero-std__space-right--nobg"></div>
    <div class="hero-std__title-lockup">
        <div class="hero-std__title-lockup__inner">
            <div class="hero-std__breadcrumb breadcrumb">
                <?php yoast_breadcrumb(); ?>
            </div>
            <h1 class="hero-std__title hero-std__title--large">
                <?php the_title(); ?>
            </h1>
            <div class="hero-std__meta">
                <p>
                    <span><?php the_author(); ?> – <?php the_date() ?></span>
                </p>
            </div>
        </div>
    </div>
    <div class="hero-std__intro">
        <p>
            <?php echo get_field( "intro" ); ?>
        </p>
    </div>
    <div class="hero-std__author">
        <?php get_template_part('includes/component','author'); ?>
    </div>
</div>