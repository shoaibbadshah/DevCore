
import { Fragment } from 'react';
import Testimonials from '@/components/sections/Testimonials';

export default function Home() {
  return (
    <Fragment>
      <div
        dangerouslySetInnerHTML={{
          __html: `
        <!-- Preloader Start -->
        <div id="preloader" class="preloader">
            <div class="animation-preloader">
                <div class="spinner">                
                </div>
                <div class="txt-loading">
                    <span data-text-preloader="D" class="letters-loading">
                        D
                    </span>
                    <span data-text-preloader="E" class="letters-loading">
                        E
                    </span>
                    <span data-text-preloader="V" class="letters-loading">
                        V
                    </span>
                    <span data-text-preloader="C" class="letters-loading">
                       C
                    </span>
                    <span data-text-preloader="O" class="letters-loading">
                        O
                    </span>
                    <span data-text-preloader="R" class="letters-loading">
                        R
                    </span>
                     <span data-text-preloader="E" class="letters-loading">
                        E
                    </span>
                </div>
                <p class="text-center">Loading</p>
            </div>
            <div class="loader">
                <div class="row">
                    <div class="col-3 loader-section section-left">
                        <div class="bg"></div>
                    </div>
                    <div class="col-3 loader-section section-left">
                        <div class="bg"></div>
                    </div>
                    <div class="col-3 loader-section section-right">
                        <div class="bg"></div>
                    </div>
                    <div class="col-3 loader-section section-right">
                        <div class="bg"></div>
                    </div>
                </div>
            </div>
        </div>

        <!--<< Mouse Cursor Start >>-->  
        <div class="mouse-cursor cursor-outer"></div>
        <div class="mouse-cursor cursor-inner"></div>

        <!-- Back To Top start -->
        <button id="back-top" class="back-to-top">
            <i class="fa-regular fa-arrow-up"></i>
        </button>

        <!-- Offcanvas Area Start -->
        <div class="fix-area">
            <div class="offcanvas__info">
                <div class="offcanvas__wrapper">
                    <div class="offcanvas__content">
                        <div class="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
                            <div class="offcanvas__logo">
                                <a href="index.html">
                                    <img src="/DevCoreWeb/assets/img/logo/white-logo.svg" alt="logo-img">
                                </a>
                            </div>
                            <div class="offcanvas__close">
                                <button>
                                <i class="fas fa-times"></i>
                                </button>
                            </div>
                        </div>
                        <p class="text d-none d-xl-block">
                           DEVCORE is a cutting-edge real estate hub, built on the foundation of expertise, innovation, and seamless execution. As the ultimate hub for businesses and individuals navigating the property market, we specialize in development from the core, ensuring every project is executed with precision, creativity, and market intelligence.
                        </p>
                        <div class="mobile-menu fix mb-3"></div>
                        <div class="offcanvas__contact">
                            <h4>Contact Info</h4>
                            <ul>
                                <li class="d-flex align-items-center">
                                    <div class="offcanvas__contact-icon">
                                        <i class="fal fa-map-marker-alt"></i>
                                    </div>
                                    <div class="offcanvas__contact-text">
                                        <a target="_blank" href="#">Office 1404, Marina Plaza, Dubai Marina, Dubai, UAE</a>
                                    </div>
                                </li>
                                <li class="d-flex align-items-center">
                                    <div class="offcanvas__contact-icon mr-15">
                                        <i class="fal fa-envelope"></i>
                                    </div>
                                    <div class="offcanvas__contact-text">
                                        <a href="mailto:info@devcoreproperties.com"><span class="mailto:info@devcoreproperties.com">info@devcoreproperties.com</span></a>
                                    </div>
                                </li>
                                <li class="d-flex align-items-center">
                                    <div class="offcanvas__contact-icon mr-15">
                                        <i class="fal fa-clock"></i>
                                    </div>
                                    <div class="offcanvas__contact-text">
                                        <a target="_blank" href="#">Mod-friday, 09am -05pm</a>
                                    </div>
                                </li>
                                <li class="d-flex align-items-center">
                                    <div class="offcanvas__contact-icon mr-15">
                                        <i class="far fa-phone"></i>
                                    </div>
                                    <div class="offcanvas__contact-text">
                                        <a href="tel:+97148737111">+971 4 873 7111</a>
                                    </div>
                                </li>
                            </ul>
                            <div class="header-button mt-4">
                                <a href="contact.html" class="theme-btn text-center">
                                    Get A Quote
                                </a>
                            </div>
                            <div class="social-icon d-flex align-items-center">
                                <a href="#"><i class="fab fa-facebook-f"></i></a>
                                <a href="#"><i class="fab fa-twitter"></i></a>
                                <a href="#"><i class="fab fa-youtube"></i></a>
                                <a href="#"><i class="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="offcanvas__overlay"></div>

        <!-- Header Section Start -->
        <header id="header-sticky" class="header-1">
            <div class="container">
                <div class="mega-menu-wrapper">
                    <div class="header-main">
                        <div class="logo">
                            <a href="index.html" class="header-logo">
                                <img src="/DevCoreWeb/assets/img/logo/white-logo.svg" alt="logo-img">
                            </a>
                        </div>
                        <div class="mean__menu-wrapper">
                            <div class="main-menu">
                                <nav id="mobile-menu">
                                    <ul>
                                        <li><a href="#">Home </a>
                                        </li>
                                        <li class="has-dropdown active d-xl-none">
                                            <a href="team.html" class="border-none">
                                            Home
                                            </a>
                                            <ul class="submenu">
                                                <li><a href="index.html">Home 01</a></li>
                                                <li><a href="index-2.html">Home 02</a></li>
                                                <li><a href="index-3.html">Home 03</a></li>
                                                <li><a href="index-4.html">Home 04</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="about.html">About Us</a>
                                        </li>
                                        <li>
                                            <a href="service-details.html">
                                                Services
                                                <i class="fa-solid fa-chevron-down"></i>
                                            </a>
                                            <ul class="submenu">
                                                <li><a href="service.html">Service Page 01</a></li>
                                                <li><a href="service-2.html">Service Page 02</a></li>
                                                <li><a href="service-details.html">Service Details</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#">
                                                Projects
                                                <i class="fa-solid fa-chevron-down"></i>
                                            </a>
                                            <ul class="submenu">
                                                <li><a href="project.html">Project Page 01</a></li>
                                                <li><a href="project-2.html">Project Page 02</a></li>
                                                <li><a href="#">Project Details</a></li>
                                            </ul>
                                        </li>
                                       <li>
                                            <a href="news-details.html">
                                                Blog
                                                <i class="fa-solid fa-chevron-down"></i>
                                            </a>
                                            <ul class="submenu">
                                                <li><a href="news-grid.html">Blog Grid</a></li>
                                                <li><a href="news.html">Blog List</a></li>
                                                <li><a href="news-details.html">Blog Details</a></li>
                                            </ul>
                                        </li>
                                         <li><a href="#">Contact </a>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div class="header-right d-flex justify-content-end align-items-center">
                            <div class="header-button">
                               <a href="contact.html" class="theme-btn white-btn">Get In Touch</a>
                            </div>
                            <div class="header__hamburger d-xl-block my-auto">
                                <div class="sidebar__toggle">
                                  <span>Menu</span>  <i class="fas fa-bars"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <!-- Hero Section Start -->
        <section class="hero-section hero-1">
             <video autoplay muted loop>
                <source src="/DevCoreWeb/assets/img/hero/Real Estate Dubai - Final.mp4" type="video/mp4" />
                <source src="/DevCoreWeb/assets/img/hero/Real Estate Dubai - Final.mp4" type="video/ogg" />
                Your browser does not support the video tag.
              </video>
            <div class="container h-100 d-flex align-items-center justify-content-center">
                <div class="hero-content">
                      <h4 class="wow fadeInUp" data-wow-delay=".2s">
                       Welcome to DevCore
                    </h4>
                    <h1 class="wow fadeInUp" data-wow-delay=".3s">
                        Invest in <span>Dubai,</span> <br> Invest in the <span>Future</span>
                    </h1>
                    <div class="search-wrap wow fadeInUp" data-wow-delay=".4s">
            <div class="search-inner">
                
                <div class="search-cell">
                    <form method="get">
                        <div class="search-field-holder">
                            <input type="search" class="main-search-input" placeholder="Search...">
                        </div>
                    </form>
                </div>
                <a href="#"><i class="fa-regular fa-magnifying-glass" id="search-close"></i></a>
            </div>
        </div>
                </div>

            </div>
        </section>
 <!-- Brand Section Start -->
        <div class="brand-section fix pt-5 pb-5">
            <div class="container">
                <div class="swiper brand-slider">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <div class="brand-image text-center">
                                <img src="/DevCoreWeb/assets/img/brand/01.png" alt="img">
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="brand-image text-center">
                                <img src="/DevCoreWeb/assets/img/brand/02.png" alt="img">
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="brand-image text-center">
                                <img src="/DevCoreWeb/assets/img/brand/03.png" alt="img">
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="brand-image text-center">
                                <img src="/DevCoreWeb/assets/img/brand/04.png" alt="img">
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="brand-image text-center">
                                <img src="/DevCoreWeb/assets/img/brand/05.png" alt="img">
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="brand-image text-center">
                                <img src="/DevCoreWeb/assets/img/brand/06.png" alt="img">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

          <!-- About Section Start -->
        <section class="about-section fix section-padding section-bg">
            <div class="container">
                <div class="about-wrapper">
                    <div class="row justify-content-between align-items-center">
                        <div class="col-lg-5">
                            <div class="about-image-items">
                              <img src="/DevCoreWeb/assets/img/about/01.jpg" alt="img" class="img-fluid w-100">
                            </div>
                        </div>
                        <div class="col-lg-7">
                            <div class="about-content">
                                <div class=" wow fadeInUp" data-wow-delay=".3s">
                                    <div class="content">
                                       <div class="section-title">
                        <h6 class="wow fadeInUp">About Us</h6>
                        <h2 class="wow fadeInUp" data-wow-delay=".3s">Precision, <span>Innovation</span> <br> & Seamless Execution​</h2>
                    </div>
                                        <p>
                                            At DEVCORE, we revolutionize real estate with integrated solutions that enhance efficiency, deliver impactful marketing, and provide expert development and design consultancy. We build lasting partnerships with developers and brokerages, empowering them to navigate industry complexities with confidence and success.
                                        </p>
                                    </div>
                                </div>
                                <a href="about.html" class="theme-btn white-btn wow fadeInUp mt-5" data-wow-delay=".5s">More About Us</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="section-padding">
            <div class="container">
                                <div class="hero-counter ">
                    <div class="counter-items">
                        <h2><span class="count">2000</span>+</h2>
                        <p>Units in pipeline</p>
                    </div>
                    <div class="counter-items">
                        <h2><span class="count">25</span>BN+</h2>
                        <p>Worth Of Sale</p>
                    </div>
                    <div class="counter-items">
                        <h2><span class="count">25000</span>k</h2>
                        <p>Broker Agents</p>
                    </div>
                    <div class="counter-items">
                        <h2><span class="count">200</span>k</h2>
                        <p>Employees</p>
                    </div>
                    <div class="counter-items">
                        <h2><span class="count">10500</span>k</h2>
                        <p>Units Sold</p>
                    </div>
                    <div class="counter-items">
                        <h2><span class="count">3000</span>k</h2>
                        <p>Brokerages</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Service Section Start -->
        <section class="service-section fix section-padding section-bg">
            <div class="container">
                <div class="section-title-area">
                    <div class="section-title">
                        <h6 class="wow fadeInUp">Our Services</h6>
                        <h2 class="wow fadeInUp" data-wow-delay=".3s">We Shape the <span>Perfect</span> solution</h2>
                    </div>
                    <a href="service.html" class="theme-btn white-btn wow fadeInUp" data-wow-delay=".5s">See All Services</a>
                </div>
                <div class="row g-0">
                    <div class="col-md-4 wow fadeInUp" data-wow-delay=".2s">
                        <div class="service-box-items">
                            <div class="icon">
                             <img src="/DevCoreWeb/assets/img/services/s1.jpg" alt="" class="img-fluid">
                            </div>
                            <div class="content">
                                <h3><a href="service-details.html">LAND ACQUISITION​</a></h3>
                                <p>
                                    Strategic sourcing of prime real estate opportunities, ensuring high-value investments for developers and investors.​
                                </p>
                                <div class="service-btn">
                                    <a href="service-details.html" class="arrow-icon"><img src="/DevCoreWeb/assets/img/icon/02.svg" alt="img"></a>
                                    <a href="service-details.html" class="link-btn">Read more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 wow fadeInUp" data-wow-delay=".4s">
                        <div class="service-box-items">
                            <div class="icon">
                               <img src="/DevCoreWeb/assets/img/services/s2.jpg" alt="" class="img-fluid">
                            </div>
                            <div class="content">
                                <h3><a href="service-details.html">DESIGN &​ DEVELOPMENT​</a></h3>
                                <p>
                                   Innovative, future-ready projects built with precision, sustainability, and market appeal in mind.​
                                </p>
                                <div class="service-btn">
                                    <a href="service-details.html" class="arrow-icon"><img src="/DevCoreWeb/assets/img/icon/02.svg" alt="img"></a>
                                    <a href="service-details.html" class="link-btn">Read more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 wow fadeInUp" data-wow-delay=".6s">
                        <div class="service-box-items">
                            <div class="icon">
                               <img src="/DevCoreWeb/assets/img/services/s3.jpg" alt="" class="img-fluid">
                            </div>
                            <div class="content">
                                <h3><a href="service-details.html">SALES & MARKETING</a></h3>
                                <p>
                                   Maximizing property exposure and sales velocity through cutting-edge branding, digital campaigns, and strategic sales execution.​
                                </p>
                                <div class="service-btn">
                                    <a href="service-details.html" class="arrow-icon"><img src="/DevCoreWeb/assets/img/icon/02.svg" alt="img"></a>
                                    <a href="service-details.html" class="link-btn">Read more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 wow fadeInUp" data-wow-delay=".8s">
                        <div class="service-box-items">
                            <div class="icon">
                               <img src="/DevCoreWeb/assets/img/services/s4.jpg" alt="" class="img-fluid">
                            </div>
                            <div class="content">
                                <h3><a href="service-details.html">CONTENT CREATION​</a></h3>
                                <p>
                                   Elevating real estate storytelling with high-quality visuals, immersive media, and powerful narratives that captivate buyers.​
                                </p>
                                <div class="service-btn">
                                    <a href="service-details.html" class="arrow-icon"><img src="/DevCoreWeb/assets/img/icon/02.svg" alt="img"></a>
                                    <a href="service-details.html" class="link-btn">Read more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 wow fadeInUp" data-wow-delay=".8s">
                        <div class="service-box-items">
                            <div class="icon">
                               <img src="/DevCoreWeb/assets/img/services/s5.jpg" alt="" class="img-fluid">
                            </div>
                            <div class="content">
                                <h3><a href="service-details.html">CRM & COLLECTIONS​​</a></h3>
                                <p>
                                  Seamless client relationship management & financial oversight to ensure efficient transactions & optimized revenue streams.​
                                </p>
                                <div class="service-btn">
                                    <a href="service-details.html" class="arrow-icon"><img src="/DevCoreWeb/assets/img/icon/02.svg" alt="img"></a>
                                    <a href="service-details.html" class="link-btn">Read more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Team Section Start -->
        <section class="team-section fix section-padding">
            <div class="container">
                 <div class="section-title-area">
                    <div class="section-title">
                        <h6 class="wow fadeInUp">Our Work</h6>
                        <h2 class="wow fadeInUp" data-wow-delay=".3s">Our Recent <span>Projects</span></h2>
                    </div>
                    <a href="service.html" class="theme-btn wow fadeInUp" data-wow-delay=".5s">See All Projects</a>
                </div>
                <div class="swiper portfolio-slider">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <div class="team-box-items">
                                <div class="team-image">
                                    <img src="/DevCoreWeb/assets/img/project/project-one-img-1.jpg" alt="img">
                                </div>
                                <div class="team-content">
                                    <h3><a href="#">White Bay Umm Al Quwain</a></h3>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="team-box-items">
                                <div class="team-image">
                                    <img src="/DevCoreWeb/assets/img/project/project-one-img-2.jpg" alt="img">
                                </div>
                                <div class="team-content">
                                    <h3><a href="#">White Bay Umm Al Quwain</a></h3>
                                </div>
                            </div>
                        </div>
                         <div class="swiper-slide">
                            <div class="team-box-items">
                                <div class="team-image">
                                    <img src="/DevCoreWeb/assets/img/project/project-one-img-3.jpg" alt="img">
                                </div>
                                <div class="team-content">
                                    <h3><a href="#">White Bay Umm Al Quwain</a></h3>
                                </div>
                            </div>
                        </div>
                         <div class="swiper-slide">
                            <div class="team-box-items">
                                <div class="team-image">
                                    <img src="/DevCoreWeb/assets/img/project/project-one-img-4.jpg" alt="img">
                                </div>
                                <div class="team-content">
                                    <h3><a href="#">White Bay Umm Al Quwain</a></h3>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="team-box-items">
                                <div class="team-image">
                                    <img src="/DevCoreWeb/assets/img/project/project-one-img-5.jpg" alt="img">
                                </div>
                                <div class="team-content">
                                    <h3><a href="#">White Bay Umm Al Quwain</a></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Portfolio Section Start -->
        <section class="portfolio-section fix section-bg section-padding" id="projects">
            <div class="container">
                <div class="section-title-area">
                    <div class="section-title">
                        <h6 class="wow fadeInUp">Our Coverage</h6>
                        <h2 class="wow fadeInUp" data-wow-delay=".3s">Top areas in <span>Dubai</span></h2>
                    </div>
                    <a href="project.html" class="theme-btn white-btn wow fadeInUp" data-wow-delay=".3s">See All</a>
                </div>
            </div>
            <div class="swiper portfolio-slider-new">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <div class="portfolio-image-items">
                            <img src="/DevCoreWeb/assets/img/project/a1.jpg" alt="img">
                            <div class="content">
                                <h3><a href="#">Area Name Will Goes Here</a></h3>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="portfolio-image-items">
                            <img src="/DevCoreWeb/assets/img/project/a2.jpg" alt="img">
                            <div class="content">
                                <h3><a href="#">Area Name Will Goes Here</a></h3>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="portfolio-image-items">
                            <img src="/DevCoreWeb/assets/img/project/a3.jpg" alt="img">
                            <div class="content">
                                <h3><a href="#">Area Name Will Goes Here</a></h3>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="portfolio-image-items">
                            <img src="/DevCoreWeb/assets/img/project/a4.jpg" alt="img">
                            <div class="content">
                                <h3><a href="#">Area Name Will Goes Here</a></h3>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="portfolio-image-items">
                            <img src="/DevCoreWeb/assets/img/project/a5.jpg" alt="img">
                            <div class="content">
                                <h3><a href="#">Area Name Will Goes Here</a></h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    <section class="lead">
            <div class="container">
                <div class="inner_cont">
                    <div class="row align-items-center">
                        <div class="col-md-3">
                            <div class="guide"><img src="/DevCoreWeb/assets/img/brand/guide.png" alt="" class="img-fluid"></div>
                        </div>
                        <div class="col-md-9">
                        <div class="section-title">
                        <h6 class="wow fadeInUp">Top Branded</h6>
                        <h2 class="wow fadeInUp" data-wow-delay=".3s">Provident's Top <span>Branded</span> Developement<br>In The UAE Coffee Table Book</h2>
                    </div>
                    <p>The first-ever dedicated platform for branded developments in the UAE. Discover an exclusive collection of the finest properties in Provident's branded projects coffee table book.</p>
                    <a href="#" class="theme-btn mt-4">Download Digital Edition</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- News Section Start -->
        <section class="news-section fix section-padding">
            <div class="container">
                <div class="section-title-area">
                    <div class="section-title">
                        <h6 class="wow fadeInUp">Blog & News </h6>
                        <h2 class="wow fadeInUp" data-wow-delay=".3s">Latest News & <span>Blog</span></h2>
                    </div>
                    <a href="#" class="theme-btn wow fadeInUp" data-wow-delay=".5s">See All Blog</a>
                </div>
                <div class="swiper blog-slider">
                <div class="swiper-wrapper">
                    <div class="swiper-slide wow fadeInUp" data-wow-delay=".3s">
                        <div class="news-box-items">
                            <div class="news-image">
                                <img src="/DevCoreWeb/assets/img/news/blog-one-img-1.jpg" alt="img">
                                <img src="/DevCoreWeb/assets/img/news/blog-one-img-1.jpg" alt="img">
                            </div>
                            <div class="news-content">
                                <p>August 17, 2024</p>
                                <h3><a href="news-details.html">The Power of Visual Branding</a></h3>
                                <div class="news-btn">
                                    <a href="news-details.html" class="link-btn">View Details</a>
                                    <a href="news-details.html" class="arrow-icon"><img src="/DevCoreWeb/assets/img/icon/02.svg" alt="img"></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide wow fadeInUp" data-wow-delay=".5s">
                        <div class="news-box-items">
                            <div class="news-image">
                                <img src="/DevCoreWeb/assets/img/news/blog-one-img-2.jpg" alt="img">
                                <img src="/DevCoreWeb/assets/img/news/blog-one-img-2.jpg" alt="img">
                            </div>
                            <div class="news-content">
                                <p>August 17, 2024</p>
                                <h3><a href="news-details.html">The Power of Visual Branding</a></h3>
                                <div class="news-btn">
                                    <a href="news-details.html" class="link-btn">View Details</a>
                                    <a href="news-details.html" class="arrow-icon"><img src="/DevCoreWeb/assets/img/icon/02.svg" alt="img"></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide wow fadeInUp" data-wow-delay=".7s">
                        <div class="news-box-items">
                            <div class="news-image">
                                <img src="/DevCoreWeb/assets/img/news/blog-one-img-3.jpg" alt="img">
                                <img src="/DevCoreWeb/assets/img/news/blog-one-img-3.jpg" alt="img">
                            </div>
                            <div class="news-content">
                                <p>August 17, 2024</p>
                                <h3><a href="news-details.html">The Power of Visual Branding</a></h3>
                                <div class="news-btn">
                                    <a href="news-details.html" class="link-btn">View Details</a>
                                    <a href="news-details.html" class="arrow-icon"><img src="/DevCoreWeb/assets/img/icon/02.svg" alt="img"></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
      `,
        }}
      />

      <Testimonials />

      <div
        dangerouslySetInnerHTML={{
          __html: `
     <!-- Lets Talk Section Start -->
     <section class="lets-talk section-bg section-padding">
            <div class="container">
                <div class="row">
                    <div class="col-md-5">
                         <div class="section-title-area">
                    <div class="section-title">
                        <h6 class="wow fadeInUp">Contact Us</h6>
                        <h2 class="wow fadeInUp" data-wow-delay=".3s">Have a quick <span>question?</span> <br>Get in touch and we'll help you out.</h2>
                    </div>
                </div>
                    </div>
                    <div class="col-md-7">
                        <div class="row">
                            <div class="col-md-6">
                                <input type="text" class="form-control" placeholder="First Name">
                            </div>
                            <div class="col-md-6">
                                <input type="text" class="form-control" placeholder="last Name">
                            </div>
                            <div class="col-md-6">
                                <input type="email" class="form-control" placeholder="Email">
                            </div>
                            <div class="col-md-6">
                                <input type="tel" class="form-control" placeholder="Phone Number">
                            </div>
                            <div class="col-md-12">
                                <textarea class="form-control" placeholder="Message"></textarea>
                                <a href="#" class="theme-btn white-btn">Send Message</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         </section>

        <!-- Footer Section Start -->
        <footer class="footer-section fix">
            <div class="container">
                <div class="footer-widgets-wrapper">
                    <div class="row">
                        <div class="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                            <div class="single-footer-widget">
                                <div class="widget-head">
                                    <a href="index.html">
                                        <img src="/DevCoreWeb/assets/img/logo/white-logo.svg" alt="img">
                                    </a>
                                </div>
                                <div class="footer-content">
                                    <p>
                                        DEVCORE is a cutting-edge real estate hub, built on the foundation of expertise, innovation, and seamless execution.
                                    </p>
                                    <div class="social-icon d-flex align-items-center">
                                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                                        <a href="#"><i class="fab fa-twitter"></i></a>
                                        <a href="#"><i class="fab fa-vimeo-v"></i></a>
                                        <a href="#"><i class="fab fa-pinterest-p"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-2 col-lg-4 col-md-6 ps-lg-3 wow fadeInUp" data-wow-delay=".4s">
                            <div class="single-footer-widget">
                                <div class="widget-head">
                                    <h3>Quick Links</h3>
                                </div>
                                <ul class="list-items">
                                    <li>
                                        <a href="#"> About Us</a>
                                    </li>
                                    <li>
                                        <a href="#"> Our Services</a>
                                    </li>
                                     <li>
                                        <a href="#"> Our Projects</a>
                                    </li>
                                    <li>
                                        <a href="#"> Our Blog</a>
                                    </li>
                                    <li>
                                        <a href="#"> Contact Us</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp" data-wow-delay=".6s">
                            <div class="single-footer-widget">
                                <div class="widget-head">
                                    <h3>Office</h3>
                                </div>
                                <div class="footer-content">
                                    <p>Office 1404, Marina Plaza, Dubai Marina, Dubai, UAE</p>
                                    <div class="contact-text">
                                        <h4 class="pb-3"><a href="#">+971 4 873 7111</a></h4>
                                        <h5><a href="#">info@devcoreproperties.com</a></h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-4 col-md-6 ps-lg-3 wow fadeInUp" data-wow-delay=".8s">
                            <div class="single-footer-widget">
                                <div class="widget-head">
                                    <h3>Subscribe to our newsletter</h3>
                                </div>
                                <div class="footer-content">
                                    <div class="footer-input">
                                        <input type="email" id="email" placeholder="Enter your email">
                                        <button class="newsletter-btn" type="submit">
                                            <i class="fa-sharp fa-light fa-paper-plane"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer-bottom">
                    <div class="footer-bottom-wrapper">
                        <p class="wow fadeInUp" data-wow-delay=".3s">Copyright @ 2025 DevCore</p>
                    </div>
                </div>
            </div>
        </footer>
          `,
        }}
      />
    </Fragment>
  );
}

