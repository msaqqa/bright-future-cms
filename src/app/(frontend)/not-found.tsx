import Image from 'next/image'
import Link from 'next/link'

export default async function NotFound() {
  return (
    <div className="page-404">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="page-not-found-box">
              <div className="not-found-image wow fadeInUp">
                <Image src="images/404-img.svg" alt="" />
              </div>
              <h2 className="text-anime">Oops! Sorry, we could not find the Page</h2>
              <Link href="/" className="btn-default wow fadeInUp" data-wow-delay="0.5s">
                Back To BrightFuture Energy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
