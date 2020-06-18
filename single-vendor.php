<?php get_header(); ?>
<article class="article">
    <?php get_template_part('includes/component','breadcrumb') ?>
    <?php get_template_part('includes/component', 'hero-vendor') ?>
    <div class="panel">
        <div class="panel__container">
            <div class="article__grid">
                <div class="article__main">
                    <p class="article__intro">
                        <?php echo get_field( "intro" ); ?>
                    </p>
                    <div class="article__body">
                        <?php get_template_part('includes/section', 'content') ?>
                    </div>
                    <div class="article__footer">
                        <?php get_template_part('includes/component','author--horiz'); ?>
                    </div>
                </div>
                <aside class="article__sidebar">
                    <?php if( is_active_sidebar('single-vendor-sidebar') ): ?>
                        <?php dynamic_sidebar('single-vendor-sidebar'); ?>
                    <?php endif; ?>
                </aside>
            </div>
        </div>
    </div>
</article>

<?php get_footer(); ?>