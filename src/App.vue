<template>
  <div id="app">
    <header class="navbar">
      <div class="wrapper">
        <div class="navbar__logo">
          <h1>HackerYou</h1>
        </div>

        <nav class="navbar__nav">
          <ul class>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Bootcamp</a>
            </li>
            <li>
              <a href="#">Part-Time</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>

    <main>
      <section class="hero">
        <div class="wrapper">
          <div class="hero__content">
            <h1 class="hero__content--title">HackerYou Tech Test</h1>
            <h2 class="hero__content--date">twenty-nineteen</h2>
            <p class="hero__content--body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet
              consectetur adipiscing elit pellentesque labore et dolore incididunt
              ut labore.
            </p>
          </div>
        </div>
      </section>

      <section class="blog">
        <div class="header">
          <h2>Blog</h2>
        </div>
        <div class="wrapper">
          <div class="blog__list">
            <div class="blog__entry" v-for="(blog, index) in blogList" :key="index">
              <img
                class="blog__image"
                v-bind:src="blog.blog_image"
                v-bind:alt="blog.blog_image_alternative_text"
              />
              <article class="blog__content">
                <h3 class="blog__content--title">{{ blog.blog_title }}</h3>
                <h4 class="blog__content--date">{{ blog.published_date }}</h4>
                <p class="blog__content--body">{{ blog.blog_content }}</p>
                <a class="blog__content--btn" v-bind:href="blog.blog_link">Read More</a>
              </article>
            </div>
          </div>

          <div class="blog__about">
            <div class="blog__entry" v-for="(spotlight, index) in spotlightList" :key="index">
              <img
                class="blog__image"
                v-bind:src="spotlight.blog_image"
                v-bind:alt="spotlight.blog_image_alternative_text"
              />
              <article class="blog__content">
                <h3 class="blog__content--title">{{ spotlight.blog_title }}</h3>
                <p class="blog__content--body">{{ spotlight.blog_content }}</p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section class="related-posts">
        <div class="header">
          <h2>Related Posts</h2>
        </div>
        <div class="wrapper">
          <div class="related-posts__list">
            <div
              class="blog__entry blog__entry--related"
              v-for="(related, index) in relatedList"
              :key="index"
            >
              <img
                class="blog__image"
                v-bind:src="related.blog_image"
                v-bind:alt="related.blog_image_alternative_text"
              />
              <article class="blog__content">
                <h3 class="blog__content--title">{{ related.blog_title }}</h3>
                <h4 class="blog__content--date">{{ related.published_date }}</h4>
                <p class="blog__content--body">{{ related.blog_content }}</p>
                <a class="blog__content--btn" v-bind:href="related.blog_link">Read More</a>
              </article>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer>
      <div class="wrapper">
        <div class="footer__content">
          <h4>HackerYou Tech Test</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet
            consectetur adipiscing elit pellentesque labore et. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.
          </p>
        </div>
        <div class="footer__nav">
          <nav>
            <ul class>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Bootcamp</a>
              </li>
              <li>
                <a href="#">Part-Time</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
        <div class="footer__newsletter">
          <h3>Subscribe to Our Newsletter</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet consectetur adipiscing elit.</p>
          <div class="footer__newsletter--subscribe">
            <input placeholder="email address" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { butter } from '@/buttercms';

export default {
  name: 'app',
  data() {
    return {
      blogList: [],
      spotlightList: [],
      relatedList: []
    };
  },
  methods: {
    getContent() {
      butter.content.retrieve(['hy_tech_challenge_blog_posts']).then(res => {
        this.blogList = res.data.data.hy_tech_challenge_blog_posts;
      });

      butter.content.retrieve(['hy_tech_challenge_related_posts']).then(res => {
        this.relatedList = res.data.data.hy_tech_challenge_related_posts;
      });

      butter.content
        .retrieve(['hy_tech_challenge_spotlight_posts'])
        .then(res => {
          this.spotlightList = res.data.data.hy_tech_challenge_spotlight_posts;
        });
    }
  },
  created() {
    this.getContent();
  }
};
</script>

<style>
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-rendering: optimizeLegibility;
}

body {
  font-family: 'Raleway', sans-serif;
}

/**** REUSABLE COMPONENTS ****/

p {
  padding-top: 5px;
  font-size: 9.5px;
  text-align: left;
  line-height: 1.5;
}

h3 {
  text-transform: uppercase;
  font-weight: 600;
  font-size: 13px;
  letter-spacing: 0.5px;
}

.wrapper {
  padding: 0 100px;
  margin: 0 auto;
  max-width: 1000px;
  display: flex;
  justify-content: space-between;
  text-align: center;
  flex-wrap: wrap;
}

.header {
  text-align: center;
  text-transform: uppercase;
  font-size: 11px;
}

.blog__entry {
  flex-basis: 250px;
  margin-bottom: 25px;
  background-color: #f6f7f9;
}

.blog__entry--related {
  background-color: #fff;
}

.blog__content {
  padding: 15px;
}

.blog__content h3 {
  text-transform: uppercase;
  font-weight: 600;
  font-size: 13px;
  letter-spacing: 0.5px;
}

.blog__content h4 {
  font-family: 'Noto Serif', serif;
  font-style: italic;
  font-weight: 500;
  font-size: 9px;
}

.blog__content p {
  padding-top: 5px;
  font-size: 9.5px;
  text-align: left;
  line-height: 1.5;
}

.blog__content a {
  color: #e40015;
  text-transform: uppercase;
  text-decoration: none;
  font-size: 8px;
  font-weight: 700;
  letter-spacing: 0.5px;
}

/**** NAVBAR ****/

.navbar {
  background-color: #f6f7f9;
}

.navbar .wrapper {
  align-items: center;
  height: 45px;
}

.navbar__logo h1 {
  font-family: 'Raleway', sans-serif;
  font-size: 21px;
  text-transform: uppercase;
  margin: 0;
  letter-spacing: 1px;
}

.navbar__nav ul {
  list-style: none;
}

.navbar__nav li {
  display: inline-block;
  margin: 0 8px;
}

.navbar__nav a {
  text-transform: uppercase;
  text-decoration: none;
  font-size: 11.5px;
  font-weight: 700;
  color: #000;
}

/**** HERO ****/

.hero {
  background-image: url('../src/assets/image-1.jpg');
  height: 525px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero .wrapper {
  padding: 60px;
  margin: 0 auto;
  height: 245px;
  width: 610px;
  background: rgba(255, 255, 255, 0.9);
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
}

.hero__content h1 {
  font-size: 27px;
  font-weight: 600;
  text-transform: uppercase;
  margin: 0;
}

.hero__content h2 {
  font-size: 14px;
  font-family: 'Noto Serif', serif;
  font-style: italic;
  font-weight: 500;
  margin-bottom: 10px;
}

.hero__content p {
  font-size: 14px;
  line-height: 1.7;
  font-weight: 500;
}

/**** Blog ****/
.blog {
  padding: 55px 0 30px 0;
  text-align: center;
}

.blog__list {
  padding-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-basis: 525px;
}

.blog__about {
  padding-top: 20px;
  flex-basis: 250px;
}

.blog__about h3 {
  font-size: 16px;
}

/**** RELATED POSTS ****/
.related-posts {
  background-color: #f6f7f9;
  padding: 55px 0 30px 0;
  text-align: center;
}

.related-posts__list {
  padding-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

/**** FOOTER ****/
footer {
  background-color: #444444;
  padding: 45px 0;
}

footer .wrapper {
  flex-wrap: nowrap;
  text-align: left;
  color: #fff;
}

.footer__content {
  width: 33%;
}

.footer__content h4 {
  font-size: 12px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  font-weight: 600;
}

.footer__nav {
  width: 9%;
}

.footer__nav ul {
  list-style: none;
}

.footer__nav a {
  text-transform: uppercase;
  text-decoration: none;
  font-size: 11px;
  font-weight: 600;
  color: #fff;
  letter-spacing: 0.5px;
}

.footer__newsletter {
  width: 47%;
}

.footer__newsletter input {
  height: 35px;
  width: 250px;
  border: none;
  text-align: center;
  font-size: 14px;
  font-family: 'Noto Serif', serif;
  font-style: italic;
}

.footer__newsletter--subscribe {
  padding-top: 10px;
  display: flex;
}

.footer__newsletter button {
  background-color: #e40015;
  border: none;
  color: #fff;
  height: 35px;
  width: 125px;
  text-align: center;
  font-size: 10px;
  margin-left: 2.5px;
  text-transform: uppercase;
}
</style>
