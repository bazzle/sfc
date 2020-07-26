<?php
$term = get_queried_object();
if((int)$term->parent) {
    include(locate_template('includes/section-tax-nationality.php'));
} else {
    include(locate_template('includes/section-tax-what_to_eat.php'));
}
?>