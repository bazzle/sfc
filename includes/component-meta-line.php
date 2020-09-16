<?php
    if ( is_tax()){
        $authorid = get_field('taxonomy_author_id', $term );
    } else {
        $authorid = get_the_author_meta('ID');
    }
    $authoridacf = 'user_' . $authorid;
    $authorname = get_field('author_box', $authoridacf)['author_name'];
?>

<p>
    By <?php echo $authorname ?> – Last updated <?php the_modified_date() ?>
</p>