import { getMedia } from '../../lib/media'
import { TUeberInfoData } from '../../types/ueber-uns'

export default function UeberInfo({ data }: { data: TUeberInfoData }) {
  if (!data) return null

  const firstImage = getMedia(data.firstImage, data.title)
  const secondImage = getMedia(data.secondImage, data.title)

  return (
    <>
      <div className="about-us">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-image">
                <div className="about-img-1">
                  <figure className="reveal image-anime">
                    <img src={firstImage.url} alt={firstImage.alt} />
                  </figure>
                </div>

                <div className="about-img-2">
                  <figure className="reveal image-anime">
                    <img src={secondImage.url} alt={secondImage.alt} />
                  </figure>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="section-title">
                <h2 className="text-anime">
                  <h2>{data.title}</h2>
                </h2>
              </div>

              <div className="about-content wow fadeInUp" data-wow-delay="0.25s">
                <p>{data.description}</p>
                <p>{data.descriptionSecondary}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
