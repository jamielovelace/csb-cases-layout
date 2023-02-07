import React from 'react'
import style from './NotesSidebar.module.css';
export default function NotesSidebar({className, close}) {
  
  return (
    <div className={`${className} ${style.sidebar}`}>
      <button type="button" onClick={() => close(false)}>x</button>
      NotesSidebar
    </div>
  )
}
