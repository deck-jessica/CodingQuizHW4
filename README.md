# CodingQuizHW4
## Coding Quiz with Javascript

This project was undertaken to create a coding quiz that both times and scores user responses. The quiz content could easily be changed, but this specific quiz reviews Javascript basics. Behind the scenes in the quiz, I created CSS, HTML and Javascript documents to begin the quiz, sort through the available questions, and return a score based on responses. Users are also penalized for wrong answers with a deduction of time (not score). Once the user completes the quiz, the objective is to have the scores be stored locally and presented on a high score display. This quiz also provides a simple "right" or "wrong" feedback displayed to indicate if the responses are correct or not.  

This web applicaton is also styled to be responsive to given screen size. This provides accessibility from mobile devices.

## Installation

This project can be viewed and used using any web browser from the link provided.

[Coding Quiz](https://deck-jessica.github.io/CodingQuizHW4/)

## Usage 

This page can be accessed and used to "quiz your knowledge' on Javascript basics. Upon entering the site, you will be given a Start button. Once this is clicked, thanks to an eventListener, the timer function will begin and the quiz questions will display one at a time. The quiz length of the timer is 20 seconds per question on the quiz. Once the timer starts, user will use select an answer. If they have selected correctly, the next question will render, and a "right" will display at the bottom of the question box. If they select wrong, 10 seconds will be deducted from the time left, and "wrong" will display at the bottom of the quiz. The quiz will continue until the questions have been exhausted or time runs out. At the conclusion of the quiz, the user will be prompted to enter their name to be stored in the high score section. Their score is a compliation of the correct answers from the quiz.  



![Coding Quiz Begin](/quizbegin.jpg)
![Coding Quiz Question](/questionquiz.jpg)
![Finish Quiz](/winnerquiz.jpg)

## Credits

I used my Bootcamp course materials, and some minor help from my classmates and LAs. I also relied on some Youtube videos for ideas on how to set up the random functions and timers, and found some assistance during the last minute hours before the project was due from some amazing LAs within the BootCamp.



## License

MIT License

Copyright (c) [2020] [Jessica Deck]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


---


