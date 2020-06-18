</main>

<footer class="footer component--reverse">
    <div class="panel">
        <div class="panel__container">
            <div class="footer__inner">
                <div class="footer__links footer-links-1">
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
                <div class="footer__links footer-links-2">
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
                <div class="footer__links footer-links-3">
                    Let's be social
                </div>
            </div>
        </div>
    </div>
</footer>

<?php wp_footer() ?>
</body>
</html>