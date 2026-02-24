import React from 'react'
import { THeaderData } from '../../types/global'
import { getMedia } from '../../lib/media'

export default function PageHeader({ data }: { data: THeaderData }) {
  if (!data) return null

  const image = getMedia(data.backgroundImage, data.title)

  return (
    <div className="page-header parallaxie" style={{ backgroundImage: `url('${image.url}')` }}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="page-header-box">
              <h1 className="text-anime">{data.title}</h1>
              <nav className="wow fadeInUp" data-wow-delay="0.25s">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href={data.breadcrumbLink.url}>{data.breadcrumbLink.label}</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    {data.breadcrumbActive}
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
