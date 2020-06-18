<div class="hero-single panel">
    <div class="panel__container">
      
      <div class="hero-single__inner">
        <div class="hero-single__main">
            <div class="hero-single__divider">
                <?php get_template_part('includes/component', 'divider-down') ?>
            </div>
            <div class="hero-single__title-lockup">
                <h1 class="hero-single__title"><?php the_title(); ?></h1>
                <div class="hero-single__meta">
                    <p>
                        <span><?php echo get_field( "address" ); ?></span> <br>
                        <span>By <?php the_author(); ?> <?php the_date() ?></span>
                    </p>
                </div>
            </div>
        </div>
        <div class="hero-single__image">
            <img src="http://street-food-city.local/wp-content/uploads/2020/04/girls-at-street-food-markets-uk.jpg" alt="Girls">
        </div>
      </div>
      
    </div>
</div>