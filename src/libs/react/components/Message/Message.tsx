import React, { useEffect, useRef } from 'react'
import { IDirective } from '../../directive'
import './Message.css'

export type IMessageProps = IDirective<{ type?: 'success' | 'warning' | 'error'; message: string }>

const MessageRender: React.FC<IMessageProps> = props => {
  const { type = 'success', message } = props
  const element = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!element.current) return

    element.current.style.top = '14px'

    setTimeout(() => {
      if (!element.current) return
      element.current.style.top = '-40px'

      setTimeout(() => {
        props.hide()
      }, 400)
    }, 2600)
  }, [props])

  return (
    <div ref={element} className='aui-message'>
      <div className='aui-message-content'>
        <span className={type}>{type}: </span>
        {message}
      </div>
    </div>
  )
}

export default MessageRender
