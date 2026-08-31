const apiKey = 'sandbox' ;  // limited calls. Contact info@culturecreates.com for your apiKey.
const format = 'json' ;  // json or jsonld
const baseUrl = 'https://api.artsdata.ca' ;
const endPoint = `${baseUrl}/events`;
const predicateProperty = 'schema:location' ;
const predicateObject = 'adr:K11-11' ;  // K11-11 is the Artsdata ID for Theatre Maisonneuve in Montreal, Canada
const artsdataApiUrl = `${endPoint}?format=${format}&apiKey=${apiKey}&frame=event_location&predicate=${predicateProperty}&object=${predicateObject}` ;

export { artsdataApiUrl } ;