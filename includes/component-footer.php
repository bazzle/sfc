<footer class="footer component-dark">
    <div class="panel">
        <div class="panel__inner">
                <div class="grid grid-4x">
                    <div class="grid-4x__item grid-4x__block-1">
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
                    <div class="grid-4x__item grid-4x__block-2">
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
                    <div class="grid-4x__item grid-4x__block-3">
                        <div class="footer__links footer-links-3">
                            Let's be social
                        </div>
                    </div>
                    <div class="grid-4x__item grid-4x__block-4">
                        <div class="footer__links footer-links-3">
                            Let's be social
                        </div>
                    </div>
                </div>
        </div>
    </div>
</footer>