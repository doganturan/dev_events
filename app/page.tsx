import EventCard from "@/components/EventCard";
import ExploreButton from "@/components/ExploreButton";
import { NotFound } from "@/components/NotFound";
import { IEvent } from "@/database";
import { getAllEvents } from "@/app/actions/events";
import { cacheLife, cacheTag } from "next/cache";


export default async function HomePage() {

  "use cache"
  cacheLife('hours')
  cacheTag('all-events')
  const events = await getAllEvents();

  return (
    <section className="">
      <h1 className="text-center">The Hub for Every Dev <br /> Event You Can't Miss</h1>
      <p className="text-center mt-5">Hackathons, conferences, workshops, all in one place.</p>
      <ExploreButton />

      <div className="mt-20 space-y-7">
        {events && events.length > 0 ? (
          <>
            <h3>Featured Events</h3>
            <ul className="events">
              {events.map((event: IEvent) => (
                <EventCard key={event.title} {...event} />
              ))}
            </ul>
          </>
        ) : (
          <NotFound
            title="No Events Found"
            description="There are no events available at the moment. Check back soon!"
          />
        )}
      </div>
    </section>
  )
}