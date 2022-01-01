import React from 'react'
import UseEffectExplainer from './DifferentHooks/UseEffectExplainer'
import UseRefExplainer from './DifferentHooks/UseRefExplainer'

export default function HookExamples() {

  return (
    <div className='hooks-page'>
      <UseEffectExplainer />
      <UseRefExplainer />
    </div>
  )
}
