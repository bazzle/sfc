<footer class="footer">
    <div class="panel">
        <div class="panel__inner">
                <div class="grid grid-1_2_1">
                    <div class="footer__grid-item grid-item grid-1_2_1__block-1">
                        <nav class="footer__menu">
                            <?php
                                wp_nav_menu(
                                    array(
                                        'theme_location' => 'footer-menu-1'
                                    )
                                )
                            ?>
                        </nav>
                    </div>
                    <div class="footer__grid-item footer__menu grid-item grid-1_2_1__block-2">
                        <?php $block = 'block_2_feature_block' ?>
                        <nav class="footer__menu">
                        <?php
                            wp_nav_menu(
                                array(
                                    'theme_location' => 'footer-menu-2'
                                )
                            )
                        ?>
                        </nav>
                    </div>
                    <div class="footer__grid-item footer__menu grid-item grid-1_2_1__block-3">

                        <div class="footer__logo-lockup">
                            <a href="<?php echo get_option('home'); ?>" class="footer__logo-lockup__logo">
                                <svg class="footer__logo-lockup__logo__svg">
                                    <use xlink:href="<?php echo get_template_directory_uri() ?>/build/svg/icons.svg#logo" />
                                </svg>
                            </a>
                        </div>

                        <div class="footer__social-links">
                            <h4 class="footer__social-links__title">
                                Let's be social
                            </h4>
                            <a class="footer__social-links__links__item" href="#">
                                <svg class="facebook-icon">
                                    <use xlink:href="<?php echo get_stylesheet_directory_uri(); ?>/build/svg/icons.svg#share-facebook" />
                                </svg>
                            </a>
                            <a class="footer__social-links__links__item" href="#">
                                <svg class="twitter-icon">
                                    <use xlink:href="<?php echo get_stylesheet_directory_uri(); ?>/build/svg/icons.svg#share-twitter" />
                                </svg>
                            </a>
                            <a class="footer__social-links__links__item" href="#">
                                <svg class="instagram-icon">
                                    <use xlink:href="<?php echo get_stylesheet_directory_uri(); ?>/build/svg/icons.svg#share-instagram" />
                                </svg>
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>