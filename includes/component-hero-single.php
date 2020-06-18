<?php 
$value = get_field( "background_colour" );

if( $value ) : ?>
    <style>
        .hero-std{
            background-color:<?php echo $value ?>;
        }
    </style>
<?php endif ; ?>


<div class="hero-std panel">
    <div class="grid-space hero__space-left"></div>
        <div class="hero-std__main">
            <div class="hero-std__main__inner">
                <div class="hero-std__breadcrumb breadcrumb">
                    <?php yoast_breadcrumb(); ?>
                </div>
                <h1 class="hero-std__title">
                    <span><?php the_title(); ?></span>
                </h1>
                <div class="hero-std__meta">
                    <p>
                        <span><?php the_author(); ?> – <?php the_date() ?></span>
                    </p>
                </div>
            </div>
        </div>
        <div class="hero-std__image">
            <?php echo get_the_post_thumbnail() ?>
        </div>
    </div>
</div>