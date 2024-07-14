<!DOCTYPE html>
<html lang="en">

<head>
    <?php require_once './component/head.php'; ?>
    <link rel="stylesheet" href="src/css/index.css">
</head>

<body>
    <?php require_once './component/header.php'; ?>
    <div class="container-fluid p-0">
        <div class="row">
            <div class="col-12 col-sm-12">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <video class="d-block w-100" autoplay muted loop>
                            <source src="src/img/Post proyectando.mp4" type="video/mp4">
                        </video>
                    </div>
                </div>
            </div>
        </div>
        <div class="container text-center my-5">
            <h5>Nuestros Reconocimientos</h5>
            <h2>Somos un referente en la industria de la construcción</h2>
            <div id="proyects" class="row justify-content-center mt-4"></div>
            <div class="row mt-4">
                <div class="col-md-6">
                    <h5 class="fw-bold">Compromiso y Calidad en Cada
                        Proyecto</h5>
                    <p>En Proyectando Fachadas nos dedicamos a realizar cada
                        proyecto con precisión y dedicación, adaptándonos a los
                        requerimientos específicos de nuestros clientes. Ya sea
                        para fachadas o interiores de casas, oficinas, edificios
                        o fábricas, garantizamos cumplir con todas las
                        expectativas y necesidades. Utilizamos materiales de
                        alta calidad y ofrecemos un servicio de primera,
                        asegurando la satisfacción en cada obra.</p>
                </div>
                <div class="col-md-6">
                    <h5 class="fw-bold">Soluciones 100% Seguras para Fachadas e
                        Interiores</h5>
                    <p>Cumplimos con los estándares de seguridad. Estamos
                        certificados en las normas <a href="#">ISO 27001</a>
                        (CO22/00000064) y <a href="#">PCI-DSS</a> para
                        operaciones,
                        Proporcionamos personal especializado para completar su
                        proyecto de manera eficiente. Ofrecemos un servicio de
                        alta calidad, desde la fase inicial hasta los toques
                        finales..</p>
                </div>
            </div>
        </div>

        <div class="container-fluid my-5 custom-container">
            <div class="row align-items-center">
                <!-- Imagen a la izquierda -->
                <div class="col-md-6">
                    <img src="src/img/Equipo_trabajo.jpg" class="img-fluid" alt="Descripción de la imagen">
                </div>
                <!-- Texto descriptivo a la derecha -->
                <div class="col-md-6">
                    <h1>¡Somos Tus Mejores Aliados!</h1>
                    <p>
                        En Proyectando Fachadas nos mueve la pasión. La pasión
                        por servir,
                        aprender, innovar y destacar en lo que hacemos.
                        Trabajando con altura combinamos la agilidad y fuerza
                        con la chispa de ingenio de nuestro equipo de trabajo
                        para crear un entorno de bienestar y éxito.
                    </p>
                    <a href="https://www.fachadas.com/" class="btn btn-primary">Conoce más</a>
                </div>
            </div>
        </div>

        <div class="container my-5">
            <h2 class="text-center mb-5">Que está incluido en todos nuestros
                servicios:</h2>
            <div class="row">
                <div class="col-12 col-md-6 col-lg-3">
                    <div class="service-item">
                        <i class="fas fa-balance-scale service-icon"></i>
                        <h5>Legalmente</h5>
                        <p>Estamos constituidos como empresa lo cual le dará más
                            seguridad y respaldo. Además también facturamos.</p>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-3">
                    <div class="service-item">
                        <i class="fas fa-hard-hat service-icon"></i>
                        <h5>ARL</h5>
                        <p>Todo nuestro personal tiene todos sus documentos al
                            día, incluida la ARL.</p>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-3">
                    <div class="service-item">
                        <i class="fas fa-handshake service-icon"></i>
                        <h5>Trabajo Garantizado</h5>
                        <p>Nosotros firmamos contratos por notaria, para que
                            usted esté seguro del cumplimiento y de recibir el
                            servicio que compró.</p>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-3">
                    <div class="service-item">
                        <i class="fas fa-fingerprint service-icon"></i>
                        <h5>Individualizado</h5>
                        <p>Entendemos que cada cliente es diferente y tiene
                            requerimientos particulares y lo tratamos de este
                            forma.</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="container my-5 custom-container">
            <div class="row align-items-center">
                <!-- Imagen a la izquierda -->
                <div class="col-md-6">
                    <img src="src/img/atencion _cliente.jpg" class="img-fluid" alt="Descripción de la imagen">
                </div>
                <!-- Información de contacto a la derecha -->
                <div class="col-md-6 contact-info">
                    <h2>Estamos aquí para escucharte</h2>
                    <p>Si tienes preguntas sobre nuestros productos, un experto
                        está esperando para resolverlas.</p>
                    <p><i class="bi bi-whatsapp"></i> +123 456 7890</p>
                    <p><i class="bi bi-envelope email-icon"></i>
                        contacto@ejemplo.com</p>
                </div>
            </div>
        </div>
        <?php require_once './component/footer.php'; ?>
        <script src="src/js/index.js"></script>
    </div>
</body>

</html>