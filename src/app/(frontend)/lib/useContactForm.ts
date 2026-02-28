import { useState } from 'react'

export const useContactForm = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [showModal, setShowModal] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')

    const form = e.currentTarget
    const formData = new FormData(form)
    const data = Object.fromEntries(formData.entries())

    try {
      const response = await fetch('/api/contact-requests', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setStatus('success')
        setShowModal(true)
        form.reset()
      } else {
        setStatus('error')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setStatus('error')
    }
  }

  return {
    status,
    setStatus,
    showModal,
    setShowModal,
    handleSubmit,
  }
}
