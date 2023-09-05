"use client";

import react, { useState } from "react";
import L from "leaflet";
import { MapContainer, Marker, TileLayer } from "react-leaflet";

import "leaflet/dist/leaflet.css";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import { useEffect } from "react";
import { formattedCountries } from "../Inputs/RentMapInput";

// @ts-ignore
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon.src,
  iconRetinaUrl: markerIcon2x.src,
  shadowUrl: markerShadow.src,
});

interface MapProps {
  center: string | null | undefined;
}

const url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
const attribution =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

const MapBox = ({ center }: MapProps) => {
  const [country, setCountry] = useState<L.LatLngExpression>([51, -0.09]);

  const getCountryValue = (value: string) => {
    let match = formattedCountries.find((item) => item.label === value);

    setCountry(match?.latlng);
  };

  useEffect(() => {
    if (center) {
      getCountryValue(center);
    }
  }, [center]);

  return (
    <MapContainer
      //@ts-ignore
      center={country}
      zoom={center ? 4 : 2}
      scrollWheelZoom={false}
      className="h-[35vh] rounded-lg"
    >
      {/*@ts-ignore*/}
      <TileLayer url={url} attribution={attribution} />
      {center && <Marker position={country} />}
    </MapContainer>
  );
};

export default MapBox;
