<template>
  <div id="app">
    <header class="navbar">
      <div class="wrapper">
        <div class="navbar__logo">
          <span class="navbar__logo--text">HackerYou</span>
        </div>

        <nav class="navbar__nav">
          <ul class>
            <li>
              <a accesskey="h" href="#" id="active" class="navbar__nav--item">Home</a>
            </li>
            <li>
              <a accesskey="a" href="#" class="navbar__nav--item">About</a>
            </li>
            <li>
              <a accesskey="c" href="#" class="navbar__nav--item">Contact</a>
            </li>
            <li>
              <a accesskey="b" href="#" class="navbar__nav--item">Bootcamp</a>
            </li>
            <li>
              <a accesskey="p" href="#" class="navbar__nav--item">Part-Time</a>
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
            <h4 class="hero__content--date">twenty-nineteen</h4>
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
                v-bind:alt="related.blog_alternative_text"
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

    <footer class="footer">
      <div class="wrapper">
        <div class="footer__content">
          <h3 class="footer__content--title">HackerYou Tech Test</h3>
          <p class="footer__content--body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet
            consectetur adipiscing elit pellentesque labore et. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.
          </p>
        </div>
        <div class="footer__nav">
          <nav>
            <ul class>
              <li>
                <a accesskey="h" href="#" id="active" class="footer__nav--item">Home</a>
              </li>
              <li>
                <a accesskey="a" href="#" class="footer__nav--item">About</a>
              </li>
              <li>
                <a accesskey="b" href="#" class="footer__nav--item">Bootcamp</a>
              </li>
              <li>
                <a accesskey="p" href="#" class="footer__nav--item">Part-Time</a>
              </li>
              <li>
                <a accesskey="c" href="#" class="footer__nav--item">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
        <div class="footer__newsletter">
          <h3 class="footer__newsletter--title">Subscribe to Our Newsletter</h3>
          <p
            class="footer__newsletter--body"
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet consectetur adipiscing elit.</p>
          <div class="footer__newsletter--subscribe">
            <input type="email" placeholder="email address" />
            <button accesskey="s">Subscribe</button>
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

#active {
  font-weight: 800;
}

.hide {
  position: absolute !important;
  top: -9999px !important;
  left: -9999px !important;
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
  padding: 20px;
}

.blog__content--title {
  text-transform: uppercase;
  font-weight: 600;
  font-size: 13px;
  letter-spacing: 0.5px;
}

.blog__content--date {
  font-family: 'Noto Serif', serif;
  font-style: italic;
  font-weight: 500;
  font-size: 9px;
}

.blog__content--body {
  padding-top: 5px;
  font-size: 9.5px;
  text-align: left;
  line-height: 1.5;
}

.blog__content--btn {
  color: #e40015;
  text-transform: uppercase;
  text-decoration: none;
  font-size: 8px;
  font-weight: 700;
  letter-spacing: 0.5px;
  transition: all 0.3s;
}

.blog__content--btn:hover {
  color: #8f0210;
}

/**** NAVBAR ****/

.navbar {
  background-color: #f6f7f9;
}

.navbar .wrapper {
  align-items: center;
  height: 45px;
  justify-content: space-between;
}

.navbar__logo--text {
  font-family: 'Raleway', sans-serif;
  font-size: 21px;
  text-transform: uppercase;
  margin: 0;
  letter-spacing: 1px;
  font-weight: 600;
}

.navbar__nav {
  width: 320px;
}

.navbar__nav ul {
  display: flex;
  list-style: none;
  justify-content: space-between;
}

.navbar__nav--item {
  text-transform: uppercase;
  text-decoration: none;
  font-size: 11.5px;
  font-weight: 600;
  color: #000;
  transition: all 0.3s;
}

.navbar__nav a:hover {
  color: #e40015;
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
  text-align: center;
}

.hero__content--title {
  font-size: 27px;
  font-weight: 600;
  text-transform: uppercase;
  margin: 0;
}

.hero__content--date {
  font-size: 14px;
  font-family: 'Noto Serif', serif;
  font-style: italic;
  font-weight: 500;
  margin-bottom: 10px;
}

.hero__content--body {
  font-size: 14px;
  line-height: 1.7;
  font-weight: 500;
  text-align: center;
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

.blog__about .blog__content--title {
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

.footer__content--title {
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
  transition: all 0.3s;
}

.footer__nav a:hover {
  color: #e40015;
}

.footer__newsletter {
  width: 47%;
}

.footer__newsletter--subscribe {
  padding-top: 10px;
  display: flex;
}

.footer__newsletter--subscribe input {
  height: 35px;
  width: 250px;
  border: none;
  text-align: center;
  font-size: 14px;
  font-family: 'Noto Serif', serif;
  font-style: italic;
}

.footer__newsletter--subscribe button {
  background-color: #e40015;
  border: none;
  color: #fff;
  height: 35px;
  width: 125px;
  text-align: center;
  font-size: 10px;
  margin-left: 2.5px;
  text-transform: uppercase;
  transition: 0.3s all;
}

.footer__newsletter--subscribe button:hover {
  background-color: #8f0210;
}

/** MEDIA QUERIES **/

@media only screen and (max-width: 768px) {
  .wrapper {
    justify-content: center;
  }

  .hero .wrapper {
    width: 80%;
    height: auto;
    padding: 30px;
  }

  .related-posts__list,
  .blog__list {
    justify-content: space-evenly;
  }

  .blog__list {
    flex-basis: auto;
  }

  .footer .wrapper {
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .footer__newsletter--subscribe,
  .footer__content--body {
    text-align: center;
  }

  .footer__content,
  .footer__nav,
  .footer__newsletter {
    width: 100%;
    text-align: center;
  }

  .footer__nav {
    order: -1;
    width: 100%;
  }

  .footer__newsletter,
  .footer__content {
    width: 480%;
    padding-top: 20px;
  }

  .footer__nav ul {
    display: flex;
    justify-content: space-evenly;
  }

  .footer__newsletter--subscribe {
    justify-content: center;
  }
}

@media only screen and (max-width: 425px) {
  .wrapper {
    padding: 0 20px;
  }

  .header {
    font-size: 13px;
  }

  .navbar {
    padding: 15px 0;
  }

  .navbar .wrapper {
    justify-content: center;
  }

  .navbar__nav {
    padding-top: 5px;
    width: 100%;
  }

  .related-posts__list,
  .blog__list {
    justify-content: center;
    flex-direction: column;
    max-width: 250px;
  }

  .blog__entry {
    width: 250px;
  }

  .blog__image {
    width: 250px;
    height: 220px;
    object-fit: cover;
    object-position: right;
  }

  .blog__content--title {
    font-size: 16px;
  }

  .blog__content--date {
    font-size: 12px;
  }

  .blog__content--body {
    font-size: 12px;
    text-align: center;
  }

  .blog__content--btn {
    font-size: 10px;
  }
}

@media only screen and (max-width: 375px) {
  .footer__newsletter input {
    width: auto;
  }

  .footer__newsletter button {
    width: 80px;
  }
}

@media only screen and (max-width: 320px) {
  .footer__nav ul {
    justify-content: space-between;
  }
}
</style>
