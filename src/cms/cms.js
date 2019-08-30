import CMS from 'netlify-cms-app'

import PagePreview from './preview-templates/PagePreview'
import PostPreview from './preview-templates/PostPreview'

CMS.init()
CMS.registerPreviewTemplate('about', PagePreview)
CMS.registerPreviewTemplate('blog', PostPreview)
