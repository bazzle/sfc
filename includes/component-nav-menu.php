<?php if( have_rows('nav_item','option') ): ?>
    <ul class="header__menu nav" id="menu-main">
        <?php while( have_rows('nav_item','option') ): the_row(); ?>
        <?php
        $name = get_sub_field('nav_name');
        $link = get_sub_field('nav_link');
        $layoutconfig = get_sub_field('layout_configuration');
        $readmorelink = get_sub_field('more_link')['url'];
        $readmorelinktext = get_sub_field('more_link')['title'];
        ?>
        <li class="header__menu__item">
            <a class="header__menu__item__link" href="<?php echo $link ?>"><?php echo $name ?>
                <div class="header__menu__item__arrow"><span></span></div>
            </a>
            <div class="dropdown">
                <div class="dropdown__blocks">
                    <?php if($layoutconfig == '4x') : ?>
                        <?php include (locate_template('includes/section-nav-grid--4x.php')); ?>
                    <?php endif; ?>
                </div>
                <div class="dropdown__cta">
                    <?php include (locate_template('includes/component-cta-line.php')); ?>
                </div>
            </div>
        </li>
        <?php endwhile;  ?>
    </ul>
<?php endif; ?>