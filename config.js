const config = {
  style: "mapbox://styles/mapbox/light-v10",
  accessToken:
    "pk.eyJ1IjoiZGVzaWdub3V0c2lkZXIiLCJhIjoiY2t2Z3MzZmU2MmMzZzMxczFvb205NHpmMCJ9.VGj4qLQIM2q_L1RiG2Tw7A",
  CSV: "https://docs.google.com/spreadsheets/d/1CB45umCdZHRj4zHbW1xHLVcbHz7XxaQg2Q-eixtB7D0/gviz/tq?tqx=out:csv&sheet=Sheet1",
  center: [0, 0],
  zoom: 0,
  title: "",
  description:
    "Replace with information about your application. Ex. You can search by address to sort the list below by distance. You can also filter the list by language support options, which days a location is open, and whether they have devices to use to complete the survey by phone or online.",
  sideBarInfo: ["Title", "Location", "Summary", "Date Published"],
  popupInfo: ["Title"],
  popupImage: ["Thumbnail"],
  popupLink: ["URL"],
  filters: [
    {
      type: "dropdown",
      title: "Theme: ",
      columnHeader: "Theme",
      listItems: [
        "Business",
        "Opinion",
        "Health",
        "Arts",
        "Travel",
        "Culture",
        "Transportation",
        "Environment",
        "Economy",
        "Housing",
        "Justice",
        "Goverment",
        "Technology",
        "Community",
        "Video",
        "Books",
      ],
    },
    {
      type: "checkbox",
      title: "Typology: ",
      columnHeader: "Typology", // Case sensitive - must match spreadsheet entry
      listItems: ["Master Plan", "Office", "Residential", "Public", "Cultural", "Tower", "Infrastructure", "Education", "Landscape", "Restaurant", "Industrial", "Low Rise", "Public Space", "Leisure", "Mixed Use", "Religion", "Retail", "Services", "Public Art"], // Case sensitive - must match spreadsheet entry; This will take up to six inputs but is best used with a maximum of three;
    },
    {
      type: "dropdown",
      title: "Status: ",
      columnHeader: "Status",
      listItems: [
        "Academic",
        "Competition",
        "Research",
        "Temporary",
        "Design Development",
        "Construction",
        "Complete",
        "Historical",
        "Derelict",
        "Demolished",
      ],
    },
  ],
};
