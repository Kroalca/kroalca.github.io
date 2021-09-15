<!doctype html>
<html lang="es">

<head>
    <meta charset="utf-8">
    <meta name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no, maximum-scale=1.0, user-scalable=0">
    <meta name="Description"
        CONTENT="Author: Kroalca - Alejandro Rodríguez Carrillo, Category: Web developer Frontend Backend Fullstack, Desarrollador de aplicaciones webs">
    <meta name="google-site-verification" content="8prxiTcIs9XHnj4Kb3hIB_ivxr-WXwNt0uDYCD-UvO4" />
    <link rel="canonical" href="https://kroalca.github.io" />
    <link rel="icon" type="image/svg+xml" href="img/logo.svg" sizes="any">

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link href='https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css' rel='stylesheet'>
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
    <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
    <title>Alejandro Rodríguez Carrillo - Web Developer</title>
</head>

<body id="home">
    <header>
        <nav class="navbar navbar-expand-lg fixed-top">
            <div class="container">
                <a class="navbar-brand" href="#home"><img src="img/logo.svg" alt="kroalca" width="10">roalca</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <i class='bx bx-menu'></i>
                </button>

                <div class="collapse navbar-collapse justify-content-end align-items-center"
                    id="navbarSupportedContent">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="#about">Perfil</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#skill">Competencias</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#studies">Estudios</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#contact">Contacto</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>

    <section class="main">
        <div class="portada py-4 px-3">
            <div class="welcome container">
                <div class="row">
                    <div class="col-12 col-md-6">
                        <h1>Alejandro Rodríguez Carrillo</h1>
                        <h2><span class="typed"></span></h2>
                        <div id="cadena-texto">
                            <h2>Web Developer</h2>
                            <h2>Frontend</h2>
                            <h2>Backend</h2>
                            <h2>Fullstack</h2>
                        </div>
                        <p>Tengo <span id="age" data-nosnippet></span> años y me dedico a la programación web desde hace
                            <span id="exp"></span> años,
                            estoy listo para tener más experiencia laboral y aumentar mis conocimientos en el ámbito
                            profesional.</p>
                        <a href="file/cv2021.pdf" class="btn" download="CVAlejandro">Descargar CV</a>
                    </div>
                    <div class="col-12 col-md-6 text-center mt-5 mt-md-0">
                        <lottie-player src="https://assets2.lottiefiles.com/packages/lf20_uzamaojr.json"
                            class="animacion" background="transparent" speed="0.5" loop autoplay></lottie-player>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="py-5" id="about">
        <div class="container py-4">
            <h3>Perfil</h3>
            <div class="row">
                <div class="col-12 col-md-4 text-center">
                    <img src="img/logo.svg" alt="kroalca" class="wow animate__animated animate__zoomIn img-fluid">
                </div>
                <div class="col-12 col-md-8 text-about mt-4 mt-md-0 about">
                    <p>Me defino como una persona responsable, trabajadora, amable y honesta que busca desarrollarse
                        profesional y personalmente. Creo que tengo mucho potencial y sobre todo muchas ganas de
                        trabajar y aprender.</p>
                    <p>Estos últimos años me he estado formándome profesionalmente en tecnologías webs, poseo algunos
                        conocimientos en framework como React.</p>
                    <p>También en trabajado con bases de datos(MySQL, Oracle, MongoDB) y adquiero los conocimientos
                        básicos de SEO
                        para posicionar paguinas webs.</p>
                    <p>Me gustaría dedicarme profesionalmente al desarrollo web.</p>
                    <div class="about-enlace">
                        <div class="row">
                            <div class="col-12 col-md-6">
                                <span>Edad: </span>
                                <i id="age2"></i>
                            </div>
                            <div class="col-12 col-md-6">
                                <span>Email: </span>
                                <a href="mailto:kroalca@gmail.com">kroalca@gmail.com</a>
                            </div>
                            <div class="col-12 col-md-6">
                                <span>Linkedin: </span>
                                <a href="https://www.linkedin.com/in/alejandro-rodríguez-carrillo-34a583205">Alejandro<i class='bx bx-link'></i></a>
                            </div>
                            <div class="col-12 col-md-6">
                                <span>Github: </span>
                                <a href="https://github.com/Kroalca">Kroalca<i class='bx bx-link'></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="py-5 gris" id="skill">
        <div class="skills container py-4">
            <h3>Mis Competencias</h3>
            <div class="skills-bar">
                <div class="bar">
                    <div class="info">
                        <span>HTML</span>
                    </div>
                    <div class="wow progress-line html">
                        <span data-nosnippet></span>
                    </div>
                </div>
                <div class="bar">
                    <div class="info">
                        <span>CSS</span>
                    </div>
                    <div class="wow progress-line css">
                        <span data-nosnippet></span>
                    </div>
                </div>
                <div class="bar">
                    <div class="info">
                        <span>JS</span>
                    </div>
                    <div class="wow progress-line js">
                        <span data-nosnippet></span>
                    </div>
                </div>
                <div class="bar">
                    <div class="info">
                        <span>PHP</span>
                    </div>
                    <div class="wow progress-line php">
                        <span data-nosnippet></span>
                    </div>
                </div>
                <div class="bar">
                    <div class="info">
                        <span>React</span>
                    </div>
                    <div class="wow progress-line react">
                        <span data-nosnippet></span>
                    </div>
                </div>
                <div class="bar">
                    <div class="info">
                        <span>Mysql</span>
                    </div>
                    <div class="wow progress-line mysql">
                        <span data-nosnippet></span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="py-5" id="studies">
        <div class="container py-4">
            <h3>Mis Estudios</h3>
            <div class="estudios mt-5">
                <div class="row">
                    <div class="col-12 col-lg-4">
                        <div class="estudio py-5">
                            <i class='bx bx-server mb-4'></i>
                            <span>ASIR</span>
                            <p>CFGS - IES Siete palmas</p>
                        </div>
                    </div>
                    <div class="col-12 col-lg-4 my-4 my-lg-0">
                        <div class="estudio py-5">
                            <i class='bx bx-mobile mb-4'></i>
                            <span>DAM</span>
                            <p>CFGS - CIFP Villa de Aguimes</p>
                        </div>
                    </div>
                    <div class="col-12 col-lg-4">
                        <div class="estudio py-5">
                            <i class='bx bx-laptop mb-4'></i>
                            <span>DAW</span>
                            <p>CP - Focan</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="gris" id="contact">
        <div class="contacto container py-4">
            <div class="row mt-4 mx-1 mx-md-0">
                <div class="col-12 col-md-8 contacto-contenedor py-5">
                    <h4>Enviame un mensaje</h4>
                    <form id="form">
                        <input type="text" class="form-control my-3" placeholder="Nombre" aria-label="Name"
                            aria-describedby="Name" id="contact_name" required>
                        <input type="email" class="form-control my-3" placeholder="Email" aria-label="Email"
                            aria-describedby="Email" id="contact_email" required>
                        <input type="text" class="form-control mb-3" placeholder="Asunto" aria-label="Subject"
                            aria-describedby="Subject" id="contact_subject" required>
                        <textarea class="form-control mb-3" placeholder="Mensaje" id="contact_message"
                            style="height: 150px" required></textarea>
                        <input type="submit" class="btn" value="Enviar">
                    </form>
                </div>
                <div class="col-12 col-md-4 d-flex flex-column justify-content-between tarjetas py-5 px-5">
                    <h4>Información de contacto</h4>
                    <div class="tarjeta mt-2 mt-md-0">
                        <h5>Localización</h5>
                        <p>España</p>
                        <p>Gran Canaria</p>
                        <p>Vecindario</p>
                    </div>
                    <div class="tarjeta mt-2 mt-md-0">
                        <h5>Email</h5>
                        <p>kroalca@gmail.com</p>
                    </div>
                    <div class="tarjeta mt-2 mt-md-0">
                        <a href="mailto:kroalca@gmail.com"><i class='bx bx-message'></i></a>
                        <a href="https://github.com/Kroalca"><i class='bx bxl-github mx-2'></i></a>
                        <a href="https://www.linkedin.com/in/alejandro-rodríguez-carrillo-34a583205"><i
                                class='bx bxl-linkedin'></i></a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <footer class="py-3">
        <div class="container d-flex justify-content-between align-items-center">
            <h5>© 2021 Copyright: <span>Kroalca</span></h5>
            <div class="footer-iconos">
                <a href=""><i class='bx bxl-github mb-2'></i></a>
                <a href=""><i class='bx bxl-linkedin'></i></a>
            </div>
        </div>
    </footer>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous">
    </script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
        integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous">
    </script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
        integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous">
    </script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>
    <script src="js/mail.js"></script>
    <script src="js/main.js"></script>
    <script src="js/wow.min.js"></script>
</body>

</html>