import CMS from 'netlify-cms'

import PagePreview from './preview-templates/PagePreview'
import PostPreview from './preview-templates/PostPreview'

CMS.registerPreviewTemplate('about', PagePreview)
CMS.registerPreviewTemplate('blog', PostPreview)
