# HackerYou - Technical Challenge 2019
After one year of getting rejected from HackerYou's Web Development Immersive bootcamp, I decided to apply again for the 2020 winter cohort. You didn't think I was going to give up that easily, did you?

This repository is dedicated how I am tackling the technical challenge this time around. Based on the feedback that I got in my previous attempt, I have to improve on the following:

 1. Build the site with **accessibility** in mind
 2. Use the **correct folder structure**
 3. Recreate the site **pixel by pixel** 

## The Challenge

> Hi Aron Tolentino,
> 
> As the next step in the application process for  HackerYou's Web
> Development Immersive, we'd like to assess your HTML & CSS skills.
> 
> [Here's the link to download the bootcamp technical
> challenge.](http://bootcamp-techtest.hackeryou.com/tech_challenge.zip)
> 
> We'd like to ask you to re-create the website featured in the attached
> image.
> 
> Please add hover states for the menu bar and buttons. It should be
> responsive - optimized for desktop, tablet and mobile.  **Do not use
> Bootstrap or any other external grid system.** Keep in mind best
> practices like using proper indentation, and a  separate stylesheet.
> 
> You can use the internet as a resource, but otherwise please complete
> the challenge on your own. Just do your best!
> 
> Please hand in the challenge one week from today. When you're done,
> please  **zip**  up your files and email them to 
> [techchallenges@hackeryou.com](mailto:techchallenges@hackeryou.com
> "mailto:techchallenges@hackeryou.com").
> 
> Let us know if you have any questions!
> 
> The  HackerYou  Admissions Team
> 
> [bootcamp@hackeryou.com](mailto:bootcamp@hackeryou.com)

## Reverse Engineering
Since I failed to recreate the site accurately in the previous technical challenge, I basically reverse engineered the image provided to me. I opened up Adobe Photoshop and started tracing all the content blocks as accurately as I could to give myself a good basis on how to structure the site. 

In the real world, clients or design teams would usually give you access to a PSD file where all the dimensions are accessible. Given that HackerYou's program is highly competitive, I see why they are adding an extra step to the process. 

Taking into account the dimensions of the sections as well as margins and paddings, the photo below is what I came up with. 

![HackerYou technical assessment wireframe](https://i.imgur.com/Q6zOq5o.jpg)

## Going Above and Beyond

While the team at HackerYou is only looking to assess HTML and CSS skills, I decided to create the site with Vue.js, integrate a headless CMS called ButterCMS to manage the blog content on the site, and deploy the website to Firebase.

I created three collections on ButterCMS to act as content buckets and pulled the data from those collections via the ButterCMS API to be stored in separate arrays within the Vue.js app. I then used the v-for directive to loop through the items in the arrays to populate the blog content. 

I might be breaking a few rules here but I wanted to showcase that I can build simple front-end web applications and ready to take on HackerYou's curriculum. 

![ButterCMS hackeryou collection](https://i.imgur.com/5LK36BE.png)

![ButterCMS hackeryou collection schema](https://i.imgur.com/c3TWZLF.png)

![Firebase hosting](https://i.imgur.com/51IqKxB.png)

## How To Use

#### Project setup
```
npm install
```

#### Compiles and hot-reloads for development
```
npm run serve
```

#### Compiles and minifies for production
```
npm run build
```
