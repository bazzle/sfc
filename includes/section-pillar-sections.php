<?php if( have_rows('sections', $term) ): ?>
    <?php while( have_rows('sections', $term) ): the_row();

        // vars
        $title = get_sub_field('section_title');
        $intro = get_sub_field('section_intro');
        $content = get_sub_field('section_content');
        $aside_content = get_sub_field('section_aside_content');
        $aside_main = get_sub_field('section_aside_main');
    ?>

    


    <section class="panel panel--nospaced pillar__section">
                
        <div class="grid-item grid-space article__space-left"></div>
        

        <div class="grid-item pillar__section__title">
            <h1 class="grid-item pillar__section__title__title"><?php echo $title ?></h1>
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