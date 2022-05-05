import React from 'react'

function TextVerticalGold(props: any) {
  return (
    <div
      className="-m-5 writing-vertical-lr rotate-180 font-source font-semibold text-[300px] leading-[0.7] text-transparent select-none"
      style={{
        WebkitTextStroke: '1px',
        WebkitTextStrokeColor: 'var(--gold)',
      }}
    >
      {props.children}
    </div>
  )
}

export default TextVerticalGold
