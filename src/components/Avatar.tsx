import { ImgHTMLAttributes } from 'react'
import styles from './Avatar.module.css'

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean;
  avatar: string;
}

export function Avatar({ hasBorder= true, avatar, ...props}: AvatarProps) {
  
  return (
    <img 
      className={ hasBorder ? styles.avatarWithBorder : styles.avatar } 
      src={avatar} 
      {...props}
    />
  )
}