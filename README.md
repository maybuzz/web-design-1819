# Web-design

## Summary
Exclusive designed date-picker made for Marijn Meijles.

![date picker v2](/img/final.png)

## Table of contents
- [Live demo](#Live-demo)
- [Install](#Install)
- [Features](#Features)
- [Concept](#Concept)
- [Meet Marijn](#Meet-Marijn)
  - [Assumptions](#Assumptions)
  - [Conclusion](#Conclusion)
- [Test 1](#Test-1)
- [Test 2](#Test-2)
- [Exclusive design](#Exclusive-design)
  - [1 Study situation](#1-Study-situation)
  - [2 Ignore conventions](#2-Ignore-conventions)
  - [3 Prioritize identity](#3-Prioritize-identity)
  - [4 Add nonsense](#4-Add-nonsense)
- [Principles](#Principles)
- [To-do](#To-do)
- [Resources](#Resources)

## Live demo
[Click here](https://pickadatepicker.herokuapp.com/) to see my live demo.

## Install
To install this project you'll have to fork this repository and open your terminal

```bash
  # insert your username to this link
  # put this in your terminal to clone the repo
  git clone https://github.com/your-user-name/web-design-1819/

  # run the following code to build the app
  npm start
```

## Concept
This date-picker was specifically made for Marijn. Initially I wanted to create something that would help Marijn give us feedback on our projects. I let this idea go due to its complexity. I came up with a form (using a date picker and radio buttons) that would cost his minimal effort to complete.

The main goals in this project are `exclusive design`, this means we're creating something specifically for Marijn, and `accessibility` due to his disability.

## Meet Marijn
Marijn Meijles is a software architect, father, and wheelchair-aficionado with a motor impairment. Marijn doesn't think he's really disabled, even though he's in a wheelchair and has a hard time communicating.

#### User scenario
A form that will make it easier for Marijn, a person with a motor impairment who only uses his left hand and doesn't use tab to move through the page, to complete a form using as little keys/clicks as possible. 

### Assumptions
After reading some articles about motor impairments I assumed Marijn would have a hard time using his `trackpad`. Precise mouse movements and key presses could be difficult, so I thought he would like to use his `keyboard` and `tab` through the page. I know he uses his left hand, so using the arrow keys could be a bit difficult too. He shouldn't have to move his hand too much.

### Conclusion
Marijn is a very bubbly guy. He jokes all the time, even about his disability. Marijn doesn't use his keyboard as much as I thought. He also doesn't use the `tab` key. He just uses his trackpad. Because of this I don't want to rely too much on key events, cause this would mean Marijn has to change his ways and I think he's fine the way he is now. Still, there is always room for improvement, so I chose to do both.

## Test 1
- `scrollable` interface
- rating system
- `visited` feedback (shows if project is visited or not) -> shadow overlay
- key events for navigation and rating

### Conclusion
This test would have been better if I worked it out some more. I wanted to test my key events, but I was having a hard time getting them right. I also found out that this concept would be a bit difficult to work out right. So I switched concepts.

I still think this test was useful cause I...
1. Found out this concept wouldn't work the way I wanted it too.
2. I got to see Marijn operate his computer. This really helped me think of a next concept. I asked him some questions about key events and placement on his keyboard. It was also very useful to watch the other tests.

![concept 1](/img/versions.png)

![schets concept 1](/img/schets.png)

## Test 2
- date-picker
- drop downs
- radio buttons
- `auto focus`
- `key events`

### Version 1
For this test I actually made two versions. I only tested my final one. I started with a simple set of drop downs and a submit button. After observing Marijn I found out he preferred using his trackpad instead of the tab-key. Buttons would have to be big so it's easier for him to click on them. Also, the key events I used in the first version where too far apart.

![date picker v1](/img/first-try.png)

### Version 2
For this second version I changed the size of the clickable items. I also implemented key events. I chose keys that are close to each other. To make it easier for Marijn to operate the form I implemented a focus state that responds to the change event of the current element. This will shift the focus to the next element when the first element is checked.

This is also the main focus of my concept. A form that shifts focus so Marijn doesn't have to press of click too much buttons to complete the form. I would have liked to have more form elements, but I didn't get to that.

### Conclusion
I think this test was very successful. If I had made more form elements it would have been better, but everything I made worked perfectly. Marijn liked that the focus shifted to the next form element. Also, my key events were close to each other so Marijn would be able to press them more easily than before.

![date picker v2](/img/final.png)

## Exclusive design
[Inclusive design](https://inclusivedesignprinciples.org/nl/) was created so designers would have guidelines to follow to make sure their designs would -theoretically- include everyone (even people with disabilities). The inclusive design principles are `consider all contexts`, `be consistent`, `prioritize content` and `add value`. Of course this doesn't work that way, disabled people we're still excluded.

For this course we'll be following the exclusive design guidelines. These are actually the opposite of the inclusive design principles.

#### 1. Study situation
Marijn is a developer, so he is used to working with a computer. He has a macbook pro and uses [sticky keys](https://en.wikipedia.org/wiki/Sticky_keys) and  mouse movements. He doesn't use his tab.

He only uses his left hand to control his keyboard. Due to this he prefers keys either on the left- of the right side of the keyboard. This way he doesn't have to switch his hand all the time.  

#### 2. Ignore conventions
**"The defaults suck"**, therefore I will not be using the default conventions. Usually conventions are used to add accessibility to a page because "people are familiar with the pattern", but this doesn't necessarily mean it's the best solution.

Usually `input type=date` is used to pick a date. This usually shows a calendar where users can pick a date. In this case I'm using drop downs, because these are easy to operate. Drop downs have multiple keys to operate them (open, switch option, choose one).

#### 3. Prioritize (user) identity
Because I'm designing for Marijn specifically, I used bigger buttons and keys that are next to each other. If I was to work out this form, I would have implemented more form elements. I also would have changed my concept to something more fun.

I looked at Marijns social media accounts (Twitter and Facebook) and saw him "joking" about riding his wheelchair and joking in general. I thought this was something I could use to prioritize user identity and add nonsense.

![Marijns tweets](/img/tweets-marijn.png)

#### 4. Add nonsense  
If I had more time I would have implemented more nonsense. I would have implemented buttons that don't do anything and/or buttons that move away when he tries to click them. Also annoying sounds on form element would have been fun.

## To-do
- [x] Meet Marijn
- [x] Prototype iterations
- [x] Usability tests
- [x] User scenario
- [x] Define use of exclusive design principles
  - [x] Study situation
  - [x] Ignore conventions
  - [x] Prioritize (user) identity
  - [ ] Add nonsense
    - [ ] Onnodige knoppen
    - [ ] Overbodige geluidjes

## Resources
- [Marijns twitter](https://twitter.com/marijnm)
- [Marijns medium account](https://medium.com/@marijnmeijles)
- [KeyboardEvents MDN](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent)
- [KeyboardEvent value css-tricks](https://css-tricks.com/snippets/javascript/javascript-keycodes/)
- [About `user scenario`](https://usabilla.com/blog/how-user-scenarios-help-to-improve-your-ux/)
- [Principles of User Interface Design](http://bokardo.com/principles-of-user-interface-design/)

## Credits
[Marijn Meijles](https://github.com/marijnm)

## License
[MIT](LICENSE) © [Luna May Johansson](https://github.com/maybuzz)
