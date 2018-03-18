import * as http from 'http'

export function getUrlFromNodeRequest(request: http.IncomingMessage) {
  const secure =
    (request.connection && (request.connection as any).encrypted) ||
    (request.headers && request.headers['x-forwarded-proto'] === 'https') ||
    false
  return 'http' + (secure ? 's' : '') + '://' + (request.headers ? request.headers.host : 'localhost') + request.url
}

export function getUrlFromWindow(window: Window) {
  const origin = window.location.origin
    ? window.location.origin
    : window.location.protocol + '//' + window.location.host

  const url = [origin.replace(/\/$/, ''), window.location.pathname.replace(/^\//, '')]

  return url.join('/')
}
