<?php
$heroimage = get_field("hero_image", $term);
$bgcolor1 = get_field( "background_colour_1", $term );
$bgcolor2 = get_field( "background_colour_2", $term );
if( $bgcolor1 and $bgcolor2 ) : ?>
    <style>
        .hero-pillar{
            background: linear-gradient(to right,<?php echo $bgcolor1 ?>, <?php echo $bgcolor2 ?>);
        }
    </style>
<?php endif ; ?>


<div class="hero hero-pillar panel panel--nopad panel--no-inner">
    <div class="grid-space hero-pillar__space-left"></div>
    <div class="hero-pillar__image">
        <img src="<?php echo $heroimage['url'] ?>" alt="<?php echo $heroimage['alt'] ?>">
    </div>
    <div class="grid-space hero-pillar__space-right--nobg"></div>
    <div class="hero-pillar__title-lockup contentstart">
        <div class="hero-pillar__title-lockup__inner">
            <div class="hero-pillar__breadcrumb breadcrumb">
                <?php yoast_breadcrumb(); ?>
            </div>
            <h1 class="hero-pillar__title hero-pillar__title--large">
                <?php echo $pillartitle ?>
            </h1>
            <div class="hero-pillar__meta">
                <?php include( locate_template( 'includes/component-meta-line.php', false, false ) );  ?>
            </div>
        </div>
    </div>
    <div class="hero-pillar__author">
        <?php include( locate_template( 'includes/component-author.php', false, false ) );  ?>
    </div>
</div>