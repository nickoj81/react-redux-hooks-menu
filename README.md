### Pirum React Front-End Interview Test

Please read the [pdf file](https://bitbucket.org/pirumcw/pirum-react-test/raw/2f4afd758b4b0ca46699f9017a181e3a362c53e5/Pirum%20React%20Front-end%20test.pdf) 
for the full description with screenshots

### #Introduction

In this test your task is to display a list of music albums and songs, using React and Redux.


#### Specification

* Test data: in the data.json file we provide a static list of songs.

* Each song in the list has 3 attributes: band, album, song

* We expect to see a list of bands and albums with in an expandable/collapsible panel for the
  songs within the given album (see screenshots on page 2):
    * The expand/collapse button on the individual albums should expand/collapse the list of songs
    * The expand/collapse button on the main Albums title should expand/collapse all the albums
 
* The main technologies you are expected to use
    * Choice of ajax: to get the list of songs from the server
    * Redux: to store the data
    * React: to display the list
 
* The supported browsers are: IE11, Firefox, Chrome, the solution expected to work on these.
  (note: only IE11, no backward compatibility with earlier IE is expected)

The following files are included in the zip file:

|  File                            |  Description                                 |
|  ------------------------------  |  ------------------------------------------  |        
|  public/data.json                |  Static dataset for the test in json format  |
|  public/index.html               |  Main html page                              |
|  src/                            |  Empty source directory                      |
|  package.json                    |  Basic template for npm / yarn|              |
|  yarn.lock                       |  Empty template for yarn                     |
|  Pirum React Front-end test.pdf  |  This file                                   |


#### Expected solution

1. The main purpose of this test is for you to show your ability to design and implement
   bespoke web sites using React/Redux. We expect a working implementation, not just a
   screen design.

2. Please use ajax for getting the list of songs from the server, do not just import them.

3. Please use Redux to store the data.

4. Please use React for displaying the list.

5. You�re free to use any related library you choose, this test not just about implementation
   skills but to see your design choices and your ability to create an integrated solution from
   multiple technologies.