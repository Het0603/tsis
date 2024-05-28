/*
 * During local development, API requests are proxied to avoid CORS issues.
 * Remove the special proxy paths when logging HTTP responses.
 *
 * See vite.config.js and getProxyPath.js for proxy definitions.
 */

export default function rewriteProxyPath(str) {
  return str
    .replace(/\/__local/, "")
    .replace(/\/__dev/, "")
    .replace(/\/__stg/, "")
    .replace(/\/__demo/, "");
}
