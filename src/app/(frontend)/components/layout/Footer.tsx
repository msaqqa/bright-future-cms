import Image from 'next/image'
import { TFooterData } from '../../types/layout'
import { getMedia } from '../../lib/media'

export default function Footer({ data }: { data: TFooterData }) {
  if (!data) return null

  const logoImage = getMedia(data.footerLogo)

  return (
    <footer className="main-footer">
      {/* Contact Footer */}
      <div className="footer-contact">
        <div className="container">
          <div className="row">
            {data.contactItems?.map((item, index) => {
              const icon = getMedia(item.icon, item.title)
              return (
                <div className="col-lg-4">
                  <div className="footer-contact-box wow fadeInUp" data-wow-delay="0.25s">
                    <div className="contact-icon-box">
                      <Image src={icon.url} alt={icon.alt} width={40} height={40} priority />
                    </div>
                    <div className="footer-contact-info">
                      <h3>{item.title}</h3>
                      <p>
                        <a href={item.details.link}>{item.details.label}</a>
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
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
