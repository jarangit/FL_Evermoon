import * as React from 'react'
import BG from '../../public/assets/farm/bg.svg'
import ImageNext from 'next/image'

function BFFarm(props: any) {
  return (
    <ImageNext
      {...props}
      src={BG}
      objectFit="cover"
      layout="fill"
      objectPosition="center"
      alt="bg"
    />
  )
}

export default BFFarm
