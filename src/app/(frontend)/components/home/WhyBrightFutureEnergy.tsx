import React from 'react'
import Image from 'next/image'
import { WhyBrightFutureEnergyData } from '../../types/home'
import { getMedia } from '../../lib/media'

export default function WhyBrightFutureEnergy({ data }: WhyBrightFutureEnergyData) {
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

        <div className="row">
          {data.items?.map((item, index) => {
            const image = getMedia(item.image, item.title)
            const icon = getMedia(item.icon, item.title)
            return (
              <div key={index} className="col-lg-4 col-md-6">
                <div
                  className="why-choose-item wow fadeInUp"
                  data-wow-delay={`${(index + 1) * 0.25}s`}
                >
                  {item.image && (
                    <div className="why-choose-image">
                      <Image src={image.url} alt={image.alt} width={400} height={250} />
                    </div>
                  )}

                  <div className="why-choose-content">
                    <div className="why-choose-icon">
                      {item.icon && <Image src={icon.url} alt={icon.alt} width={50} height={50} />}
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
