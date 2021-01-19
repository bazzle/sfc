<?php if( $bgcolor1 and $bgcolor2 ) : ?>
    <style>
        .hero-page{
            background: linear-gradient(to right,<?php echo $bgcolor1 ?>, <?php echo $bgcolor2 ?>);
        }
    </style>
<?php endif ; ?>


<div class="hero hero-page panel panel--nopad panel--no-inner">
    <div class="grid-space hero-page__space-left"></div>
    <div class="hero-page__image">
        <img src="<?php echo $image['url'] ?>" alt="<?php echo $image['alt'] ?>">
    </div>
    <div class="grid-space hero-page__space-right--nobg"></div>
    <div class="hero-page__title-lockup contentstart">
        <div class="hero-page__title-lockup__inner">
            <div class="hero-page__breadcrumb breadcrumb">
                <?php yoast_breadcrumb(); ?>
            </div>
            <h1 class="hero-page__title hero-page__title--large">
                <?php echo $pagetitle ?>
            </h1>
        </div>
    </div>
</div>