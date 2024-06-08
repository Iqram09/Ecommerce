import { ImgHTMLAttributes } from 'react'

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {}

export const Icons = {
  logo: (props: ImageProps) => (
    <img {...props} src="./EI.jpg" alt="Xiao Icon" />
  ),
}