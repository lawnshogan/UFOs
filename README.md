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


<p align="center">
  <img src="https://github.com/lawnshogan/election-analysis/blob/main/Resources/Candidate%20%26%20County%20Votes%20-%20Code%20Block.png" width="700"/>
</p>




### **Results**




### **Summary**


I would tell them if they got me more data there would be more analysis I could perform and more answers that could be answered. Sure it's great we got election results that are accurate, but what if we want to know more demographics about these these voters?

This script could also be used in State or even Federal elections as well and could be altered to look at districts, counties, states, regions - anything really.

If Diana DeGette could get information regarding her 272,892 voters, she might be able to win the following election as well. This analysis could be performed on her select group of voters with more data.
