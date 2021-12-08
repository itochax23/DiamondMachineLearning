# Diamonds Prediction With Machine Learning

## Overview
Our project goal was to see if a logistic regression, machine learning, model could predict whether a diamond with certain characteristics was natural or lab-grown. We also wanted to find out which characteristic(s) of a diamond makes it valuable. 

Part of our project was to import and clean the data and use subsequent logistic regression to determine the origin of the diamond: natural or lab-grown. 

Working remotely as a team of four, we assigned roles to each team member and dug into the front and backend of our predictive website to create a user-friendly and esthetically pleasing site which would be both educational and interactive. 

Users of the site are able to input diamond attributes of their choice and our model will deliver the result of their diamond based on user input.

## Dataset
Our dataset was collected by Miguel Corral, Jr. The data contains eight characteristics of a diamond: shape, cut, color, clarity, carat, price, type and report. 

https://www.kaggle.com/miguelcorraljr/brilliant-diamonds

## Model
A logistic regression model was used to predict the diamond type. This model allows us to predict binary outcomes, meaning that there are only two possible results. 

The features we used for the model were shape, cut, color, clarity, carat, price, and report. Our target was the diamond's type, either natural or lab-grown. After running the logistic model, an accuracy score of 0.98 was achieved. 

## Procedures

### Clone this repository to your desktop and then complete the following: 
1. Navigate to the folder that contains `app.py` and launch a GitBash (Windows) or Terminal (Mac).
2. Type `python app.py` and then hit ENTER.
3. Enter the following address in your Chrome browser: http://127.0.0.1:5000/
4. Input your preferences for each diamond attribute: shape, cut, color, clarity, carat, price, type and report. 
5. Click `predict` to see your diamond type prediction! 

## Technologies Used

### Data Cleaning and Analysis
Pandas was used to clean the data and perform an exploratory analysis. Further analysis was completed using Python.

### Database Storage
Postgres was the database we used, integrating it into Jupyter Notebook as a DataFrame. 

### Machine Learning
SciKitLearn is the machine learning library that was used to create a classifier. 

### Visuals
We achieved visuals using Tableau and Seaborn. 

### Dashboard
We used Javascript, HTML and CSS to create the dashboard. Additionally, we used a Flask template and integrated Tableau for a fully functioning and interactive dashboard.

## Gratitude
We would like to thank our instructor, Farshad Esnaashari, for his guidance and leadership through this six-month certification program. As well, we want to highlight the efforts of the TAs in this program: Benji, Stephen, David and Gabe, for their concentrated efforts and experiential suggestions in making each module and final project come to fruition.  

Thank you! \
Charlie Ito, Sarah Volk, Andy LaBounty and Jenn Pardue




References: \
https://www.lumeradiamonds.com/diamond-education/diamond-carat-weight \
https://shop.kenanddanadesign.com/pages/lab-diamonds-mined-diamonds-cost-prices \
https://www.gemsociety.org/article/lab-grown-diamond-pricing/ \
Image: https://pixabay.com/photos/diamonds-gem-jewel-crystal-glass-4231176/ 



 
