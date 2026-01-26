import Image from "next/image";
import Link from "next/link";

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
    return (
        <Link id="event-card" href={`/events/${slug}`}>
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