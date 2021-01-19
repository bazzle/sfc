<?php
    $args = array(
        'menu'=> 'Mobile menu',
        'menu_class'=> 'mobile-menu__list',
        'container'=> false
    );
?>

<div class="mobile-menu close">

    <nav class="mobile-menu__inner">
        <?php wp_nav_menu( $args ) ?>
    </nav>

</div>