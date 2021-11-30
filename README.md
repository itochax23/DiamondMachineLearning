# Bootcamp Team 1

## Overview
text and image. Whatcha doin. Why?

### Role Distribution
Each team member has choosen a shape, with each shape responsible for a specific task. The shapes to choose from are square, circle, triangle, and X. However, the one initially assigned the X role will transition through the other roles for the remaining segments.  
■: Primary for setup of github repository, and ensuring everyone has their own branch to work from. Creating visualizations to help determine dashboards that best present data for storytelling.    
▲: Primary for setting up a machine learning model, from concept to execution, with input from the team.    
●: Primary for creating mockup database, for testing and submission, with input from the team. Contributes to interactive elements and web presence.    
✖: Primary for concept design of interactive elements and web presence, in addition to project documentation. 

## Results
Text and images and links, etc.

## Conclusion
Text and keep it short!

---

# Technologies Used
## Data Cleaning and Analysis
Pandas will be used to clean the data and perform an exploratory analysis. Further analysis will be completed using Python.

## Database Storage
Mongo is the database we intend to use, and we will integrate Flask to display the data.

## Machine Learning
SciKitLearn is the ML library we'll be using to create a classifier. Our training and testing setup is ___. Extra ML verbiage here.

## Dashboard
In addition to using a Flask template, we will also integrate Tableau for a fully functioning and interactive dashboard.

---
# Instructions
## Deliverable #1:
Description of source data: We have a data set from Kaggle of 119,307 samples of diamonds.
* Link to dataset: https://www.kaggle.com/miguelcorraljr/brilliant-diamonds

Characteristics in dataset: 
* Shape: Round, Emerald, etc.
* Price (we have in dataset and will use for live predictions): US dollars
* Carat (Unit of measurement used to describe the weight of a diamond)
* Cut: Ideal, Very Good, etc.
* Color: Natural color or lack of color visible within a diamond, based on the GIA grade scale
* Clarity: Visibility of natural microscopic inclusions and imperfections within a diamond
* Diamond Certification: report aka Diamond certificate or grading report provided by an independent gemology lab
* Type: natural or lab-grown

### Questions to be answered by project
1. How do these values affect the price? 
1. Which characteristic adds more value to the price? 
1. Can we predict a diamond’s price off of its characteristic? 
1. Based on lab vs. natural, are the lab-grown diamonds rated higher?
2. What, if any, characteristics cannot be replicated by lab-grown diamonds?

### Process decisions made
* Hypothesis: Lab-grown diamonds will have a more affordable price for similar characteristics of that of a natural diamond. 
* Database Engine: Postgres
* Machine Learning Model: Logistic Regression for predicting type (lab vs. natural).
* Live Predictions: Yes

---

## Deliverable #2:
Initial ML model is developed. Must have a Jupyter notebook containing:
* Description of preliminary data pre-processing
* Description of features used in the model
* Description of how data was split for training/testing
* Explanation of model choice, including benefits and limitations
* Preliminary model evaluation

![Diamond Logistic Model](Diamond_Model.ipynb)
 
### Database development
* Database schema scripts:\
![Schema Script](Querries/schema.sql)
* Jupyter notebook for ETL:\
![ETL - Data Cleaning](Diamonds_Data_Cleaning.ipynb)
* Instructions on how to create the database
* Download dataset from: https://www.kaggle.com/miguelcorraljr/brilliant-diamonds
* Write queries to create table in PgAdmin.
* Import dataset into table.
* Export table to a csv file.
* Import csv as a dataframe in Jupyter Notebook
* Clean dataframe by converting the following non-numerical columns to numerical reference points:
 - Shape column (Alphabetical): Asscher = 1, Cushion = 2, Emerald = 3, Heart = 4, Marquise = 5, Oval = 6, Pear = 7, Princess = 8, Radiant = 9, Round = 10
 - Cut column (lowest grade to highest grade): Fair = 1, Good = 2, Very Good = 3, Ideal = 4, Super Ideal = 5
 - Color column (lowest grade to highest grade): J = 1, I = 2, H = 3, G = 4, F = 5, E = 6, D = 7
 - Clarity column (lowest grade to highest grade): SI2 = 1, SI1 = 2, VS2 = 3, VS1 = 4, VVS2 = 5, VVS1 = 6, IF = 7, FL = 8
 - Report column (no particular order): GIA = 1, HRD = 2, IGI = 3, GCAL = 4
 - Type column (boolean values): natural = 1, lab = 2
* Further clean the dataframe by removing the unneeded url and date_fetched column
* Export the cleaned dataframe into a csv file.
 
### Dashboard blueprint
* Interactive elements
* Tools/technologies for the creating the dashboard: HTML/CSS for website. Flask for live prediction.\
**Title: How do you like your diamonds?**\
**Subtitle: Predicting lab-grown or natural diamonds.**\
Background Image: Diamonds\
**Header:**
* Home Button
* About Button - Jumps to Project Overview Section
* Live Prediction Button - Jumps to Live Prediction
* Analysis Button - Jumps to Analysis
* Team Button\
**Project Overview Section:**
* Intro: What the project is about and what the user will be doing.\
**Live Prediction Section:**
* This will have the prediction tool to input xyz for a predicted output.
* The user will input the data.
* Pre-chosen inputs as an option for user. (?)\
**Analysis Section:**
* This will have the model and accuracy results.
* Along with some possible visuals.\
**Team Section:**
*  Contains our names and GitHub urls.
*  Contains credits at the bottom.


 
