import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { Avatar } from './Avatar'
import { Comment } from './Coment'

import styles from './Post.module.css'

interface Author {
  name: string;
  role: string;
  avatarUrl: string
}

interface Content {
  type: 'paragraph' | 'link';
  content: string;
}

interface PostProps {
  author: Author,
  publishedAt: Date,
  content: Content[]
}

function Post({ author, publishedAt, content }: PostProps) {
  const [comments, setComments] = useState(['Muito bom 😄 '])
  const [newCommentText, setNewCommentText] = useState('')

  const publishedDateFormated = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR
  })
  
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  function handleCreateNewComment(e: FormEvent) {
    e.preventDefault()
    
    setComments([...comments, newCommentText])

    setNewCommentText('')
  }

  function handleNewCommentChange(e: ChangeEvent<HTMLTextAreaElement>) {
    e.preventDefault()

    e.target.setCustomValidity('')
    setNewCommentText(e.target.value)
  }

  function handleNewCommentInvalid(e: InvalidEvent<HTMLTextAreaElement>) {
    e.target.setCustomValidity('Esse campo é obrigatório.')

    console.log(e)
  }

  function deleteComment(commentToDelete: string) {
    const commentsWithoutDeletedOne = comments.filter(comment => {
      return comment !== commentToDelete
    })

    setComments(commentsWithoutDeletedOne)
  }

  const isNewCommentEmpty = newCommentText.length === 0  

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar avatar={author.avatarUrl} alt=""/>
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormated} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
      </header>

      <div className={styles.content}>
        {content.map( line => {
          if(line.type === 'paragraph') {
            return <p key={line.content}>{line.content}</p>
          } else if (line.type === 'link') {
            return <p key={line.content}><a href="">{line.content}</a></p>
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment}  className={styles.commentForm}>
        <strong>Deixa seu feedback</strong>
        <textarea
          onChange={handleNewCommentChange}
          value={newCommentText}
          placeholder='Deixe um comentário'
          onInvalid={handleNewCommentInvalid}
          required
        />
        <footer>
          <button type='submit' disabled={isNewCommentEmpty}>Publicar</button>
        </footer>
      </form>
      
      <div className={styles.commentList}>
        {comments.map(comment => {
          return <Comment key ={comment} content={comment} onDeleteComment={deleteComment}/>
        })}
      </div>
    </article>
  )
}

export default Post