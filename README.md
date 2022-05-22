

# Libraries and Depencies

* Reactjs
* Nextjs
* sass
* axios

## Project Guides

This projects was created using nextjs which is a Static-Site-Generator(SSG) for react projects it was created to handle complex routing operations which might be fraustrating 

##### Runing The Project

* The project runs on a localhost port 5502 which runs locally on any computer it is installed on when runing the project you have to open a command prompt/command line on your computer and navigate to the folder location and type a command "npm run dev" and this will start up the project on the port mentioned earlier and then you can be able to preview the project on a browser by typing "http://localhost:5502" on the address bar
* Go to a browser and choose a route to navigate to

##### Project Structure 

* By default a nextjs app has a project structure it creates to ease development
* there are 6 folders in the project; components, pages, next, node_modules, public, styles and there are also some configuration files which determine the project configuration these files include; jsonconfig.json, package.json, nextconfig.json
* The pages folder contains the different routes of the project as js files because that is how nextjs projects are designed each js file represent a web page in the pages folder i have 5 pages : index.js, comingsoon.js, github.js   , about.js and _app.js
* The components folder consist of different resuable components for different pages and it is further split into 2 folders :layout and widgets. the layout folder is used for the general reusable layout component for different pages and the widgets folder contains some other components that can be resused in the pages
* The styles folder contains the stylesheets written in scss/sass used in creating the styles for the project it is divided into files and folders , a setup folder which contains the variables and mixin stylesheets and smaller stylesheets which represent each page on the project
