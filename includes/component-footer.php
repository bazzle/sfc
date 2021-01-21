<footer class="footer">
    <div class="panel">
        <div class="panel__inner">
                <div class="grid grid-1_2_1">
                    <div class="footer__grid-item grid-item grid-1_2_1__block-1">
                        <nav class="footer__menu" aria-label="Secondary 1">
                            <?php
                                wp_nav_menu(
                                    array(
                                        'theme_location' => 'footer-menu-1'
                                    )
                                )
                            ?>
                        </nav>
                    </div>
                    <div class="footer__grid-item grid-item grid-1_2_1__block-2">
                        <?php $block = 'block_2_feature_block' ?>
                        <nav class="footer__menu" aria-label="Secondary 2">
                        <?php
                            wp_nav_menu(
                                array(
                                    'theme_location' => 'footer-menu-2'
                                )
                            )
                        ?>
                        </nav>
                    </div>
                    <div class="footer__grid-item grid-item grid-1_2_1__block-3">

                        <a href="<?php echo get_option('home'); ?>" class="footer__logo">
                            <svg class="footer__logo__svg">
                                <title>Street Food City logo</title>
                                <use xlink:href="<?php echo get_template_directory_uri() ?>/build/svg/icons.svg#logo" />
                            </svg>
                        </a>

                        <div class="footer__social-links">
                            <div class="footer__social-links__title">Lets be social</div>
                            <div class="footer__social-links__links">
                                <a class="footer__social-links__links__item" href="#">
                                    <svg class="facebook-icon">
                                        <title>Facebook icon</title>
                                        <use xlink:href="<?php echo get_stylesheet_directory_uri(); ?>/build/svg/icons.svg#share-facebook" />
                                    </svg>
                                </a>
                                <a class="footer__social-links__links__item" href="#">
                                    <svg class="twitter-icon">
                                        <title>Twitter icon</title>
                                        <use xlink:href="<?php echo get_stylesheet_directory_uri(); ?>/build/svg/icons.svg#share-twitter" />
                                    </svg>
                                </a>
                                <a class="footer__social-links__links__item" href="#">
                                    <svg class="instagram-icon">
                                        <title>Instagram icon</title>
                                        <use xlink:href="<?php echo get_stylesheet_directory_uri(); ?>/build/svg/icons.svg#share-instagram" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>