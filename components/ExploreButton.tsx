'use client';

import Image from "next/image"
import posthog from "posthog-js"

const ExploreButton = () => {
  const handleExploreClick = () => {
    posthog.capture('explore_events_clicked');
  };

  return (
    <button id="explore-btn" className="mx-auto mt-5" type="button" onClick={handleExploreClick}>
        <a href="#events">Explore Events</a>
        <Image src="/icons/arrow-down.svg" alt="down arrow" className="ml-1" width={24} height={24} />
    </button>
  )
}

export default ExploreButton