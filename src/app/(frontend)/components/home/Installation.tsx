import Image from 'next/image'

interface Media {
  url: string
  alt: string
}

type TItem = {
  image: Media
  title: string
  subtitle?: string
  description?: string
  link?: string
  id?: string
}

export default function Installation({ data }: { data: { items: TItem[] } }) {
  if (!data) return null
  return (
    <div className="installation">
      <div className="container">
        <div className="row">
          {data?.items?.map((item: TItem, index: number) => (
            <div className="col-lg-6" key={index}>
              <div className="blog-item wow fadeInUp">
                <div className="post-featured-image">
                  <figure className="image-anime">
                    <Image src={item.image?.url} alt={item.title} fill />
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
          ))}
        </div>
      </div>
    </div>
  )
}
