'use client'

import React, { useState } from 'react'

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')

    // هنا مستقبلاً سنقوم بربطه مع API Route لإرسال الإيميل
    setTimeout(() => setStatus('success'), 1500)
  }

  return (
    <div className="solar-calculator">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-lg-5">
                <div className="section-title">
                  <h3>Schreiben Sie uns an!</h3>
                  <h2 className="text-anime">Kontaktformular</h2>
                </div>
              </div>

              <div className="col-lg-7">
                <div className="section-title mb-4">
                  <h2 className="text-anime">Nachricht senden:</h2>
                </div>

                <div className="solar-form">
                  <form onSubmit={handleSubmit} id="brightFutureForm">
                    <div className="row">
                      <div className="form-group col-md-6 mb-3">
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          placeholder="Ihr Name *"
                          required
                        />
                      </div>

                      <div className="form-group col-md-6 mb-3">
                        <input
                          type="email"
                          name="email"
                          className="form-control"
                          placeholder="Ihre Email *"
                          required
                        />
                      </div>

                      <div className="form-group col-md-6 mb-3">
                        <input
                          type="text"
                          name="phone"
                          className="form-control"
                          placeholder="Ihre Telefonnummer *"
                          required
                        />
                      </div>

                      <div className="form-group col-md-6 mb-3">
                        <select name="category" className="form-control" required>
                          <option value="Beratungstermin">Beratungstermin</option>
                          <option value="Strom&Gas">Strom & Gas</option>
                          <option value="Info-Veranstaltung">Info-Veranstaltung</option>
                        </select>
                      </div>

                      <div className="form-group col-md-12 mb-4">
                        <textarea
                          name="msg"
                          className="form-control"
                          rows={4}
                          placeholder="Kommentar"
                          required
                        ></textarea>
                      </div>

                      <div className="col-md-12">
                        <button
                          type="submit"
                          className="btn-default"
                          disabled={status === 'sending'}
                        >
                          {status === 'sending' ? 'Wird gesendet...' : 'Nachricht Senden'}
                        </button>

                        {status === 'success' && (
                          <div className="alert alert-success mt-3">
                            Vielen Dank! Ihre Nachricht wurde erfolgreich versendet.
                          </div>
                        )}
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
