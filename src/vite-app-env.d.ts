declare module '*.png'
declare module '*.svg'
declare module '*.svg?react' {
  import { FC, SVGProps } from 'react'
  const content: FC<SVGProps<SVGElement>>
  export default content
}
declare module '*.jpeg'
declare module '*.jpg'
declare module '*.webp'
