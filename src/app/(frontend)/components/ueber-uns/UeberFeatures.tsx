import { getMedia } from '../../lib/media'
import { TUeberFeaturesData } from '../../types/ueber-uns'

export default function UeberFeatures({ data }: { data: TUeberFeaturesData }) {
  if (!data) return null

  return (
    <div className="our-process" id="grundsaetze">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-title">
              <h2 className="text-anime">{data.title}</h2>
            </div>
          </div>
        </div>

        <div className="row">
          {data.list.map((item, index) => {
            const icon = getMedia(item.image, item.title)
            return (
              <div key={item.id || index} className="col-md-4">
                <div
                  className={`step-item ${(index + 1) % 2 == 0 ? 'step-1' : 'step-2'} wow fadeInUp`}
                  data-wow-delay="0.25s"
                >
                  <div className="step-header">
                    <div className="step-icon">
                      <figure>
                        <img src={icon.url} alt={icon.alt} />
                      </figure>
                      <span className="step-no">{String(index + 1).padStart(2, '0')}</span>
                    </div>
                  </div>

                  <div className="step-content">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
