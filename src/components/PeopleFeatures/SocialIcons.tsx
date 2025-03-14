import React, {ComponentType} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGoogleScholar, faMicrosoft } from '@fortawesome/free-brands-svg-icons';
import { faAddressCard } from '@fortawesome/free-regular-svg-icons';

// Import these components from your Docusaurus theme
// If they don't exist in your project, you'll need to create them
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
  scholar: {Icon: () => <FontAwesomeIcon icon={faGoogleScholar} />, label: 'Google Scholar'},
  microsoft: {Icon: () => <FontAwesomeIcon icon={faMicrosoft} />, label: 'Microsoft'},
  cv: {Icon: () => <FontAwesomeIcon icon={faAddressCard} />, label: 'CV'},
};

function getSocialPlatformConfig(platformKey: string): SocialPlatformConfig {
  return (
    SocialPlatformConfigs[platformKey.toLowerCase()] ?? {
      Icon: DefaultSocialIcon,
      label: platformKey,
    }
  );
}

interface SocialIconProps {
  platform: string;
  className?: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ platform, className = '' }) => {
  const { Icon } = getSocialPlatformConfig(platform);
  return <Icon className={className} />;
};

export default SocialIcon;

// Export a SocialLink component for direct use in other components
export function SocialLink({platform, link, className}: {platform: string; link: string; className?: string}) {
  const {label} = getSocialPlatformConfig(platform);
  return (
    <Link className={clsx(styles.authorSocialLink, className)} href={link} title={label}>
      <SocialIcon platform={platform} className={styles.authorSocialLink} />
    </Link>
  );
}
