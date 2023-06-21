import L from '../node_modules/leaflet/dist/leaflet.js';
import colorFilter from '../node_modules/leaflet.tilelayer.colorfilter/src/leaflet-tilelayer-colorfilter';



class Map {
    constructor() {
        this.map = map;
        this.mapZoomLevel = 13;
    }

    createMap() {
        const latitude = 40.6862209;
        const longitude = -73.8192441;
        const coords = [latitude, longitude];
        this.map = L.map('map').setView(coords, this.mapZoomLevel);

      
        L.marker(coords).addTo(this.map)

        let myFilter = [
            'grayscale:100%',
            'invert:100%',
        ]

        L.tileLayer.colorFilter('https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png', {
            attribution: '<a href="https://wikimediafoundation.org/wiki/Maps_Terms_of_Use">Wikimedia</a>',
            filter: myFilter,
        }).addTo(this.map);
    }
}

export const setMap = new Map();
