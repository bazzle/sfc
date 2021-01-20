<?php 
$bgcolor1 = get_field( "background_colour_1" );
$bgcolor2 = get_field( "background_colour_2" );
$headline = esc_html(get_field( "headline" ));
$heropara = esc_html(get_field( "hero_paragraph" ));
$heromedia = get_field("hero_media")['url'];
$imageorvideo = get_field("hero_media_type");
$heroimage = get_field("hero_image");
$herovideo = get_field("hero_video");

if( $bgcolor1 and $bgcolor2 ) : ?>
    <style>
        .page-color{
            color:<?php echo $bgcolor1 ?>;
        }
        .hero__panel{
            background: linear-gradient(to right,<?php echo $bgcolor1 ?>, <?php echo $bgcolor2 ?>);
        }
    </style>
<?php endif ; ?>


<div class="panel hero hero__panel panel--nopad">
    <div class="panel__inner">
        <div class="hero-home">
            <div class="hero-home__intro">
                <div class="hero-home__intro__icons">
                    <svg>
                        <use xlink:href="<?php echo get_template_directory_uri() ?>/build/svg/icons.svg#icon-food-kebab" />
                    </svg>
                    <svg>
                        <use xlink:href="<?php echo get_template_directory_uri() ?>/build/svg/icons.svg#icon-food-burrito" />
                    </svg>
                    <svg>
                        <use xlink:href="<?php echo get_template_directory_uri() ?>/build/svg/icons.svg#icon-food-meatballs" />
                    </svg>
                    <svg>
                        <use xlink:href="<?php echo get_template_directory_uri() ?>/build/svg/icons.svg#icon-food-taco" />
                    </svg>
                </div>
                <h1 class="hero-home__intro__title"><?php echo $headline ?></h1>
                <p class="hero-home__intro__intro"><?php echo $heropara ?></p>
                <div class="hero-home__intro__icons">
                    <svg>
                        <use xlink:href="<?php echo get_template_directory_uri() ?>/build/svg/icons.svg#icon-food-noodles" />
                    </svg>
                    <svg>
                        <use xlink:href="<?php echo get_template_directory_uri() ?>/build/svg/icons.svg#icon-food-taco" />
                    </svg>
                    <svg>
                        <use xlink:href="<?php echo get_template_directory_uri() ?>/build/svg/icons.svg#icon-food-pizza" />
                    </svg>
                    <svg>
                        <use xlink:href="<?php echo get_template_directory_uri() ?>/build/svg/icons.svg#icon-food-burrito" />
                    </svg>
                </div>
            </div>
            <div class="hero-home__image">
                <?php if (isset($imageorvideo)) : ?>
                    <?php if ($imageorvideo === 'video') : ?>
                        <video style="object-fit:cover;width:100%;height:100%;" loop autoplay>
                            <source src="<?php echo $herovideo ?>" type="video/mp4">Your browser does not support the video tag. <!-- Text to be shown incase browser doesnt support html5 -->
                        </video>
                    <?php else : ?>
                        <img src="<?php echo $heroimage['url'] ?>" alt="<?php echo $heroimage['alt'] ?>">
                    <?php endif; ?>
                <?php else : ?>
                    <?php echo get_the_post_thumbnail() ?>
                <?php endif; ?>
            </div>
        </div>
    </div>
</div>