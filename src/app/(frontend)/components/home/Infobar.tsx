import Image from 'next/image'

interface Media {
  url: string
  alt: string
}

type InfobarData = {
  title: string
  description?: string
  image: Media
  icon: Media
}

export default function Infobar({ data }: { data: InfobarData }) {
  if (!data) return null

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
                      <Image src={data.image.url} alt={data.image.alt} fill />
                    </figure>
                  </div>
                </div>

                <div className="col-lg-8">
                  <div className="cta-content">
                    <div className="phone-icon">
                      <figure>
                        <Image src={data.icon.url} alt={data.icon.alt} width={40} height={40} />
                      </figure>
                    </div>
                    <h3 className="text-anime">{data.title}</h3>
                    <p className="wow fadeInUp" data-wow-delay="0.25s">
                      {data.description}
                      <a className="mailto" href="tel:+4915906421718">
                        +49 1590 6421718
                      </a>
                      an oder senden Sie uns eine E-Mail an
                      <a className="mailto" href="mailto:info@bf-energy.de">
                        info@bf-energy.de
                      </a>
                      . Wir stehen Ihnen jederzeit zur Verfügung.
                    </p>
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
