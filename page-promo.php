<?php
/**
* Template Name: Promo template
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
            <p>Street food oh how we have missed you.</p>
            <h1 class="promo-title">streetfoodcity.co.uk will be the online home for UK street food</h1>
            <p>Coming Summer 2021</p>
        </div>
        <div class="box__section box__foot">
            <h2 class="box__foot__title">Signup for updates</h2>
            <p>We won't spam you we promise</p>
            <form action="https://streetfoodcity.us7.list-manage.com/subscribe/post?u=765479a1ff2cf31b86aae38a9&amp;id=17eea5dca3" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate signup" target="_blank" novalidate>
                <input type="email" value="" name="EMAIL" class="signup__input" id="mce-EMAIL" placeholder="email address" required>
                <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_765479a1ff2cf31b86aae38a9_17eea5dca3" tabindex="-1" value=""></div>
                <input type="submit" value="Join the community" name="subscribe" id="mc-embedded-subscribe" class="signup__submit">
            </form>
            <p class="tiny">We won't pass on your email to any third parties. We fully respect your privacy. You can unsubscribe at any time.</p>
        </div>
    </div>
</div>