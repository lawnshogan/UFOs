<p align="center">
    UFO Sighting Analysis
</p>

<p align="center">
    Module 11 for Data Science Bootcamp - UFO Sightings using JavaScript
</p>

###  **Project Overview**
We've collected a JSON file containing UFO sighting data. In order to properly and effectively display this data, we need to create a webpage and dynamic filter table so users can easily filter the data they are interested in. We want our users to be able to filter on multiple columns to widdle down their results. 

- ### UFO data and its purpose:
    1. Why are we analyzing this data?
    2. What is the goal and possible outcomes?
    3. What pieces of data can help build toward and obtain our goal(s)?

## **Analysis**
The most challenging part for me was switching between the languages but after practicing I had a clear understanding of each file's purpose. I was stuck at one point because the filters would not filter the data, however it was because I needed to target input elements rather than any element with an ID of filter-btn. Once I adjusted my script using "d3.selectAll("input").on("change", updateFilters);", the filters began filtering the data and the webpage was complete.

### **Results**
<p align="center">
  <img src="https://github.com/lawnshogan/UFOs/blob/main/static/images/Webpage.png" width="700"/>
</p>


### **Summary**
After I got the webpage and filters to work properly, I began going a little further and added some elements to the webpage. As you can see, the webpage also has a scroll table that makes it a little easier to navigate and view the results. I found that once the main code was created, it was easier to add these things into the code. Overall, it was very interesting putting all the different moving parts together and linking them to create this webpage.
