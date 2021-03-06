var _href = document.location.href;

var params = _href.split("#")[1];


const pinLocation = params ?
 params : 
 '0,0'

var pinLatLng = pinLocation.split(",");

var pinLat = parseFloat(pinLatLng[1]);

var pinLng = parseFloat(pinLatLng[0]);

var pinLngLatArray = pinLat && pinLng ?
      [pinLat, pinLng]:
      [0, 0]

const pinZoom = pinLat && pinLng ?
 15 : 
 0


const config = {
  style: "mapbox://styles/designoutsider/ckvuaw69n144e14pert1cjol2",
  accessToken:
    "pk.eyJ1IjoiZGVzaWdub3V0c2lkZXIiLCJhIjoiY2t2Z3MzZmU2MmMzZzMxczFvb205NHpmMCJ9.VGj4qLQIM2q_L1RiG2Tw7A",
  CSV: "https://docs.google.com/spreadsheets/d/1CB45umCdZHRj4zHbW1xHLVcbHz7XxaQg2Q-eixtB7D0/gviz/tq?tqx=out:csv&sheet=Sheet1",
  center: pinLngLatArray,
  zoom: pinZoom,
  title: "",
  description:
    "",
  sideBarInfo: ["Title", "Summary"],
  formatInfo: ["Format"],
  popupInfo: ["Title"],
  popupImage: ["Thumbnail"],
  popupLink: ["URL"],
  locationInfo: ["Location"],
  filters: [
     {
      type: "dropdown",
      title: "Format: ",
      columnHeader: "Format", // Case sensitive - must match spreadsheet entry
      listItems: [
       "Project", 
       "Article", 
       "Post"
      ], // Case sensitive - must match spreadsheet entry; This will take up to six inputs but is best used with a maximum of three;
    },
    {
      type: "checkbox",
      title: "Theme: ",
      columnHeader: "Theme",
      listItems: [
        "Arts",
        "Community",
        "Culture",
        "Economy",
        "Education",
        "Environment",
        "Goverment",
        "Health",
        "Justice",
        "Opinion",
        "Technology",
        "Travel",
      ],
    },
    {
      type: "checkbox",
      title: "Typology: ",
      columnHeader: "Typology", // Case sensitive - must match spreadsheet entry
      listItems: [
       "Art", 
       "Culinary", 
       "Cultural", 
       "Industrial", 
       "Infrastructure", 
       "Interior",
       "Landscape", 
       "Leisure", 
       "Masterplan", 
       "Mixed Use", 
       "Office",
       "Outdoor",
       "Public", 
       "Religious", 
       "Residential", 
       "Retail", 
       "Rural", 
       "Services",
       "Transporation",
       "Urban",
      ], // Case sensitive - must match spreadsheet entry; This will take up to six inputs but is best used with a maximum of three;
    },
    {
      type: "dropdown",
      title: "Status: ",
      columnHeader: "Status",
      listItems: [
        "Academic",
        "Competition",
        "Concept",
        "Realised",
        "Construction",
        "Demolished",
        "Derelict",
        "Design Development",
        "Historical",
        "Research",
        "Temporary",
      ],
    },
  ],
};
