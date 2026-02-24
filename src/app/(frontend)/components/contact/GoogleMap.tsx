import { TMapData } from '../../types/contact'
import ContactForm from './ContactForm'

export default function GoogleMap({ data }: TMapData) {
  if (!data || !data.mapUrl) return null

  return (
    <section className="google-map-form">
      <div className="google-map">
        <iframe
          src={data.mapUrl}
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      {/* solar-form */}
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-6">
            <div className="contact-form-box">
              <div className="section-title">
                <h2 className="text-anime">Nachricht senden:</h2>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
