import type { ReactNode } from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import BlogCard from '../components/BlogCard';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}


export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main className="container margin-vert--xl">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
          <BlogCard
            title="Testing our cansat"
            description="On Tuesday, 20. 6. our team visited the Aerodium vertical wind tunnel in Logatec, who have kindly allowed us to test our CanSat in their facility."
            date="June 22, 2023"
            link="/blog/testing-our-cansat"
          />
          <BlogCard
            title="Reports"
            description="This post contains the 2 main documents we needed to submit to the ESA before the launch campaign."
            date="June 11, 2023"
            link="/blog/reports"
          />
        </div>
      </main>

    </Layout>
  );
}
