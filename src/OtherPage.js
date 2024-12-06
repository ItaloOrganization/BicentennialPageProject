import React from 'react';


function OtherPage() {
  return (
    <div>

      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link href="https://fonts.googleapis.com" rel="preconnect" />
          <link href="https://fonts.gstatic.com" rel="preconnect" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Courgette&family=Inter:wght@100..900&family=Send+Flowers&display=swap"
            rel="stylesheet"
          />
          <title>React App</title>
        </head>
        <body>
          <div id="root"></div>
        </body>
      </html>
      <head>
        <link href="../assets/img/favicon.png" rel="icon" />
        <link href="../assets/img/apple-touch-icon.png" rel="apple-touch-icon" />
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link href="https://fonts.gstatic.com" rel="preconnect" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet" />
        <link
          href="https://fonts.googleapis.com/css2?family=Courgette&family=Inter:wght@100..900&family=Send+Flowers&display=swap"
          rel="stylesheet" />

        <link href="../assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
        <link href="../assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet" />
        <link href="../assets/vendor/aos/aos.css" rel="stylesheet" />
        <link href="../assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet" />
        <link href="../assets/css/main.css" rel="stylesheet" />


      </head>
      <body class="index-page">
        <header id="header" class="header fixed-top">
          <div class="position-relative d-flex">
            <a href="index.html" class="logo me-auto">
              <img src="../assets/img/no_logo.svg" alt="no logo" />
            </a>
            <img src="../assets/img/Mallku.svg" alt="mallku" id="condor" />
            <img src="../assets/img/Freedom_Bell.svg" alt="freedom bell" id="bell" />
            <img src="../assets/img/broken_chains.svg" alt="broken chains" id="chain" />
            <audio id="bell-audio" src="../assets/media/deep_bell.mp3"></audio>


            <div class="nav-container">
              <div id="clouds" class="text-center">
                <img src="../assets/img/draw_clouds_1.svg" alt="draw" id="ic_cloud_1" />
                <img src="../assets/img/draw_clouds_2.svg" alt="draw" id="ic_cloud_2" />
                <img src="../assets/img/draw_sun.svg" alt="draw" id="ic_sun" />
                <img src="../assets/img/draw_clouds_3.svg" alt="draw" id="ic_cloud_3" />
              </div>
              <nav id="navmenu" class="navmenu">
                <ul>
                  <li><a href="index.html" class="courgette-regular">&nbspInicio&nbsp<br /></a></li>
                  <li><a href="index.html" class="courgette-regular active">Lugares</a></li>
                  <li><a href="event-details.html" class="courgette-regular">Eventos</a></li>
                  <li><a href="portfolio" class="courgette-regular">Historia</a></li>
                  <li><a href="#" class="courgette-regular">Nosotros</a></li>
                  <li><a href="#" class="courgette-regular">Contacto</a></li>
                  <li><a href="#" class="courgette-regular btn-donate"> <i class="bi bi-heart-fill"></i> Donar</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </header>












        <main class="main">

          <section id="features" class="features section">
            <div class="container" data-aos="fade-up" data-aos-delay="100">

              <ul class="nav nav-tabs d-flex">

                <li class="nav-item col-4 col-md-2 col-lg-1">
                  <a class="nav-link active show" data-bs-toggle="tab" data-bs-target="#features-tab-1">
                    <div class="ic-border">
                      <img src="../assets/img/option-icons/ic_small_palaces.svg" alt="Naza6760" />
                    </div>
                    <h4>Palacetes</h4>
                  </a>
                </li>

                <li class="nav-item col-4 col-md-2 col-lg-1">
                  <a class="nav-link" data-bs-toggle="tab" data-bs-target="#features-tab-2">
                    <div class="ic-border">
                      <img src="../assets/img/option-icons/ic_cathedrals.svg" alt="Naza6760" />
                    </div>
                    <h4>Catedrales</h4>
                  </a>
                </li>

                <li class="nav-item col-4 col-md-2 col-lg-1">
                  <a class="nav-link" data-bs-toggle="tab" data-bs-target="#features-tab-3">
                    <div class="ic-border">
                      <img src="../assets/img/option-icons/ic_museums.svg" alt="Naza6760" />
                    </div>
                    <h4>Museos</h4>
                  </a>
                </li>

                <li class="nav-item col-4 col-md-2 col-lg-1">
                  <a class="nav-link" data-bs-toggle="tab" data-bs-target="#features-tab-4">
                    <div class="ic-border">
                      <img src="../assets/img/option-icons/ic_historical_monuments.svg" alt="Naza6760" />
                    </div>
                    <h4>Monumentos Históricos</h4>
                  </a>
                </li>

                <li class="nav-item col-4 col-md-2 col-lg-1">
                  <a class="nav-link" data-bs-toggle="tab" data-bs-target="#features-tab-5">
                    <div class="ic-border">
                      <img src="../assets/img/option-icons/ic_historic_buildings.svg" alt="Naza6760" />
                    </div>
                    <h4>Edificios Históricos</h4>
                  </a>
                </li>

                <li class="nav-item col-4 col-md-2 col-lg-1">
                  <a class="nav-link" data-bs-toggle="tab" data-bs-target="#features-tab-6">
                    <div class="ic-border">
                      <img src="../assets/img/option-icons/ic_squares.svg" alt="Naza6760" />
                    </div>
                    <h4>Plazas y Plazuelas</h4>
                  </a>
                </li>

                <li class="nav-item col-4 col-md-2 col-lg-1">
                  <a class="nav-link" data-bs-toggle="tab" data-bs-target="#features-tab-7">
                    <div class="ic-border">
                      <img src="../assets/img/option-icons/ic_parks.svg" alt="Naza6760" />
                    </div>
                    <h4>Parques</h4>
                  </a>
                </li>

              </ul>

              <div class="tab-content">


                <section id="features-tab-1" class="pricing section tab-pane fade active show">


                  <div class="container section-title" data-aos="fade-up">
                    <h2>PALACETES</h2>
                  </div>

                  <div class="container">

                    <div class="second-container">

                      <div class="cardon" data-aos="zoom-in" data-aos-delay="100">
                        <div id="top-w-block">
                        </div>
                        <div id="card-main-block">
                          <div id="top-body">
                            <div id="title-body">
                              <p>Palacete de</p>
                              <div class="card-tittle text-center">
                                <h3 class="send-flowers-regular">La Glorieta</h3>
                              </div>
                            </div>
                            <div id="top-body-content">
                              <div id="body-left-side">
                                <img src="../assets/img/card-sources/glorieta-1.png" alt="" />
                              </div>
                              <div id="body-right-side">
                                <div id="right-side-top">
                                  <img src="../assets/img/card-sources/glorieta-2.png" alt="" />
                                </div>
                                <div id="right-side-bottom">
                                  <img src="../assets/img/card-sources/glorieta-3.png" alt="" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div id="bottom-body">
                            <img src="../assets/img/card-sources/glorieta-4.png" alt="" />
                          </div>
                        </div>
                        <div id="border-contour">
                          <div id="btn-shadow">
                            <a href="place-details.html" class="btn-more"> <i class="bi bi-search"></i> EXPLORAR</a>
                          </div>
                        </div>
                        <div id="bottom-w-block">
                        </div>
                      </div>

                      <div class="cardon" data-aos="zoom-in" data-aos-delay="100">
                        <div id="top-w-block">
                        </div>
                        <div id="card-main-block">
                          <div id="top-body">
                            <div id="title-body">
                              <p>Palacete de</p>
                              <div class="card-tittle text-center">
                                <h3 class="send-flowers-regular">La Glorieta</h3>
                              </div>
                            </div>
                            <div id="top-body-content">
                              <div id="body-left-side">
                                <img src="../assets/img/card-sources/glorieta-1.png" alt="" />
                              </div>
                              <div id="body-right-side">
                                <div id="right-side-top">
                                  <img src="../assets/img/card-sources/glorieta-2.png" alt="" />
                                </div>
                                <div id="right-side-bottom">
                                  <img src="../assets/img/card-sources/glorieta-3.png" alt="" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div id="bottom-body">
                            <img src="../assets/img/card-sources/glorieta-4.png" alt="" />
                          </div>
                        </div>
                        <div id="border-contour">
                          <div id="btn-shadow">
                            <a href="place-details.html" class="btn-more"> <i class="bi bi-search"></i> EXPLORAR</a>
                          </div>
                        </div>
                        <div id="bottom-w-block">
                        </div>
                      </div>

                      <div class="cardon" data-aos="zoom-in" data-aos-delay="100">
                        <div id="top-w-block">
                        </div>
                        <div id="card-main-block">
                          <div id="top-body">
                            <div id="title-body">
                              <p>Palacete de</p>
                              <div class="card-tittle text-center">
                                <h3 class="send-flowers-regular">La Glorieta</h3>
                              </div>
                            </div>
                            <div id="top-body-content">
                              <div id="body-left-side">
                                <img src="../assets/img/card-sources/glorieta-1.png" alt="" />
                              </div>
                              <div id="body-right-side">
                                <div id="right-side-top">
                                  <img src="../assets/img/card-sources/glorieta-2.png" alt="" />
                                </div>
                                <div id="right-side-bottom">
                                  <img src="../assets/img/card-sources/glorieta-3.png" alt="" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div id="bottom-body">
                            <img src="../assets/img/card-sources/glorieta-4.png" alt="" />
                          </div>
                        </div>
                        <div id="border-contour">
                          <div id="btn-shadow">
                            <a href="place-details.html" class="btn-more"> <i class="bi bi-search"></i> EXPLORAR</a>
                          </div>
                        </div>
                        <div id="bottom-w-block">
                        </div>
                      </div>


                    </div>

                  </div>

                </section>


                <section id="features-tab-2" class="pricing section tab-pane fade">


                  <div class="container section-title" data-aos="fade-up">
                    <h2>CATEDRALES</h2>
                  </div>

                  <div class="container">

                    <div class="second-container">


                      <div class="cardon" data-aos="zoom-in" data-aos-delay="100">
                        <div id="top-w-block">
                        </div>
                        <div id="card-main-block">
                          <div id="top-body">
                            <div id="title-body">
                              <p>Palacete de</p>
                              <div class="card-tittle text-center">
                                <h3 class="send-flowers-regular">La Glorieta</h3>
                              </div>
                            </div>
                            <div id="top-body-content">
                              <div id="body-left-side">
                                <img src="../assets/img/card-sources/glorieta-1.png" alt="" />
                              </div>
                              <div id="body-right-side">
                                <div id="right-side-top">
                                  <img src="../assets/img/card-sources/glorieta-2.png" alt="" />
                                </div>
                                <div id="right-side-bottom">
                                  <img src="../assets/img/card-sources/glorieta-3.png" alt="" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div id="bottom-body">
                            <img src="../assets/img/card-sources/glorieta-4.png" alt="" />
                          </div>
                        </div>
                        <div id="border-contour">
                          <div id="btn-shadow">
                            <a href="place-details.html" class="btn-more"> <i class="bi bi-search"></i> EXPLORAR</a>
                          </div>
                        </div>
                        <div id="bottom-w-block">
                        </div>
                      </div>

                      <div class="cardon" data-aos="zoom-in" data-aos-delay="100">
                        <div id="top-w-block">
                        </div>
                        <div id="card-main-block">
                          <div id="top-body">
                            <div id="title-body">
                              <p>Palacete de</p>
                              <div class="card-tittle text-center">
                                <h3 class="send-flowers-regular">La Glorieta</h3>
                              </div>
                            </div>
                            <div id="top-body-content">
                              <div id="body-left-side">
                                <img src="../assets/img/card-sources/glorieta-1.png" alt="" />
                              </div>
                              <div id="body-right-side">
                                <div id="right-side-top">
                                  <img src="../assets/img/card-sources/glorieta-2.png" alt="" />
                                </div>
                                <div id="right-side-bottom">
                                  <img src="../assets/img/card-sources/glorieta-3.png" alt="" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div id="bottom-body">
                            <img src="../assets/img/card-sources/glorieta-4.png" alt="" />
                          </div>
                        </div>
                        <div id="border-contour">
                          <div id="btn-shadow">
                            <a href="place-details.html" class="btn-more"> <i class="bi bi-search"></i> EXPLORAR</a>
                          </div>
                        </div>
                        <div id="bottom-w-block">
                        </div>
                      </div>

                      <div class="cardon" data-aos="zoom-in" data-aos-delay="100">
                        <div id="top-w-block">
                        </div>
                        <div id="card-main-block">
                          <div id="top-body">
                            <div id="title-body">
                              <p>Palacete de</p>
                              <div class="card-tittle text-center">
                                <h3 class="send-flowers-regular">La Glorieta</h3>
                              </div>
                            </div>
                            <div id="top-body-content">
                              <div id="body-left-side">
                                <img src="../assets/img/card-sources/glorieta-1.png" alt="" />
                              </div>
                              <div id="body-right-side">
                                <div id="right-side-top">
                                  <img src="../assets/img/card-sources/glorieta-2.png" alt="" />
                                </div>
                                <div id="right-side-bottom">
                                  <img src="../assets/img/card-sources/glorieta-3.png" alt="" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div id="bottom-body">
                            <img src="../assets/img/card-sources/glorieta-4.png" alt="" />
                          </div>
                        </div>
                        <div id="border-contour">
                          <div id="btn-shadow">
                            <a href="place-details.html" class="btn-more"> <i class="bi bi-search"></i> EXPLORAR</a>
                          </div>
                        </div>
                        <div id="bottom-w-block">
                        </div>
                      </div>


                    </div>

                  </div>

                </section>

                <section id="features-tab-3" class="pricing section tab-pane fade">

                  <div class="container section-title" data-aos="fade-up">
                    <h2>MUSEOS</h2>
                  </div>

                  <div class="container">

                    <div class="second-container">

                      <div class="cardon" data-aos="zoom-in" data-aos-delay="100">
                        <div id="top-w-block">
                        </div>
                        <div id="card-main-block">
                          <div id="top-body">
                            <div id="title-body">
                              <p>Palacete de</p>
                              <div class="card-tittle text-center">
                                <h3 class="send-flowers-regular">La Glorieta</h3>
                              </div>
                            </div>
                            <div id="top-body-content">
                              <div id="body-left-side">
                                <img src="../assets/img/card-sources/glorieta-1.png" alt="" />
                              </div>
                              <div id="body-right-side">
                                <div id="right-side-top">
                                  <img src="../assets/img/card-sources/glorieta-2.png" alt="" />
                                </div>
                                <div id="right-side-bottom">
                                  <img src="../assets/img/card-sources/glorieta-3.png" alt="" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div id="bottom-body">
                            <img src="../assets/img/card-sources/glorieta-4.png" alt="" />
                          </div>
                        </div>
                        <div id="border-contour">
                          <div id="btn-shadow">
                            <a href="place-details.html" class="btn-more"> <i class="bi bi-search"></i> EXPLORAR</a>
                          </div>
                        </div>
                        <div id="bottom-w-block">
                        </div>
                      </div>

                      <div class="cardon" data-aos="zoom-in" data-aos-delay="100">
                        <div id="top-w-block">
                        </div>
                        <div id="card-main-block">
                          <div id="top-body">
                            <div id="title-body">
                              <p>Palacete de</p>
                              <div class="card-tittle text-center">
                                <h3 class="send-flowers-regular">La Glorieta</h3>
                              </div>
                            </div>
                            <div id="top-body-content">
                              <div id="body-left-side">
                                <img src="../assets/img/card-sources/glorieta-1.png" alt="" />
                              </div>
                              <div id="body-right-side">
                                <div id="right-side-top">
                                  <img src="../assets/img/card-sources/glorieta-2.png" alt="" />
                                </div>
                                <div id="right-side-bottom">
                                  <img src="../assets/img/card-sources/glorieta-3.png" alt="" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div id="bottom-body">
                            <img src="../assets/img/card-sources/glorieta-4.png" alt="" />
                          </div>
                        </div>
                        <div id="border-contour">
                          <div id="btn-shadow">
                            <a href="place-details.html" class="btn-more"> <i class="bi bi-search"></i> EXPLORAR</a>
                          </div>
                        </div>
                        <div id="bottom-w-block">
                        </div>
                      </div>

                      <div class="cardon" data-aos="zoom-in" data-aos-delay="100">
                        <div id="top-w-block">
                        </div>
                        <div id="card-main-block">
                          <div id="top-body">
                            <div id="title-body">
                              <p>Palacete de</p>
                              <div class="card-tittle text-center">
                                <h3 class="send-flowers-regular">La Glorieta</h3>
                              </div>
                            </div>
                            <div id="top-body-content">
                              <div id="body-left-side">
                                <img src="../assets/img/card-sources/glorieta-1.png" alt="" />
                              </div>
                              <div id="body-right-side">
                                <div id="right-side-top">
                                  <img src="../assets/img/card-sources/glorieta-2.png" alt="" />
                                </div>
                                <div id="right-side-bottom">
                                  <img src="../assets/img/card-sources/glorieta-3.png" alt="" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div id="bottom-body">
                            <img src="../assets/img/card-sources/glorieta-4.png" alt="" />
                          </div>
                        </div>
                        <div id="border-contour">
                          <div id="btn-shadow">
                            <a href="place-details.html" class="btn-more"> <i class="bi bi-search"></i> EXPLORAR</a>
                          </div>
                        </div>
                        <div id="bottom-w-block">
                        </div>
                      </div>


                    </div>

                  </div>

                </section>

                <section id="features-tab-4" class="pricing section tab-pane fade">


                  <div class="container section-title" data-aos="fade-up">
                    <h2>MONUMENTOS HISTÓRICOS</h2>
                  </div>

                  <div class="container">

                    <div class="second-container">

                      <div class="cardon" data-aos="zoom-in" data-aos-delay="100">
                        <div id="top-w-block">
                        </div>
                        <div id="card-main-block">
                          <div id="top-body">
                            <div id="title-body">
                              <p>Palacete de</p>
                              <div class="card-tittle text-center">
                                <h3 class="send-flowers-regular">La Glorieta</h3>
                              </div>
                            </div>
                            <div id="top-body-content">
                              <div id="body-left-side">
                                <img src="../assets/img/card-sources/glorieta-1.png" alt="" />
                              </div>
                              <div id="body-right-side">
                                <div id="right-side-top">
                                  <img src="../assets/img/card-sources/glorieta-2.png" alt="" />
                                </div>
                                <div id="right-side-bottom">
                                  <img src="../assets/img/card-sources/glorieta-3.png" alt="" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div id="bottom-body">
                            <img src="../assets/img/card-sources/glorieta-4.png" alt="" />
                          </div>
                        </div>
                        <div id="border-contour">
                          <div id="btn-shadow">
                            <a href="place-details.html" class="btn-more"> <i class="bi bi-search"></i> EXPLORAR</a>
                          </div>
                        </div>
                        <div id="bottom-w-block">
                        </div>
                      </div>

                      <div class="cardon" data-aos="zoom-in" data-aos-delay="100">
                        <div id="top-w-block">
                        </div>
                        <div id="card-main-block">
                          <div id="top-body">
                            <div id="title-body">
                              <p>Palacete de</p>
                              <div class="card-tittle text-center">
                                <h3 class="send-flowers-regular">La Glorieta</h3>
                              </div>
                            </div>
                            <div id="top-body-content">
                              <div id="body-left-side">
                                <img src="../assets/img/card-sources/glorieta-1.png" alt="" />
                              </div>
                              <div id="body-right-side">
                                <div id="right-side-top">
                                  <img src="../assets/img/card-sources/glorieta-2.png" alt="" />
                                </div>
                                <div id="right-side-bottom">
                                  <img src="../assets/img/card-sources/glorieta-3.png" alt="" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div id="bottom-body">
                            <img src="../assets/img/card-sources/glorieta-4.png" alt="" />
                          </div>
                        </div>
                        <div id="border-contour">
                          <div id="btn-shadow">
                            <a href="place-details.html" class="btn-more"> <i class="bi bi-search"></i> EXPLORAR</a>
                          </div>
                        </div>
                        <div id="bottom-w-block">
                        </div>
                      </div>

                      <div class="cardon" data-aos="zoom-in" data-aos-delay="100">
                        <div id="top-w-block">
                        </div>
                        <div id="card-main-block">
                          <div id="top-body">
                            <div id="title-body">
                              <p>Palacete de</p>
                              <div class="card-tittle text-center">
                                <h3 class="send-flowers-regular">La Glorieta</h3>
                              </div>
                            </div>
                            <div id="top-body-content">
                              <div id="body-left-side">
                                <img src="../assets/img/card-sources/glorieta-1.png" alt="" />
                              </div>
                              <div id="body-right-side">
                                <div id="right-side-top">
                                  <img src="../assets/img/card-sources/glorieta-2.png" alt="" />
                                </div>
                                <div id="right-side-bottom">
                                  <img src="../assets/img/card-sources/glorieta-3.png" alt="" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div id="bottom-body">
                            <img src="../assets/img/card-sources/glorieta-4.png" alt="" />
                          </div>
                        </div>
                        <div id="border-contour">
                          <div id="btn-shadow">
                            <a href="place-details.html" class="btn-more"> <i class="bi bi-search"></i> EXPLORAR</a>
                          </div>
                        </div>
                        <div id="bottom-w-block">
                        </div>
                      </div>

                    </div>

                  </div>

                </section>


                <section id="features-tab-5" class="pricing section tab-pane fade">


                  <div class="container section-title" data-aos="fade-up">
                    <h2>EDIFICIOS HISTÓRICOS</h2>
                  </div>

                  <div class="container">

                    <div class="second-container">


                      <div class="cardon" data-aos="zoom-in" data-aos-delay="100">
                        <div id="top-w-block">
                        </div>
                        <div id="card-main-block">
                          <div id="top-body">
                            <div id="title-body">
                              <p>Palacete de</p>
                              <div class="card-tittle text-center">
                                <h3 class="send-flowers-regular">La Glorieta</h3>
                              </div>
                            </div>
                            <div id="top-body-content">
                              <div id="body-left-side">
                                <img src="../assets/img/card-sources/glorieta-1.png" alt="" />
                              </div>
                              <div id="body-right-side">
                                <div id="right-side-top">
                                  <img src="../assets/img/card-sources/glorieta-2.png" alt="" />
                                </div>
                                <div id="right-side-bottom">
                                  <img src="../assets/img/card-sources/glorieta-3.png" alt="" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div id="bottom-body">
                            <img src="../assets/img/card-sources/glorieta-4.png" alt="" />
                          </div>
                        </div>
                        <div id="border-contour">
                          <div id="btn-shadow">
                            <a href="place-details.html" class="btn-more"> <i class="bi bi-search"></i> EXPLORAR</a>
                          </div>
                        </div>
                        <div id="bottom-w-block">
                        </div>
                      </div>

                      <div class="cardon" data-aos="zoom-in" data-aos-delay="100">
                        <div id="top-w-block">
                        </div>
                        <div id="card-main-block">
                          <div id="top-body">
                            <div id="title-body">
                              <p>Palacete de</p>
                              <div class="card-tittle text-center">
                                <h3 class="send-flowers-regular">La Glorieta</h3>
                              </div>
                            </div>
                            <div id="top-body-content">
                              <div id="body-left-side">
                                <img src="../assets/img/card-sources/glorieta-1.png" alt="" />
                              </div>
                              <div id="body-right-side">
                                <div id="right-side-top">
                                  <img src="../assets/img/card-sources/glorieta-2.png" alt="" />
                                </div>
                                <div id="right-side-bottom">
                                  <img src="../assets/img/card-sources/glorieta-3.png" alt="" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div id="bottom-body">
                            <img src="../assets/img/card-sources/glorieta-4.png" alt="" />
                          </div>
                        </div>
                        <div id="border-contour">
                          <div id="btn-shadow">
                            <a href="place-details.html" class="btn-more"> <i class="bi bi-search"></i> EXPLORAR</a>
                          </div>
                        </div>
                        <div id="bottom-w-block">
                        </div>
                      </div>

                      <div class="cardon" data-aos="zoom-in" data-aos-delay="100">
                        <div id="top-w-block">
                        </div>
                        <div id="card-main-block">
                          <div id="top-body">
                            <div id="title-body">
                              <p>Palacete de</p>
                              <div class="card-tittle text-center">
                                <h3 class="send-flowers-regular">La Glorieta</h3>
                              </div>
                            </div>
                            <div id="top-body-content">
                              <div id="body-left-side">
                                <img src="../assets/img/card-sources/glorieta-1.png" alt="" />
                              </div>
                              <div id="body-right-side">
                                <div id="right-side-top">
                                  <img src="../assets/img/card-sources/glorieta-2.png" alt="" />
                                </div>
                                <div id="right-side-bottom">
                                  <img src="../assets/img/card-sources/glorieta-3.png" alt="" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div id="bottom-body">
                            <img src="../assets/img/card-sources/glorieta-4.png" alt="" />
                          </div>
                        </div>
                        <div id="border-contour">
                          <div id="btn-shadow">
                            <a href="place-details.html" class="btn-more"> <i class="bi bi-search"></i> EXPLORAR</a>
                          </div>
                        </div>
                        <div id="bottom-w-block">
                        </div>
                      </div>


                    </div>

                  </div>

                </section>

                <section id="features-tab-6" class="pricing section tab-pane fade">


                  <div class="container section-title" data-aos="fade-up">
                    <h2>PLAZAS Y PLAZUELAS</h2>
                  </div>

                  <div class="container">

                    <div class="second-container">

                      <div class="cardon" data-aos="zoom-in" data-aos-delay="100">
                        <div id="top-w-block">
                        </div>
                        <div id="card-main-block">
                          <div id="top-body">
                            <div id="title-body">
                              <p>Palacete de</p>
                              <div class="card-tittle text-center">
                                <h3 class="send-flowers-regular">La Glorieta</h3>
                              </div>
                            </div>
                            <div id="top-body-content">
                              <div id="body-left-side">
                                <img src="../assets/img/card-sources/glorieta-1.png" alt="" />
                              </div>
                              <div id="body-right-side">
                                <div id="right-side-top">
                                  <img src="../assets/img/card-sources/glorieta-2.png" alt="" />
                                </div>
                                <div id="right-side-bottom">
                                  <img src="../assets/img/card-sources/glorieta-3.png" alt="" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div id="bottom-body">
                            <img src="../assets/img/card-sources/glorieta-4.png" alt="" />
                          </div>
                        </div>
                        <div id="border-contour">
                          <div id="btn-shadow">
                            <a href="place-details.html" class="btn-more"> <i class="bi bi-search"></i> EXPLORAR</a>
                          </div>
                        </div>
                        <div id="bottom-w-block">
                        </div>
                      </div>
                      <div class="cardon" data-aos="zoom-in" data-aos-delay="100">
                        <div id="top-w-block">
                        </div>
                        <div id="card-main-block">
                          <div id="top-body">
                            <div id="title-body">
                              <p>Palacete de</p>
                              <div class="card-tittle text-center">
                                <h3 class="send-flowers-regular">La Glorieta</h3>
                              </div>
                            </div>
                            <div id="top-body-content">
                              <div id="body-left-side">
                                <img src="../assets/img/card-sources/glorieta-1.png" alt="" />
                              </div>
                              <div id="body-right-side">
                                <div id="right-side-top">
                                  <img src="../assets/img/card-sources/glorieta-2.png" alt="" />
                                </div>
                                <div id="right-side-bottom">
                                  <img src="../assets/img/card-sources/glorieta-3.png" alt="" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div id="bottom-body">
                            <img src="../assets/img/card-sources/glorieta-4.png" alt="" />
                          </div>
                        </div>
                        <div id="border-contour">
                          <div id="btn-shadow">
                            <a href="place-details.html" class="btn-more"> <i class="bi bi-search"></i> EXPLORAR</a>
                          </div>
                        </div>
                        <div id="bottom-w-block">
                        </div>
                      </div>



                      <div class="cardon" data-aos="zoom-in" data-aos-delay="100">
                        <div id="top-w-block">
                        </div>
                        <div id="card-main-block">
                          <div id="top-body">
                            <div id="title-body">
                              <p>Palacete de</p>
                              <div class="card-tittle text-center">
                                <h3 class="send-flowers-regular">La Glorieta</h3>
                              </div>
                            </div>
                            <div id="top-body-content">
                              <div id="body-left-side">
                                <img src="../assets/img/card-sources/glorieta-1.png" alt="" />
                              </div>
                              <div id="body-right-side">
                                <div id="right-side-top">
                                  <img src="../assets/img/card-sources/glorieta-2.png" alt="" />
                                </div>
                                <div id="right-side-bottom">
                                  <img src="../assets/img/card-sources/glorieta-3.png" alt="" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div id="bottom-body">
                            <img src="../assets/img/card-sources/glorieta-4.png" alt="" />
                          </div>
                        </div>
                        <div id="border-contour">
                          <div id="btn-shadow">
                            <a href="place-details.html" class="btn-more"> <i class="bi bi-search"></i> EXPLORAR</a>
                          </div>
                        </div>
                        <div id="bottom-w-block">
                        </div>
                      </div>


                    </div>

                  </div>

                </section>
                <section id="features-tab-7" class="pricing section tab-pane fade">
                  <div class="container section-title" data-aos="fade-up">
                    <h2>PARQUES</h2>
                  </div>

                  <div class="container">

                    <div class="second-container">

                      <div class="cardon" data-aos="zoom-in" data-aos-delay="100">
                        <div id="top-w-block">
                        </div>
                        <div id="card-main-block">
                          <div id="top-body">
                            <div id="title-body">
                              <p>Palacete de</p>
                              <div class="card-tittle text-center">
                                <h3 class="send-flowers-regular">La Glorieta</h3>
                              </div>
                            </div>
                            <div id="top-body-content">
                              <div id="body-left-side">
                                <img src="../assets/img/card-sources/glorieta-1.png" alt="" />
                              </div>
                              <div id="body-right-side">
                                <div id="right-side-top">
                                  <img src="../assets/img/card-sources/glorieta-2.png" alt="" />
                                </div>
                                <div id="right-side-bottom">
                                  <img src="../assets/img/card-sources/glorieta-3.png" alt="" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div id="bottom-body">
                            <img src="../assets/img/card-sources/glorieta-4.png" alt="" />
                          </div>
                        </div>
                        <div id="border-contour">
                          <div id="btn-shadow">
                            <a href="place-details.html" class="btn-more"> <i class="bi bi-search"></i> EXPLORAR</a>
                          </div>
                        </div>
                        <div id="bottom-w-block">
                        </div>
                      </div>

                      <div class="cardon" data-aos="zoom-in" data-aos-delay="100">
                        <div id="top-w-block">
                        </div>
                        <div id="card-main-block">
                          <div id="top-body">
                            <div id="title-body">
                              <p>Palacete de</p>
                              <div class="card-tittle text-center">
                                <h3 class="send-flowers-regular">La Glorieta</h3>
                              </div>
                            </div>
                            <div id="top-body-content">
                              <div id="body-left-side">
                                <img src="../assets/img/card-sources/glorieta-1.png" alt="" />
                              </div>
                              <div id="body-right-side">
                                <div id="right-side-top">
                                  <img src="../assets/img/card-sources/glorieta-2.png" alt="" />
                                </div>
                                <div id="right-side-bottom">
                                  <img src="../assets/img/card-sources/glorieta-3.png" alt="" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div id="bottom-body">
                            <img src="../assets/img/card-sources/glorieta-4.png" alt="" />
                          </div>
                        </div>
                        <div id="border-contour">
                          <div id="btn-shadow">
                            <a href="place-details.html" class="btn-more"> <i class="bi bi-search"></i> EXPLORAR</a>
                          </div>
                        </div>
                        <div id="bottom-w-block">
                        </div>
                      </div>
                      <div class="cardon" data-aos="zoom-in" data-aos-delay="100">
                        <div id="top-w-block">
                        </div>
                        <div id="card-main-block">
                          <div id="top-body">
                            <div id="title-body">
                              <p>Palacete de</p>
                              <div class="card-tittle text-center">
                                <h3 class="send-flowers-regular">La Glorieta</h3>
                              </div>
                            </div>
                            <div id="top-body-content">
                              <div id="body-left-side">
                                <img src="../assets/img/card-sources/glorieta-1.png" alt="" />
                              </div>
                              <div id="body-right-side">
                                <div id="right-side-top">
                                  <img src="../assets/img/card-sources/glorieta-2.png" alt="" />
                                </div>
                                <div id="right-side-bottom">
                                  <img src="../assets/img/card-sources/glorieta-3.png" alt="" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div id="bottom-body">
                            <img src="../assets/img/card-sources/glorieta-4.png" alt="" />
                          </div>
                        </div>
                        <div id="border-contour">
                          <div id="btn-shadow">
                            <a href="place-details.html" class="btn-more"> <i class="bi bi-search"></i> EXPLORAR</a>
                          </div>
                        </div>
                        <div id="bottom-w-block">
                        </div>
                      </div>

                    </div>
                  </div>

                </section>

              </div>
            </div>
          </section>

        </main>
























        <footer id="footer" class="footer">
          <div class="container footer-top">
            <div class="row gy-4">
              <div class="footer-container">
                <a href="index.html" class="courgette-regular d-flex align-items-center">
                  <span class="sitename">Portal Turístico Bicentenario</span>
                </a>
                <div class="site-description">
                  <p>Este sitio ha sido desarrollado por iniciativa de la Universidad Privada del Valle S.A. para rendir
                    homenaje a los 200 años de libertad que celebra nuestra querida Bolivia este 2025.</p>
                </div>
                <h4>Equipo de desarrollo</h4>
                <div class="footer-devs-container">
                  <div class="dev-element">
                    <i class="bi bi-person-fill"></i>
                    <h6 class="mt-3"><span>Ing. David M. Condo Rodriguez</span></h6>
                  </div>
                  <div class="dev-element">
                    <i class="bi bi-person-fill woman"></i>
                    <h6 class="mt-3"><span>Ing. Angela Rosales Ugarte</span></h6>
                  </div>
                  <div class="dev-element">
                    <i class="bi bi-person-fill"></i>
                    <h6 class="mt-3"><span>Est. Yafar J. Barrera Quiroga</span></h6>
                  </div>
                  <div class="dev-element">
                    <i class="bi bi-person-fill"></i>
                    <h6 class="mt-3"><span>Est. Marco A. Seña Jacome</span></h6>
                  </div>
                  <div class="dev-element">
                    <i class="bi bi-person-fill"></i>
                    <h6 class="mt-3"><span>Est. Ítalo Yerko Navía Torres</span></h6>
                  </div>
                </div>

                <div class="footer-donate-container">
                  <h4>Apoya a los desarrolladores.</h4>
                  <p>Si te gustó el sitio, ayúdanos a mantenerlo en pie. ¡Aporta con tu granito de arena!</p>
                  <a href="#" class="courgette-regular btn-donate"> <i class="bi bi-heart-fill"></i>&nbspDonar</a>
                </div>

                <div class="follow-us">
                  <h4>Síguenos</h4>
                  <div class="social-links d-flex">
                    <a href="" id="ic-facebook"><i class="bi bi-facebook"></i></a>
                    <a href="" id="ic-instagram"><i class="bi bi-instagram"></i></a>
                    <a href="https://www.univalle.edu/" id="ic-internet"><i class="bi bi-globe"></i></a>
                    <a href="" id="ic-whatsapp"><i class="bi bi-whatsapp"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="container copyright text-center mt-4">
            <p>© <span>Copyright</span> <strong class="px-1 sitename">Portal Turístico Bicentenario</strong> <span>Todos los
              Derechos Reservados</span></p>
            <div class="credits">
              Diseñado y Desarrollado por <a href="https://www.univalle.edu/">Universidad Privada del Valle S.A.</a>
            </div>
          </div>

        </footer>




        <script src="../assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
        <script src="../assets/vendor/aos/aos.js"></script>
        <script src="../assets/vendor/glightbox/js/glightbox.min.js"></script>
        <script src="../assets/js/main.js"></script>
      </body>

    </div>
  );
}

export default OtherPage;