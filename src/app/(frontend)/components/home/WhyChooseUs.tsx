import React from 'react'
import Image from 'next/image'

interface Media {
  url: string
  alt: string
}

interface WhyChooseItem {
  title: string
  description?: string
  image?: Media
  icon: Media
}

interface WhyChooseUsProps {
  data: {
    title: string
    items?: WhyChooseItem[]
  }
}

export default function WhyChooseUs({ data }: WhyChooseUsProps) {
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
          {data.items?.map((item, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div
                className="why-choose-item wow fadeInUp"
                data-wow-delay={`${(index + 1) * 0.25}s`}
              >
                <div className="why-choose-image">
                  {item.image?.url && (
                    <Image
                      src={item.image.url}
                      alt={item.title || 'Feature Image'}
                      width={400}
                      height={250}
                    />
                  )}
                </div>

                <div className="why-choose-content">
                  <div className="why-choose-icon">
                    {item.icon?.url && (
                      <Image src={item.icon.url} alt="icon" width={50} height={50} />
                    )}
                  </div>

                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
