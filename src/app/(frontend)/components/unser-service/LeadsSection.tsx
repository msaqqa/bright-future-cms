import { getMedia } from '../../lib/media'
import { TLeadsData } from '../../types/unser-service'

export default function LeadsSection({ data }: TLeadsData) {
  if (!data) return null
  const image = getMedia(data.image, data.title)

  return (
    <section className="service-features pt-5" id="leads">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="service-feature-image">
              <figure className="image-anime">
                <img src={image.url} alt={image.alt} />
              </figure>
            </div>
          </div>
          <div className="col-md-6">
            <div className="service-feature-content">
              <h2>{data.title}</h2>
              <p>{data.description}</p>
              <ul>
                {data.list?.map((item, i) => (
                  <li key={i}>
                    <h5>{item.title}</h5>
                    <p>{item.description}</p>
                  </li>
                ))}
              </ul>
              <p>{data.closingText}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
