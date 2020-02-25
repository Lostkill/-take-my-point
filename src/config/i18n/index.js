import moment from 'moment-timezone'

import 'moment/locale/es'
import 'moment/locale/pt-br'

import en from './locales/en-us'
import pt from './locales/pt-br'

let locale = 'en'

/**
 * Set the application locale
 * @function setLocale
 * @param {pt | en} newLocale - The new locale to be set globally
 */
function setLocale (newLocale) {
  /**
   * @todo Add verification to no re-create moment pt locale needlessly
   */
  const parsedNewLocale = newLocale ? newLocale.substring(0, 2) : 'pt'

  switch (parsedNewLocale) {
    case 'pt':
      moment.locale('pt-br')
      locale = parsedNewLocale
      break
    case 'en':
      locale = parsedNewLocale
      break
    default:
      moment.locale('pt-br')
      locale = 'pt'
  }
}

/**
 * Get the global application locale
 * @function getLocale
 */
function getLocale () {
  return locale
}

/**
 * Get the translations file to the current locale
 * @function getTranslationsForLocale
 */
function getTranslationsForLocale () {
  switch (locale) {
    case 'pt':
      return pt
    case 'en':
      return en
    default:
      return pt
  }
}

/**
 * Translate a given key into a string, and use params
 * to replace variables
 * @function translate
 * @param {string} key - The string id to be fetched into translation file
 * @param {object} params - The params to replace into the final string
 */
function translate (key, params) {
  const tokens = key.split('.')
  let iterator = getTranslationsForLocale()

  tokens.forEach(token => {
    if (iterator != null) {
      iterator = iterator[token]
    }
  })

  if (typeof iterator === 'string') {
    return params == null ? iterator : replaceParams(iterator, params)
  }

  return key
}

/**
 * Auxiliar function to replace the given
 * params into the final string.
 *
 * Param Syntax: {{ParamName}}
 *
 * @function replaceParams
 * @param {string} string - The already translated string
 * @param {object} params - The params to replace into the given string
 */
function replaceParams (string, params) {
  const keys = Object.keys(params)
  let parsed = string

  keys.forEach(key => {
    parsed = parsed.split(`{{${key}}}`).join(params[key])
  })

  return parsed
}

export default {
  getLocale,
  setLocale,
  getTranslationsForLocale,
  translate
}
