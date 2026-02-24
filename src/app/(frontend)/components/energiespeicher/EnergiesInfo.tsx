import { getMedia } from '../../lib/media'
import { TEnergiespeicherData } from '../../types/energiespeicher'

export default function EnergiesInfo({ data }: { data: TEnergiespeicherData }) {
  if (!data) return null

  const image = getMedia(data.image, data.title)

  return (
    <div className="why-choose-us">
      <div className="container">
        <div className="row service-features">
          <div className="col-md-6">
            <div className="service-feature-content">
              <h2>{data.title}</h2>
              <p>{data.description}</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="service-feature-image">
              <figure className="image-anime">
                <img src={image.url} alt={image.alt} />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
