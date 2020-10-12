const common = require('./common')

const locationReplacement = (str) => {
  window.history.pushState({}, 'Test Title', str);
}

describe('getParametrValueFromURI function', () => {
  test('should return null without params', () => {
    locationReplacement('')
    expect(common.getParametrValueFromURI('timeout')).toBeNull()
  })
  test('should return null with params', () => {
    locationReplacement('?notimeout=123&qwerty&asd=qwerty')
    expect(common.getParametrValueFromURI('timeout')).toBeNull()
    locationReplacement('?timeout&qwerty&asd=qwerty')
    expect(common.getParametrValueFromURI('timeout')).toBeNull()
  })
  test('should return value', () => {
    locationReplacement('?timeout=2000&qwerty&asd=qwerty')
    expect(common.getParametrValueFromURI('timeout')).toBe('2000')
  })
})