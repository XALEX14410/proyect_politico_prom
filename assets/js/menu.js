// Función para agregar elementos al menú de navegación
function agregarElementoMenu(icono, texto, enlace, submenus = [], target = null) {
    const navList = document.getElementById("nav_list");

    // Crear un nuevo elemento <li>
    const li = document.createElement("li");

    // Crear el enlace principal
    const a = document.createElement("a");
    a.href = enlace || "#";
    a.innerHTML = `<i class='${icono}'></i> ${texto}`;
    if (target) a.target = target; // Asignar target si está definido
    li.appendChild(a);

    // Si hay submenús, crear y agregar
    if (submenus.length > 0) {
        const ulSubmenu = document.createElement("ul");
        ulSubmenu.classList.add("submenu");

        submenus.forEach(submenu => {
            const liSubmenu = document.createElement("li");
            const aSubmenu = document.createElement("a");

            aSubmenu.href = submenu.enlace || "#";
            aSubmenu.textContent = submenu.texto;
            if (submenu.target) aSubmenu.target = submenu.target; // Asignar target si está definido para submenús

            liSubmenu.appendChild(aSubmenu);

            // Si este submenú tiene un `submenu_2`
            if (submenu.submenus && submenu.submenus.length > 0) {
                const ulSubmenu2 = document.createElement("ul");
                ulSubmenu2.classList.add("submenu_2");

                submenu.submenus.forEach(submenu2 => {
                    const liSubmenu2 = document.createElement("li");
                    const aSubmenu2 = document.createElement("a");

                    aSubmenu2.href = submenu2.enlace || "#";
                    aSubmenu2.textContent = submenu2.texto;
                    if (submenu2.target) aSubmenu2.target = submenu2.target; // Asignar target si está definido para submenú 2

                    liSubmenu2.appendChild(aSubmenu2);
                    ulSubmenu2.appendChild(liSubmenu2);
                });

                liSubmenu.appendChild(ulSubmenu2);
            }

            ulSubmenu.appendChild(liSubmenu);
        });

        li.appendChild(ulSubmenu);
    }

    // Agregar el <li> al menú principal
    navList.appendChild(li);
}

// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
    // Menú principal del Partido Progresista por la Democracia (PPD)
    agregarElementoMenu("", "Inicio", "#inicio");

    agregarElementoMenu("", "¿Quiénes somos?", "#nosotros", [
        { texto: "Nosotros", enlace: "#nosotros" },
        { texto: "Vida Interna", enlace: "#vida-interna" },
        { texto: "Liderazgo", enlace: "#lideres" }
    ]);

    agregarElementoMenu("", "Plataforma", "#plataforma");

    agregarElementoMenu("", "Propuestas", "#propuestas");

    agregarElementoMenu("", "Sala de Prensa", "#prensa", [
        { texto: "Noticias", enlace: "#noticias" },
        { texto: "Documentos", enlace: "#documentos" },
        { texto: "Esenciales", enlace: "#esenciales" }
    ]);

    agregarElementoMenu("", "Redes Sociales", "#redes");

    agregarElementoMenu("", "Transparencia", "#transparencia", [
        { texto: "Transparencia", enlace: "#transparencia" },
        { texto: "Protección de Datos Personales", enlace: "#datos-personales" }
    ]);

    agregarElementoMenu("", "Contacto", "#contacto");
});

