// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

//documents
import menu from "./documents/menu";
import home from "./documents/home";
import events from "./documents/events";
import activities from "./documents/activities";
import directions from "./documents/directions";
import catering from "./documents/catering";
import settings from "./documents/settings";
import eventList from "./documents/eventList";
import activityList from "./documents/activityList";

//objects
import hero from "./objects/hero";
import cafe from "./objects/cafe";
import transport from "./objects/transport";
import contactInformation from "./objects/contactInformation";
import cateringCategory from "./objects/cateringCategory";
import booking from "./objects/booking";
import socialMedia from "./objects/socialMedia";
import instagram from "./objects/instagram";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    menu,
    home,
    activities,
    events,
    directions,
    catering,
    eventList,
    activityList,
    settings,
    hero,
    cafe,
    transport,
    contactInformation,
    cateringCategory,
    booking,
    socialMedia,
    instagram,
  ]),
});
