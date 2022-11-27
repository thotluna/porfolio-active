import { useStore } from '@nanostores/preact'
import { isCollapseParagraph } from './collapseParagraph'
import styles from './AParagraph.module.css'

export default function AParagraph() {

  const $isCollapseParagraph = useStore(isCollapseParagraph)

  return $isCollapseParagraph && <div className={styles.aParagraph}>
    <p>
      Desde pequeño, mi padre me llevaba a su trabajo y aunque no entendía nada, igual quedaba hipnotizado por toda la tecnología. A los 14 años empece a trabajar en la empresa de mi padre como un simple obrero, y hay entendí que lo que me atraía de la tecnología era la posibilidad de crear nuevas cosas.
    </p>
  </div>

}

