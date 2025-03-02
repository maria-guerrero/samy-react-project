# samy-react-project
<p>Este proyecto es una Single Page Application de imágenes construida con React y Apollo Client, que se conecta a una API GraphQL para obtener dichas imágenes, permitir la búsqueda y habilitar la funcionalidad de "me gusta" para cada imagen. El proyecto también soporta la carga infinita de imágenes mientras el usuario se desplaza hacia abajo.</p>
<h3>Tecnologías utilizadas:</h3>
<ul>
  <li>React</li>
  <li>Apollo Client</li>
  <li>GraphQL</li>
  <li>CSS</li>
</ul>

<h3>Instalación:</h3>
<ol>
  <li>Clona el repositorio</li>
  <li>Instala las dependencias</li>
  <li>Ejecuta el proyecto con: <code>npm start</code>. Esto iniciará la aplicación y podrás verla en tu navegador en <code>http://localhost:3000</code>.</li>
</ol>

<h3>Estructura del proyecto:</h3>
<ul>
  <li><code>src/components/</code>: Contiene los componentes de React.</li>
  <ol>
    <li><b>ImageCard.js</b>: Componente que muestra cada imagen con su título, autor y número de "me gusta".</li>
    <li><b>ImageList.js</b>: Componente que maneja la lista de imágenes, paginación y búsqueda.</li>
    <li><b>LikeButton.js</b>: Componente para el botón de "me gusta" que permite alternar entre los estados de "me gusta" y "no me gusta".</li>
    <li><b>SearchBar.js</b>: Componente que permite buscar imágenes por título o autor.</li>
  </ol>
  <li><code>src/graphql/</code>: Contiene las consultas y mutaciones de GraphQL utilizadas para obtener y manipular los datos.</li>
  <ol>
    <li><b>queries.js</b>: Consulta para obtener las imágenes desde la API.</li>
    <li><b>mutations.js</b>: Mutaciones para marcar y desmarcar una imagen como "me gusta".</li>
    <li><b>client.js</b>: Configura Apollo Client con el enlace a la API GraphQL.</li>
  </ol>
  <li><code>src/styles/</code>: Contiene los archivos CSS para la aplicación.</li>
</ul>

<h3>Funcionalidades:</h3>
<ol>
  <li><b>Carga infinita</b>: La aplicación carga más imágenes automáticamente a medida que el usuario se desplaza hacia abajo.</li>
  <li><b>Búsqueda</b>: Puedes buscar imágenes por título o autor utilizando la barra de búsqueda en la parte superior de la página.</li>
  <li><b>Me gusta</b>: Puedes marcar una imagen como "me gusta" haciendo clic en el botón de corazón. Si ya has dado "me gusta", el botón cambiará a un corazón lleno. El número de "me gusta" se actualiza en tiempo real.</li>
</ol>

<h3>GraphQL API:</h3>
<p>La aplicación se conecta a una API GraphQL para obtener las imágenes y realizar acciones como dar "me gusta". La URL de la API es la siguiente: https://sandbox-api-test.samyroad.com/graphql</p>

<h3>Consultas y mutaciones:</h3>
<ol>
  <li><b>GET_IMAGES</b>: Obtiene una lista de imágenes con detalles como el título, la imagen y la cantidad de "me gusta".</li>
  <h4>Parámetros:</h4>
  <ul>
    <li><code>first</code>: Número de imágenes a cargar.</li>
    <li><code>after</code>: Cursor de la última imagen cargada para la paginación.</li>
  </ul>
  <li><b>LIKE_IMAGE</b>: Marca una imagen como "me gusta".</li>
  <h4>Parámetros:</h4>
  <ul>
    <li><code>imageId</code>: ID de la imagen que se marcará como "me gusta".</li>
  </ul>
  <li><b>UNLIKE_IMAGE</b>: Desmarca una imagen de "me gusta".</li>
  <h3>Parámetros:</h3>
  <ul>
    <li><code>imageId</code>: ID de la imagen que se desmarcará de "me gusta".</li>
  </ul>
</ol>
