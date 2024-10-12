import React from 'react'
import { useTranslation } from 'react-i18next'
import { ptFlag, usaFlag } from '../../assets'
import Flag from './Flag'

const I18n = () => {
  const { i18n } = useTranslation()

  function handleChangeLanguage(language) {
    i18n.changeLanguage(language)
  }

  const selectedLanguage = i18n.language
  return (
    <div className="flags-container">
      <Flag
        image={ptFlag}
        isSelected={selectedLanguage === 'pt-PT'}
        onClick={() => handleChangeLanguage('pt-PT')}
      />
      <Flag
        image={usaFlag}
        isSelected={selectedLanguage === 'en-US'}
        onClick={() => handleChangeLanguage('en-US')}
      />
    </div>
  )
}

export default I18n