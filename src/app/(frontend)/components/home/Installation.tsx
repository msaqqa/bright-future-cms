import Image from 'next/image'
import { TInstallationData } from '../../types/home'
import { getMedia } from '../../lib/media'

export default function Installation({ data }: { data: { items: TInstallationData } }) {
  if (!data) return null

  return (
    <div className="installation">
      <div className="container">
        <div className="row">
          {data?.items?.map((item) => {
            const image = getMedia(item.image, item.title)
            return (
              <div className="col-lg-6" key={item.id}>
                <div className="blog-item">
                  <div className="post-featured-image">
                    <figure className="image-anime">
                      <Image src={image.url} alt={image.alt} fill />
                    </figure>
                  </div>

                  <div className="post-item-body">
                    <a href={item.link}>
                      <h2>{item.title}</h2>
                      <h4>{item.subtitle}</h4>
                      <p>{item.description}</p>
                    </a>
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
