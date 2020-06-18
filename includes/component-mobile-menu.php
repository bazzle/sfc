<nav aria-hidden='true' class="mobile-menu close">
    <div class="panel">
        <div class="panel__container">
            <div class="mobile-menu__inner nav">
                <div class="mobile-menu__group">
                    <nav class="header__menu nav">
                        <?php
                            wp_nav_menu(
                                array(
                                    'theme_location' => 'main-menu'
                                )
                            )
                        ?>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</nav>