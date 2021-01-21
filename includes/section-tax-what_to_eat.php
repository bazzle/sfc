<?php
$title = 'What to Eat';
$intro = get_field("intro", $term );
$overview = get_field("pillar_overview", $term);
$asidecontent = get_field("aside_content", $term);
$asidemain = get_field("aside_main", $term);
$paneltitle = $title;
$paneltitleLevel = 1;
?>

<?php get_header(); ?>

    <div class="panel">
        <div class="panel__inner panel__inner--margins">
            <?php include( locate_template( 'includes/component-panel-title.php' ) );  ?>
            <div class="grid grid-4x grid-4x--repeat">
                <?php 
                    $args = array(
                        'taxonomy' => 'guide_categories',
                        'hide_empty' => 0,
                        'hierarchical' => true,
                        'parent' => 18
                    );
                    $cats = get_categories( $args );
                    ?>

                    <?php foreach($cats as $cat) :
                        $id = $cat->term_id;
                        $blocktitle = $cat->name;
                        $link = get_category_link($cat);
                        $imagepath = get_field("featured_image", $cat)['url'];
                        $imagealt = get_field("featured_image", $cat)['alt'];
                        $text = wpautop(category_description($cat));
                        $heading_level = 2;
                    ?>

                    <div class="grid__item grid-4x__item">
                        <?php include( locate_template( 'includes/component-block--card.php', false, false ) ); ?>
                    </div>

                <?php endforeach; ?>
            </div>
        </div>
</div>
    


<?php get_footer(); ?>