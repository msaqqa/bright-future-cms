import React from 'react'

interface TopbarProps {
  email: string
  phone: string
  socialLinks?: {
    platform: string
    url: string
  }[]
}

export default function Topbar({ email, phone, socialLinks }: TopbarProps) {
  return (
    <div className="topbar wow fadeInUp">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="topbar-contact-info">
              <ul>
                <li>
                  <a href={`mailto:${email}`}>
                    <i className="fa-solid fa-envelope"></i> {email}
                  </a>
                </li>
                <li>
                  <a href={`tel:${phone}`}>
                    <i className="fa-solid fa-phone"></i> {phone}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-4">
            <div className="header-social-links">
              <ul>
                {socialLinks?.map((link, index) => (
                  <li key={index}>
                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                      <i
                        className={`fa-brands fa-${link.platform === 'facebook' ? 'facebook-f' : link.platform === 'linkedin' ? 'linkedin-in' : link.platform}`}
                      ></i>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
