<?php if( have_rows('sections') ): ?>
    <?php while( have_rows('sections') ): the_row();

        // vars
        $title = get_sub_field('section_title');
        $intro = get_sub_field('section_intro');
        $content = get_sub_field('section_content');
        $aside_content = get_sub_field('section_aside_content');
        $aside_main = get_sub_field('section_aside_main');
        $featured_image = get_sub_field('section_featured_image');
    ?>




    <section class="panel pillar__section">
                
        <div class="grid-item grid-space article__space-left"></div>
        

        <div class="grid-item pillar__section__title">
            <hr class="pillar__section__title__line"/>
            <h1 class="grid-item pillar__section__title__title"><?php echo $title ?></h1>
        </div>

        <div class="grid-item pillar__section__featured-image">
            <?php if( $featured_image ) {
                $url = $featured_image['url'];
                $alt = $featured_image['alt'];
                echo "<img class='pillar__section__featured-image__image' src='$url' alt='$alt'/>";
            }; ?>
        </div>

        <div class="grid-item grid-space article__space-right"></div>

        <div class="grid-item pillar__section__intro">
            <p>
            <?php echo $intro; ?>
            </p>
        </div>

        <aside class="pillar__section__asidemain">
            <?php echo $aside_main; ?>
        </aside>

        <div class="grid-item pillar__section__body">
            <div class="pillar__section__content">
            <?php if( $content ) {
                echo $content;
            }; ?>
            </div>
        </div>
        <aside class="grid-item pillar__section__asidecontent">
            <?php if( $aside_content ) {
                echo $aside_content;
            }; ?>
        </aside>
    </section>

    <?php endwhile; ?>
<?php endif; ?>