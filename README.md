# Bootcamp Team 1
* Square: Charlie Ito
* Triangle: Sarah Volk
* Circle: Andy LaBounty
* X: Jenny Pardue

## Deliverable #1:
Description of source data: We have a data set from Kaggle of 119,307 samples of diamonds.
* Link to dataset: https://www.kaggle.com/miguelcorraljr/brilliant-diamonds

Characteristics in dataset: 
Shape: Round, Emerald, etc.
Price (we have in dataset and will use for live predictions): US dollars
* Carat (Unit of measurement used to describe the weight of a diamond)
* Cut: Ideal, Very Good, etc.
* Color: Natural color or lack of color visible within a diamond, based on the GIA grade scale
* Clarity: Visibility of natural microscopic inclusions and imperfections within a diamond
* Diamond Certification: report aka Diamond certificate or grading report provided by an independent gemology lab
* Type: natural or lab-grown

## Questions to be answered by project
1. How do these values affect the price? 
1. Which characteristic adds more weight to the price? 
1. Can we predict a diamond’s price off of it’s characteristic? 
1. Based on lab vs. natural, are the lab-grown diamonds rated higher?
1. Are lab-grown cheaper and do you get more value? 

## Process decisions made
* Hypothesis: Lab-grown diamonds will have a more affordable price for similar characteristics of that of a natural diamond. 
* Database Engine: Postgres
* Machine Learning Model: Linear Regression for predicting price; if enough time, we will use classifier to decide whether it’s lab grown or natural.
* Live Predictions: Yes
