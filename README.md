# Mixed-messages your friendly neighborhood fortune teller!

## contents:

- Introduction
- Technologies
    - dependencies
- Installation
	- How to run the program
- How does it work?
- Features
- Future updates

## Introduction
This is a simple little script that when started generates a fortune and prints it out in the console. 
The output is composed of a random greeting message, a random fortune and a random goodbye message.

## Technologies
- Node.js 
    - [found here](https://nodejs.org/en/) 
- Javascript

## Installation
To install the program simply download the mixed-message.js file.

- To run the program open you prefered command line and navigate to the folder where you saved the mixed-message.js. 
then write the following: 
```
node mixed-message.js
```

## How does it work?
Different greetings, goodbyes and fortunes are store in different arrays. A **getRandom()** function generates 3 random
integer and these are used to index the arrays containing phrases. By doing this 1 random greeting, fortune and goodbye is retrieved, concatinated together,
then printed to the console for your reading pleasure.

## Features
1. Generates a random fortune
2. Scalability. The different arrays can easily be scaled to increase the number of possible outputs.
3. Easy to repurpose. By changing the contents of the three different arrays. the entire random message can be changed to
ouput anything you like. Without having to make changes to the rest of the code.

## Future updates
- create a website using HTML and CSS to output the randomly generated message in a neat interface.