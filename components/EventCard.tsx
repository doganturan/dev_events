'use client';

import Image from "next/image";
import Link from "next/link";
import posthog from "posthog-js";

interface EventCardProps {
    title: string;
    slug: string;
    image: string;
    date: string;
    time: string;
    location: string;
    description: string;

}

const EventCard = ({ title, slug, image, date, time, location, description }: EventCardProps) => {
    const handleEventCardClick = () => {
        posthog.capture('event_card_clicked', {
            event_title: title,
            event_slug: slug,
            event_date: date,
            event_location: location,
        });
    };

    return (
        <Link id="event-card" href={`/events/${slug}`} onClick={handleEventCardClick}>
            <Image src={image} alt={title} width={410} height={300} className="poster" />

            <div className="flex flex-row gap-2">
                <Image src="/icons/pin.svg" alt="location icon" width={14} height={14} />
                <p>{location}</p>
            </div>

            <p className="title"> {title} </p>

            <div className="datetime">
                <div className="">
                    <Image src="/icons/calendar.svg" alt="calendar icon" width={14} height={14} />
                    <p>{date}</p>
                </div>

                <div className="">
                    <Image src="/icons/clock.svg" alt="clock icon" width={14} height={14} />
                    <p>{time}</p>
                </div>
            </div>
        </Link>
    )
}

export default EventCard