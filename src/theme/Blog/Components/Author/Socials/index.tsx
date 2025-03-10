import type {ComponentType, ReactNode} from 'react';
import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import type {Props} from '@theme/Blog/Components/Author/Socials';

import Twitter from '@theme/Icon/Socials/Twitter';
import GitHub from '@theme/Icon/Socials/GitHub';
import X from '@theme/Icon/Socials/X';
import StackOverflow from '@theme/Icon/Socials/StackOverflow';
import LinkedIn from '@theme/Icon/Socials/LinkedIn';
import DefaultSocialIcon from '@theme/Icon/Socials/Default';
import Bluesky from '@theme/Icon/Socials/Bluesky';
import Instagram from '@theme/Icon/Socials/Instagram';
import Threads from '@theme/Icon/Socials/Threads';
import Youtube from '@theme/Icon/Socials/YouTube';
import Mastodon from '@theme/Icon/Socials/Mastodon';
import Twitch from '@theme/Icon/Socials/Twitch';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGoogleScholar, faMicrosoft } from '@fortawesome/free-brands-svg-icons';
import {faAddressCard } from '@fortawesome/free-regular-svg-icons';

import styles from './styles.module.css';

type SocialIcon = ComponentType<{className: string}>;

type SocialPlatformConfig = {Icon: SocialIcon; label: string};

const SocialPlatformConfigs: Record<string, SocialPlatformConfig> = {
  twitter: {Icon: Twitter, label: 'Twitter'},
  github: {Icon: GitHub, label: 'GitHub'},
  stackoverflow: {Icon: StackOverflow, label: 'Stack Overflow'},
  linkedin: {Icon: LinkedIn, label: 'LinkedIn'},
  x: {Icon: X, label: 'X'},
  bluesky: {Icon: Bluesky, label: 'Bluesky'},
  instagram: {Icon: Instagram, label: 'Instagram'},
  threads: {Icon: Threads, label: 'Threads'},
  mastodon: {Icon: Mastodon, label: 'Mastodon'},
  youtube: {Icon: Youtube, label: 'YouTube'},
  twitch: {Icon: Twitch, label: 'Twitch'},

  email: {Icon: () => <FontAwesomeIcon icon={faEnvelope} />, label: 'Email'},
  website: {Icon: () => <FontAwesomeIcon icon={faHouse} />, label: 'Website'},
  scholar: {Icon: () => <FontAwesomeIcon icon={faGoogleScholar} />, label: 'Scholar'},
};

function getSocialPlatformConfig(platformKey: string): SocialPlatformConfig {
  return (
    SocialPlatformConfigs[platformKey] ?? {
      Icon: DefaultSocialIcon,
      label: platformKey,
    }
  );
}

function SocialLink({platform, link}: {platform: string; link: string}) {
  const {Icon, label} = getSocialPlatformConfig(platform);
  return (
    <Link className={styles.authorSocialLink} href={link} title={label}>
      <Icon className={clsx(styles.authorSocialLink)} />
    </Link>
  );
}

export default function BlogAuthorSocials({
  author,
}: {
  author: Props['author'];
}): ReactNode {
  const socialEntries = Object.entries(author.socials ?? {});
  
  // Create additional entries for url and email if they exist
  const additionalEntries: [string, string][] = [];
  if (author.url) {
    additionalEntries.push(['website', author.url]);
  }
  if (author.email) {
    additionalEntries.push(['email', `mailto:${author.email}`]);
  }

  // Combine all entries
  const entries = [...additionalEntries, ...socialEntries];

  return (
    <div className={styles.authorSocials}>
      {entries.map(([platform, linkUrl]) => {
        return <SocialLink key={platform} platform={platform} link={linkUrl} />;
      })}
    </div>
  );
}
