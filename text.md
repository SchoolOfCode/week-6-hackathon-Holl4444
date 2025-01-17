
# 👾 Space Escape! 👾

## Contents
* [Overview](#overview)
* [Tech Stack](#tech-stack)
* [Running the Tests](#running-tests)
* [Screenshots](#screenshots)
* [Process](#the-process)
* [What I learnt](#what-i-learnt)
* [Continued development](#continued-development)
* [Authors](#authors)
* [Acknowledgements](#acknowledgements)

# Overview

The Challenge:\
Creating a CodeWars like challenge with a theme that is continous across team members!
Using Unit testing.


## Tech Stack

- Node
- Vitest
- Javascript


## Running Tests

To run tests, run the following command

```bash
  npm run test
```

To check  coverage, run the following command

```bash
  npm run coverage
```

## Screenshots
![MainStory](https://github.com/user-attachments/assets/a34d0522-4de3-4189-9de6-ff65343e3e6a)
![MainFunction](https://github.com/user-attachments/assets/bd9e2319-cab0-42b4-9fe2-0a6c60d4d809)
![GoodResults/story](https://github.com/user-attachments/assets/6303e92c-962b-44be-a031-4a6ad77922b9)
![Bad Result](https://github.com/user-attachments/assets/3bd8695f-2e09-4cfe-8b95-7999644d57cf)


https://vitest.dev/

## The Process
I'll mostly just discuss the solo part of this project here but the project as a whole was a team effort. I've linked to my awesome team mates' GitHub accounts in the acknowledgements section so you can go and admire their work!
Our separate test projects will have one presentation and must have a cohesive theme. We spent the first part of our project time brainstorming theme ideas (The amount of time to dedicate to this was decided in advance as we are a majority of creative types!). We then refined and delegated our individual tasks. The overall theme we chose was a space adventure. An escape room in three parts. To follow the story you have to visit each mini project.

One of the techniques we used as a group was the BrainTrust technique. We had recently learnt about useful it can be helping teammates make choices without foisting our ideas on them. As we started working individually, we stayed in a video conference, on camera but muted so that we were available when problems arose, to support one another and learn as a group.

My section was the final challenge - in order to defeat the villain of the piece we have to transform a given number into binary.

We had worked with Vitest before so installing and setting it up was becoming second nature. After installing it as a developer dependency I added a test script to the package.json in order to run it with node.
Although it doesn't fulfill the demands of TDD, I felt my best option was to solve the problem first so I would have something to test against. I made the three functions I would most expect to see people using to solve the puzzle. A .toString()
function, one using an IF / ELSE block and finally the recursive function.

The next move was to fill in some tests. 
First things first I checked my tests could fail (and continued to do so throughout the process). I started with what I wanted to see and tested several values checking for the expected results. I tried out Vitest's test.each() method to keep the code clean and to be able to adjust my variables easily.
The next target was type as I had been a bit mischevious and asked for an integer as a return value to stymie users hoping to pass by using .toString(). I really struggled with this; I was keen to try out some of the other options within Vitest and had spotted expectTypeOf but whatever I tried I couldn't get one to fail without timing out. At first I thought I'd cracked the issue as I saw I was getting a ``` callstack exceeded``` error and as I was using the recursive function to test with at the time I thought by switching to the if/else function I would stop making hopeless calls. Sadly not, with a simpler function the test was unable to fail. After pawing over the docs again I came to the conclusion that I would need to play around with the .config file to make it work and I had run out of time to make big moves. I admitted defeat on this one and went back to keeping it simple.\
![Simples](https://github.com/user-attachments/assets/22a7902a-d552-496b-8877-994e8e990e09)

The other significant issue I came up against was thanks to my insistence on an integer return value. I didn't want to get into the territory of bigInts and binary numbers quickly get long so I had to limit the length of possible inputs! After a fair amount of negotiating with chatGPT and a binary converter site, I came to a decision about what the maximum decimal number could be in order to stay within 15 digits when converted to binary!\
![BigInt](https://github.com/user-attachments/assets/9a07a657-1881-4ae0-868a-46415729c1eb)

I added a few more tests such as ensuring a Fail in the case of negative numbers and making sure results were in the limits set; I was about to sit and have a think about what else I might need when I remembered coverage tests. It was no trouble to install Vitest V8 and add a "coverage" script into the package.json after which I could see that remarkably I already had 100% coverage!\
![Cover](https://github.com/user-attachments/assets/4b2ecc89-50bd-4107-82a3-90b132394af3)

At this point testing was done...and I spent some time trying to tie in the story in a way that would keep users invested. By continuing to test you will get various different humorous scenarios of how you are defeated or how you are victorious. I had already thought about using the describe() and test() methods to do this but putting everything into the test output was disastrous. You could barely read the tests and were getting bombarded with the story element:\
![Mess](https://github.com/user-attachments/assets/d37ccf49-b71d-4014-958f-d6988d675987)
After having a think I decided to hide the various response options in a hidden file and output them just once for each test refresh.\
![Better](https://github.com/user-attachments/assets/805a3dd3-16a3-49c5-a281-c127a0f69961)


### What I learnt
A big takeaway for me was acknowledging that I am becoming less intimidated by documentation. Every week it becomes clearer!
It was great to find a way to make testing just a little more creative. Hopefully as well as entertaining and keeping me focused, users will enjoy the bit of fun.
I was able to learn to communicate with AI a little better, though I think I'll be sticking to the infallible CS50 rubberduck AI until I can figure out how to fully prevent them giving out spoilers!
Taking the time to add variables to my tests was a great way to make them easy to read and update.

### Continued development
With more time I'd revisit the config file as it's the next frontier!

### Useful resources
https://vitest.dev/

## Authors

- [@Holl4444](https://github.com/)

  
## Acknowledgements

 - [School of Code](https://schoolofcode.co.uk/)
 - [Carmen Zakaria](https://github.com/CarmenZak)
 - [J. Jack](https://github.com/Jackafella1)
 - [Awesome Readme Templates](https://awesomeopensource.com/project/elangosundar/awesome-README-templates)

