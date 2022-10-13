import L from "leaflet";
import IssImg from "../assets/img/issImg.png";

const iconISS = new L.Icon({
  iconUrl: IssImg,
  iconRetinaUrl: IssImg,
  popupAnchor: [-0, -0],
  iconSize: [60, 40],
  iconAnchor: [25, 16],
});

export { iconISS };
