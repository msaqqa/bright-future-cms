import Image from 'next/image'
import React from 'react'

interface Button {
  label: string
  link: string
}

interface Media {
  url: string
  alt: string
}

type TFAQData = {
  title: string
  description?: string
  button?: Button
  image?: Media
}

export default function FAQ({ data }: { data: TFAQData }) {
  if (!data) return null

  return (
    <div className="faq-section">
      <div className="container">
        <div className="d-md-flex align-items-center justify-content-center">
          {data.image && (
            <div className="mb-3 m-lg-0">
              <Image src={data.image.url} alt={data.image.alt} height={80} width={80} />
            </div>
          )}

          <div className="section-title mb-0 ms-md-5">
            <h2 className="text-anime mb-3">{data.title || 'Häufig gestellte Fragen'}</h2>
            <p>
              {data.description ||
                'In unserem Abschnitt der häufig gestellten Fragen informieren wir Sie...'}
            </p>
            {data.button && (
              <a href={data.button.link} className="btn-default btn-border">
                {data.button.label}
                <i className="fa-regular fa-circle-right ms-2"></i>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
