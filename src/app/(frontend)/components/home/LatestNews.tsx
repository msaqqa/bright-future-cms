import Image from 'next/image'
import { TLatestNewsItem } from '../../types/home'
import { getMedia } from '../../lib/media'

export default function LatestNews({ data }: { data: TLatestNewsItem[] }) {
  if (!data) return null

  return (
    <div className="latest-news">
      <div className="container">
        <div className="row">
          {data?.map((item, index) => {
            const image = getMedia(item.image, item.title)
            return (
              <div key={index} className="col-lg-4">
                <div className="blog-item wow fadeInUp" data-wow-delay={`${(index + 1) * 0.25}s`}>
                  <div className="post-featured-image">
                    <figure className="image-anime">
                      <Image src={image.url} alt={image.alt} fill />
                    </figure>
                  </div>

                  <div className="post-item-body">
                    <h2>
                      <a
                        href={item.link}
                        className="d-flex justify-content-between align-items-center"
                      >
                        <span>{item.title}</span>
                        <span className="step-number">{index + 1}</span>
                      </a>
                    </h2>
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
