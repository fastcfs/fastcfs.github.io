import React from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from './styles.module.css'

const features = [
  {
    title: 'Easy to Press',
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        FastCFS is a high performance distributed file storage system.
      </>
    ),
  },
  {
    title: 'Media on What Matters',
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        FastCFS is a high performance distributed file storage system.
      </>
    ),
  },
  {
    title: 'Press and Media',
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        FastCFS is a high performance distributed file storage system.
      </>
    ),
  },
]

function Feature ({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl)
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

function Home () {
  const context = useDocusaurusContext()
  const { siteConfig = {} } = context
  return (
    <Layout
      title='Press and Media'
      description="Read about the most recent press releases, release launches, and open source community announcements.">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">For inquiries, please contact us at:</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('/press')}>
              github@fastcfs.io
            </Link>
          </div>
          <br /><br />
          <p className="hero__subtitle">We can’t wait to see what you build.</p>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key = {idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  )
}

export default Home
