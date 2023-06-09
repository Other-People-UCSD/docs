import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Pink-Currents Docs',
    Svg: require('@site/static/img/pink-currents-banner.svg').default,
    description: (
      <>
        Documentation for the Pink-Currents repository.
      </>
    ),
  },
  {
    title: 'Calla-Lily Docs',
    Svg: require('@site/static/img/calla-lily-banner.svg').default,
    description: (
      <>
        Documentation for the Pink-Currents repository.
      </>
    ),
  },
  {
    title: 'Historical Blog',
    Svg: require('@site/static/img/opm-pen-brush.svg').default,
    description: (
      <>
        Featuring a blog for all the amazing things Other People Magazine has achieved! 
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
