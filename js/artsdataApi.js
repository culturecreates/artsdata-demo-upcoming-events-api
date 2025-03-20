const apiKey = 'sandbox' ;  // limited calls. Contact info@culturecreates.com for your apiKey.
const format = 'json' ;  // json or jsonld
const baseUrl = 'https://api.artsdata.ca' ;
const endPoint = `${baseUrl}/events`;
const artsdataApiUrl = `${endPoint}?format=${format}&apiKey=${apiKey}&frame=event_location` ;

export { artsdataApiUrl } ;
