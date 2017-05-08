import { GOOGLE_ANALYTICS_ID } from '../../../config/env';

const createAppScript = () => '<script type="text/javascript" charset="utf-8" src="/assets/app.js"></script>';

const createVerifyTag = () => '<meta name="google-site-verification" content="Y60EkavDLIGutTYy64UhQoGHD2at_Dd_Sa19UXxXu3k" />';

const createTrackingScript = () => GOOGLE_ANALYTICS_ID ? createAnalyticsSnippet(GOOGLE_ANALYTICS_ID) : '';

const createAnalyticsSnippet = id =>
  `<script>
window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
ga('create', '${id}', 'auto');
ga('send', 'pageview');
</script>
<script async src='https://www.google-analytics.com/analytics.js'></script>`;

const createStylesheets = () => '<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto+Condensed" />';

export { createAppScript, createTrackingScript, createStylesheets, createVerifyTag };
