import styles from './Avatar.module.css'

interface AvatarProps {
  hasBorder?: boolean;
  avatar: string;
  alt?: string;
}

export function Avatar({ hasBorder= true, avatar, alt}: AvatarProps) {
  
  return (
    <img 
      className={ hasBorder ? styles.avatarWithBorder : styles.avatar } 
      src={avatar} 
      alt={alt}
    />
  )
}