import * as React from 'react'
// import BG from '../../assets/farm/bg.svg'
import ImageNext from 'next/image'

function BFFarm(props: any) {
  return (
    <ImageNext
      {...props}
      src={"/assets/farm/bg.svg"}
      objectFit="cover"
      layout="fill"
      objectPosition="center"
      alt="bg"
    />
  )
}

export default BFFarm
