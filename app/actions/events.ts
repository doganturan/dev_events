'use server'

import { IEvent } from "@/database";
import { eventsService } from "@/lib/services/events.service";

export async function getAllEvents(): Promise<IEvent[]> {
  try {
    return await eventsService.findAll();
  } catch (error) {
    console.error('getAllEvents action error:', error);
    return [];
  }
}

export async function getEventBySlug(slug: string): Promise<IEvent | null> {
  try {
    if (!slug || typeof slug !== 'string') {
      return null;
    }
    return await eventsService.findBySlug(slug);
  } catch (error) {
    console.error('getEventBySlug action error:', error);
    return null;
  }
}

export async function getSimilarEvents(
  slug: string,
  tags: string[],
  limit: number = 3
): Promise<IEvent[]> {
  try {
    if (!slug || !tags || tags.length === 0) {
      return [];
    }
    return await eventsService.findSimilarByTags(slug, tags, limit);
  } catch (error) {
    console.error('getSimilarEvents action error:', error);
    return [];
  }
}
