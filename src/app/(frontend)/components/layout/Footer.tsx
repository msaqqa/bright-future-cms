import Image from 'next/image'
import { TFooterData } from '../../types/layout'
import { getMedia } from '../../lib/media'

export default function Footer({ data }: { data: TFooterData }) {
  if (!data) return null

  const logoImage = getMedia(data.footerLogo as any)

  return (
    <footer className="main-footer">
      {/* Contact Footer */}
      <div className="footer-contact">
        <div className="container">
          <div className="row">
            {/* Email Box */}
            <div className="col-lg-4">
              <div className="footer-contact-box wow fadeInUp" data-wow-delay="0.25s">
                <div className="contact-icon-box">
                  <Image src="/images/icon-email.svg" alt="Email" width={40} height={40} priority />
                </div>
                <div className="footer-contact-info">
                  <h3>Hilfe & Kontakt per E-Mail</h3>
                  <p>
                    <a href={`mailto:${data.email}`}>{data.email}</a>
                  </p>
                </div>
              </div>
            </div>

            {/* Phone Box */}
            <div className="col-lg-4">
              <div className="footer-contact-box wow fadeInUp" data-wow-delay="0.5s">
                <div className="contact-icon-box">
                  <Image src="/images/icon-phone.svg" alt="Phone" width={40} height={40} priority />
                </div>
                <div className="footer-contact-info">
                  <h3>Kundenservice</h3>
                  <p>
                    <a href={`tel:${data.phone}`}>{data.phone}</a>
                  </p>
                </div>
              </div>
            </div>

            {/* Location Box */}
            <div className="col-lg-4">
              <div className="footer-contact-box wow fadeInUp" data-wow-delay="0.75s">
                <div className="contact-icon-box">
                  <Image
                    src="/images/icon-location.svg"
                    alt="Location"
                    width={40}
                    height={40}
                    priority
                  />
                </div>
                <div className="footer-contact-info">
                  <h3>Unser Standort</h3>
                  <p>
                    <a href={data.locationUrl} target="_blank" rel="noopener noreferrer">
                      {data.location}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="mega-footer">
              <div className="row">
                <div className="col-lg-3 col-md-12">
                  <div className="footer-about">
                    <figure>
                      <Image src={logoImage.url} alt={logoImage.alt} fill priority />
                    </figure>
                    <p>{data.aboutText}</p>
                  </div>

                  <div className="footer-social-links">
                    <ul>
                      {data.socialLinks?.map((social, i) => (
                        <li key={i}>
                          <a href={social.url} target="_blank">
                            <i
                              className={`fa-brands fa-${social.platform === 'twitter' ? 'x-twitter' : social.platform}`}
                            ></i>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="col-lg-9 col-md-12 row">
                  {data.columns?.map((col, index) => (
                    <div className="col-md-3" key={index}>
                      <div className="footer-links">
                        <h2>{col.title}</h2>
                        <ul>
                          {col.links?.map((link, linkIndex) => (
                            <li key={linkIndex}>
                              <a href={link.url}>{link.label}</a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Copyright Footer */}
            <div className="footer-copyright">
              <div className="row">
                <div className="col-md-12">
                  <div className="footer-copyright-text">
                    <p>{data.copyrightText}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
