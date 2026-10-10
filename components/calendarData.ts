// Shared source of truth for the Calendar widget (home screen) and the
// Calendar app's event-detail screen. Editing an event here updates both.

export interface CalendarEvent {
  title: string;
  /** en-dash range, e.g. "14:30–15:00" */
  time: string;
  indicatorColor: string;
  bgColor: string;
  titleColor: string;
  timeColor: string;
  /** Venue, shown on the detail screen. */
  locationName: string;
  locationAddress: string;
}

export const CALENDAR_WEEKDAY = "CHỦ NHẬT";
export const CALENDAR_DAY = "11";

/** Full date line shown on the event-detail screen (same day for all events). */
export const CALENDAR_DATE = "Chủ Nhật, 14/06/2026";
/** Back-button label — the event's day. */
export const CALENDAR_BACK_LABEL = "14 thg 6";
/** Name of the calendar these events live in (shown in the "Lịch" row). */
export const CALENDAR_NAME = "Cưới";

export const CALENDAR_EVENTS: CalendarEvent[] = [
  {
    title: "Ceremonia De Boda",
    time: "14:30–15:00",
    indicatorColor: "#FFC901",
    bgColor: "#FEF9E7",
    titleColor: "#73531E",
    timeColor: "#C69700",
    locationName: "Las Palmas",
    locationAddress: "",
  },
  {
    title: "Pachanga",
    time: "17:30–20:30",
    indicatorColor: "#83D654",
    bgColor: "#F3FAEF",
    titleColor: "#426B2A",
    timeColor: "#61A13F",
    locationName: "Los Llorones",
    locationAddress: "Salida a Cuauhtémoc",
  },
];
