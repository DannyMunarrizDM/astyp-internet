document.addEventListener(
  "DOMContentLoaded",
  function () {

    // =====================================================
    // CONFIGURACIÓN
    // =====================================================

    /*
      CAMBIA ESTE NÚMERO
      POR EL WHATSAPP REAL DE ASTYP.

      FORMATO:
      51 + número

      SIN +
      SIN ESPACIOS

      EJEMPLO:
      51999999999
    */

    const WHATSAPP_NUMBER =
      "51999999999";


    // =====================================================
    // MENÚ
    // =====================================================

    const menuButton =
      document.getElementById(
        "menuButton"
      );

    const nav =
      document.getElementById(
        "nav"
      );


    if (
      menuButton &&
      nav
    ) {

      menuButton.addEventListener(
        "click",
        function () {

          const open =
            nav.classList.toggle(
              "active"
            );

          menuButton.textContent =
            open
              ? "✕"
              : "☰";

          document.body
            .classList.toggle(
              "menu-open",
              open
            );

        }
      );


      nav
        .querySelectorAll("a")
        .forEach(
          function (link) {

            link.addEventListener(
              "click",
              function () {

                nav.classList.remove(
                  "active"
                );

                menuButton.textContent =
                  "☰";

                document.body
                  .classList.remove(
                    "menu-open"
                  );

              }
            );

          }
        );

    }


    // =====================================================
    // HEADER SCROLL
    // =====================================================

    const header =
      document.getElementById(
        "header"
      );


    window.addEventListener(
      "scroll",
      function () {

        if (!header) {
          return;
        }

        header.classList.toggle(
          "scrolled",
          window.scrollY > 20
        );

      }
    );


    // =====================================================
    // AÑO
    // =====================================================

    const year =
      document.getElementById(
        "year"
      );


    if (year) {

      year.textContent =
        new Date().getFullYear();

    }


    // =====================================================
    // WHATSAPP
    // =====================================================

    function createWhatsAppUrl(
      message
    ) {

      return (
        "https://wa.me/" +
        WHATSAPP_NUMBER +
        "?text=" +
        encodeURIComponent(
          message
        )
      );

    }


    // =====================================================
    // WHATSAPP FLOTANTE
    // =====================================================

    const whatsappFloating =
      document.getElementById(
        "whatsappFloating"
      );


    if (whatsappFloating) {

      whatsappFloating.href =
        createWhatsAppUrl(
          "Hola, quiero información sobre los planes de Internet de Grupo Astyp."
        );

      whatsappFloating.target =
        "_blank";

    }


    // =====================================================
    // PLANES
    // =====================================================

    document
      .querySelectorAll(
        ".plan-button"
      )
      .forEach(
        function (button) {

          button.addEventListener(
            "click",
            function () {

              const plan =
                button.dataset.plan;

              const message =
                "Hola, quiero información sobre " +
                plan +
                ". Quiero validar cobertura en mi zona.";

              window.open(
                createWhatsAppUrl(
                  message
                ),
                "_blank"
              );

            }
          );

        }
      );


    // =====================================================
    // PROMOCIONES
    // =====================================================

    document
      .querySelectorAll(
        ".promo-button"
      )
      .forEach(
        function (button) {

          button.addEventListener(
            "click",
            function () {

              const promo =
                button.dataset.promo;

              const message =
                "Hola, quiero información sobre la promoción: " +
                promo +
                ". Quiero saber las condiciones y validar cobertura.";

              window.open(
                createWhatsAppUrl(
                  message
                ),
                "_blank"
              );

            }
          );

        }
      );


    // =====================================================
    // FAQ
    // =====================================================

    document
      .querySelectorAll(
        ".faq-question"
      )
      .forEach(
        function (button) {

          button.addEventListener(
            "click",
            function () {

              const item =
                button.closest(
                  ".faq-item"
                );

              const active =
                item.classList.contains(
                  "active"
                );


              document
                .querySelectorAll(
                  ".faq-item"
                )
                .forEach(
                  function (faq) {

                    faq.classList.remove(
                      "active"
                    );

                  }
                );


              if (!active) {

                item.classList.add(
                  "active"
                );

              }

            }
          );

        }
      );


    // =====================================================
    // ZONAS DE COBERTURA DEMOSTRATIVAS
    // =====================================================

    const zones = {


      "chincha-alta": {

        name:
          "Chincha Alta",

        status:
          "available",

        statusText:
          "Cobertura disponible",

        color:
          "#20ad68",

        center: [
          -13.4196,
          -76.1323
        ],

        polygon: [

          [
            -13.4108,
            -76.1457
          ],

          [
            -13.4082,
            -76.1305
          ],

          [
            -13.4170,
            -76.1175
          ],

          [
            -13.4315,
            -76.1198
          ],

          [
            -13.4355,
            -76.1358
          ],

          [
            -13.4260,
            -76.1470
          ]

        ]

      },


      "pueblo-nuevo": {

        name:
          "Pueblo Nuevo",

        status:
          "available",

        statusText:
          "Cobertura disponible",

        color:
          "#20ad68",

        center: [
          -13.4047,
          -76.1275
        ],

        polygon: [

          [
            -13.3940,
            -76.1402
          ],

          [
            -13.3925,
            -76.1240
          ],

          [
            -13.4010,
            -76.1120
          ],

          [
            -13.4123,
            -76.1170
          ],

          [
            -13.4120,
            -76.1328
          ],

          [
            -13.4040,
            -76.1430
          ]

        ]

      },


      "grocio-prado": {

        name:
          "Grocio Prado",

        status:
          "expansion",

        statusText:
          "En expansión",

        color:
          "#ff7a00",

        center: [
          -13.3970,
          -76.1550
        ],

        polygon: [

          [
            -13.3875,
            -76.1695
          ],

          [
            -13.3855,
            -76.1510
          ],

          [
            -13.3960,
            -76.1420
          ],

          [
            -13.4080,
            -76.1490
          ],

          [
            -13.4070,
            -76.1660
          ],

          [
            -13.3970,
            -76.1740
          ]

        ]

      },


      "sunampe": {

        name:
          "Sunampe",

        status:
          "expansion",

        statusText:
          "En expansión",

        color:
          "#ff7a00",

        center: [
          -13.4278,
          -76.1630
        ],

        polygon: [

          [
            -13.4165,
            -76.1760
          ],

          [
            -13.4140,
            -76.1590
          ],

          [
            -13.4260,
            -76.1490
          ],

          [
            -13.4400,
            -76.1550
          ],

          [
            -13.4410,
            -76.1710
          ],

          [
            -13.4300,
            -76.1810
          ]

        ]

      }

    };


    // =====================================================
    // MOSTRAR RESULTADO DE COBERTURA
    // =====================================================

    function showCoverageResult(
      zone
    ) {

      const result =
        document.getElementById(
          "coverageResult"
        );


      if (
        !result ||
        !zone
      ) {

        return;

      }


      result.classList.remove(
        "available",
        "expansion"
      );


      result.classList.add(
        zone.status
      );


      let icon =
        "✅";

      let description =
        "¡Buenas noticias! Tenemos cobertura referencial en esta zona.";


      if (
        zone.status ===
        "expansion"
      ) {

        icon =
          "🟠";

        description =
          "Esta zona está marcada como área de expansión.";

      }


      result.innerHTML = `

        <span
          class="coverage-result-icon"
        >
          ${icon}
        </span>

        <div>

          <strong>
            ${zone.name}
          </strong>

          <p>
            ${zone.statusText}.
            ${description}
          </p>

        </div>

      `;

    }


    // =====================================================
    // MAPA
    // =====================================================

    const mapElement =
      document.getElementById(
        "coverageMap"
      );


    const layerByKey =
      {};


    if (
      mapElement &&
      window.L
    ) {


      const map =
        L.map(
          "coverageMap",
          {

            scrollWheelZoom:
              false,

            zoomControl:
              true

          }
        )
        .setView(
          [
            -13.4185,
            -76.14
          ],
          13
        );


      // ===================================================
      // MAPA BASE ESRI
      // ===================================================

      const esriLayer =
        L.tileLayer(

          "https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}",

          {

            maxZoom: 19,

            attribution:
              "Tiles © Esri"

          }

        );


      esriLayer.addTo(
        map
      );


      // ===================================================
      // RESPALDO AUTOMÁTICO CARTO
      // ===================================================

      let fallbackActivated =
        false;


      esriLayer.on(
        "tileerror",
        function () {

          if (
            fallbackActivated
          ) {

            return;

          }


          fallbackActivated =
            true;


          map.removeLayer(
            esriLayer
          );


          L.tileLayer(

            "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",

            {

              subdomains:
                "abcd",

              maxZoom:
                20,

              attribution:
                "&copy; OpenStreetMap &copy; CARTO"

            }

          ).addTo(
            map
          );

        }
      );


      // ===================================================
      // DIBUJAR LAS ZONAS
      // ===================================================

      Object
        .entries(
          zones
        )
        .forEach(
          function (
            [key, zone]
          ) {


            const polygon =
              L.polygon(

                zone.polygon,

                {

                  color:
                    zone.color,

                  weight:
                    3,

                  opacity:
                    0.95,

                  fillColor:
                    zone.color,

                  fillOpacity:
                    0.2

                }

              )
              .addTo(
                map
              );


            polygon.bindPopup(`

              <div
                style="
                  min-width:160px;
                  font-family:Arial;
                  padding:4px;
                "
              >

                <strong
                  style="
                    font-size:14px;
                  "
                >
                  ${zone.name}
                </strong>

                <br>

                <span
                  style="
                    color:${zone.color};
                    font-weight:700;
                    font-size:13px;
                  "
                >
                  ${zone.statusText}
                </span>

                <br>

                <small
                  style="
                    color:#64748b;
                  "
                >
                  Cobertura demostrativa
                </small>

              </div>

            `);


            polygon.on(
              "click",
              function () {

                showCoverageResult(
                  zone
                );


                const select =
                  document.getElementById(
                    "zoneSelect"
                  );


                if (select) {

                  select.value =
                    key;

                }

              }
            );


            layerByKey[key] =
              polygon;

          }
        );


      // ===================================================
      // CONSULTA MANUAL
      // ===================================================

      const checkCoverage =
        document.getElementById(
          "checkCoverage"
        );


      const zoneSelect =
        document.getElementById(
          "zoneSelect"
        );


      if (
        checkCoverage &&
        zoneSelect
      ) {

        checkCoverage.addEventListener(
          "click",
          function () {


            const key =
              zoneSelect.value;


            if (
              !key ||
              !zones[key]
            ) {

              const result =
                document.getElementById(
                  "coverageResult"
                );


              result.classList.remove(
                "available",
                "expansion"
              );


              result.innerHTML = `

                <span
                  class="coverage-result-icon"
                >
                  ⚠️
                </span>

                <div>

                  <strong>
                    Selecciona una zona
                  </strong>

                  <p>
                    Elige un sector para revisar cobertura.
                  </p>

                </div>

              `;


              return;

            }


            const zone =
              zones[key];


            showCoverageResult(
              zone
            );


            map.flyTo(

              zone.center,

              14,

              {
                duration:
                  0.8
              }

            );


            layerByKey[key]
              .openPopup();

          }
        );

      }


      // ===================================================
      // GEOLOCALIZACIÓN
      // ===================================================

      const useLocation =
        document.getElementById(
          "useLocation"
        );


      if (
        useLocation
      ) {

        useLocation.addEventListener(
          "click",
          function () {

            useLocation.textContent =
              "Buscando ubicación...";


            map.locate(
              {

                setView:
                  true,

                maxZoom:
                  15,

                enableHighAccuracy:
                  true

              }
            );

          }
        );


        // =================================================
        // UBICACIÓN ENCONTRADA
        // =================================================

        map.on(
          "locationfound",
          function (
            event
          ) {


            useLocation.textContent =
              "📍 Usar mi ubicación";


            L.circleMarker(

              event.latlng,

              {

                radius:
                  8,

                color:
                  "#1473e6",

                weight:
                  3,

                fillColor:
                  "#ffffff",

                fillOpacity:
                  1

              }

            )
              .addTo(
                map
              )

              .bindPopup(
                "Tu ubicación aproximada"
              )

              .openPopup();


            let foundZone =
              null;


            Object
              .entries(
                layerByKey
              )
              .forEach(
                function (
                  [key, layer]
                ) {


                  if (
                    !foundZone &&
                    layer
                      .getBounds()
                      .contains(
                        event.latlng
                      )
                  ) {

                    foundZone =
                      zones[key];


                    const select =
                      document
                        .getElementById(
                          "zoneSelect"
                        );


                    if (
                      select
                    ) {

                      select.value =
                        key;

                    }

                  }

                }
              );


            if (
              foundZone
            ) {

              showCoverageResult(
                foundZone
              );

            }

            else {


              const result =
                document
                  .getElementById(
                    "coverageResult"
                  );


              result.classList.remove(
                "available",
                "expansion"
              );


              result.innerHTML = `

                <span
                  class="coverage-result-icon"
                >
                  📍
                </span>

                <div>

                  <strong>
                    Necesitamos validar tu dirección
                  </strong>

                  <p>
                    Tu ubicación está fuera de las zonas marcadas en esta demo.
                  </p>

                </div>

              `;

            }

          }
        );


        // =================================================
        // ERROR DE UBICACIÓN
        // =================================================

        map.on(
          "locationerror",
          function () {


            useLocation.textContent =
              "📍 Usar mi ubicación";


            const result =
              document.getElementById(
                "coverageResult"
              );


            result.classList.remove(
              "available",
              "expansion"
            );


            result.innerHTML = `

              <span
                class="coverage-result-icon"
              >
                ⚠️
              </span>

              <div>

                <strong>
                  No pudimos obtener tu ubicación
                </strong>

                <p>
                  Activa el permiso de ubicación o selecciona una zona.
                </p>

              </div>

            `;

          }
        );

      }


      // ===================================================
      // AJUSTAR MAPA
      // ===================================================

      setTimeout(
        function () {

          map.invalidateSize();

        },
        400
      );

    }


    // =====================================================
    // FORMULARIO
    // =====================================================

    const contactForm =
      document.getElementById(
        "contactForm"
      );


    if (
      contactForm
    ) {

      contactForm.addEventListener(
        "submit",
        function (
          event
        ) {


          event.preventDefault();


          const name =
            document
              .getElementById(
                "name"
              )
              .value
              .trim();


          const phone =
            document
              .getElementById(
                "phone"
              )
              .value
              .trim();


          const district =
            document
              .getElementById(
                "district"
              )
              .value
              .trim();


          const plan =
            document
              .getElementById(
                "plan"
              )
              .value;


          if (
            !name ||
            !phone ||
            !district
          ) {

            alert(
              "Completa tus datos antes de continuar."
            );

            return;

          }


          const message =

            "Hola Grupo Astyp 👋\n\n" +

            "Quiero información para contratar Internet.\n\n" +

            "Nombre: " +
            name +
            "\n" +

            "Celular: " +
            phone +
            "\n" +

            "Zona: " +
            district +
            "\n" +

            "Plan: " +
            plan +
            "\n\n" +

            "Quiero validar cobertura y disponibilidad.";


          window.open(

            createWhatsAppUrl(
              message
            ),

            "_blank"

          );

        }
      );

    }


  }
);
