import EventDateTime from "@/app/events/EventDateTime";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

interface EventCardProps {
  src: string;
  altText: string;
  title: string;
  datetime: string;
  slug: {
    current: string;
    _type: string;
  };
}

const EventCard = ({ src, altText, title, datetime, slug }: EventCardProps) => {
  return (
    <Card>
      <Image
        src={src}
        alt={altText}
        width={500}
        height={500}
        className="rounded-t-lg h-[250px] w-full object-cover"
      />

      <CardContent className="text-center">
        <h3 className="text-2xl line-clamp-2 mt-5  font-medium">{title}</h3>
        <p className="line-clamp-3 text-sm text-gray-600 dark:text-gray-300">
          <EventDateTime datetime={datetime} />
        </p>

        <Link href={`events/${slug.current}`} className="arise-button w-full">
          Read more
        </Link>
      </CardContent>
    </Card>
  );
};

export default EventCard;
