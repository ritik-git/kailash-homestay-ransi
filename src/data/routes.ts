/**
 * Travel information is general guidance. Road conditions in the Garhwal Himalaya
 * change with weather — keep distance/time empty ("") until verified; empty values are hidden.
 */
export interface TravelRoute {
  from: string;
  route: string;
  approximateDistance: string;
  approximateTime: string;
}

export const travelRoutes: TravelRoute[] = [
  {
    from: "Delhi",
    route:
      "Reach Haridwar or Rishikesh by train, bus or car, then continue into the hills. The nearest airport is Jolly Grant, Dehradun.",
    approximateDistance: "",
    approximateTime: "",
  },
  {
    from: "Haridwar / Rishikesh",
    route:
      "Follow the Badrinath highway along the Alaknanda through Devprayag and Srinagar to Rudraprayag. Shared jeeps and buses run this road daily.",
    approximateDistance: "",
    approximateTime: "",
  },
  {
    from: "Rudraprayag",
    route:
      "Take the Kedarnath road up the Mandakini valley to Kund, cross to Ukhimath, and continue past Uniana to Ransi, where the motor road ends.",
    approximateDistance: "",
    approximateTime: "",
  },
  {
    from: "Ransi",
    route:
      "Kailash Homestay is in the village. Use the map pin below, or message us when you reach Ransi and we will guide you in.",
    approximateDistance: "",
    approximateTime: "",
  },
];

export const travelNotes = [
  "Mobile network can be patchy beyond Ukhimath — share your arrival time in advance.",
  "Carry some cash; ATMs are limited in the upper valley.",
  "In monsoon (roughly July–August) landslides can delay travel. Keep a buffer day.",
];
