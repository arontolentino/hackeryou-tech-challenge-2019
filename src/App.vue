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
        <div class="header">
          <h2>Blog</h2>
        </div>
        <div class="wrapper">
          <div class="blog__list">
            <div class="blog__entry">
              <img src="../src/assets/image-2.jpg" alt="test" />
              <article class="blog__content">
                <h3>HackerYou Tech Test</h3>
                <h4>March 1st, 2018</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet
                  consectetur adipiscing elit pellentesque labore et.
                </p>
                <a href="#">Read More</a>
              </article>
            </div>

            <div class="blog__entry">
              <img src="../src/assets/image-3.jpg" alt="test" />
              <article class="blog__content">
                <h3>HackerYou Tech Test</h3>
                <h4>March 1st, 2018</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet
                  consectetur adipiscing elit pellentesque labore et.
                </p>
                <a href="#">Read More</a>
              </article>
            </div>

            <div class="blog__entry">
              <img src="../src/assets/image-5.jpg" alt="test" />
              <article class="blog__content">
                <h3>HackerYou Tech Test</h3>
                <h4>March 1st, 2018</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet
                  consectetur adipiscing elit pellentesque labore et dolore
                  incididunt ut labore. Amet consectetur adipiscing elit pellentesque labore et dolore
                  incididunt ut labore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <a href="#">Read More</a>
              </article>
            </div>
          </div>

          <div class="blog__about">
            <div class="blog__entry">
              <img src="../src/assets/image-4.jpg" alt="test" />
              <article class="blog__content">
                <h3>About Us</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet
                  consectetur adipiscing elit pellentesque labore et dolore
                  incididunt ut labore. Amet consectetur adipiscing elit pellentesque labore et dolore
                  incididunt ut labore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et.
                </p>
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
            <div class="blog__entry blog__entry--related">
              <img src="../src/assets/image-6.jpg" alt="test" />
              <article class="blog__content">
                <h3>HackerYou Tech Test</h3>
                <h4>March 1st, 2018</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet
                  consectetur adipiscing elit pellentesque labore et.
                </p>
                <a href="#">Read More</a>
              </article>
            </div>

            <div class="blog__entry blog__entry--related">
              <img src="../src/assets/image-7.jpg" alt="test" />
              <article class="blog__content">
                <h3>HackerYou Tech Test</h3>
                <h4>March 1st, 2018</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet
                  consectetur adipiscing elit pellentesque labore et.
                </p>
                <a href="#">Read More</a>
              </article>
            </div>

            <div class="blog__entry blog__entry--related">
              <img src="../src/assets/image-8.jpg" alt="test" />
              <article class="blog__content">
                <h3>HackerYou Tech Test</h3>
                <h4>March 1st, 2018</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet
                  consectetur adipiscing elit pellentesque labore et.
                </p>
                <a href="#">Read More</a>
              </article>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer></footer>
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

/**** REUSABLE COMPONENTS ****/

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
</style>
