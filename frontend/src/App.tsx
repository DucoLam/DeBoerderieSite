import { useState } from 'react'
import { useTranslation } from 'react-i18next'

function App() {
  const { t, i18n } = useTranslation()
  const [language, setLanguage] = useState('en')

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
    setLanguage(lng)
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-gray-900">
                {t('common.appName')}
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => changeLanguage('en')}
                className={`px-3 py-1 rounded ${
                  language === 'en' ? 'bg-blue-500 text-white' : 'bg-gray-200'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => changeLanguage('nl')}
                className={`px-3 py-1 rounded ${
                  language === 'nl' ? 'bg-blue-500 text-white' : 'bg-gray-200'
                }`}
              >
                NL
              </button>
            </div>
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto py-6 px-4">
        <h2 className="text-2xl font-bold mb-4">{t('welcome.title')}</h2>
        <p className="text-gray-700">{t('welcome.description')}</p>
      </main>
    </div>
  )
}

export default App
