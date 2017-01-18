/**
 * Created by Boykov D. on 1/18/2017.
 */
import {
	map,
	control,
	tileLayer
} from "leaflet";
import {
	Component,
	OnInit
} from '@angular/core';
import 'style-loader!css-loader!leaflet/dist/leaflet.css';
@Component({
	           selector: 'body',
	           template: `<div id="map" style="height: 100%; width: 100%;"></div>`
           })
export class AppComponent implements OnInit {
	public ngOnInit(): void {
		const mapElement = map('map', { zoomControl: false })
			.setView([51.505, -0.09], 13);

		tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png')
			.addTo(mapElement);
		const zoom = control.zoom({ position: "topright" });
		zoom.addTo(mapElement);

		const scale = control.scale({ position: "bottomright" });
		scale.addTo(mapElement);
	}
}