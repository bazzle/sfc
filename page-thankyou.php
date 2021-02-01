<?php
/**
* Template Name: thankyou template
*/
?>

<?php get_header('promo'); ?>


<div class="container--promo">
    <div class="box">
        <div class="box__section box__main">
            <svg class="logo">
                <title>Street Food City Logo</title>
                <use xlink:href="<?php echo get_template_directory_uri() ?>/build/svg/icons.svg#logo" />
            </svg>
            <h1 class="promo-title">Thankyou!</h2>
            <p class="tiny">We won't pass on your email to any third parties. We fully respect your privacy. You can unsubscribe at any time.</p>
            <div class="icons">
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
        </div>
    </div>
</div>