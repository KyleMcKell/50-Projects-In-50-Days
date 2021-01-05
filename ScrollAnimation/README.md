# Scroll Animation

A project where boxes come onto the screen, alternating right and left, when the page is scrolled down

## What I learned

- What getBoundingClientRect is and how to use it
- Using the height of the client, and the scroll event
- :nth-of-type even and odd

## Notes

- I had to look at the tutorial again for this one. I tried to find a way to make it so when I scrolled the boxes would come in. My original idea was to store the height of the window as a variable, then store the height of the boxes as a variable, and then have each box in the Node List have an additional property which would say where in the height of the stack of boxes it was, and once the height of the window reached that point on the scroll, it would pop in. But that turned out to be extremely complicated whereas getBoundingClientRect is very simple
- Overall, I knew a lot of these things. I used some color palette websites to try to make it look nicer, and I think I did a pretty decent job in that regard. It can obviously be improved, but I enjoy how this one looks a decent amount, which is a nice change of pace
- Also, I'm seeming to be using flexbox for pretty much all of these, I'm so extremely grateful for that, hopefully I can implement grid some.
- I wouldn't call this one particularly difficult, it was more something that I had to learn to solve the problem.

## Rating

- Fun: 2/10
- Educational: 9/10
- Difficulty: 6/10
