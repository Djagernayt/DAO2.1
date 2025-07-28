'use client'

import { useState } from 'react'
import { AccentBtn } from '@/components/ui/AccentBtn'

interface FormItsProps {
  title?: string
  t: any
}

export function FormIts({ title, t }: FormItsProps) {
  const [contact, setContact] = useState('')
  const [message, setMessage] = useState('')
  const [consent, setConsent] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [contactError, setContactError] = useState('')
  const [showSuccess, setShowSuccess] = useState(false)

  const validateContact = (value: string) => {
    if (!value) {
      return t('contact_required') || 'Contact is required'
    }

    const isEmail = value.includes('@')
    const isPhone = /^[\d\s+\-()]+$/.test(value)

    if (!isEmail && !isPhone && !value.includes('t.me')) {
      return t('invalid_contact') || 'Please enter a valid email, phone, or telegram'
    }

    return ''
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const contactValidationError = validateContact(contact)
    if (contactValidationError) {
      setContactError(contactValidationError)
      return
    }

    if (!consent) {
      alert(t('consent_required') || 'Please accept the privacy policy')
      return
    }

    setIsSubmitting(true)
    
    // Заглушка - имитация отправки
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Очистка формы после "отправки"
      setContact('')
      setMessage('')
      setConsent(false)
      setContactError('')
      setShowSuccess(true)
      
      setTimeout(() => setShowSuccess(false), 3000)
    } catch (error) {
      console.error('Failed to send form:', error)
      alert(t('form_error') || 'Failed to send message')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="mb-10 lg:mb-30 px-5 lg:px-0">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="col-span-1 flex flex-col gap-5 relative">
          <h2 className="text-black text-[32px] md:text-[52px] font-bold leading-tight relative z-10">
            {title || t('index_quest_header_default')}
          </h2>
          <p className="text-black text-lg md:text-xl font-normal leading-tight relative z-10">
            {t('index_quest_d_1')}
          </p>
          <img
            src="/grid_bg.png"
            className="absolute -top-8 md:-top-32 z-0 opacity-20"
            alt="Background"
          />
        </div>
        
        <form className="col-span-1 relative z-10" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-lg font-medium mb-2"
              htmlFor="contact"
            >
              {t('index_quest_placeholder_email')}
            </label>
            <input
              type="text"
              id="contact"
              name="contact"
              value={contact}
              onChange={(e) => {
                setContact(e.target.value)
                setContactError('')
              }}
              onBlur={(e) => setContactError(validateContact(e.target.value))}
              className={`w-full px-3 py-4 border ${
                contactError ? 'border-red-500' : 'border-gray-300'
              } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
              placeholder={t('your_comment_q3')}
              required
            />
            {contactError && (
              <p className="mt-1 text-sm text-red-500">{contactError}</p>
            )}
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-lg font-medium mb-2"
              htmlFor="comment"
            >
              {t('index_quest_placeholder_comment')}
            </label>
            <textarea
              id="comment"
              name="comment"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder={t('your_comment_q2')}
              required
            />
          </div>

          <div className="mb-6">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="consent"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="form-checkbox h-4 w-4 text-blue-600 rounded"
                required
              />
              <span className="ml-2 text-sm text-gray-600">
                {t('index_quest_d_2')}
              </span>
            </label>
          </div>

          <AccentBtn
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3"
          >
            {isSubmitting ? t('sending') || 'Sending...' : t('index_quest_btn')}
          </AccentBtn>

          {showSuccess && (
            <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-md">
              <p className="text-green-700">
                {t('index_quest_message_sent') || 'Message sent successfully!'}
              </p>
            </div>
          )}
        </form>
      </div>
    </section>
  )
}