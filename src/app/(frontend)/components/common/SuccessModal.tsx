import React from 'react'

function SuccessModal({
  setShowModal,
}: {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}) {
  return (
    <>
      <div className="modal-backdrop fade show"></div>
      <div className="modal fade show" style={{ display: 'block' }} tabIndex={-1} role="dialog">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content shadow-lg border-0">
            <div className="modal-header border-0 pb-0">
              <button
                type="button"
                className="btn-close"
                onClick={() => setShowModal(false)}
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body text-center py-4 px-5">
              <div className="mb-3">
                <i
                  className="fa-solid fa-circle-check text-success"
                  style={{ fontSize: '4rem' }}
                ></i>
              </div>
              <h3 className="fw-bold">Vielen Dank!</h3>
              <p className="text-muted">
                Ihre Nachricht wurde erfolgreich versendet. Wir werden uns in Kürze bei Ihnen
                melden.
              </p>
            </div>
            <div className="modal-footer border-0 justify-content-center pt-0 pb-4">
              <button
                type="button"
                className="btn btn-outline-success px-5 shadow-sm"
                onClick={() => {
                  setShowModal(false)
                }}
              >
                OK
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SuccessModal
