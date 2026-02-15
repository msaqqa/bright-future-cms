import React from 'react'
import Link from 'next/link'

interface Media {
  url: string
  alt: string
}

interface Button {
  label: string
  link: string
}

interface HeroProps {
  data: {
    welcomeText?: string
    mainTitle: string
    description?: string
    backgroundImage?: string | Media
    primaryButton?: Button
    secondaryButton?: Button
  }
}

export default function Hero({ data }: HeroProps) {
  if (!data) return null
  const bgUrl =
    typeof data.backgroundImage === 'object' ? data.backgroundImage?.url : '/images/hero.jpg'

  return (
    <div
      className="hero parallaxie"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${bgUrl || ''})`,
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div className="hero-content">
              <div className="section-title">
                {data.welcomeText && <h3 className="wow fadeInUp">{data.welcomeText}</h3>}
                <h1 className="text-anime text-white">{data.mainTitle}</h1>
              </div>

              {data.description && (
                <div className="hero-content-body wow fadeInUp" data-wow-delay="0.5s">
                  <p>{data.description}</p>
                </div>
              )}

              <div className="hero-content-footer wow fadeInUp" data-wow-delay="0.75s">
                {data.primaryButton?.label && data.primaryButton?.link && (
                  <Link href={data.primaryButton.link} className="btn-default">
                    {data.primaryButton.label}
                  </Link>
                )}

                {data.secondaryButton?.label && data.secondaryButton?.link && (
                  <Link href={data.secondaryButton.link} className="btn-default btn-border">
                    {data.secondaryButton.label}
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
