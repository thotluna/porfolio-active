import { useStore } from '@nanostores/preact'
import { isCollapseParagraph } from './collapseParagraph'
import styles from './MultipleParagraph.module.css'

export default function MultipleParagraph() {
  const $isCollapseParagraph = useStore(isCollapseParagraph)

  return !$isCollapseParagraph && <article className={styles.historyParagraphs}>
    <p>
      Desde pequeño, mi padre me llevaba a su trabajo, aunque no entendía nada, igual quedaba hipnotizado por toda la tecnología. A los 14 años empece a trabajar en la empresa de mi padre como un simple obrero, y ahí entendí que lo que me atraía de la tecnología era la posibilidad de crear nuevas cosas.
    </p>
    <p>
      A los 18 años, empece a trabajar en una empresa en el sector de  telecomunicaciones. Hay aprendí la necesidad de trabajar en equipo, la ética profesional, el respeto a los clientes y el tiempo prometido de cada proyecto. Fue el periodo donde me forme profesionalmente. En esta área entendí que no solo me llenaba la idea de “Crear” sistema que satisficieran las necesidades de los clientes, sino que también, me llenaba de orgullo los momentos en que lograba “Resolver” problemas que parecían imposibles.
    </p>
    <p>
      Mi primera aproximacion al desarrollo de software fue en la univercidad, con lenguajes como Basic y C++.
    </p>
    <p>
      En el 2000, trabajando en un proyecto de señal de video y data a nivel nacional para apuestas de caballos en los centros hípicos (establecimientos de apuestas de carreras de caballos). Vi que en varios usaban hojas de Excel para hacer subasta de los caballos que correrían en la siguiente carrera. Me llamo la atención que la encargada de la hoja debía llenarla minutos antes de empezar la puja, y una vez culminada la carrera y pagado al ganador, ella borraba la hoja y volvía a llenarla con los nuevos caballos.
    </p>
    <p>
      Viendo que esto se repetía en varios establecimientos, me acordé que un compañero de trabajo tenía un libro de Visual Basic y se lo pedí prestado. En dos semanas empece a vender mi primera aplicación. Un simple CRUD con muy poca lógica de negocio, que se encargaba de mostrar los caballos y las apuestas en cada carrera, y los datos los podías llenarse con días de antelación. No fue una aplicación muy popular, pero se vendieron más de 10 y parte del negocio era vender tanto la aplicación como la computadora y el sistema de proyección a una pantalla gigante y a todos los televisores de la red.
    </p>
    <p>
      En el 2005 tenía que llevar el control de las solicitudes de clientes como instalaciones y mantenimientos. Esto lo hacía con una hoja Excel y siempre tenía problemas por cualquier cosa y terminaba haciendo dos veces el trabajo. Debido a esto y que en internet ya había mucha información de programación, empece a desarrollar una aplicación con un stack LAMP sin ningún framework. Esta aplicación empezó siendo un simple CRUD con una tabla en la base de datos para consumo propio, luego de 14 años y muchas migraciones termino llevando la facturación, nómina, logística y operaciones de la empresa.
    </p>
    <p>
      Recuerdo con orgullo mi dos primeras aplicaciones, pero solo eso quedan de ellas, por lo que a continuación le presento los datos más relevantes de mí con respecto al desarrollo de aplicaciones. Espero sea de su agrado
    </p>
  </article>
}