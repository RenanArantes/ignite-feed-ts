import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar'

import styles from './Sidebar.module.css'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img 
        className={styles.cover}
        src="https://images.unsplash.com/photo-1606606767399-01e271823a2e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bWF0cml4fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=50" 
      />
      <div className={styles.profile}>
        <Avatar avatar="https://www.github.com/renanarantes.png" alt=""/>

        <strong>Nome do usuário</strong>
        <span>Cargo</span>
      </div>
      <footer>
        <a href="#">
          <PencilLine size={20}/>
          Editar seu Perfil
        </a>
      </footer>
    </aside>
  )
}