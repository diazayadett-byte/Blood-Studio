1. Niveles de la Jerarquía

Page (Páginas)	Componentes de alto nivel asociados a una ruta de la aplicación. Orquestan la lógica de datos.Ejemplo:	/src/pages
Section (Secciones)	Bloques funcionales grandes dentro de una página. Son específicas del contexto pero pueden ser movibles.Ejemplo:	/src/components/layout
Element (Reutilizables)	Componentes atómicos o de UI (botones, inputs, cards) que no tienen lógica de negocio.Ejemplo:	/src/components/ui

Los componentes principales de la página sobre nosotros son:

1. **`Navbar`** (encabezado con navegación global).
2. **`IntroSection`** (sección introductoria con imagen y texto).
3. **`MissionSection`** y **`VisionSection`** (bloques de misión/visión).
4. **`DifferentiatorsSection`** (área de diferenciadores con íconos y textos).
5. **`TeamSection`** (sección del equipo).
6. **`Footer`** (pie de página global).

Los elementos reutilizables son:
1. Navbar: La barra de navegación superior con el logotipo "Bloom", enlaces ("Sobre nosotros", "Tienda", etc.), la barra de búsqueda y los iconos de usuario y carrito.
2. Card o ImageBlock: El contenedor con esquinas redondeadas que agrupa la imagen de la persona sonriendo y el texto de la tienda dentro de la IntroSection.
3. Heading (H1, H2, H3, H4) y Paragraph: Los componentes tipográficos utilizados en todos los textos.
4. Illustration: El gráfico vectorial del desarrollo web en la sección inferior.
5. Button o Icon: Los elementos interactivos como los iconos en la navegación superior (usuario, corazón, carrito de compras).















