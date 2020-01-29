import {createMenuTemplate} from "./components/menu.js";
import {createFilterTemplate} from "./components/filter";
import {createSortTemplate} from "./components/sorting";
import {createTripDetailsTemplate} from "./components/trip-details";
import {createTripCardTemplate} from "./components/trip";
import {createTripEditTemplate} from "./components/trip-edit";
import {createTripDaysListTemplate, createTripEventsListTemplate, createTripEventsItemTemplate} from "./components/page";

const TRIP_COUNT = 3;

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const tripEvents = document.querySelector(`.trip-events`);
const tripMain = document.querySelector(`.trip-main`);
const tripControls = tripMain.querySelector(`.trip-main__trip-controls`);

render(tripControls, createMenuTemplate(), `beforeend`);
render(tripControls, createFilterTemplate(), `beforeend`);
render(tripEvents, createSortTemplate(), `beforeend`);
render(tripEvents, createTripEditTemplate(), `beforeend`);
render(tripEvents, createTripDaysListTemplate(), `beforeend`);

const tripDaysItem = tripEvents.querySelector(`.trip-days__item`);
render(tripDaysItem, createTripEventsListTemplate(), `beforeend`);

const tripEventsList = tripDaysItem.querySelector(`.trip-events__list`);
render(tripEventsList, createTripEventsItemTemplate(), `beforeend`);

const tripEventsListItem = tripEventsList.querySelector(`.trip-events__item`);
render(tripEventsListItem, createTripDetailsTemplate(), `beforeend`);

for (let i = 0; i < TRIP_COUNT; i++) {
  render(tripEventsList, createTripEventsItemTemplate(), `beforeend`);
  const currentItem = tripEventsList.querySelectorAll(`.trip-events__item`);
  render(currentItem[i + 1], createTripCardTemplate(), `beforeend`);
}
