# portfolio-js-loan


3️⃣ My third project while studying on the course "Practical JavaScript (Advanced)". 
Project "Loan"💸

Multi-page site and scripts
completely OOP style.

Tasks:

Good day, developer. You have received an archive with the sources of our project. You have a bare-metal layout without interactivity. The archive contains everything you need to complete it: HTML layout, styles, all the necessary images and fonts (already connected). Note that some elements will need to set the display (flex) property to hide / show them.

You have the right to change the project as you need to achieve the goal - add the necessary ids, classes, styles, animations, connect additional styles (for example animate.css) ...

But there are also several conditions:
JavaScript code must be native, without using libraries, frameworks or plugins (eg JQuery)
The console should be clear of any errors
All variable / class names should not contain Cyrillic or transliteration. No peremennaya
The final version should be built on any modular structure. We plan to expand in the future.
Operability in all modern browsers (Chrome, Firefox, Opera, IE11, Edge, Safari)
Animations are very welcome, but are also left to discretion (you can change the installed classes from animate.css as you like)
Using ES6


List of tasks for implementation:

1) The index.html page should be implemented as a large slider, where each slide is the entire page.
Switching pages only goes forward by clicking on this arrow:
When you click on the logo - there is a transition to the first slide:
If the slides are over, go to the first slide.

2) The modules.html page should be implemented in a similar way.
In addition, it is necessary to implement navigation under the content of the module.

3) On the first screen, when you click on the button with the play class
It is necessary to show the block with the overlay class and show the required video, the link to which is in the data-url of the button that the user clicked. Please note that this script must be universal and change the video depending on the button.

Also, when you click on the cross, you must completely close the modal window.


4) On the first screen there is a slider with modules.
It is necessary to implement it: arrows for switching slides.

5) On the same slider:
In the current slide, the opacity of the title changes from 0.4 to 1.
On the current slide, the arrow (card__controls-arrow) becomes visible. (via opacity)
Hide on inactive.

6) There is a list of differences on the second page.
Initially, both lists should look like shown in position 1.
When you click on the cross, the next step opens - adding a card in front, the “click to show” card is shifted below.
When the third card appears, the “click to show” card disappears.
It is desirable to use animation similar to fadeIn.

7) On the third page, you need to implement a slider:
Arrows must work without fail, conditions are the same as in the first slider.
In the slider itself, you need to automatically scroll every 5 seconds.
Also, on the active slide, you need to show the elements (via opacity):
card__description
card__controls-arrow
Hide on inactive.

8) This block must be shown 3 seconds after a person lands on this page:

9) It is necessary to implement form submission without reloading the page

All selected / entered data should be transmitted.
It is necessary to prohibit entering the Cyrillic alphabet in the Email field.
A mask with a US code is required in the phone number field.
If sending is successful, notify the user in any way, except alert. (modal window, label / picture below, etc.).
Likewise on error.


10) On page 5, implement a slider:
The conditions for arrows are the same.
The active slide must also have a .feed__item-active class to style it. For inactive ones, we remove them.


11) On page 6, you need to implement sending the form:

In the email field, prohibit entering the Cyrillic alphabet.
Submitting the form without reloading the page, notifying the user of the result.

12) On the modules page
When you click on the play button, show the video in the same way as in point # 3.
The second video is opened for viewing only if the person has watched the first one. Before that - a click on it does not work. Also change styles on opening.


13) Implement a small accordion (1)

When you click on it, a small text-fish should appear smoothly from below.
When you click it again, it hides.


14) When you click on the Download PDF button, the file is being downloaded. Include any small file.

15) A modular structure of the project is required, the assembly (bundle) must be connected.

16) No duplication of code. You don't need to bind separate actions to each button. Use a function or loops.
