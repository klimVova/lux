<?php
/* Template Name: Home page Template */
get_header();
?>

<div class="main">
    <section class="hero">
        <div class="container">
            <div class="row">
                <div class="col-12 col-md-6">
                    <h1 class="heading hero__heading">
                        <?php echo get_field('hero_title'); ?>
                    </h1>
                    <p class="paragraph hero__paragraph">
                        <?php echo get_field('hero_descriprion'); ?>
                    </p>
                    <div class="hero__buttons"><a class="button hero__button" href="#Contacts" id="page-contact">Contact us</a>
                        <a class="button button--secondary hero__button" href="#Services" id="page-contact">Our services</a>
                    </div>
                </div>
                <div class="col-12 col-md-6">
                    <img src="<?php echo get_field('hero_image'); ?>" alt="">
                </div>
            </div>
        </div>
    </section>


    <section class="features">
        <div class="container--small">
            <div class="row">
                <?php
                $features = get_field('hero_features');
                foreach ($features as $feature) :
                ?>
                    <div class="col-12 col-md-4">
                        <img src="<?php echo $feature['image']; ?>" alt="">
                        <h4 class="feature__heading heading heading__small">
                            <?php echo $feature['title']; ?>
                        </h4>
                        <p class="paragraph paragraph__small">
                            <?php echo $feature['descriprtion']; ?>
                        </p>
                    </div>
                <?php
                endforeach;
                ?>
            </div>
        </div>
    </section>


    <section class="development" id="About">
        <div class="container container--medium">
            <h1 class="heading development__heading heading__medium">
                <?php echo get_field('development_title'); ?>
            </h1>
            <div class="row">
                <div class="col-12 col-md-6">
                    <img src="<?php echo get_field('development__image'); ?>" alt="">
                </div>
                <div class="col-12 col-md-6">
                    <?php
                    $developments = get_field('development_description');
                    foreach ($developments as $development) :
                    ?>
                        <p class="zxc paragraph paragraph__small paragraph--border">
                            <?php echo $development['desc']; ?>
                        </p>
                    <?php
                    endforeach;
                    ?>
                </div>
            </div>
            <div class="row">
                <?php
                $developments = get_field('development_description__bottom');
                foreach ($developments as $development) :
                ?>
                    <div class="col-12 col-md-6">
                        <div class="development__description_bottom">
                            <p class="paragraph paragraph__small paragraph__development">
                                <?php echo $development['description__bottom_left']; ?>
                            </p>
                        </div>
                    </div>
                    <div class="col-12 col-md-6">
                        <div class="development__description_bottom">
                            <p class="paragraph paragraph__small paragraph__top">
                                <?php echo $development['description__bottom_right']; ?>
                            </p>
                        </div>
                    <?php
                endforeach;
                    ?>
                    </div>
            </div>
        </div>
</div>
</section>

<section class="success-block">
    <div class="row">
        <?php
        $successes = get_field('success');
        foreach ($successes as $success) :
        ?>
            <div class="col-12 col-md-3">
                <p class="number "><?php echo $success['number']; ?></p>
                <p class="success "><?php echo $success['description']; ?></p>
            </div>
        <?php
        endforeach;
        ?>
    </div>
</section>

<section class="development-block" id="Services">
    <div class=" container container--big">
        <h1 class="heading development__heading heading__medium">
            <?php echo get_field('service_title'); ?>
        </h1>
        <div class="row">
            <?php
            $services = get_field('services');
            foreach ($services as $service) :
            ?>
                <div class="col-12 col-md-3">
                    <div class="feature__block">
                        <h4 class="developments__heading heading heading__small">
                            <?php echo $service['service_title']; ?>
                        </h4>
                        <p class="paragraph paragraph__small">
                            <?php echo $service['service_description']; ?>
                        </p>
                    </div>
                </div>
            <?php
            endforeach;
            ?>
        </div>
    </div>
</section>

<section class="description" id="working">
    <div class="container--description">
        <div class="row">
            <div class="col-12 col-md-6">
                <h1 class="heading  heading__description">
                    <?php echo get_field('working_title'); ?>
                </h1>
            </div>
            <div class="col-12 col-md-6">
                <p class="paragraph feature__paragraph paragraph__description">
                    <?php echo get_field('working_description'); ?>
                </p>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <div class="about-us">
                    <ul class="about-us__list">
                        <?php
                        $working_items = get_field('working_items');
                        foreach ($working_items as $working_item) :
                        ?>
                            <li class="about-us__item">
                                <div class="about-us-block">
                                    <div class="about-us-block__count">
                                        <?php echo $working_item['working_item_number']; ?>
                                    </div>
                                    <div class="about-us-block__circle-container">
                                        <div class="about-us-block__circle"></div>
                                    </div>
                                    <div class="about-us-block__heading">
                                        <?php echo $working_item['working_item_title']; ?>
                                    </div>
                                </div>
                            </li>
                        <?php
                        endforeach;
                        ?>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="specialized" id="Industries">
    <div class="container container--specialized">
        <h1 class="heading development__heading heading__medium">
            <?php echo get_field('specialized_title'); ?>
        </h1>
        <div class="row">
            <?php
            $specializations = get_field('specializations');
            foreach ($specializations as  $specialization) :
            ?>
                <div class="col-12 col-md-3">
                    <div class="specialization">
                        <img src=" <?php echo $specialization['specialization_image']; ?>">
                        <p class=" paragraph paragraph__specialized">
                            <?php echo $specialization['specialization_title']; ?>
                        </p>
                    </div>
                </div>
            <?php
            endforeach;
            ?>
        </div>
    </div>
</section>

<section class="contacts" id="Contacts">
    <div class="container container--big">
        <div class="row">
            <div class="col-12 col-md-6">
                <div class="contact">
                    <h4 class="contacts__heading heading heading__contacts">
                        <?php echo get_field('form_title'); ?>
                    </h4>
                    <p class="paragraph feature__paragraph paragraph__contacts">
                        <?php echo get_field('form_description'); ?>
                    </p>
                </div>
            </div>
            <div class="col-12 col-md-6">
                <div class="contact">
                    <?php echo do_shortcode('[contact-form-7 id="242" title="form"]'); ?>
                </div>
            </div>
        </div>
</section>


<section class="features">
    <div class="container--features">
        <div class="row">
            <?php
            $locations = get_field('locations');
            foreach ($locations as  $location) :
            ?>
                <div class="col-12 col-md-4">
                    <div class="feature">
                        <img src=" <?php echo $location['location_image']; ?>">
                        <h4 class="heading heading__small">
                            <?php echo $location['location_name']; ?>
                        </h4>
                        <p class="paragraph  paragraph__location">
                            <?php
                            if (is_active_sidebar('lux-adres')) {
                                dynamic_sidebar('lux-adres');
                            };
                            ?></p>
                    </div>
                </div>
            <?php
            endforeach;
            ?>
            <?php
            $phones = get_field('phones');
            foreach ($phones as  $phone) :
            ?>
                <div class="col-12 col-md-4">
                    <div class="feature">
                        <img src=" <?php echo $phone['phone_image']; ?>">
                        <h4 class="heading heading__small">
                            <?php echo $phone['phone_name']; ?>
                        </h4>
                        <p class="paragraph  paragraph__location">
                            <?php
                            if (is_active_sidebar('lux-phone')) {
                                dynamic_sidebar('lux-phone');
                            };
                            ?></p>
                    </div>
                </div>
            <?php
            endforeach;
            ?>
            <?php
            $emails = get_field('emails');
            foreach ($emails as  $email) :
            ?>
                <div class="col-12 col-md-4">
                    <div class="feature">
                        <img src=" <?php echo $email['email_image']; ?>">
                        <h4 class="heading heading__small">
                            <?php echo $email['email_name']; ?>
                        </h4>
                        <p class="paragraph  paragraph__location">
                            <?php
                            if (is_active_sidebar('lux-email')) {
                                dynamic_sidebar('lux-email');
                            };
                            ?></p>
                    </div>
                </div>
            <?php
            endforeach;
            ?>
        </div>
</section>




</div>
<?php
get_footer();
?>