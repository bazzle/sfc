<header class="header">
    <nav>
        <div class="container">
        <div class="header__inner">
            <a href="<?php echo get_option('home'); ?>" class="header__logo-lockup">
                <img class="header__logo-lockup" src="<?php echo get_template_directory_uri() ?>/assets/images/logo.svg" alt="Streetfood City Logo">
            </a>

            <div class="header__menu nav">
                <?php
                    wp_nav_menu(
                        array(
                            'theme_location' => 'main-menu'
                        )
                    )
                ?>
            </div>

            <?php get_template_part('component','menu-nav-main'); ?>

            <button type=“button” class="header__trigger trigger-menu">
                <span class="header__trigger__label">Menu</span>
                <svg class="icon header__trigger__icon">
                    <use xlink:href="<?php echo get_template_directory_uri() ?>/build/svg/icons.svg#icon-menu" />
                </svg>
            </button>

            <?php get_template_part('component','mobile-menu'); ?>

            </div>
        </div>
        <?php get_template_part('includes/component','menu-dropdown'); ?>
    </nav>
</header>