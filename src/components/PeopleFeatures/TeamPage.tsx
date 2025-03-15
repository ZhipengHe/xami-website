import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import authors from '../../data/members';
import { OccupationSection, Author } from '../../data/members';
import SocialIcon, { SocialLink } from './SocialIcons';
import styles from './styles.module.css';

interface SocialLinks {
  github?: string;
  twitter?: string;
  linkedin?: string;
  instagram?: string;
  website?: string;
  email?: string;
  scholar?: string;
  x?: string;
  bluesky?: string;
  threads?: string;
  mastodon?: string;
  youtube?: string;
  twitch?: string;
  microsoft?: string;
  cv?: string;
  [key: string]: string | undefined;
}

interface TeamProfileCardProps {
  name: string;
  title: string;
  occupation: OccupationSection;
  imageUrl: string;
  url: string;
  idx?: number;
  links: SocialLinks;
  as?: 'h1' | 'h2' | 'h3' | undefined;
}

function MaybeLink({href, children, className}: {href?: string; children: React.ReactNode; className?: string}) {
  if (href) {
    return <Link href={href} className={className}>{children}</Link>;
  }
  return <>{children}</>;
}

function AuthorName({name, as}: {name: string; as?: 'h1' | 'h2' | 'h3'}) {
  if (!as) {
    return <span className={styles.authorName}>{name}</span>;
  } else {
    return (
      <Heading as={as} className={styles.authorName}>
        {name}
      </Heading>
    );
  }
}

function AuthorTitle({title}: {title: string}) {
  return (
    <small className={styles.authorTitle} title={title}>
      {title}
    </small>
  );
}


const TeamProfileCard: React.FC<TeamProfileCardProps> = ({
  name, 
  title, 
  occupation,
  imageUrl, 
  url,
  idx,
  links,
  as
}) => {
  const link = url || undefined;
  
  as = as || 'h2';

  // Combine all social links for the socials component
  const socials = {
    ...(links || {}),
  };

  return (
    <div className={clsx('avatar margin-bottom--sm', styles[`author-as-${as}`])}>
      {imageUrl && (
        <MaybeLink href={link} className="avatar__photo-link">
          <img
            className={clsx('avatar__photo', styles.authorImage)}
            src={imageUrl}
            alt={name}
          />
        </MaybeLink>
      )}

      {(name || title) && (
        <div className={clsx('avatar__intro', styles.authorDetails)}>
          <div className="avatar__name">
            {name && (
              <MaybeLink href={link}>
                <AuthorName name={name} as={as} />
              </MaybeLink>
            )}
          </div>
          {!!title && <AuthorTitle title={title} />}

          {/* Social Links */}
          <div className={styles.authorSocials}>
            {Object.entries(socials)
              .filter(([_, value]) => Boolean(value))
              .map(([platform, link]) => (
                <SocialLink 
                  key={platform}
                  platform={platform}
                  link={link as string}
                  className={styles.authorSocialLink}
                />
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

const TeamPage: React.FC = () => {
  const getAuthorSection = (title: string, occupationSection: OccupationSection) => {
    const authorsInSection = Object.values(authors)
      .filter(author => author.occupation === occupationSection && author.selected === true)
      .sort((a, b) => a.idx - b.idx);

    if (authorsInSection.length > 0) {
      return (
        <section key={title}>
          <h1>{title}</h1>
          <div className={styles.teamGrid}>
            {authorsInSection.map((author) => (
              <TeamProfileCard
                key={author.url}
                name={author.name}
                as='h2'
                title={author.title}
                occupation={author.occupation}
                imageUrl={author.image_url}
                url={author.url}
                idx={author.idx}
                links={{
                  email: author.email ? `mailto:${author.email}` : undefined,
                  github: author.github,
                  twitter: author.twitter,
                  linkedin: author.linkedin,
                  instagram: author.instagram,
                  x: author.x,
                  bluesky: author.bluesky,
                  threads: author.threads,
                  mastodon: author.mastodon,
                  youtube: author.youtube,
                  twitch: author.twitch,
                  scholar: author.scholar,
                  microsoft: author.microsoft,
                  cv: author.cv,
                }}
              />
            ))}
          </div>
        </section>
      );
    }
    return null;
  };

  return (
    <Layout title="Authors">
      <div className="container margin-top--lg margin-bottom--lg">
        {[
          getAuthorSection("Leaders", OccupationSection.Leader),
          getAuthorSection("Collaborators", OccupationSection.Collaborators),
          getAuthorSection("Researchers", OccupationSection.Researchers),
          getAuthorSection("External Researchers", OccupationSection.ExternalResearchers),
          getAuthorSection("Alumni", OccupationSection.Alumni),
        ]}
      </div>
    </Layout>
  );
}

export { TeamProfileCard };

export default TeamPage;
