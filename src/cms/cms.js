import CMS from 'netlify-cms'
import { JumbotronControl, JumbotronPreview } from "./reactstrap/Jumbotron"

import AboutPagePreview from './preview-templates/AboutPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import ProductPagePreview from './preview-templates/ProductPagePreview'

CMS.registerWidget("jumbotron", JumbotronControl, JumbotronPreview)

CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('products', ProductPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
