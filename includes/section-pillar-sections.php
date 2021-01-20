<?php if( have_rows('sections', $term) ): ?>
    <?php while( have_rows('sections', $term) ): the_row();

        // vars
        $title = get_sub_field('section_title');
        $intro = get_sub_field('section_intro');
        $content = get_sub_field('section_content');
        $asidecontent = get_sub_field('section_aside_content');
        $asidemain = get_sub_field('section_aside_main');
    ?>

    


    <section class="panel panel--no-inner pillar__section">
        

        <h2 class="grid-item pillar__section__title">
            <?php echo $title ?>
        </h2>


        <div class="grid-item pillar__section__body">
            <?php if ($intro) : ?>
                <p class="article__intro">
                    <?php echo $intro ?>
                </p>
            <?php endif; ?>
            
            <?php if( $content ) : ?>
                <div class="pillar__section__body__main">
                    <?php echo $content; ?>
                </div>
            <?php endif; ?>
        </div>


        <?php if ($asidecontent) : ?>
            <aside class="pillar__section__asidecontent">
                <?php echo $asidecontent; ?>
            </aside>
            <?php endif; ?>
            <?php if ($asidemain) : ?>
            <aside class="pillar__section__asidemain">
                <?php echo $asidemain; ?>
            </aside>
        <?php endif; ?>
        
    </section>

    <?php endwhile; ?>
<?php endif; ?>