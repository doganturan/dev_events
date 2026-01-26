export type EventItem = {
    id: number;
    title: string;
    slug: string;
    image: string;
    date: string;
    time: string;
    location: string;
    description: string;
};

export const EVENTS: EventItem[] = [
    {
        id: 1,
        title: "React Summit 2026",
        slug: "react-summit-2026",
        image: "/images/event1.png",
        date: "June 14-18, 2026",
        time: "9:00 AM - 6:00 PM",
        location: "Amsterdam, Netherlands",
        description: "The biggest React conference connecting developers worldwide"
    },
    {
        id: 2,
        title: "Next.js Conf",
        slug: "nextjs-conf",
        image: "/images/event2.png",
        date: "October 24-26, 2026",
        time: "10:00 AM - 7:00 PM",
        location: "San Francisco, CA",
        description: "The official Next.js conference by Vercel"
    },
    {
        id: 3,
        title: "Node Congress",
        slug: "node-congress",
        image: "/images/event3.png",
        date: "February 18-20, 2026",
        time: "9:00 AM - 5:00 PM",
        location: "Berlin, Germany",
        description: "International JavaScript and Node.js conference"
    },
    {
        id: 4,
        title: "AI DevWorld",
        slug: "ai-devworld",
        image: "/images/event4.png",
        date: "May 10-12, 2026",
        time: "8:30 AM - 6:30 PM",
        location: "Austin, TX",
        description: "Explore the future of AI and machine learning development"
    },
    {
        id: 5,
        title: "GraphQL Galaxy",
        slug: "graphql-galaxy",
        image: "/images/event5.png",
        date: "December 8-10, 2026",
        time: "9:00 AM - 6:00 PM",
        location: "San Diego, CA",
        description: "The GraphQL conference for developers and architects"
    },
    {
        id: 6,
        title: "DevOps World",
        slug: "devops-world",
        image: "/images/event6.png",
        date: "September 22-24, 2026",
        time: "8:00 AM - 5:00 PM",
        location: "London, UK",
        description: "Leading conference for DevOps professionals"
    },
    {
        id: 7,
        title: "Web3 Summit",
        slug: "web3-summit",
        image: "/images/event1.png",
        date: "August 5-7, 2026",
        time: "10:00 AM - 7:00 PM",
        location: "Miami, FL",
        description: "Discover the decentralized web and blockchain technologies"
    },
    {
        id: 8,
        title: "TypeScript Congress",
        slug: "typescript-congress",
        image: "/images/event2.png",
        date: "April 15-17, 2026",
        time: "9:00 AM - 6:00 PM",
        location: "New York, NY",
        description: "International conference dedicated to TypeScript"
    },
    {
        id: 9,
        title: "Vue.js Nation",
        slug: "vuejs-nation",
        image: "/images/event3.png",
        date: "March 28-30, 2026",
        time: "9:00 AM - 5:30 PM",
        location: "Paris, France",
        description: "The premier Vue.js conference for developers"
    },
    {
        id: 10,
        title: "Serverless Days",
        slug: "serverless-days",
        image: "/images/event4.png",
        date: "July 12-14, 2026",
        time: "8:30 AM - 5:30 PM",
        location: "Seattle, WA",
        description: "Community-focused conference on serverless architecture"
    },
    {
        id: 11,
        title: "Hackathon Berlin 2026",
        slug: "hackathon-berlin-2026",
        image: "/images/event5.png",
        date: "November 2-4, 2026",
        time: "6:00 PM Friday - 6:00 PM Sunday",
        location: "Berlin, Germany",
        description: "48-hour coding marathon with prizes and networking"
    },
    {
        id: 12,
        title: "Cloud Native Con",
        slug: "cloud-native-con",
        image: "/images/event6.png",
        date: "October 14-17, 2026",
        time: "9:00 AM - 6:00 PM",
        location: "Los Angeles, CA",
        description: "CNCF's flagship conference for cloud native computing"
    }
];
