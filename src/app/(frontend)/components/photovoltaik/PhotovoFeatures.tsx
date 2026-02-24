import React from 'react'
import { TPhotovoltaikData } from '../../types/photovoltaik'
import { getMedia } from '../../lib/media'

export default function PhotovoFeatures({ data }: { data: TPhotovoltaikData }) {
  if (!data) return null

  return (
    <div className="why-choose-us">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-title">
              <h2 className="text-anime">{data.title}</h2>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          {data.list.map((item, index) => {
            const image = getMedia(item.image, item.title)
            return (
              <div key={item.id || index} className="col-lg-4 col-md-6 mb-4">
                <div className="why-choose-item wow fadeInUp" data-wow-delay="0.25s">
                  <div className="why-choose-image">
                    <img src={image?.url} alt={image.alt} />
                  </div>
                  <div className="why-choose-content">
                    <div className="mb-3">
                      <span className="step-number">{String(index + 1).padStart(2, '0')}</span>
                    </div>
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
