import { getMedia } from '../../lib/media'
import { TInfoData } from '../../types/global'

export default function PageInfo({ data }: { data: TInfoData }) {
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
              <p>{data.descriptionSecondary}</p>
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
