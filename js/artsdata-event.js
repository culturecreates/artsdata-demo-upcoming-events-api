class ArtsdataEvent extends HTMLElement {
  set event(event) {
    this.innerHTML = `<div>
   
    <div class="box"><a href="${event.url}"><img src="${ event.image || '' }"></a></div>
    <h3> ${ event.nameFr|| event.nameEn}  ${ this.eventStatus(event.eventStatus) }</h3>
    <p> ${ this.dateFormat(event) } 
    <br>${ this.location(event.location) } 
     ${ this.attendanceMode(event.attendanceMode) } </p>
   
    </div>`
  }

  eventStatus(eventStatus) {
    if (eventStatus != "EventScheduled")  {
      return ` - <span style='color: red;'>${eventStatus}</span> ` ;
    }  else {
      return ""
    }
  }


  attendanceMode(mode) {
    var html = ""
    if (mode == "MixedEventAttendanceMode") {
      html = "AUSSI EN SPECTACLE VIRTUEL"
    }
    else if (mode == "OnlineEventAttendanceMode") {
      html = "SPECTACLE VIRTUEL"
    }
    return `<span style='color: red;'>${html}</span>`
  }

  dateFormat(event) {
    var html = ""
    html +=  new Date(event.startDate).toLocaleString('fr-FR',  { dateStyle: 'long', timeStyle: 'short', hour12: false, timeZone: 'EST' }) 
    return html
  }


  location(location) {
    var html = ""
    html +=`${location.nameFr || location.nameEn || location.namePref}`
    return html;
  }
}


customElements.define('artsdata-event', ArtsdataEvent)