var slides = [
  {title: "Buffalo, NY Immigrant Hubs", text: "By Ian Schwarzenberg <br> CPLN 692 <br> Spring 2019 <br> <br> <strong> Purpose: </strong> <br> Due to economic decline, Buffalo, NY and other similar rust belt cities have recently worked to attract more immigrants to reduce population loss. The purpose of this application is to show which Buffalo census tracts and neighborhoods have had the most consistent growth in shares of immigrant population from 2010-16. <br> <br> <strong> Data: </strong> <br> I first downloaded a Buffalo census tracts shapefile from the city's open data website, and CSVs detailing each Buffalo census tract's foreign born population statistics from Social Explorer, who in turn obtained that data from the US Census American Community Survey. I then deleted all unneccessary columns in each year's (2010, 2012, 2014 and 2016) CSV to keep just the census tract identifier columns, the tract number of and percent of foreign born people columns. I then joined each year's CSV to the Buffalo census tracts shapefile in QGIS. After doing these four joins, I exported the final shapefile as a GeoJSON using QGIS. I then made the GeoJSON mappable in this application using geojson.io."}, //Slide 1. Single <br>'s create new paragraphs without spaces between the paragraphs, double <br>'s create new paragraphs with spaces between the paragraphs, <strong></strong> bolds text

  {title: "Immigrant Hubs in 2010", text: "<strong> Trends: </strong> <br> As this map shows, immigrants tended to be concentrated in the portion of the city west of Main Street (the West Side) in 2010, with other smaller concentrations in Downtown, the University at Buffalo South Campus area in the northeastern corner of the city, and parts of the Broadway-Fillmore neighborhood on the East Side. <br> <br> <strong> Legend: </strong> <br> <u> Red:</u> Census tracts with <i> at least </i> 10.12% of their populations being foreign-born <br> <u> Blue:</u> Census tracts with <i> less than </i> 10.12% of their populations being foreign-born <br> <br><font size=2>Note: 10.12% is the 3rd quartile of all Buffalo census tracts' foreign born percentages for 2010. This was found when analyzing the 2010 tract foreign-born data CSV in Excel. </font> "}, //Slide 2. <font size=2> </font> makes text smaller (size 2 font), <i> </i> italicizes text, <u> </u> italicizes text. All of this is meant to enhance the readability of the text

  {title: "Immigrant Growth: 2010-12", text: "<strong> Trends: </strong> <br> As this map shows, six out of the eight Buffalo census tracts which received the most growth in percentages of their populations being foreign-born from 2010-12 were on the West Side. This shows how the majority of the biggest growth in immigrant population from 2010-12 was on the West Side. However, there was at least some growth in percentages of tract populations being foreign-born citywide from 2010-12. <br> <br> <strong> Legend: </strong> <br> <u> Red:</u> Census tracts with an <i> increase </i> of <i> 5% </i> in foreign-born population from 2010-12 <br> <u> Pink:</u> Census tracts with an <i> increase </i> of <i> 0-4.99% </i> in foreign-born population from 2010-12 <br> <u> Blue:</u> Census tracts with a <i> decrease </i> in percentage of population being foreign-born from 2010-12"}, //Slide 3

  {title: "Immigrant Growth: 2010-14", text: "<strong> Trends: </strong> <br> As this map shows, eight out of the twelve Buffalo census tracts which received the most growth in percentages of their populations being foreign-born from 2010-14 were on the West Side. This shows how the majority of the biggest growth in immigrant population from 2010-14 was on the West Side. However, there was at least some growth in percentages of tract populations being foreign-born citywide from 2010-14. <br> <br> <strong> Legend: </strong> <br> <u> Red:</u> Census tracts with an <i> increase </i> of <i> 5% </i> in foreign-born population from 2010-14 <br> <u> Pink:</u> Census tracts with an <i> increase </i> of <i> 0-4.99% </i> in foreign-born population from 2010-14 <br> <u> Blue:</u> Census tracts with a <i> decrease </i> in percentage of population being foreign-born from 2010-14"}, //Slide 4

  {title: "Immigrant Growth: 2010-16", text: "<strong> Trends: </strong> <br> As this map shows, ten out of the fifteen Buffalo census tracts which received the most growth in percentages of their populations being foreign-born from 2010-16 were on the West Side. This shows how the majority of the biggest growth in immigrant population from 2010-16 was on the West Side. However, there was at least some growth in percentages of tract populations being foreign-born citywide from 2010-16. <br> <br> <strong> Legend: </strong> <br> <u> Red:</u> Census tracts with an <i> increase </i> of <i> 5% </i> in foreign-born population from 2010-16 <br> <u> Pink:</u> Census tracts with an <i> increase </i> of <i> 0-4.99% </i> in foreign-born population from 2010-16 <br> <u> Blue:</u> Census tracts with a <i> decrease </i> in percentage of population being foreign-born from 2010-16"}, //Slide 5

  {title: "West Side: Buffalo's Immigrant Hub", text: "<strong> Trends: </strong> <br> All of these maps show how the West Side has received the most consistent rise in share of immigrant population, making it Buffalo's main immigrant hub. The West Side already served as the hub in 2010, and has continued to through to 2016. This is shown by how the majority of census tracts with the highest growths in percentages of populations being foreign-born from 2010-12, 2010-14 and 2010-16 have all been on the West Side. Therefore, the West Side has shown to have the most consistent growth in shares of immigrant population from 2010-16 compared to the rest of the city. Buffalo should continue to allocate resources to the West Side which help immigrants adjust to their new lives in Buffalo and the United States. However, the maps also show how there is at least some growth in immigrant population across the entire city. This shows how even though Buffalo should especially continue targeting its resources which help immigrants to the West Side, it is important to note how immigrants are coming in across the city, but most so on the West Side. <br> <br> <strong> Legend: </strong> <br> <u> Red:</u> Census tracts with an <i> increase </i> of <i> 5% </i> in foreign-born population from 2010-16 <br> <u> Pink:</u> Census tracts with an <i> increase </i> of <i> 0-4.99% </i> in foreign-born population from 2010-16 <br> <u> Blue:</u> Census tracts with a <i> decrease </i> in percentage of population being foreign-born from 2010-16"} //Slide 6
] //Establishes all 6 slides as an array. They are in an array so they can reference by functions later which build the slides and propel them forward. The array contains each slide's title and text.


var currentSlide = 0; //This first establishes the current slide to be at 0

var addTitle = (title) => {
  $('.sidebar').append(`<h1 id='title' style="text-align:left;color:blue;">${title}</h1>`) //"$('.sidebar')" references the element called sidebar in the index.html part of the application. ".append(`<h1 id='title'>${title}</h1>`)" essentially copies each slide's title established in the slide's array and pastes it into the space for the title in the sidebar created in index.html. "style="text-align:left;color:blue;" makes the title text align to the left like in Microsoft Word, and colors the text blue to color the sidebar blue and white to mimic Buffalo's city colors
} //In short, this is a function which adds each slide's title that was established in the "slides" array to the sidebar

var addText = (text) => {
  $('.sidebar').append(`<p id='text' style="text-align:left;color:blue;">${text}</p>`) //Exactly like the equivalent line in the addTitle function, except it copies each slide's narrative text established in the slide's array and pastes it into the space for the title in the sidebar created in index.html.
} //In short, this is a function which adds each slide's narrative text that was established in the "slides" array to the sidebar

var setMap = (color) => {
  $('#map')
} //In short, this is a function which adds the map established at the bottom of index.html to the map area of the HTML page established closer to the top of index.html


var overviewslide_style = {
    "color": 'purple', //Buffalo census tract polygons given purple outlines/stroke colors
    "weight": 1.5, //Polygons given outline/stroke weight of 1.5
    "fillOpacity": 0 //Opacity of 0 makes the census tract polygons completely transparent
}; //Beginning of conditional style-making process. This establishes the style for the Buffalo census tract polygons to be displayed on the intro slide. This slide just shows the tract boundaries

var slide2010_style = function(feature) { //Establishes the second slide's style. From here on, each slide's style turns the Buffalo census tracts into chloropleth maps (color-coding the tracts based on conditions about the tracts' data)
  if (feature.properties.data_FINAL_PCT_FB_10 >= 10.12) { //Means if a tract's PCT_FB_10 column (percent of population that's foreign born in 2010) is above 10.12% (the 3rd quartile of this column, calculated this from the data_FINAL csv in Excel containing each tract and its data), then give that tract a...
  return {"fillColor": 'red', //...fill color of red
          "color": 'purple', //...outline color of purple (this is the case for all slides)
          "weight": 1.5, //...outline weight of 1.5 (this is the case for all slides)
          "fillOpacity": 0.625}; //...and a fill opacity of 62.5% (this is the case for all slides except the first one)
} else return {"fillColor": 'lightblue', //Means if a tract has less than or equal 10.12% of its population that's foreign born in 2010, then give those tracts the characteristics described below
          "color": 'purple',
          "weight": 1.5,
          "fillOpacity": 0.625};
}; //In short, this gives the instructions for how to make the chloropleth map for just this slide alone

var slide2012_style = function(feature) { //Establishes the third slide's style. From here on, each slide's style draws Buffalo's census tracts in 3 different classes: 1) If their foreign born population percentages grew at least 5% since 2010, 2) Same as class 1, but had above 0 but less than 5% growth, and 3) Same as classes 1 and 2, except had either 0% growth or negative growth
  if (feature.properties.data_FINAL_Pct_Diff_12_10 >= 5) { //Means "if a tract's foreign-born population grew by at least 5% between 2010 and 2012, than draw that tract in this way..."
  return {"fillColor": 'red',
          "color": 'purple',
          "weight": 1.5,
          "fillOpacity": 0.625};
} else if (feature.properties.data_FINAL_Pct_Diff_12_10 >= 0 && feature.properties.data_FINAL_Pct_Diff_12_10 <= 5) { //Means "if a tract's foreign-born population grew by somewhere between 0 and 5% between 2010 and 2012, than draw that tract in this way..."
  return {"fillColor": 'pink',
          "color": 'purple',
          "weight": 1.5,
          "fillOpacity": 0.625};
} else if (feature.properties.data_FINAL_Pct_Diff_12_10 <= 0) { //Means "if a tract's foreign-born population either didn't grow at all or decreased between 2010 and 2012, than draw that tract in this way..."
  return {"fillColor": 'lightblue',
          "color": 'purple',
          "weight": 1.5,
          "fillOpacity": 0.625}
}
}; //In short, this sets the unique style of just this slide's polygons so it can be drawn later

var slide2014_style = function(feature) {
  if (feature.properties.data_FINAL_Pct_Diff_14_10 >= 5) { //Means "if a tract's foreign-born population grew by at least 5% between 2010 and 2014, than draw that tract in this way..."
  return {"fillColor": 'red',
          "color": 'purple',
          "weight": 1.5,
          "fillOpacity": 0.625};
} else if (feature.properties.data_FINAL_Pct_Diff_14_10 >= 0 && feature.properties.data_FINAL_Pct_Diff_14_10 <= 5) {
  return {"fillColor": 'pink',
          "color": 'purple',
          "weight": 1.5,
          "fillOpacity": 0.625};
} else if (feature.properties.data_FINAL_Pct_Diff_14_10 <= 0) {
  return {"fillColor": 'lightblue',
          "color": 'purple',
          "weight": 1.5,
          "fillOpacity": 0.625}
}
};

var last2slides_style = function(feature) { //Last 2 slides have the exact same census tract polygon coloring guidelines (difference between those 2 slides is the map center and zoom level)
  if (feature.properties.data_FINAL_Pct_Diff_16_10 >= 5) {
  return {"fillColor": 'red',
          "color": 'purple',
          "weight": 1.5,
          "fillOpacity": 0.625};
} else if (feature.properties.data_FINAL_Pct_Diff_16_10 >= 0 && feature.properties.data_FINAL_Pct_Diff_16_10 <= 5) {
  return {"fillColor": 'pink',
          "color": 'purple',
          "weight": 1.5,
          "fillOpacity": 0.625};
} else if (feature.properties.data_FINAL_Pct_Diff_16_10 <= 0) {
  return {"fillColor": 'lightblue',
          "color": 'purple',
          "weight": 1.5,
          "fillOpacity": 0.625}
}
};


var cleanup = () => {
  $('#title').remove()
  $('#text').remove()
} //In short, this function makes it so the title and text of the previous slide do not carry on into the next one (makes for the replacement of title and text per slide)

var buildSlide = (slideObject) => {
  cleanup() //Makes sure the title and text are assigned to their correct/corresponding slides
  addTitle(slideObject.title) //Adds each slide's title to the slide
  addText(slideObject.text) //Adds each slide's narrative text to the slide


if(currentSlide == 0){ //Slide "0" is the first slide, since the 0th item in the slides array is the 1st slide
  $('#previous').hide(); //means "if the current slide is the first slide, hide the previous button"
  } else {
    $('#previous').show(); //means "if the current slide is not the first slide, show the previous button"
    } //In short, this if statement hides the previous button for the first slide, but shows it on all other slides. Found out how to do from https://stackoverflow.com/questions/49141016/hide-disable-next-button-on-last-slide-and-prev-button-on-first-slide

if(currentSlide == 5){ //Slide "5" is the last slide, since the 5th item in the slides array is the 6th slide
  $('#next').hide();
  map.setView([42.920512, -78.922793], 13); //Sets the map center and zoom just for this last slide to the West Side of Buffalo
  } else {
    $('#next').show();
  } //In short, this if statement does 2 things: 1) hides the next button for the last slide, but shows it on all other slides (found out how to do from https://stackoverflow.com/questions/49141016/hide-disable-next-button-on-last-slide-and-prev-button-on-first-slide), 2) sets the map center and zoom just for this slide to the West Side of Buffalo


if(currentSlide == 0){
  var myStyle = overviewslide_style; //Means "if the current slide is the first one, then draw its census tract polygons in the style for that slide I made when creating each slide's style." The "var myStyle = " makes it so the application loops through the slides' styles in the same way it loops through the slides themselves not long after this
} else if(currentSlide == 1){ //If the current slide is the second one, then give it the second slide's style, etc.
  var myStyle = slide2010_style;
} else if(currentSlide == 2){
  var myStyle = slide2012_style;
} else if(currentSlide == 3){
  var myStyle = slide2014_style;
} else if(currentSlide == 4 || 5){ //Means "if it is the 4th OR 5th slide, then..." since || means "or" in JavaScript
  var myStyle = last2slides_style;
}


  $(document).ready(function() { //"document" refers to the app
    $.ajax("https://gist.githubusercontent.com/IanSchwarzenberg/8d5458fd7e05475419428140606ac3de/raw/dc0c0078fd904f0e53a20b99cbc9625043d35708/map.geojson").done(function(data) { //Extracts the unparsed/not-yet-mappable geoJSON from that link
      var parsedData = JSON.parse(data); //Parses the geoJSON to make it mappable, as opposed to its original format where it can't be mapped
      featureGroup = L.geoJson(parsedData, { // Creates a variable which stores the parsed geoJSON and adds it to the map (the "L.geoJson" means add geoJSON to mapp as a layer on it) based on the conditions (ex. the style)
        style: myStyle //This makes the application loop through the slides' styles in the same way it loops through the slides themselves. This is where that big if else statement not long before this that deals with the slides' styles comes into play
      }).addTo(map); //In short, this batch of code maps the geoJSON onto the map
})
})
}


buildSlide(slides[currentSlide]) //Once everything above gets done, the slides get built/created. slides[currentSlide] refers to the array containing each slide's title, narrative text, etc, the "[currentSlide]" part makes it so the application loops through the array of slides, thereby building each slide

$("#next").click(() => {
  currentSlide = currentSlide + 1; //When the "next" button is clicked, it goes to the next slide in the deck (this is what "currentSlide + 1" means)
  map.removeLayer(featureGroup); //Removes the geojson before the next slide so the app does not keep drawing the geojson over itself when the user goes forward through the slides
  buildSlide(slides[currentSlide]); //Makes it so when the "next" button is clicked, the next slide in the deck gets created
}) //In short, this batch of code creates the functionality behind the next button, thereby making something happen when the user clicks on the next button on the application's user interface

$("#previous").click(() => {
  currentSlide = currentSlide - 1; //When the back button is clicked, it goes to the slide before (this is what "currentSlide - 1" means)
  map.removeLayer(featureGroup); //Removes the geojson whenever the user clicks the previous button so the app does not keep drawing the geojson over itself when the user goes backwards through the slides
  map.setView([42.900336, -78.854112], 12); //This line prevents the map from being stuck on the last slide's unique center and zoom after they finish viewing the last slide and want to go back to previous slides (this is a recreation of the original zoom and center created at the bottom of index.html)
  buildSlide(slides[currentSlide]); //Makes it so when the "previous" button is clicked, the previous slide in the deck gets created
}) //In short, this batch of code creates the functionality behind the previous button, thereby making something happen when the user clicks on the previous button on the application's user interface
