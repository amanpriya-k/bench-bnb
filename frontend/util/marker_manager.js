import React from 'react';
import {merge} from 'lodash';

class MarkerManager {

  constructor(map){
    this.map = map;
    this.markers = {};
  }

  updateMarkers(benches) {
    console.log('updating bench markers');
    if (this.map){
      console.log('markers', this.markers);
      benches.forEach(
        (bench) => {
          if (!Object.keys(this.markers).includes(bench.id)){
            console.log(bench.description);
            this.createMarkerFromBench(bench);
          }
        }
      )
    }
  }

  createMarkerFromBench(bench) {
    // let lat_lng = {lat: bench.lat, lng: bench.lng};
    let lat_lng = new google.maps.LatLng(bench.lat, bench.lng);

    let marker = new google.maps.Marker({
      position: lat_lng,
      map: this.map,
      title: bench.description
    });

    marker.setMap(this.map);
    this.markers = merge({}, this.markers, { [bench.id]: marker});
  }
}

export default MarkerManager;
