const baseUrl = "https://staging.api.footlight.io";
const endPoint = `${baseUrl}/calendars/tout-culture/`;
const footlightApiUrl = `${endPoint}events?page=1&limit=100`;
const footlightApiPlacesUrl = `${endPoint}places?page=1&limit=100`;

export  { footlightApiUrl, footlightApiPlacesUrl};