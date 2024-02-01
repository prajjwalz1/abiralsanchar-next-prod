import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import relativeTimePlugin from "dayjs/plugin/relativeTime";
import timezone from "dayjs/plugin/timezone";

export const getRealtiveTime = (givenDate: string, locale?: string) => {
  dayjs.extend(relativeTimePlugin);
  dayjs.extend(utc);
  dayjs.extend(timezone);
  dayjs.locale(locale ?? "np");

  const relativeTime = dayjs(givenDate).fromNow();

  return relativeTime;
};
