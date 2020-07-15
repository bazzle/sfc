<header class="header">
    <nav>
        <div class="container">
            <div class="header__inner">
                <a href="<?php echo get_option('home'); ?>" class="header__logo-lockup">
                    <div class="header__logo-lockup__logo">
                    <svg class="header__logo-lockup__logo__svg">
                        <use xlink:href="<?php echo get_template_directory_uri() ?>/build/svg/icons.svg#logo2" />
                    </svg>
                    </div>
                </a>

                <?php get_template_part('includes/component','nav-menu'); ?>

                <button type=“button” class="header__trigger trigger-menu">
                    <span class="header__trigger__label">Menu</span>
                    <svg class="icon header__trigger__icon">
                        <use xlink:href="<?php echo get_template_directory_uri() ?>/build/svg/icons.svg#icon-menu" />
                    </svg>
                </button>

                <?php get_template_part('includes/component','mobile-menu'); ?>
            </div>
        </div>
    </nav>
</header>