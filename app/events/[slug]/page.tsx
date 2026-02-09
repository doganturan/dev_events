

import Image from "next/image";
import { IEvent } from "@/database";
import { NotFound } from "@/components/NotFound";
import EventCard from "@/components/EventCard";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getEventBySlug, getSimilarEvents } from "@/app/actions/events";

interface EventDetailsPageProps {
  params: Promise<{ slug: string }>;
}

const EventDetailsPage = async ({ params }: EventDetailsPageProps) => {
  const { slug } = await params;

  // Fetch event details
  const event = await getEventBySlug(slug);

  if (!event) {
    return (
      <NotFound
        title="Event Not Found"
        description="This event doesn't exist or has been removed."
        buttonText="Back to Events"
        buttonPath="/"
      />
    );
  }

  // Fetch similar events based on tags (optimized DB query)
  const similarEvents: IEvent[] = event.tags && event.tags.length > 0
    ? await getSimilarEvents(slug, event.tags, 3)
    : [];

  return (
    <section id="event">
      {/* Back Button */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-light-200 hover:text-primary transition-colors mb-4 sm:mb-6 group"
      >
        <ArrowLeft className="size-4 group-hover:-translate-x-1 transition-transform" />
        <span className="text-xs sm:text-sm font-medium">Back to Events</span>
      </Link>

      {/* Header Section */}
      <div className="header">
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {event.tags?.map((tag) => (
            <span key={tag} className="text-xs sm:text-sm px-3 sm:px-5 py-1.5 sm:py-2 bg-dark-100/80 border border-dark-200 rounded-[6px]">
              {tag}
            </span>
          ))}
        </div>
        <h1 className="text-gradient mt-3 sm:mt-4 text-3xl sm:text-4xl leading-tight">{event.title}</h1>
        <p className="text-light-200 text-sm sm:text-base leading-relaxed">{event.overview}</p>
      </div>

      {/* Main Content */}
      <div className="details">
        {/* Right Sidebar - Event Info (Mobile First) */}
        <aside className="booking order-2 lg:order-none">
          <div className="signup-card space-y-4 sm:space-y-5">
            <h2 className="text-base sm:text-lg font-semibold text-white">Event Details</h2>

            <div className="space-y-3 sm:space-y-4">
              {/* Date & Time */}
              <div className="space-y-2 sm:space-y-3">
                <div className="flex-row-gap-2 items-center p-2.5 sm:p-3 bg-dark-200/50 rounded-lg hover:bg-dark-200 transition-colors">
                  <Image src="/icons/calendar.svg" alt="date" width={16} height={16} className="sm:w-[18px] sm:h-[18px]" />
                  <div className="flex-1">
                    <p className="text-light-200 text-xs mb-0.5 sm:mb-1">Date</p>
                    <p className="text-white font-semibold text-xs sm:text-sm">{event.date}</p>
                  </div>
                </div>
                <div className="flex-row-gap-2 items-center p-2.5 sm:p-3 bg-dark-200/50 rounded-lg hover:bg-dark-200 transition-colors">
                  <Image src="/icons/clock.svg" alt="time" width={16} height={16} className="sm:w-[18px] sm:h-[18px]" />
                  <div className="flex-1">
                    <p className="text-light-200 text-xs mb-0.5 sm:mb-1">Time</p>
                    <p className="text-white font-semibold text-xs sm:text-sm">{event.time}</p>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="p-2.5 sm:p-3 bg-dark-200/50 rounded-lg hover:bg-dark-200 transition-colors">
                <div className="flex-row-gap-2 items-start">
                  <Image src="/icons/pin.svg" alt="location" width={16} height={16} className="sm:w-[18px] sm:h-[18px] mt-0.5 sm:mt-1" />
                  <div className="flex-1">
                    <p className="text-light-200 text-xs mb-0.5 sm:mb-1">Location</p>
                    <p className="text-white font-semibold text-xs sm:text-sm">{event.location}</p>
                    {event.venue && <p className="text-light-200 text-xs mt-0.5 sm:mt-1">{event.venue}</p>}
                  </div>
                </div>
              </div>

              {/* Mode */}
              {event.mode && (
                <div className="p-2.5 sm:p-3 bg-dark-200/50 rounded-lg">
                  <p className="text-light-200 text-xs mb-1.5 sm:mb-2">Mode</p>
                  <span className="text-xs sm:text-sm px-3 sm:px-5 py-1.5 sm:py-2 bg-primary/10 text-primary border border-primary/20 rounded-[6px] inline-block">{event.mode}</span>
                </div>
              )}

              {/* Audience */}
              {event.audience && (
                <div className="p-2.5 sm:p-3 bg-dark-200/50 rounded-lg">
                  <p className="text-light-200 text-xs mb-0.5 sm:mb-1">Target Audience</p>
                  <p className="text-white font-semibold text-xs sm:text-sm">{event.audience}</p>
                </div>
              )}

              {/* Organizer */}
              {event.organizer && (
                <div className="p-2.5 sm:p-3 bg-dark-200/50 rounded-lg">
                  <p className="text-light-200 text-xs mb-0.5 sm:mb-1">Organized By</p>
                  <p className="text-white font-semibold text-xs sm:text-sm">{event.organizer}</p>
                </div>
              )}
            </div>
          </div>
        </aside>

        {/* Left Content */}
        <div className="content order-1 lg:order-none">
          {/* Banner Image */}
          <Image
            src={event.image}
            alt={event.title}
            width={800}
            height={457}
            className="banner"
            priority
          />

          {/* About Section */}
          <div className="flex flex-col gap-2 sm:gap-3">
            <h2 className="text-white font-semibold text-lg sm:text-xl">About Event</h2>
            <p className="text-light-200 text-sm sm:text-base leading-relaxed">{event.description}</p>
          </div>
        </div>
      </div>

      {/* Agenda Section - Full Width */}
      {event.agenda && event.agenda.length > 0 && (
        <div className="mt-12 sm:mt-16">
          <h2 className="text-white font-semibold text-xl sm:text-2xl mb-6 sm:mb-8">Event Agenda</h2>
          <div className="space-y-3 sm:space-y-4">
            {event.agenda.map((item, index) => (
              <div
                key={index}
                className="relative pl-6 sm:pl-8 pb-3 sm:pb-4 border-l-2 border-dark-200 last:border-l-0 last:pb-0 hover:border-primary/50 transition-colors group"
              >
                <div className="absolute -left-[7px] sm:-left-[9px] top-0 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-dark-100 border-2 border-primary group-hover:bg-primary group-hover:scale-110 transition-all" />
                <div className="bg-dark-100/50 border border-dark-200 rounded-lg p-4 sm:p-5 group-hover:border-primary/30 group-hover:bg-dark-100/70 transition-all">
                  <div className="flex gap-3 sm:gap-4 items-start">
                    <span className="text-primary font-semibold text-sm sm:text-base mt-0.5 min-w-[1.5rem] sm:min-w-[2rem]">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <p className="text-light-200 text-sm sm:text-base flex-1 leading-relaxed">
                      {item}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Similar Events Section */}
      {similarEvents.length > 0 && (
        <div className="mt-12 sm:mt-16 pt-8 sm:pt-12 border-t border-dark-200">
          <h2 className="text-white font-semibold text-xl sm:text-2xl mb-6 sm:mb-8">Similar Events</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {similarEvents.map((similarEvent: IEvent) => (
              <EventCard key={similarEvent.slug} {...similarEvent} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default EventDetailsPage;