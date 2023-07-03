(function ($) {
    "use strict";    
    
    // Initiate the wowjs
    new WOW().init();
    
})(jQuery);

document.getElementById('listCursos').addEventListener('click', (e) => {
    Swal.fire({
        title: '<strong>Listado de cursos</strong>',
        html: `<div class="accordion accordion-flush" id="accordionCursos">
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="false" aria-controls="collapse1">
                                Desplazamiento Forzado Interno
                            </button>
                        </h2>
                        <div id="collapse1" class="accordion-collapse collapse" data-bs-parent="#accordionCursos">
                            <div class="accordion-body text-start">
                                <strong>Detalles.</strong>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                                Diversidad Sexual y Derechos Humanos
                            </button>
                        </h2>
                        <div id="collapse2" class="accordion-collapse collapse" data-bs-parent="#accordionCursos">
                            <div class="accordion-body text-start">
                                <strong>Curso compuesto de 4 módulos:.</strong> 
                                <ul style='margin-left:15px;'>
                                    <li>M1. Aclarando Conceptos en Diversidad Sexual</li>
                                    <li>M2. Entendiendo la Diversidad Sexual</li>
                                    <li>M3. Diversidad Sexual y Masculinidad</li>
                                    <li>M4. Diversidad Sexual y Marco Jurídico</li>
                                </ul>
                                <p>Equivalente a 30 horas de estudios.</p>
                                <div class="text-end">
                                    <button type="button" class="btn btn-info">Inscribirse al curso</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                            Libertad de Expresión
                            </button>
                        </h2>
                        <div id="collapse3" class="accordion-collapse collapse" data-bs-parent="#accordionCursos">
                            <div class="accordion-body text-start">
                                <strong>Detalles.</strong>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                            Derechos Humanos, Medio Ambiente y Sustentabilidad
                            </button>
                        </h2>
                        <div id="collapse4" class="accordion-collapse collapse" data-bs-parent="#accordionCursos">
                            <div class="accordion-body text-start">
                                <strong>Detalles.</strong>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                            Derechos Humanos de las Personas en Reclusión Penitenciaria
                            </button>
                        </h2>
                        <div id="collapse5" class="accordion-collapse collapse" data-bs-parent="#accordionCursos">
                            <div class="accordion-body text-start">
                                <strong>Detalles.</strong>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse6" aria-expanded="false" aria-controls="collapse6">
                            Curso Convivencia Escolar desde la Perspectiva de los Derechos Humanos
                            </button>
                        </h2>
                        <div id="collapse6" class="accordion-collapse collapse" data-bs-parent="#accordionCursos">
                            <div class="accordion-body text-start">
                                <strong>Detalles.</strong>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse7" aria-expanded="false" aria-controls="collapse7">
                            Curso de Derechos Humanos y Violencia
                            </button>
                        </h2>
                        <div id="collapse7" class="accordion-collapse collapse" data-bs-parent="#accordionCursos">
                            <div class="accordion-body text-start">
                                <strong>Detalles.</strong>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse8" aria-expanded="false" aria-controls="collapse8">
                            Curso de Derechos Humanos y Salud
                            </button>
                        </h2>
                        <div id="collapse8" class="accordion-collapse collapse" data-bs-parent="#accordionCursos">
                            <div class="accordion-body text-start">
                                <strong>Detalles.</strong>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse9" aria-expanded="false" aria-controls="collapse9">
                            Curso de Derechos Humanos y Género
                            </button>
                        </h2>
                        <div id="collapse9" class="accordion-collapse collapse" data-bs-parent="#accordionCursos">
                            <div class="accordion-body text-start">
                                <strong>Detalles.</strong>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse10" aria-expanded="false" aria-controls="collapse10">
                            Acoso Escolar, Violencia Escolar y en la Escuela
                            </button>
                        </h2>
                        <div id="collapse10" class="accordion-collapse collapse" data-bs-parent="#accordionCursos">
                            <div class="accordion-body text-start">
                                <strong>Detalles.</strong>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse11" aria-expanded="false" aria-controls="collapse11">
                            Autonomía y Derechos Humanos de las Mujeres
                            </button>
                        </h2>
                        <div id="collapse11" class="accordion-collapse collapse" data-bs-parent="#accordionCursos">
                            <div class="accordion-body text-start">
                                <strong>Detalles.</strong>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse12" aria-expanded="false" aria-controls="collapse12">
                            Derechos Humanos de los Pueblos y Comunidades Indígenas
                            </button>
                        </h2>
                        <div id="collapse12" class="accordion-collapse collapse" data-bs-parent="#accordionCursos">
                            <div class="accordion-body text-start">
                                <strong>Detalles.</strong>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse13" aria-expanded="false" aria-controls="collapse13">
                            Prevención de la Tortura
                            </button>
                        </h2>
                        <div id="collapse13" class="accordion-collapse collapse" data-bs-parent="#accordionCursos">
                            <div class="accordion-body text-start">
                                <strong>Detalles.</strong>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse14" aria-expanded="false" aria-controls="collapse14">
                            Los Principios Constituciones de Derechos Humanos en el Servicio Público
                            </button>
                        </h2>
                        <div id="collapse14" class="accordion-collapse collapse" data-bs-parent="#accordionCursos">
                            <div class="accordion-body text-start">
                                <strong>Detalles.</strong>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse15" aria-expanded="false" aria-controls="collapse15">
                            Las Empresas Bajo el Enfoque de los Derechos Humanos
                            </button>
                        </h2>
                        <div id="collapse15" class="accordion-collapse collapse" data-bs-parent="#accordionCursos">
                            <div class="accordion-body text-start">
                                <strong>Detalles.</strong>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse16" aria-expanded="false" aria-controls="collapse16">
                            Introducción a los Derechos Humanos
                            </button>
                        </h2>
                        <div id="collapse16" class="accordion-collapse collapse" data-bs-parent="#accordionCursos">
                            <div class="accordion-body text-start">
                                <strong>Detalles.</strong>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse17" aria-expanded="false" aria-controls="collapse17">
                            Justicia Transicional
                            </button>
                        </h2>
                        <div id="collapse17" class="accordion-collapse collapse" data-bs-parent="#accordionCursos">
                            <div class="accordion-body text-start">
                                <strong>Detalles.</strong>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse18" aria-expanded="false" aria-controls="collapse18">
                            Personas con Discapacidad; Transformando Barreras en Oportunidades
                            </button>
                        </h2>
                        <div id="collapse18" class="accordion-collapse collapse" data-bs-parent="#accordionCursos">
                            <div class="accordion-body text-start">
                                <strong>Detalles.</strong>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse19" aria-expanded="false" aria-controls="collapse19">
                            Género, Masculinidades y Lenguaje incluyente y no sexista
                            </button>
                        </h2>
                        <div id="collapse19" class="accordion-collapse collapse" data-bs-parent="#accordionCursos">
                            <div class="accordion-body text-start">
                                <strong>Detalles.</strong>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse20" aria-expanded="false" aria-controls="collapse20">
                            Investigación con perspectiva de género sobre la tortura sexual contra las mujeres
                            </button>
                        </h2>
                        <div id="collapse20" class="accordion-collapse collapse" data-bs-parent="#accordionCursos">
                            <div class="accordion-body text-start">
                                <strong>Detalles.</strong>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse21" aria-expanded="false" aria-controls="collapse21">
                            Prevención de las violencias contra las adolescencias y su participación para la Reconstrucción del Tejido Social
                            </button>
                        </h2>
                        <div id="collapse21" class="accordion-collapse collapse" data-bs-parent="#accordionCursos">
                            <div class="accordion-body text-start">
                                <strong>Detalles.</strong>
                            </div>
                        </div>
                    </div>


                </div>`,
        width: 900,
        showConfirmButton: false
      });
})