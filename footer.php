<div class="footer">
    <div class="footer__gray">
        <div class="cont">
            <div class="row offset-md-6">
                <div class="col-12">
                    <?php
                    wp_nav_menu([
                        'theme_location' => 'menu-footer',
                        'container' => 'nav',
                        'container_class' => 'footer__menu',
                        'menu_class' => 'footer__list',
                        'items_wrap' => '<ul class="%2$s">%3$s</ul>',
                        'li_class' => 'footer__item',
                        'a_class' => 'footer__link',
                    ]);
                    ?>
                </div>
            </div>
            <div class="row offset-md-8">
                <div class="col-12">
                    <?php
                    wp_nav_menu([
                        'theme_location' => 'menu-pol',
                        'container' => 'nav',
                        'container_class' => 'footers__menus',
                        'menu_class' => 'footers__lists',
                        'items_wrap' => '<ul class="%2$s">%3$s</ul>',
                        'li_class' => 'footers__items',
                        'a_class' => 'footers__links policy'
                    ]);
                    ?>
                </div>
            </div>
        </div>
    </div>
</div>
<section class="copy">
    <div class="container container--medium">
        <div class="row">
            <div class="col-12 offset-md-4 col-md-6">
                <?php
                if (is_active_sidebar('lux-copy')) {
                    dynamic_sidebar('lux-copy');
                };
                ?>
            </div>
        </div>
    </div>
</section>
</div>
<?php wp_footer(); ?>
</body>

</html>