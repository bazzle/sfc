<?php 
$bgcolor1 = get_field( "background_colour_1" );
$bgcolor2 = get_field( "background_colour_2" );

if( $bgcolor1 and $bgcolor2 ) : ?>
    <style>
        .hero-pillar{
            background: linear-gradient(<?php echo $bgcolor1 ?>, <?php echo $bgcolor2 ?>);
        }
    </style>
<?php endif ; ?>


<div class="hero-pillar panel">
    <div class="grid-space hero-pillar__space-left"></div>
    <div class="hero-pillar__space-main"></div>
    <div class="hero-pillar__image">
        <?php echo get_the_post_thumbnail() ?>
    </div>
    <div class="grid-space hero-pillar__space-right--nobg"></div>
    <div class="hero-pillar__title-lockup">
        <div class="hero-pillar__title-lockup__inner">
            <div class="hero-pillar__breadcrumb breadcrumb">
                <?php yoast_breadcrumb(); ?>
            </div>
            <h1 class="hero-pillar__title hero-pillar__title--large">
                <?php the_title(); ?>
            </h1>
            <div class="hero-pillar__meta">
                <p>
                    <span><?php the_author(); ?> – <?php the_date() ?></span>
                </p>
            </div>
        </div>
    </div>
    <div class="hero-pillar__intro">
        <p>
            <?php echo get_field( "intro" ); ?>
        </p>
    </div>
    <div class="hero-pillar__author">
        <?php get_template_part('includes/component','author'); ?>
        <div class="hero-pillar__author__arrow"><span></span></div>
    </div>
</div>