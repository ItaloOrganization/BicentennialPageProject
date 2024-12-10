// Mas.js
import React from 'react';
import AOS from 'aos';
import './assets/css/main.css'
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './App.css';

AOS.init();

function Mas() {

    return (
        <div>
            <head>
                <meta charset="utf-8" />
                <meta content="width=device-width, initial-scale=1.0" name="viewport" />
                <title>Place Details - Portal Web Bicentenario</title>
                <meta name="description" content="" />
                <meta name="keywords" content="" />

                <link href="assets/img/favicon.png" rel="icon" />
                <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon" />

                <link href="https://fonts.googleapis.com" rel="preconnect" />
                <link href="https://fonts.gstatic.com" rel="preconnect" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Courgette&family=Inter:wght@100..900&family=Send+Flowers&display=swap" rel="stylesheet" />
                <link href="/assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
                <link href="/assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet" />
                <link href="/assets/vendor/aos/aos.css" rel="stylesheet" />
                <link href="/assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet" />
                <link href="/assets/css/main.css" rel="stylesheet" />

            </head>


            <body class="index-page">
                <header id="header" class="header fixed-top">
                    <div class="position-relative d-flex">

                        <a href="index.html" class="logo me-auto">
                            <img src="/assets/img/no_logo.svg" alt="no logo" />
                        </a>
                        <img src="/assets/img/Mallku.svg" alt="mallku" id="condor" />
                        <img src="/assets/img/Freedom_Bell.svg" alt="freedom bell" id="bell" />
                        <img src="/assets/img/broken_chains.svg" alt="broken chains" id="chain" />
                        <audio id="bell-audio" src="assets/media/deep_bell.mp3"></audio>

                        <div class="nav-container">
                            <div id="clouds" class="text-center">
                                <img src="/assets/img/draw_clouds_1.svg" alt="draw" id="ic_cloud_1" />
                                <img src="/assets/img/draw_clouds_2.svg" alt="draw" id="ic_cloud_2" />
                                <img src="/assets/img/draw_sun.svg" alt="draw" id="ic_sun" />
                                <img src="/assets/img/draw_clouds_3.svg" alt="draw" id="ic_cloud_3" />
                            </div>
                            <nav id="navmenu" class="navmenu">
                                <ul>
                                    <li><a href="index.html" class="courgette-regular">Inicio</a></li>
                                    <li><a href="index.html" class="active courgette-regular">Lugares</a></li>
                                    <li><a href="event-details.html" class="courgette-regular">Eventos</a></li>
                                    <li><a href="#" class="courgette-regular">Historia</a></li>
                                    <li><a href="#" class="courgette-regular">Nosotros</a></li>
                                    <li><a href="#" class="courgette-regular">Contacto</a></li>
                                    <li><a href="#" class="courgette-regular btn-donate"> <i class="bi bi-heart-fill"></i> Donar</a></li>
                                </ul>
                                <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
                            </nav>
                        </div>
                    </div>
                </header>









                <main class="main">

                    <div class="page-title">
                        <div class="heading">
                            <div class="container">
                                <div class="row d-flex justify-content-center text-center">
                                    <div class="col-lg-8">
                                        <h1 class="send-flowers-regular">La Glorieta</h1>
                                        <p class="mb-0">La Glorieta es un magnífico castillo ecléctico, mezcla de estilos europeos, con 40 ambientes, tres impresionantes torres y jardines al estilo Versalles. Un tesoro arquitectónico y Monumento Nacional en Sucre.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="container">
                        <div class="row">

                            <div class="col-lg-12">


                                <section id="blog-details" class="imagenytexto">
                                    <div class="container">
                                        <div id="details-container">
                                            <div id="top-bg-card">

                                            </div>
                                            <div id="bottom-bg-card">

                                            </div>
                                            <div id="contour-bg-card">

                                            </div>
                                            <div class="cover-image">
                                                <img src="/assets/img/section-details/la-glorieta-wallpaper-HD.jpg" alt="" class="img-fluid" />
                                            </div>
                                            <article class="article">
                                                <h2 className='textob' class="title">Reseña Histórica</h2>
                                                <div class="content">
                                                    <p className='textob'>
                                                        El Castillo de La Glorieta, ubicado en las afueras de Sucre, Bolivia, fue la
                                                        residencia de los príncipes Francisco Argandoña y Clotilde Urioste.
                                                        Construido entre 1893 y 1897 bajo la dirección del arquitecto suizo
                                                        Antonio Camponovo, el diseño del castillo refleja una ecléctica
                                                        combinación de estilos arquitectónicos, incluyendo elementos
                                                        góticos, mudéjares, bizantinos y barrocos, inspirados en las
                                                        tendencias observadas por la pareja durante sus viajes por Europa.
                                                    </p>
                                                    <p className='textob'>
                                                        La opulencia del castillo es testimonio de la prominencia social
                                                        y económica de sus propietarios, quienes fueron nombrados príncipes
                                                        por el Papa León XIII en 1898, estableciendo así el único principado
                                                        en Sudamérica. Además de su función residencial, La Glorieta albergó
                                                        un orfanato fundado por los príncipes, demostrando su compromiso
                                                        filantrópico con la comunidad de Sucre.
                                                    </p>
                                                    <p className='textob'>
                                                        Declarado Monumento Nacional en 1970, el Castillo de La Glorieta
                                                        se ha consolidado como un importante atractivo turístico de Sucre.
                                                        Sin embargo, con el paso del tiempo, ha enfrentado desafíos de conservación,
                                                        incluyendo la pérdida de parte de sus extensos jardines originales. A pesar
                                                        de ello, su singular arquitectura y rica historia continúan atrayendo a
                                                        visitantes interesados en el patrimonio cultural de Bolivia.
                                                    </p>
                                                </div>
                                            </article>
                                        </div>

                                    </div>
                                </section>

                                <section id="portfolio" class="portfolio section">

                                    <div class="section-title">
                                        <h2>GALERÍA</h2>
                                        <p>Una imagen vale más que mil palabras,  por eso hemos preparado esta magnífica galería para ti. Disfrútala!!!.</p>
                                    </div>

                                    <div class="container-fluid">

                                        <div class="isotope-layout" data-sort="original-order">

                                            <div class="row g-0" data-aos-delay="200">

                                                <div class="col-xl-3 col-lg-4 col-md-6">
                                                    <div class="portfolio-content h-100">
                                                        <img src="/assets/img/gallery/Glorieta-Exterior-1.jpg" class="" alt="Gallery Item" />
                                                        <div class="portfolio-info">
                                                            <a href="/assets/img/gallery/Glorieta-Exterior-1.jpg" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                                                            <h4>Exterior 1</h4>
                                                            <p>
                                                                Fachada frontal de la caballeriza desde la perspectiva del portón de ingreso
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="col-xl-3 col-lg-4 col-md-6">
                                                    <div class="portfolio-content h-100">
                                                        <img src="assets/img/gallery/Glorieta-Reliquia-2.jpg" class="" alt="" />
                                                        <div class="portfolio-info">
                                                            <a href="assets/img/gallery/Glorieta-Reliquia-2.jpg" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                                                            <h4>Reliquia 1</h4>
                                                            <p>
                                                                Pintura de los Príncipes de La Glorieta junto a los niños de su orfanato
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="col-xl-3 col-lg-4 col-md-6">
                                                    <div class="portfolio-content h-100">
                                                        <img src="/assets/img/gallery/Glorieta-Reliquia-1.jpg" class="" alt="" />
                                                        <div class="portfolio-info">
                                                            <a href="/assets/img/gallery/Glorieta-Reliquia-1.jpg" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                                                            <h4>Reliquia 2</h4>
                                                            <p>
                                                                Monumento al Príncipe Francisco de Argandoña
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="col-xl-3 col-lg-4 col-md-6">
                                                    <div class="portfolio-content h-100">
                                                        <img src="assets/img/gallery/Glorieta-Vintage-2.jpg" class="" alt="" />
                                                        <div class="portfolio-info">
                                                            <a href="assets/img/gallery/Glorieta-Vintage-2.jpg" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                                                            <h4>Vintage 1</h4>
                                                            <p>
                                                                Vista del Gran Lago con la Isla de los Amores
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="col-xl-3 col-lg-4 col-md-6">
                                                    <div class="portfolio-content h-100">
                                                        <img src="assets/img/gallery/Glorieta-Exterior-2.jpg" class="img-fluid" alt="" />
                                                        <div class="portfolio-info">
                                                            <a href="assets/img/gallery/Glorieta-Exterior-2.jpg" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                                                            <h4>Exterior 2</h4>
                                                            <p>
                                                                Fachada principal de La Glorieta en la actualidad desde una vista fontal
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="col-xl-3 col-lg-4 col-md-6">
                                                    <div class="portfolio-content h-100">
                                                        <img src="assets/img/gallery/Glorieta-Vintage-1.jpg" class="img-fluid" alt="" />
                                                        <div class="portfolio-info">
                                                            <a href="assets/img/gallery/Glorieta-Vintage-1.jpg" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                                                            <h4>Vintage 2</h4>
                                                            <p>
                                                                Frontis de La Glorieta a principios del Siglo XX
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="col-xl-3 col-lg-4 col-md-6">
                                                    <div class="portfolio-content h-100">
                                                        <img src="assets/img/gallery/Glorieta-Interior-1.jpg" class="img-fluid" alt="" />
                                                        <div class="portfolio-info">
                                                            <a href="assets/img/gallery/Glorieta-Interior-1.jpg" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                                                            <h4>Interior 1</h4>
                                                            <p>
                                                                Esculturas decorativas de personajes celestiaales en el Salón Azul
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="col-xl-3 col-lg-4 col-md-6">
                                                    <div class="portfolio-content h-100">
                                                        <img src="assets/img/gallery/Glorieta-Vintage-3.jpg" class="img-fluid" alt="" />
                                                        <div class="portfolio-info">
                                                            <a href="assets/img/gallery/Glorieta-Vintage-3.jpg" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                                                            <h4>Vintage 3</h4>
                                                            <p>
                                                                Fuente de los Cisnes en funcionamiento
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="col-xl-3 col-lg-4 col-md-6">
                                                    <div class="portfolio-content h-100">
                                                        <img src="assets/img/gallery/Glorieta-Interior-2.jpg" class="img-fluid" alt="" />
                                                        <div class="portfolio-info">
                                                            <a href="assets/img/gallery/Glorieta-Interior-2.jpg" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                                                            <h4>Interior 2</h4>
                                                            <p>
                                                                Escalera Imperial del ingreso principal
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="col-xl-3 col-lg-4 col-md-6">
                                                    <div class="portfolio-content h-100">
                                                        <img src="assets/img/gallery/Glorieta-Exterior-3.jpg" class="img-fluid" alt="" />
                                                        <div class="portfolio-info">
                                                            <a href="assets/img/gallery/Glorieta-Exterior-3.jpg" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                                                            <h4>Exterior 3</h4>
                                                            <p>
                                                                Fachada sur con vista a los jardines y las fuentes
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="col-xl-3 col-lg-4 col-md-6">
                                                    <div class="portfolio-content h-100">
                                                        <img src="assets/img/gallery/Glorieta-Vintage-4.jpg" class="img-fluid" alt="" />
                                                        <div class="portfolio-info">
                                                            <a href="assets/img/gallery/Glorieta-Vintage-4.jpg" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                                                            <h4>Vintage 4</h4>
                                                            <p>
                                                                Los príncipes de La Glorieta. Francisco de Argandoña y Cleotilde Urioste Velazco
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="col-xl-3 col-lg-4 col-md-6">
                                                    <div class="portfolio-content h-100">
                                                        <img src="assets/img/gallery/Glorieta-Interior-3.jpg" class="img-fluid" alt="" />
                                                        <div class="portfolio-info">
                                                            <a href="assets/img/gallery/Glorieta-Interior-3.jpg" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                                                            <h4>Interior 3</h4>
                                                            <p>
                                                                Ingreso a la galería, segunda planta
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                </section>


                                <section class="how-to-get section">


                                    <div class="section-title" data-aos="fade-up">
                                        <h2>CÓMO LLEGAR</h2>
                                        <p>Sigue la ruta seleccionada para llegar a este mágico lugar.</p>
                                    </div>

                                    <div class="mb-5">
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d10599.125771303437!2d-65.25706029667455!3d-19.042406158036133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sbo!4v1733275338601!5m2!1ses-419!2sbo" width="100%" height="400" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>            </div>

                                </section>


                                <section id="blog-comments" class="blog-comments section">

                                    <div class="">

                                        <h4 class="comments-count">9 Comentarios</h4>

                                        <div id="comment-1" class="comment">
                                            <div class="d-flex">
                                                <div class="comment-img"><i class="bi bi-person-circle"></i></div>
                                                <div>
                                                    <h5>Nazareth Borja Claure <a href="#" class="reply" data-bs-toggle="modal" data-bs-target="#staticBackdrop"><i class="bi bi-reply-fill"></i> Responder</a></h5>
                                                    <time datetime="2020-01-01">03 de Diciembre, 2024</time>
                                                    <p>
                                                        Et rerum totam nisi. Molestiae vel quam dolorum vel voluptatem et et. Est ad aut sapiente quis molestiae est qui cum soluta.
                                                        Vero aut rerum vel. Rerum quos laboriosam placeat ex qui. Sint qui facilis et.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div id="comment-2" class="comment">
                                            <div class="d-flex">
                                                <div class="comment-img"><i class="bi bi-person-circle"></i></div>
                                                <div>
                                                    <h5>Aron Alvarado <a href="#" class="reply" data-bs-toggle="modal" data-bs-target="#staticBackdrop"><i class="bi bi-reply-fill"></i> Responder</a></h5>
                                                    <time datetime="2020-01-01">03 de Diciembre, 2024</time>
                                                    <p>
                                                        Ipsam tempora sequi voluptatem quis sapiente non. Autem itaque eveniet saepe. Officiis illo ut beatae.
                                                    </p>
                                                </div>
                                            </div>

                                            <div id="comment-reply-1" class="comment comment-reply">
                                                <div class="d-flex">
                                                    <div class="comment-img"><i class="bi bi-person-circle"></i></div>
                                                    <div>
                                                        <h5>Cindy Adriana <a href="#" class="reply" data-bs-toggle="modal" data-bs-target="#staticBackdrop"><i class="bi bi-reply-fill"></i> Responder</a></h5>
                                                        <time datetime="2020-01-01">04 de Diciembre, 2024</time>
                                                        <p>
                                                            Enim ipsa eum fugiat fuga repellat. Commodi quo quo dicta. Est ullam aspernatur ut vitae quia mollitia id non. Qui ad quas nostrum rerum sed necessitatibus aut est. Eum officiis sed repellat maxime vero nisi natus. Amet nesciunt nesciunt qui illum omnis est et dolor recusandae.

                                                            Recusandae sit ad aut impedit et. Ipsa labore dolor impedit et natus in porro aut. Magnam qui cum. Illo similique occaecati nihil modi eligendi. Pariatur distinctio labore omnis incidunt et illum. Expedita et dignissimos distinctio laborum minima fugiat.

                                                            Libero corporis qui. Nam illo odio beatae enim ducimus. Harum reiciendis error dolorum non autem quisquam vero rerum neque.
                                                        </p>
                                                    </div>
                                                </div>

                                                <div id="comment-reply-2" class="comment comment-reply">
                                                    <div class="d-flex">
                                                        <div class="comment-img"><i class="bi bi-person-circle"></i></div>
                                                        <div>
                                                            <h5>Nury Maira <a href="#" class="reply" data-bs-toggle="modal" data-bs-target="#staticBackdrop"><i class="bi bi-reply-fill"></i> Responder</a></h5>
                                                            <time datetime="2020-01-01">04 de Diciembre, 2024</time>
                                                            <p>
                                                                Et dignissimos impedit nulla et quo distinctio ex nemo. Omnis quia dolores cupiditate et. Ut unde qui eligendi sapiente omnis ullam. Placeat porro est commodi est officiis voluptas repellat quisquam possimus. Perferendis id consectetur necessitatibus.
                                                            </p>
                                                        </div>
                                                    </div>

                                                </div>

                                            </div>

                                        </div>

                                        <div id="comment-3" class="comment">
                                            <div class="d-flex">
                                                <div class="comment-img"><i class="bi bi-person-circle"></i></div>
                                                <div>
                                                    <h5>Nolan Davidson <a href="#" class="reply" data-bs-toggle="modal" data-bs-target="#staticBackdrop"><i class="bi bi-reply-fill"></i> Responder</a></h5>
                                                    <time datetime="2020-01-01">03 de Diciembre, 2024</time>
                                                    <p>
                                                        Distinctio nesciunt rerum reprehenderit sed. Iste omnis eius repellendus quia nihil ut accusantium tempore. Nesciunt expedita id dolor exercitationem aspernatur aut quam ut. Voluptatem est accusamus iste at.
                                                        Non aut et et esse qui sit modi neque. Exercitationem et eos aspernatur. Ea est consequuntur officia beatae ea aut eos soluta. Non qui dolorum voluptatibus et optio veniam. Quam officia sit nostrum dolorem.
                                                    </p>
                                                </div>
                                            </div>

                                        </div>

                                        <div id="comment-4" class="comment">
                                            <div class="d-flex">
                                                <div class="comment-img"><i class="bi bi-person-circle"></i></div>
                                                <div>
                                                    <h5>Fernando de Aragón <a href="#" class="reply" data-bs-toggle="modal" data-bs-target="#staticBackdrop"><i class="bi bi-reply-fill"></i> Responder</a></h5>
                                                    <time datetime="2020-01-01">03 de Diciembre, 2024</time>
                                                    <p>
                                                        Dolorem atque aut. Omnis doloremque blanditiis quia eum porro quis ut velit tempore. Cumque sed quia ut maxime. Est ad aut cum. Ut exercitationem non in fugiat.
                                                    </p>
                                                </div>
                                            </div>

                                        </div>

                                        <div class="d-flex justify-content-center">
                                            <button class="btn-add-comment" data-bs-toggle="modal" data-bs-target="#staticBackdrop"><span class="button-content"><i class="bi bi-plus-lg"></i> Agregar Comentario</span></button>
                                        </div>
                                    </div>

                                </section>

                                <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                    <div class="modal-dialog modal-lg">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h1 class="modal-title fs-5" id="staticBackdropLabel">Agregar comentario</h1>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body">
                                                <div class="row">
                                                    <div class="col form-group">
                                                        <input name="name" type="text" class="alias-input" placeholder="Alias*" />
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col form-group">
                                                        <textarea name="comment" class="comment-input" placeholder="Comentario*"></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="modal-footer">
                                                <button class="btn-cancel" data-bs-dismiss="modal"><span>Cancelar</span></button>
                                                <button class="btn-post"><span>Publicar</span></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </main>













                <script src="/assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
                <script src="/assets/vendor/aos/aos.js"></script>
                <script src="/assets/vendor/glightbox/js/glightbox.min.js"></script>

                <script src="/assets/js/main.js"></script>






            </body>
        </div>
    );
}

export default Mas;
