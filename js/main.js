(function ($) {
    "use strict";    
    
    // Initiate the wowjs
    new WOW().init();
    
})(jQuery);

document.getElementById('listCursos').addEventListener('click', (e) => {
    Swal.fire({
        title: '<strong>Listado de cursos</strong>',
        html: `<ul class="list-group text-start">
                    <li class="list-group-item">Desplazamiento Forzado Interno</li>
                    <li class="list-group-item">Diversidad Sexual y Derechos Humanos</li>
                    <li class="list-group-item">Libertad de Expresión</li>
                    <li class="list-group-item">Derechos Humanos, Medio Ambiente y Sustentabilidad</li>
                    <li class="list-group-item">Derechos Humanos de las Personas en Reclusión Penitenciaria</li>
                    <li class="list-group-item">Curso Convivencia Escolar desde la Perspectiva de los Derechos Humanos</li>
                    <li class="list-group-item">Curso de Derechos Humanos y Violencia</li>
                    <li class="list-group-item">Curso de Derechos Humanos y Salud</li>
                    <li class="list-group-item">Curso de Derechos Humanos y Género</li>
                    <li class="list-group-item">Curso Básico de Derechos Humanos</li>
                    <li class="list-group-item">Acoso Escolar, Violencia Escolar y en la Escuela</li>
                    <li class="list-group-item">Autonomía y Derechos Humanos de las Mujeres</li>
                    <li class="list-group-item">Derechos Humanos de los Pueblos y Comunidades Indígenas</li>
                    <li class="list-group-item">Prevención de la Tortura</li>
                    <li class="list-group-item">Los Principios Constituciones de Derechos Humanos en el Servicio Público</li>
                    <li class="list-group-item">Las Empresas Bajo el Enfoque de los Derechos Humanos</li>
                    <li class="list-group-item">Introducción a los Derechos Humanos</li>
                    <li class="list-group-item">Justicia Transicional</li>
                    <li class="list-group-item">Personas con Discapacidad; Transformando Barreras en Oportunidades</li>
                    <li class="list-group-item">Género, Masculinidades y Lenguaje incluyente y no sexista</li>
                    <li class="list-group-item">Investigación con perspectiva de género sobre la tortura sexual contra las mujeres</li>
                    <li class="list-group-item">Prevención de las violencias contra las adelescencias y su participación para la Reconstrucción del Tejido Social</li> 

                </ul>`,
        width: 900,
        showConfirmButton: false
      });
})