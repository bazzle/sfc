<?php
$title = get_field( "title", $term );
$intro = get_field("intro", $term );
$overview = get_field("pillar_overview", $term);
$asidecontent = get_field("aside_content", $term);
$asidemain = get_field("aside_main", $term);
if (empty($title)){
    $title = $term->name;
}
?>

<?php get_header(); ?>

<div class="panel">
        <div class="panel__inner">
            <div class="panel__inner--margins">
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
                            $title = $cat->name;
                            $link = get_category_link($cat);
                            $imagepath = get_field("featured_image", $cat)['url'];
                            $imagealt = get_field("featured_image", $cat)['alt'];
                            $text = wpautop(get_field("intro", $cat ));
                        ?>

                        <div class="grid__item grid-4x__item">
                            <?php $block = 'block_1_feature_block' ?>
                            <?php include( locate_template( 'includes/component-block--card.php', false, false ) ); ?>
                        </div>

                    <?php endforeach; ?>
                </div>
            </div>
        </div>
</div>
    


<?php get_footer(); ?>