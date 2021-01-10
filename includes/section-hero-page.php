<?php if( $bgcolor1 and $bgcolor2 ) : ?>
    <style>
        .hero-pillar{
            background: linear-gradient(to right,<?php echo $bgcolor1 ?>, <?php echo $bgcolor2 ?>);
        }
        .hero-pillar__author{
            background:<?php echo $bgcolor2 ?>;
        }
        .hero-pillar__author-box__arrow span{
            background:<?php echo $bgcolor2 ?>;
        }
    </style>
<?php endif ; ?>


<div class="hero hero-pillar panel panel--nopad panel--no-inner">
    <div class="grid-space hero-pillar__space-left"></div>
    <div class="hero-pillar__image">
        <img src="<?php echo $image['url'] ?>" alt="<?php echo $image['alt'] ?>">
    </div>
    <div class="grid-space hero-pillar__space-right--nobg"></div>
    <div class="hero-pillar__title-lockup contentstart">
        <div class="hero-pillar__title-lockup__inner">
            <div class="hero-pillar__breadcrumb breadcrumb">
                <?php yoast_breadcrumb(); ?>
            </div>
            <h1 class="hero-pillar__title hero-pillar__title--large">
                <?php echo $title ?>
            </h1>
            <div class="hero-pillar__meta">
                <p>
                    <span><?php the_author(); ?> – <?php the_date() ?></span>
                </p>
            </div>
        </div>
    </div>
</div>