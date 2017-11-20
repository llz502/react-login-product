import '../css/TodoInput.css'
import React from 'react'

function submit (props, e) {
  if (e.key === 'Enter') {
    props.onSubmit(e)
    }
  }
function changeTitle (props, e) {
  props.onChange(e)
}


export default function (props) {
  return <input type="text" value={props.content} className="TodoInput"
  onChange={changeTitle.bind(null, props)} onKeyPress={submit.bind(null, props)}/>
}
