import { DateTime } from "luxon";

export const convertTimeDate = (dateTimeString: string) => {
  const dateTime = DateTime.fromISO(dateTimeString);

  const watDateTime = dateTime.setZone("Africa/Lagos");

  const bstDateTime = dateTime.setZone("Europe/London");

  return {
    date: watDateTime.toFormat("MMMM dd, yyyy"),
    time: {
      WAT: watDateTime.toFormat("HH:mm") + " GMT",
      BST: bstDateTime.toFormat("HH:mm") + " BST",
    },
  };
};
