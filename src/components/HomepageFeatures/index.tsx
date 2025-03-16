import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: ReactNode;
  url?: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Explainable Predictive Process Analytics",
    Svg: require("@site/static/img/undraw_detailed-examination.svg").default,
    description: (
      <>
        Reveal the reasoning behind business process predictions to enhance
        trust and provide actionable insights for organisations.
      </>
    ),
  },
  {
    title: "Probabilistic & Causal Models for Responsible AI",
    Svg: require("@site/static/img/undraw_spreadsheets.svg").default,
    description: (
      <>
        Develop transparent AI with counterfactual explanations to make complex
        statistical models understandable to humans.
      </>
    ),
  },
  {
    title: "Persuasive Models for Explainable AI",
    Svg: require("@site/static/img/undraw_predictive-analytics.svg").default,
    description: (
      <>
        Create narrative-based explanations to transform technical AI outputs
        into compelling, trustworthy information.
      </>
    ),
  },
  {
    title: "Explainable Medical Diagnostic Systems",
    Svg: require("@site/static/img/undraw_medical-research.svg").default,
    description: (
      <>
        Build intuitive interfaces to translate AI-powered diagnoses into
        actionable insights for clinical decision-making.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--3")}>
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

export default function HomepageFeatures(): ReactNode {
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
