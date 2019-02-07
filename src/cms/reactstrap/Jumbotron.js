import React from 'react'
import CMS from 'netlify-cms'
import { Jumbotron } from 'reactstrap'

// Editing Component
export const JumbotronControl = props => {
  const MarkdownControl = CMS.getWidget("markdown").control;
  return (<div><MarkdownControl {...props} /></div>)
}

// Preview Component
export const JumbotronPreview = props => {
  const MarkdownPreview = CMS.getWidget("markdown").preview
  return (<Jumbotron><MarkdownPreview {...props} /></Jumbotron>)
}