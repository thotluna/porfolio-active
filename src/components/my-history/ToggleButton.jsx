import { useStore } from '@nanostores/preact';
import { isCollapseParagraph } from './collapseParagraph'
import styles from './ToggleButton.module.css'

export default function ToggleButton() {
  // read the store value with the `useStore` hook
  const $isCollapseParagraph = useStore(isCollapseParagraph);
  // write to the imported store using `.set`
  return (
    <span className={styles.spanMyHistory}>
      <button id="toggle-collapse" onClick={() => isCollapseParagraph.set(!$isCollapseParagraph)}>
        {
          $isCollapseParagraph ? "leer mas >>" : "<< Menos"
        }
      </button>
    </span>
  )
}