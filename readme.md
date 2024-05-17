# Recipe Recommendation System

![Food-A-Holic](https://i.ibb.co/StwJ0xp/Screenshot-2024-04-13-at-2-13-57-PM.png)

## Introduction

Welcome to Food-A-Holic, where culinary exploration meets personalized recommendations! Our platform, powered by state-of-the-art machine learning algorithms, matches you with delectable recipes based on your preferred ingredients.

## Table of Contents

1. [About](#about)
2. [Features](#features)
3. [Working of Application.](#working-of-application)
4. [Installation](#installation)
    1. [Using Docker](#with-docker)
    2. [Using Node and Python](#local)
    
6. [Dependencies](#dependencies)
7. [Technology Used](#used)


## About <a name="about"></a>

- Food-A-Holic offers "*personalized recipe recommendations*" tailored to your taste preferences.
- Input specific ingredients or recipe names to discover the perfect dish for any occasion.
- Powered by Flask, our backend efficiently handles requests and delivers recommendations in real-time.
- Leveraging machine learning techniques like TF-IDF and Cosine Similarity, we provide tailored suggestions.
- Embark on a culinary adventure and experience the joy of cooking with Food-A-Holic!

## Features <a name="features"></a>
- **Personalized recipe recommendations based on user preferences:**
Food-A-Holic analyzes user interaction history and preferences to generate custom recipe suggestions that align with their tastes and dietary preferences.
- **Flexible input options for specifying ingredients or recipe names**: Users can input specific ingredients they have on hand or the name of a particular recipe they're interested in.
- **User-friendly interface built with React for seamless navigation**: The React frontend provides an intuitive and visually appealing interface, enabling users to navigate through the application effortlessly and discover recipes with ease.
- **Efficient backend powered by Flask for real-time recommendation delivery**: Food-A-Holic's Flask backend efficiently handles incoming requests, processes data, and delivers recipe recommendations in real-time to ensure a responsive user experience.
- **Machine learning-driven analysis for tailored recipe suggestions**: Leveraging machine learning algorithms such as TF-IDF and Cosine Similarity, Food-A-Holic analyzes recipe descriptions and user input to generate personalized recipe recommendations that match the user's preferences.

## Working of Application. <a name="working-of-application"></a>
   - #### Accessing the application.
      ![Accessing](https://media1.giphy.com/media/zv1FQrWAKEJfTHvPvJ/200.webp)
   - #### Searching based on Recipe.
      ![Accessing](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExajVpM2J1cTBncXhvNG5yYXN0amduY292dWRpdzZwNzZhampva2J4bCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/9GGz3QiE8ME7DbZHlf/giphy/200.gif)
   - #### Result according to the search (Recipe).
      ![Accessing](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNTgzMjU4dXR5c3kzN3BxN3QxdnJ3dWZqaHVtN2ljcHUzcmZmNGowZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/K6bEGJMpW8dlLlmQlH/giphy.gif)
   - #### Searching based on Ingredients.
      ![Accessing](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExczlta3VpcDI4M2UwZTI5bjR4bXFvMzZjZGQzNzZmbnZubmdkbTVlZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/OldIGjR4Nkl5Z30c5A/giphy/200.gif)
   - #### Result according to the search (Ingredients).
      ![Accessing](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbWgyMTE1c3JjcnVhYnMweWl3dnJ0b3BuNGVlanNhbm00YjVhMmF1ZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/9mV4itpQVJG1IyIX2z/giphy.gif)

  #### to view the whole application from start to end ***(Click the following Image)***

[![Watch the video](https://i.ibb.co/gvbmQ2b/Screenshot-2024-04-14-at-2-06-05-AM.png)](https://drive.google.com/file/d/1wUP4CzSPj4lX5bdT-x6Pk1-KqLtfvS5K/view?usp=sharing)

## Installation <a name="installation"></a>
 There are two ways to install or run the application in your system.
  
1. #### With Docker ( using docker-compose file ): <a name="with-docker"></a>

   1. ##### STEP 1: Install docker ( If not installed already )
       - For Mac user [Link](https://www.youtube.com/watch?v=-EXlfSsP49A).
       - For Windows User [link](https://www.youtube.com/watch?v=4xK-zaCRiPQ).
   2. ##### Clone the Gituhub Repository.
    ```[/bin/bash]
     git clone https://github.com/ManasG0yal/Recipe-Matching-System.git
    ```
    
   3. ##### Then cd into the directory.
   ```[/bin/bash]
     cd /Recipe-Matching-System
    ```
   4. ##### Use Docker command to create the container and use them.
   ```[/bin/bash]
     docker-compose up or docker compose up 
    ```

   this will use the docker compose file inside the folder to create the container using the image from docker-hub.
   
   ***Now wait for 20-25 minutes for the first time.*** 
   
   then you can access the application using ***localhost:3000***.


2. #### With Local Deployement (Using Python and Node ) <a name="local"></a>
   1. ##### For this first you need to download virtualenv 
       - for virtualenv see this [video](https://www.youtube.com/watch?v=F7AK-WzpYdY&list=PLMOobVGrchXN5tKYdyx-d2OwwgxJuqDVH).

   
    2. ##### using the above video create the virtual environment and peform below commands.
     ```[/bin/bash]
     pip install virtualenv 
    ```
    ```[/bin/bash]
     virtualenv /* name for your env */ -p python3
    ```
    ```[/bin/bash]
     pip install requirement.txt 
    ```
    ```[/bin/bash]
     python apinumtwo.py
    ```
    
    this will start your backend and you are able to access it from ***localhost:1212***

    3. ##### Now to start the frontend you need to have Node installed 
       - For Mac user [Link](https://www.youtube.com/watch?v=I8H4wolRFBk).
       - For Windows User [link](https://www.youtube.com/watch?v=06X51c6WHsQ).
     
    4. ##### After this cd into frontend directory inside the recipe and run following commands.

    ```[/bin/bash]
     cd frontend
    ```
    ```[/bin/bash]
     npm install 
    ```
    ```[/bin/bash]
     npm start 
    ```
    this will start your frontend and you will be able to access it from ***localhost:3000***

## Dependencies <a name="dependencies"></a>

   The dependencies are variable but main dependencies are 
   1. Node.
   2. Python.
   3. React-js.
   4. Flask.
   5. Scikit-Learn.

## Technology Used <a name="usd"></a>

###

<div align="left">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="40" alt="javascript logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height="40" alt="react logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" height="40" alt="flask logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" height="40" alt="python logo"  />
</div>

###
