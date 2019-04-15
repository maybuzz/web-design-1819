# Real-Time Web

## Summary
Exclusive designed website that shows all `real-time web @cmda-minor-web` assignments made for Marijn Meijles. This website is fully operable by keyboard.

![...](/img/...png)

## Table of contents
- [Live demo](#Live-demo)
- [Install](#Install)
- [Features](#Features)
- [Concept](#Concept)
  - [Iterations](#Iterations)
- [Meet Marijn](#Meet-Marijn)
  - [User scenario](#User-scenario)
- [Exclusive design](#Exclusive-design)
  - [1 Study situation](#1-Study-situation)
  - [2 Ignore conventions](#2-Ignore-conventions)
  - [3 Prioritize identity](#3-Prioritize-identity)
  - [4 Add nonsense](#4-Add-nonsense)
- [Principles](#Principles)
- [To-do](#To-do)
- [Resources](#Resources)

## Live demo
[Click here](...) to see my live demo.

## Install
To install this project you'll have to fork this repository and open your terminal

```bash
  # insert your username to this link
  # put this in your terminal to clone the repo
  git clone https://github.com/your-user-name/web-design-1819/

  # run the following code to build the app
  npm start
```

## Features
- [x] ...

## Concept
The idea of this project is to create something for Marijn that helps him give us feedback on our projects. I will collect all the projects made for Marijn and show them in a grid-layout. By adding key events Marijn will be able to navigate through the website using his keyboard, not his mouse.

The main goals in this project are `exclusive design`, this means we're creating something specifically for Marijn, and `accessibility` due to his disability. Marijn also has a difficulty articulating. My app can help him with that.

The interface I'm creating will help Marijn navigate through our projects using his keyboard and his sticky keys. Marijn will test our applications and give us feedback on our concepts and designs. Because our solutions have to fit Marijn perfectly, we'll have to listen very carefully to his feedback. With my app this feedback part will hopefully go smoothly, because I want to help Marijn formulate sentences he can play out loud. This way we know what way the feedback is headed. For example, he can choose `good`, `meh` of `bad` and play the sentence out loud. Further feedback can be given by himself on the spot, but this will lead the conversation and avoid misunderstanding each other.

### Iterations
#### Version 1
- `scrollable` interface
- rating system -> yes or no good -> change border color
- `visited` feedback (shows if project is visited or not) -> shadow overlay
- skip to last/skip to first -> use sticky keys to fast forward of backward, instead of one-by-one

#### Version 2
- `zoomable` interface
- rating system -> choose from sentences -> change background-color
- `visited` feedback -> opacity

#### Version 3
- `swipe-able` interface
- rating system -> personalized sentences -> change color and order
- `visited` feedback -> change order

## Meet Marijn
Marijn Meijles is a software architect, father, and wheelchair-aficionado with a motor impairment. Marijn doesn't think he's really disabled, even though he's in a wheelchair and has a hard time communicating.

### User scenario
Marijn Meijles is a software architect, father, and "wheelchair-aficionado" with a motor impairment. Precise mouse-movement and keypresses are difficult for him, so Marijn relies on his keyboard for navigation. Marijn wants to be able to view and rate our projects quick and easy. He needs to be able to test the project and quickly go back to the overview page. He also needs to know who designed the project so he can give that person feedback. Key events will help Marijn navigate through the pages. After testing a project, Marijn will be able to choose from different sentences to set the mood for the feedback round. These sentences are given, but can be personalized.

## Exclusive design
[Inclusive design](https://inclusivedesignprinciples.org/nl/) was created so designers would have guidelines to follow to make sure their designs would -theoretically- include everyone (even people with disabilities). The inclusive design principles are `consider all contexts`, `be consistent`, `prioritize content` and `add value`. Of course this doesn't work that way, disabled people we're still excluded.

For this course we'll be following the exclusive design guidelines. These are actually the opposite of the inclusive design principles.

#### 1. Study situation
Marijn is a developer, so he is used to working with a computer. He has a macbook pro and uses [sticky keys](https://en.wikipedia.org/wiki/Sticky_keys) and tab navigation. He only uses his left hand to control his keyboard.

#### 2. Ignore conventions
**"The defaults suck"**, therefore I will not be using the default conventions. Usually conventions are used to add accessibility to a page because "people are familiar with the pattern", but this doesn't necessarily mean it's the best solution.

Marijn is unable to use his mouse or trackpad. Precise movements are difficult for Marijn due to his motor impairment. Therefore he relies on his keyboard for navigation. Because Merlijn only uses his left hand, relying on the arrows on the right of the keyboard could be unpleasant for him. Therefore I will use other keys (on the left-side of the keyboard). Also pressing a key one time may be hard for him, so repeating keypresses should not interfere with the usability.

#### 3. Prioritize (user) identity
I think Marijn is an overall positive person. He doesn't think he's really disabled, so I don't want to treat him like he is. I intend to make something, specifically for him, but not emphasize his disability. I looked at Marijns social media accounts (Twitter and Facebook) and saw him "joking" about riding his wheelchair and joking in general. I want to use this humor and positivity in my website to make him feel comfortable and accepted.

![Marijns tweets](/img/tweets-marijn.png)

#### 4. Add nonsense  
I want to help Marijn communicate his feedback using "funny" sentences. For the prototype I will write the sentences myself, but eventually I want him to be able to edit the sentences. The idea is for Marijn to select the sentence he wants to play the audio. I also want to add audio feedback to the correct keypress, this way Marijn will know if he pressed the right key.
To top the nonsense box I will add a wheelchair animation somewhere.

## Principles


## To-do
- [ ] Meet Marijn
- [ ] Concept
  - [x] Explained
  - [ ] Sketches
- [ ] Prototype iterations
  - [ ] Version 1
  - [ ] Version 2
  - [ ] Version 3
- [ ] Usability tests
  - [x] Week 1
  - [ ] Week 2
  - [ ] Week 3
- [x] User scenario
- [ ] Define use of principles
- [x] Define use of exclusive design principles
  - [x] Study situation
  - [x] Ignore conventions
  - [x] Prioritize (user) identity
  - [x] Add nonsense

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
