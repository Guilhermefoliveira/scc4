import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Fácil de usar',
    Svg: require('@site/static/img/heavybox.svg').default,
    description: (
      <>
        Entregamos tecnologia para simplificar a sua logística.
      </>
    ),
  },
  {
    title: 'Concentre-se no que importa',
    Svg: require('@site/static/img/deliveries.svg').default,
    description: (
      <>
        A SCC4 é especializada em soluções de tecnologia para área de logística, em especial para agências franqueadas dos correios.
        .
      </>
    ),
  },
  {
    title: 'Conheça nossas Soluções',
    Svg: require('@site/static/img/dev.svg').default,
    description: (
      <>
        Nossas soluções aumentam o seu desempenho trazendo mais produtividade e economia de recursos.

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
        <Heading as="h3">{title}</Heading>
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
