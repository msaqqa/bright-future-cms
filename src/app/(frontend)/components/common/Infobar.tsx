import Image from 'next/image'
import { TInfobarData } from '../../types/home'
import { RichText } from '@payloadcms/richtext-lexical/react'
import { getMedia } from '../../lib/media'

export default function Infobar({ data }: { data: TInfobarData }) {
  if (!data) return null

  const image = getMedia(data.image, data.title)
  const icon = getMedia(data.icon, data.title)

  return (
    <div className="infobar">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="cta-box">
              <div className="row align-items-center">
                <div className="col-lg-4">
                  <div className="cta-image">
                    <figure className="image-anime">
                      <Image src={image.url} alt={image.alt} fill />
                    </figure>
                  </div>
                </div>

                <div className="col-lg-8">
                  <div className="cta-content">
                    <div className="phone-icon">
                      <figure>
                        <Image src={icon.url} alt={icon.alt} width={40} height={40} />
                      </figure>
                    </div>
                    <h3 className="text-anime">{data.title}</h3>
                    {data?.description && <RichText data={data.description as any} />}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
