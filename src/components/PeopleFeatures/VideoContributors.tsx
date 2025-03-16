import React from "react";
import clsx from "clsx";
import authors from "../../data/members";
import { TeamProfileCard } from "./TeamPage";
import styles from "./styles.module.css";
import LiteYouTubeEmbed from "react-lite-youtube-embed";

interface VideoContributorsProps {
  title: string;
  venue: string;
  contributors: string[]; // Array of author keys/ids from your authors data
}

const VideoContributors: React.FC<VideoContributorsProps> = ({
  title,
  venue,
  contributors,
}) => {
  // Filter authors to only those in the contributors list
  const videoContributors = Object.entries(authors)
    .filter(([key, _]) => contributors.includes(key))
    .map(([_, author]) => author);

  if (videoContributors.length === 0) {
    return null;
  }

  return (
    <div className={styles.contributorsSection}>
      {/* Video title */}
      {/* <h3 className={styles.videoVenue}>{venue}</h3> */}
      <p className={styles.videoTitle}>{title}</p>

      {/* Contributors Grid */}
      <div className={clsx(styles.teamGrid, styles.contributorsGrid)}>
        {videoContributors.map((author) => (
          <TeamProfileCard
            key={author.url}
            name={author.name}
            as="h3"
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
    </div>
  );
};

// embed video using LiteYouTubeEmbed and show contributors
interface VideoEmbedProps {
  id: string;
  venue: string;
  title: string;
  contributors?: string[];
}

const VideoEmbed: React.FC<VideoEmbedProps> = ({
  id,
  venue,
  title,
  contributors = [], // Default to empty array
}) => {
  return (
    <div className={styles.videoEmbedWrapper}>
      <div className={styles.videoContainer}>
        <LiteYouTubeEmbed
          id={id}
          title={title}
          noCookie={true}
          poster="maxresdefault"
        />
      </div>
      <VideoContributors
        title={title}
        venue={venue}
        contributors={contributors}
      />
    </div>
  );
};

export default VideoEmbed;
