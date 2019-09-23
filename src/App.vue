<template>
  <div id="app">
    <header class="header">
      <div class="wrapper">
        <div class="header__logo">
          <h1>HackerYou</h1>
        </div>

        <nav class="header__navigation">
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

    <section class="hero">
      <div class="wrapper">
        <div class="hero__content">
          <h1>HackerYou Tech Test</h1>
          <h2>twenty-nineteen</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet
            consectetur adipiscing elit pellentesque labore et dolore incididunt
            ut labore.
          </p>
        </div>
      </div>
    </section>

    <section class="blog">
      <div class="blog__header">
        <h2>Blog</h2>
      </div>
      <div class="wrapper">
        <div class="blog__list">
          <div class="blog__entry">
            <img src="../src/assets/image-2.jpg" />
            <div class="blog__content">
              <h3>HackerYou Tech Test</h3>
              <h4>March 9, 2019</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet
                consectetur adipiscing elit pellentesque labore et.
              </p>
            </div>
          </div>

          <div class="blog__entry">
            <img src="../src/assets/image-3.jpg" />
            <div class="blog__content">
              <h3>HackerYou Tech Test</h3>
              <h4>March 9, 2019</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet
                consectetur adipiscing elit pellentesque labore et.
              </p>
            </div>
          </div>

          <div class="blog__entry blog__entry-large">
            <img src="../src/assets/image-5.jpg" />
            <div class="blog__content">
              <h3>HackerYou Tech Test</h3>
              <h4>March 9, 2019</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet
                consectetur adipiscing elit pellentesque labore et dolore
                incididunt ut labore. Amet consectetur adipiscing elit pellentesque labore et dolore
                incididunt ut labore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>

        <div class="blog__about">
          <div class="blog__entry">
            <img src="../src/assets/image-4.jpg" />
            <div class="blog__content">
              <h3>About Us</h3>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet
                consectetur adipiscing elit pellentesque labore et dolore
                incididunt ut labore. Amet consectetur adipiscing elit pellentesque labore et dolore
                incididunt ut labore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="related-posts">
      <div class="blog__header">
        <h2>Related Posts</h2>
      </div>

      <div class="wrapper">
        <div class="related-posts__list">
          <div class="related-posts__entry">
            <img src="../src/assets/image-6.jpg" />
            <div class="blog__content">
              <h3>HackerYou Tech Test</h3>
              <h4>March 9, 2019</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet
                consectetur adipiscing elit pellentesque labore et.
              </p>
            </div>
          </div>

          <div class="related-posts__entry">
            <img src="../src/assets/image-7.jpg" />
            <div class="blog__content">
              <h3>HackerYou Tech Test</h3>
              <h4>March 9, 2019</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet
                consectetur adipiscing elit pellentesque labore et.
              </p>
            </div>
          </div>

          <div class="related-posts__entry">
            <img src="../src/assets/image-8.jpg" />
            <div class="blog__content">
              <h3>HackerYou Tech Test</h3>
              <h4>March 9, 2019</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet
                consectetur adipiscing elit pellentesque labore et.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'app'
};
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */

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

.wrapper {
  padding: 0 100px;
  margin: 0 auto;
  max-width: 1000px;
}

.blog__header {
  text-align: center;
}

/**** HEADER ****/

.header {
  background-color: #f6f7f9;
}

.header .wrapper {
  align-items: center;
  display: flex;
  justify-content: space-between;
  height: 45px;
}

.header__logo h1 {
  font-family: 'Raleway', sans-serif;
  font-size: 21px;
  text-transform: uppercase;
  margin: 0;
  letter-spacing: 1px;
}

.header__navigaiton ul {
  list-style: none;
}

.header__navigation li {
  display: inline-block;
  margin: 0 8px;
}

.header__navigation a {
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
  text-align: center;
  display: flex;
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

.blog .wrapper {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 100px;
  display: flex;
  justify-content: space-between;
}

.blog__header h2 {
  text-transform: uppercase;
  font-size: 17px;
}

.blog__list {
  padding-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 525px;
}

.blog__entry {
  width: 250px;
  margin-bottom: 25px;
  background-color: #f6f7f9;
}

.blog__entry h3 {
  text-transform: uppercase;
  font-weight: 600;
  font-size: 13px;
  letter-spacing: 0.5px;
}

.blog__entry h4 {
  font-family: 'Noto Serif', serif;
  font-style: italic;
  font-weight: 500;
  font-size: 9px;
  margin-bottom: 5px;
}

.blog__entry p {
  font-size: 9.5px;
  text-align: left;
  line-height: 1.5;
}

.blog__entry-large {
  width: 100%;
}

.blog__about {
  padding-top: 20px;
  max-width: 250px;
}

.blog__content {
  padding: 15px;
}

/**** RELATED POSTS ****/
.related-posts {
  background-color: #f6f7f9;
  padding: 55px 0 30px 0;
  text-align: center;
}

.related-posts .wrapper {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 100px;
}

.related-posts__list {
  padding-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.related-posts__entry {
  width: 250px;
  margin-bottom: 25px;
  background-color: #fff;
}

.related-posts__entry h3 {
  text-transform: uppercase;
  font-weight: 600;
  font-size: 13px;
  letter-spacing: 0.5px;
}

.related-posts__entry h4 {
  font-family: 'Noto Serif', serif;
  font-style: italic;
  font-weight: 500;
  font-size: 9px;
  margin-bottom: 5px;
}

.related-posts__entry p {
  font-size: 9.5px;
  text-align: left;
  line-height: 1.5;
}
</style>
