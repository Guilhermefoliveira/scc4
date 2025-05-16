import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

/**
 * Lista de recursos a serem exibidos na página inicial
 * @type {Array<{title: string, Svg: React.ComponentType, description: string}>}
 */
const FEATURE_LIST = [
  {
    title: 'Fácil de Usar',
    Svg: require('@site/static/img/heavybox.svg').default,
    description: 'Entregamos tecnologia para simplificar a sua logística.',
  },
  {
    title: 'Concentre-se no que importa',
    Svg: require('@site/static/img/deliveries.svg').default,
    description: 'A SCC4 é especializada em soluções de tecnologia para área de logística, em especial para agências franqueadas dos correios.',
  },
  {
    title: 'Conheça nossas Soluções',
    Svg: require('@site/static/img/dev.svg').default,
    description: 'Nossas soluções aumentam o seu desempenho trazendo mais produtividade e economia de recursos.',
  },
];

/**
 * Componente que exibe um recurso individual com seu ícone, título e descrição
 * @param {Object} props - Propriedades do componente
 * @param {React.ComponentType} props.Svg - Componente SVG do ícone do recurso
 * @param {string} props.title - Título do recurso
 * @param {string} props.description - Descrição do recurso
 * @returns {JSX.Element} O componente de recurso
 */
function Feature({ Svg, title, description }) {
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

/**
 * Componente que exibe a seção de recursos da página inicial
 * @returns {JSX.Element} O componente de recursos da página inicial
 */
export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FEATURE_LIST.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
