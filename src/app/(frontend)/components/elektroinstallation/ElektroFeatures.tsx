import React from 'react'
import { getMedia } from '../../lib/media'
import { TFeatureItem, TServiceSectionData } from '../../types/elektroinstallation'

export default function ElektroFeatures({ data }: { data: TServiceSectionData }) {
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

              <div className="service-feature-details">
                <ul>
                  {data.list.map((item: TFeatureItem) => (
                    <li key={item.id}>
                      <h5>{item.title}</h5>
                      <p>{item.description}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <h5>{data.closingText}</h5>
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
