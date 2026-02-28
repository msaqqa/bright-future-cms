'use client'

import SuccessModal from '../common/SuccessModal'
import { useContactForm } from '../../lib/useContactForm'

export default function ContactForm() {
  const { status, showModal, setShowModal, handleSubmit } = useContactForm()

  return (
    <div className="solar-form">
      <form id="brightFutureForm" onSubmit={handleSubmit}>
        <div className="row">
          <div className="form-group col-md-6 mb-4">
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Ihr Name *"
              required
            />
          </div>
          <div className="form-group col-md-6 mb-4">
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Ihre Email *"
              required
            />
          </div>
          <div className="form-group col-md-6 mb-4">
            <input
              type="text"
              name="phone"
              className="form-control"
              placeholder="Ihre Telefonnummer *"
              required
            />
          </div>
          <div className="form-group col-md-6 mb-4">
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
            />
          </div>
          <div className="col-md-12 text-center">
            <button
              type="submit"
              className="btn-default"
              id="formBtn"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Wird gesendet...' : 'Nachricht Senden'}
            </button>

            {/* Success Modal */}
            {showModal && <SuccessModal setShowModal={setShowModal} />}
          </div>
        </div>
      </form>
    </div>
  )
}
