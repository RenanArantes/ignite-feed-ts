import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import Post from './components/Post'

import styles from './App.module.css'
import './global.css'

const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet nulla facilisi morbi tempus iaculis urna id. Tortor dignissim convallis aenean et tortor at. Facilisis gravida neque convallis a cras semper auctor. Non tellus orci ac auctor augue mauris augue neque gravida. Nunc lobortis mattis aliquam faucibus. Nibh nisl condimentum id venenatis. Elementum sagittis vitae et leo duis ut. Amet consectetur adipiscing elit duis tristique sollicitudin nibh sit. Diam volutpat commodo sed egestas egestas. In vitae turpis massa sed. Nisi est sit amet facilisis. Sagittis vitae et leo duis ut diam quam nulla. Velit laoreet id donec ultrices tincidunt arcu. Sit amet venenatis urna cursus eget nunc. Id interdum velit laoreet id donec ultrices tincidunt. Vitae justo eget magna fermentum iaculis eu non diam. Purus viverra accumsan in nisl. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit. Blandit massa enim nec dui nunc mattis."

const posts  = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://www.github.com/RenanArantes.png',
      name: 'Renen',
      role: 'dev',
    },
    publishedAt: new Date('2022-07-15 16:00'),
    content: [
      { type: 'paragraph', content: "Fala galeraa 👋" },
      { type: 'paragraph', content: loremIpsum},
      { type: 'link', content: "jane.design/doctorcare"},
    ]
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://www.github.com/RenanArantes.png',
      name: 'Renen',
      role: 'dev',
    },
    publishedAt: new Date('2022-07-17 14:00'),
    content: [
      { type: 'paragraph', content: "Fala galeraa 👋" },
      { type: 'paragraph', content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
      { type: 'link', content: "jane.design/doctorcare"},
    ]
  },
]

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {
            posts.map( post => {
              return (
                <Post 
                  key={post.id}
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                />
              )
            })
          }
        </main>
      </div>
    </>
  )
}

export default App
