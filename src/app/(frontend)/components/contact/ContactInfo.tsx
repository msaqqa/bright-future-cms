import { getMedia } from '../../lib/media'
import { TContactInfoData } from '../../types/contact'

export default function ContactInfo({ data }: TContactInfoData) {
  if (!data) return null

  return (
    <section className="contact-information">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-title">
              <h2 className="text-anime">{data.title}</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {data.contactItems?.map((item, index) => {
            const bgImage = getMedia(item.image)
            const iconImage = getMedia(item.icon)

            return (
              <div key={index} className="col-lg-3 col-md-6">
                <div className="contact-info-item">
                  <div className="contact-image">
                    <figure className="image-anime">
                      <img src={bgImage.url} alt={item.title} />
                    </figure>
                  </div>
                  <div className="contact-info-content">
                    <h3>{item.title}</h3>
                    <p dangerouslySetInnerHTML={{ __html: item.content }} />
                  </div>
                  <div className="contact-icon">
                    <img src={iconImage.url} alt={item.title} />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
