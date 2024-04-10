import React from 'react'
import { DemoApp } from './DemoApp'
import { createRoot } from 'react-dom/client'

const root = createRoot(document.getElementById('root') as HTMLElement)
root.render(<DemoApp />)
