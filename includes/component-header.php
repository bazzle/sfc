<header class="header">
    <div class="panel--nospaced">
        <div class="panel__inner header__inner">
            <div class="header__logo-lockup">
                <a href="<?php echo get_option('home'); ?>" class="header__logo-lockup__logo">
                    <svg class="header__logo-lockup__logo__svg">
                        <use xlink:href="<?php echo get_template_directory_uri() ?>/build/svg/icons.svg#logo3" />
                    </svg>
                </a>
            </div>
            <nav class="header__menu">
                <?php get_template_part('includes/component','nav-menu'); ?>
            </nav>
            <button type=“button” class="header__trigger trigger-menu">
                <span class="header__trigger__label">Menu</span>
                <svg class="icon header__trigger__icon">
                    <use xlink:href="<?php echo get_template_directory_uri() ?>/build/svg/icons.svg#icon-menu" />
                </svg>
            </button>
        </div>
        <?php get_template_part('includes/component','mobile-menu'); ?>
    </div>
    <div class="progress-indicator hidden" aria-hidden="true">
        <div class="progress-indicator__container">
            <div class="progress-indicator__progress-bar" id="myBar"></div>
        </div>
    </div>
</header>