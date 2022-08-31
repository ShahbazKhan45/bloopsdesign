<header>
    <section class="nav-bar">
        <div class="container">
            <div class="row">
                <div class="col-md-3">
                    <a href="javascript:" class="logo">
                        <img src="<?php echo $siteurl ?>assets/images/logo.png" titile="SilkDigitizing" alt="Logo">
                    </a>
                </div>

                <div class="col-md-9">
                    <div class="mobile-screen">
                        <a href="javascript:" onclick="navOpen()" class="btn" id="list-btn">
                            <i class="fas fa-bars"></i>
                        </a>
                    </div>
                    <a href="javascript:" onclick="navClosed()" class="btn" id="cross">
                        <i class="fas fa-times"></i>
                    </a>
                    <nav class="mobile-view main-menu" id="menu-list">
                        <ul class="menu">
                            <li><a href="<?php echo $siteurl ?>/">HOME</a></li>
                            <li><a href="<?php echo $siteurl ?>/work/">WORK</a></li>

                            <!-- Dropdown start -->
                            <li class="nav-item dropdown">
                                <a class="dropdown-toggle" href="<?php echo $siteurl ?>/">SERVICES</a>
                                <div class="dropdown-menu">
                                    <a class="dropdown-item" href="<?php echo $siteurl ?>javascript:"> Logo Design</a>
                                    <a class="dropdown-item" href="<?php echo $siteurl ?>javascript:"> Website Design</a>
                                    <a class="dropdown-item" href="<?php echo $siteurl ?>javascript:"> Video Animation</a>
                                    <a class="dropdown-item" href="<?php echo $siteurl ?>javascript:">Branding</a>
                                    <a class="dropdown-item" href="<?php echo $siteurl ?>javascript:">SEO</a>
                                </div>
                            </li>
                            <!-- Dropdown end -->
                            <li><a href="<?php echo $siteurl ?>/about"> PORTFOLIO</a></li>
                            <li><a href="<?php echo $siteurl ?>/pricing/"> PACKAGES</a></li>
                            <li><a href="<?php echo $siteurl ?>/contact-us/"> TESTIMONIALS</a></li>
                            <li><a href="<?php echo $siteurl ?>/patches/"> CONTACT</a></li>

                            <div class="nav_btns">
                                <li><a class="btn btn_phone" href="tel:+1 (760) 266-8520"><i class="fa fa-phone"></i> +1 (760) 266-8520</a></li>
                                <li><a class="btn btn_red" href="<?php echo $siteurl ?>/">Get Started</a></li>
                            </div>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </section>
</header>