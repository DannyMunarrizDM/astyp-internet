document.addEventListener(
    "DOMContentLoaded",
    function () {


        // =====================================================
        // MENÚ MÓVIL
        // =====================================================

        const menuToggle =
            document.getElementById("menuToggle");

        const navMenu =
            document.getElementById("navMenu");


        if (menuToggle && navMenu) {

            menuToggle.addEventListener(
                "click",
                function () {

                    navMenu.classList.toggle("active");


                    const abierto =
                        navMenu.classList.contains("active");


                    menuToggle.innerHTML =
                        abierto ? "✕" : "☰";


                    menuToggle.setAttribute(
                        "aria-expanded",
                        abierto
                    );

                }
            );


            const navLinks =
                navMenu.querySelectorAll("a");


            navLinks.forEach(
                function (link) {

                    link.addEventListener(
                        "click",
                        function () {

                            navMenu.classList.remove("active");

                            menuToggle.innerHTML = "☰";

                            menuToggle.setAttribute(
                                "aria-expanded",
                                "false"
                            );

                        }
                    );

                }
            );


            document.addEventListener(
                "click",
                function (event) {

                    const clickMenu =
                        navMenu.contains(event.target);

                    const clickBoton =
                        menuToggle.contains(event.target);


                    if (!clickMenu && !clickBoton) {

                        navMenu.classList.remove("active");

                        menuToggle.innerHTML = "☰";

                        menuToggle.setAttribute(
                            "aria-expanded",
                            "false"
                        );

                    }

                }
            );

        }



        // =====================================================
        // AÑO AUTOMÁTICO
        // =====================================================

        const currentYear =
            document.getElementById("currentYear");


        if (currentYear) {

            currentYear.textContent =
                new Date().getFullYear();

        }



        // =====================================================
        // FORMULARIO DEMOSTRATIVO
        // =====================================================

        const contactForm =
            document.getElementById("contactForm");

        const formMessage =
            document.getElementById("formMessage");


        if (contactForm && formMessage) {

            contactForm.addEventListener(
                "submit",
                function (event) {

                    event.preventDefault();


                    const nombre =
                        document
                            .getElementById("nombre")
                            .value
                            .trim();


                    const correo =
                        document
                            .getElementById("correo")
                            .value
                            .trim();


                    const mensaje =
                        document
                            .getElementById("mensaje")
                            .value
                            .trim();


                    if (
                        !nombre ||
                        !correo ||
                        !mensaje
                    ) {

                        formMessage.style.display =
                            "block";

                        formMessage.style.color =
                            "#dc2626";

                        formMessage.textContent =
                            "Por favor completa los campos obligatorios.";

                        return;

                    }


                    formMessage.style.display =
                        "block";

                    formMessage.style.color =
                        "#16a34a";

                    formMessage.textContent =
                        "¡Gracias! Tu consulta fue registrada correctamente.";


                    contactForm.reset();


                    setTimeout(
                        function () {

                            formMessage.style.display =
                                "none";

                        },
                        5000
                    );

                }
            );

        }



        // =====================================================
        // SOMBRA HEADER AL HACER SCROLL
        // =====================================================

        const header =
            document.querySelector(".header");


        if (header) {

            window.addEventListener(
                "scroll",
                function () {

                    if (window.scrollY > 20) {

                        header.classList.add(
                            "header-scrolled"
                        );

                    } else {

                        header.classList.remove(
                            "header-scrolled"
                        );

                    }

                }
            );

        }

    }
);