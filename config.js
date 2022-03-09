var _href = document.location.href;

var params = _href.split("#")[1];

let pinLocation;

if (params) {
  pinLocation = params;
} else {
  pinLocation = 0, 0;
};

let pinZoom;

if (params) {
  pinZoom = 20;
} else {
  pinZoom = 0;
};

const config = {
  style: "mapbox://styles/designoutsider/ckvuaw69n144e14pert1cjol2",
  accessToken:
    "pk.eyJ1IjoiZGVzaWdub3V0c2lkZXIiLCJhIjoiY2t2Z3MzZmU2MmMzZzMxczFvb205NHpmMCJ9.VGj4qLQIM2q_L1RiG2Tw7A",
  CSV: "https://docs.google.com/spreadsheets/d/1CB45umCdZHRj4zHbW1xHLVcbHz7XxaQg2Q-eixtB7D0/gviz/tq?tqx=out:csv&sheet=Sheet1",
  center: pinLocation,
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
      type: "checkbox",
      title: "Format: ",
      columnHeader: "Format", // Case sensitive - must match spreadsheet entry
      listItems: ["Project", "Article", "Post"], // Case sensitive - must match spreadsheet entry; This will take up to six inputs but is best used with a maximum of three;
    },
    {
      type: "dropdown",
      title: "Theme: ",
      columnHeader: "Theme",
      listItems: [
        "Arts",
        "Books",
        "Business",
        "Community",
        "Culture",
        "Economy",
        "Education",
        "Environment",
        "Goverment",
        "Health",
        "Housing",
        "Justice",
        "Opinion",
        "Technology",
        "Transportation",
        "Travel",
        "Video",
      ],
    },
    {
      type: "checkbox",
      title: "Typology: ",
      columnHeader: "Typology", // Case sensitive - must match spreadsheet entry
      listItems: ["Culinary", "Cultural", "Industrial", "Infrastructure", "Landscape", "Leisure", "Masterplan", "Mixed Use", "Office", "Public", "Public Art", "Public Space", "Religious", "Residential", "Retail", "Rural", "Services", "Urban"], // Case sensitive - must match spreadsheet entry; This will take up to six inputs but is best used with a maximum of three;
    },
    {
      type: "dropdown",
      title: "Status: ",
      columnHeader: "Status",
      listItems: [
        "Academic",
        "Competition",
        "Complete",
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
