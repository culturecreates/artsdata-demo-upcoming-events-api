Simple Website with feed of upcoming events
==========

This website demonstrates a simple use of the Artsdata Event Query API **BETA** to display upcoming events. It displays the next upcoming 10 events in Artsdata taking place at Theatre Maisonneuve in Montreal.

The location is hardcoded in the file artsdataApi.js by passing the predicate `schema:location` and the object `adr:K11-11`. This sets the location to Theatre Maisonneuve (K11-11). The JSON data can be viewed here:
https://api.artsdata.ca/events?format=json&apiKey=sandbox&frame=event_location&predicate=schema:location&object=adr:K11-11

This demo is built with plain javascript and html/css. No frameworks or package managers.

Please note that the Artsdata Event Query API may change or be discontinued in the future.

To install
==========
Clone this repository and run a web server in the root. 

```bash
$ git clone git@github.com:culturecreates/artsdata-demo-upcoming-events-api.git
$ cd artsdata-demo-upcoming-events-api
$ npx serve
```

Open your web browser

<img width="1398" alt="Screen Shot 2021-11-11 at 7 34 27 AM" src="https://user-images.githubusercontent.com/419491/141298964-d169cdbb-5d6a-4a0e-b0eb-d78806405cd9.png">
