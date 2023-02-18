import { getHtmlTripInfo } from './views/trip-info-view.js';
import { getHtmlTripConrolsNavigation } from './views/trip-controls-navigation-views.js';
import { getHtmlTripFilters } from './views/trip-filters-views.js';
import { getHtmlTripSort } from './views/trip-sort-view.js';
import { getHtmlTripEventsItem } from './views/trip-events-item-views.js';
import { getHtmlTripEventsList } from './views/trip-events-list-view.js';
// import { getHtmlTripEventsLoad } from './src/views/trip-events-load-views.js';

// Константы //
const QUANTITY_OF_ELEMENTS = 3;

// Переменные //
const tripMain = document.querySelector('.trip-main');
const tripControlsNavigation = document.querySelector('.trip-controls__navigation');
const tripControlsFilters = document.querySelector('.trip-controls__filters');
const tripEvents = document.querySelector('.trip-events');

const render = (container, place, template) => {
  container.insertAdjacentHTML(place, template);
};

render(tripMain, 'afterbegin', getHtmlTripInfo());
render(tripControlsNavigation, 'afterbegin', getHtmlTripConrolsNavigation());
render(tripControlsFilters, 'afterbegin', getHtmlTripFilters());
render(tripEvents, 'afterbegin', getHtmlTripSort());
render(tripEvents, 'beforeend', getHtmlTripEventsList());
const tripEventsList = document.querySelector('.trip-events__list');
for (let i = 0; i < QUANTITY_OF_ELEMENTS; i++) {
  render(tripEventsList, 'beforeend', getHtmlTripEventsItem());
}

