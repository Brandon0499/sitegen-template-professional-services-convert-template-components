import {renderToString} from '@vue/server-renderer'
import {escapeInject, dangerouslySkipEscape} from 'vite-plugin-ssr'
import {createApp} from './app'
import logoUrl from './logo.svg'
import type {PageContext} from './types'
import type {PageContextBuiltIn} from 'vite-plugin-ssr'

export {render}
// See https://vite-plugin-ssr.com/data-fetching
export const passToClient = ['pageProps', 'urlPathname']

async function render(pageContext: PageContextBuiltIn & PageContext) {
    const app = createApp(pageContext)
    const appHtml = await renderToString(app)

    // See https://vite-plugin-ssr.com/head
    const {documentProps} = pageContext
    const title = (documentProps && documentProps.title) || 'Vite SSR app'
    const desc = (documentProps && documentProps.description) || 'App using Vite + vite-plugin-ssr'

    const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
          <!-- Favicon -->
    <link rel="shortcut icon" type="image/x-icon" href="assets/images/favicon.png">
    <!-- CSS ============================================ -->
    <link rel="stylesheet" href="assets/css/vendor/bootstrap.min.css">
    <link rel="stylesheet" href="assets/css/plugins/animation.css">
    <link rel="stylesheet" href="assets/css/plugins/feature.css">
    <link rel="stylesheet" href="assets/css/plugins/magnify.min.css">
    <link rel="stylesheet" href="assets/css/plugins/slick.css">
    <link rel="stylesheet" href="assets/css/plugins/slick-theme.css">
    <link rel="stylesheet" href="assets/css/plugins/lightbox.css">
    <link rel="stylesheet" href="assets/css/style.css">
        <meta charset="UTF-8" />
        <link rel="icon" href="${logoUrl}" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${desc}" />
        <title>${title}</title>
          <script src="assets/js/vendor/modernizr.min.js"></script>
          <script src="assets/js/vendor/jquery.min.js"></script>
          <script src="assets/js/vendor/bootstrap.min.js"></script>
          <script src="assets/js/vendor/popper.min.js"></script>
          <script src="assets/js/vendor/waypoint.min.js"></script>
          <script src="assets/js/vendor/wow.min.js"></script>
          <script src="assets/js/vendor/counterup.min.js"></script>
          <script src="assets/js/vendor/feather.min.js"></script>
          <script src="assets/js/vendor/sal.min.js"></script>
          <script src="assets/js/vendor/masonry.js"></script>
          <script src="assets/js/vendor/imageloaded.js"></script>
          <script src="assets/js/vendor/magnify.min.js"></script>
          <script src="assets/js/vendor/lightbox.js"></script>
          <script src="assets/js/vendor/slick.min.js"></script>
          <script src="assets/js/vendor/easypie.js"></script>
          <script src="assets/js/vendor/text-type.js"></script>
          <script src="assets/js/vendor/jquery.style.swicher.js"></script>
          <script src="assets/js/vendor/js.cookie.js"></script>
<!--           <script src="assets/js/main.js"></script>-->
      </head>
      <body>
        <div id="app">${dangerouslySkipEscape(appHtml)}</div>
      </body>
    </html>`

    return {
        documentHtml,
        pageContext: {
            // We can add some `pageContext` here, which is useful if we want to do page redirection https://vite-plugin-ssr.com/page-redirection
        },
    }
}
