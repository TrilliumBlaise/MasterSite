const url = 'https://trilliumblaise.github.io'
export const PROJECTS = [
  {
    id: 1,
    title: 'Calculator',
    src: `${url}/Calculator`,
    image: '/images/calculator.svg',
    description: `This is a standard calculator. 
      The purpose of the project was to challenge myself to re-create the standard calculator that come with Windows. 
      I modeled the looks and the functions from that calculator.
      This site does not have dynamic sizing and is only really usable from a PC.
      `,
  },
  {
    id: 2,
    title: 'Gender Vote',
    src: `${url}/Gender-Vote`,
    image: '/images/boygirl.svg',
    description: `
    This is a small project that I built for my first child's gender reveal party. 
    The site has two primary functions: A mostly for fun voting process where clicking on one or the other side of the website increases the number displayed 
    and a congratulations message that is displayed based on the gender inputed at start up and the time of the reveal. 
    This site does not have dynamic sizing and is only really usable from a PC.
    `,
  },
  {
    id: 3,
    title: 'Shopping Cart',
    src: `${url}/Shopping-Cart`,
    image: '/images/shopping-cart.svg',
    description: `
    This was a final exam for a javascript bootcamp that I attended through Web Dev Simplified. 
    The challenge was to create a working shopping cart that would allow the user to see the different items for purchase.
    These items were dynamically generated from a JSON file.
    The items that the shopping cart contained were to be visible while moving about the different pages of the website.
    They were also to be removable.
    When the shopping cart is empty, the icon for the shopping cart was to be invisible.
    `,
  },
  {
    id: 4,
    title: 'Calender',
    src: `${url}/Calender/calender/calender.html`,
    image: '/images/calendar.svg',
    description: `
    This was another challenge that I set myself. 
    I wanted to re-create the calender that was available on Windows. 
    Each function of this calender is the same as you would find by clicking the date on a PC.
    This site does have dynamic sizing.
    `,
  },
  {
    id: 5,
    title: 'Broken Sword Reforged',
    src: `${url}/Broken-Sword-Reforged/src/`,
    image: '/images/broken-sword.svg',
    description: `
    This was the first major project that I undertook.
    The purpose behind the project was to learn how to pass information between different pages of a website.
    Due to the nature of the game, information about the player, the weapon being used, and the enemy currently being fought, would need to be passed between different pages.
    This was also the first site that I worked on dynamic sizing.
    `,
  },
  {
    id: 6,
    title: 'Due Date Countdown',
    src: `${url}/Countdown`,
    image: '/images/hourglass-end.svg',
    description: `
    This is another rather simple project. 
    The purpose behind it was, as the title suggest, to create a countdown till the birth of my first child.
    I found a really interesting animation for the flipping number cards and used that to create a nice look.
    I also created an array of pictures that changes the backcground of the site every hour.
    The site does not have dynamic sizing.
    `,
  },
  {
    id: 7,
    title: 'Congratulations',
    src: `${url}/Congratulations`,
    image: '/images/balloons.svg',
    description: `
    This was another simple project that I created upon finding out that my wife was pregnant with our first child.
    There are two functions: The rainbow lettering is dynamically generated and would work for any length message and the confetti.
    The confetti is an api I found online.
    It starts activated when you pull up the site and you can turn it off and on by clicking on the page.
    `,
  },
  {
    id: 8,
    title: 'JanKenPo',
    src: `${url}/JanKenPo/src/main/webapp/frontend`,
    image: '/images/jankenpo.svg',
    description: `
    This was my very first web page I ever made. 
    I initially concieved of this project for school.
    The purpose behind it was to learn about event listeners and webpage control.
    The looks and usablity of the site were updated as part of a school project with two of my then classmates.
    `,
  },
]
