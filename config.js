const config = {
  style: "mapbox://styles/designoutsider/ckvuaw69n144e14pert1cjol2",
  accessToken:
    "pk.eyJ1IjoiZGVzaWdub3V0c2lkZXIiLCJhIjoiY2t2Z3MzZmU2MmMzZzMxczFvb205NHpmMCJ9.VGj4qLQIM2q_L1RiG2Tw7A",
  CSV: "https://docs.google.com/spreadsheets/d/1CB45umCdZHRj4zHbW1xHLVcbHz7XxaQg2Q-eixtB7D0/gviz/tq?tqx=out:csv&sheet=Sheet1",
  center: [0, 0],
  zoom: 0,
  title: "",
  description:
    "",
  sideBarInfo: ["Title", "Location", "Summary"],
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
      listItems: ["Master Plan", "Office", "Residential", "Public", "Cultural", "Infrastructure", "Education", "Landscape", "Restaurant", "Industrial", "Public Space", "Leisure", "Mixed Use", "Religion", "Retail", "Services", "Public Art"], // Case sensitive - must match spreadsheet entry; This will take up to six inputs but is best used with a maximum of three;
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
