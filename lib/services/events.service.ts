import connectDB from "@/lib/mongodb";
import { Event } from "@/database";
import { IEvent } from "@/database";

class EventsService {
    private async ensureConnection(): Promise<void> {
        await connectDB();
    }

    private serializeEvent(event: unknown): IEvent | null {
        if (!event) return null;
        return JSON.parse(JSON.stringify(event)) as IEvent;
    }

    private serializeEvents(events: unknown[]): IEvent[] {
        return JSON.parse(JSON.stringify(events)) as IEvent[];
    }

    async findAll(): Promise<IEvent[]> {
        try {
            await this.ensureConnection();
            const events = await Event.find().lean();
            return this.serializeEvents(events);
        } catch (error) {
            console.error('EventsService.findAll error:', error);
            throw new Error('Failed to fetch events');
        }
    }

    async findBySlug(slug: string): Promise<IEvent | null> {
        try {
            await this.ensureConnection();
            const event = await Event.findOne({ slug }).lean();
            return this.serializeEvent(event);
        } catch (error) {
            console.error('EventsService.findBySlug error:', error);
            throw new Error(`Failed to fetch event with slug: ${slug}`);
        }
    }

    async findSimilarByTags(
        excludeSlug: string,
        tags: string[],
        limit: number = 3
    ): Promise<IEvent[]> {
        try {
            await this.ensureConnection();

            const similarEvents = await Event.find({
                slug: { $ne: excludeSlug },
                tags: { $in: tags }
            })
                .limit(limit)
                .lean();

            return this.serializeEvents(similarEvents);
        } catch (error) {
            console.error('EventsService.findSimilarByTags error:', error);
            throw new Error('Failed to fetch similar events');
        }
    }
}

// Singleton instance
export const eventsService = new EventsService();
