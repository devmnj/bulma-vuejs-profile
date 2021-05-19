<template>
  <div class="">
    <section class="hero is-info is-fullheight" style="width: 100em">
      <div class="hero-head">
        <nav class="navbar">
          <div class="container">
            <div class="navbar-brand">
              <a class="navbar-item">
                <h1 class="is-size-3">Arthur Adkins</h1>
                <!-- <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo" /> -->
              </a>
              <span class="navbar-burger" data-target="navbarMenuHeroB">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </div>
            <div id="navbarMenuHeroB" class="navbar-menu">
              <div class="navbar-end">
                <a class="navbar-item is-active"> Home </a>
                <a class="navbar-item"> Projects </a>
                <a class="navbar-item"> Blog </a>
                <a class="navbar-item"> Profile </a>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <div class="hero-body">
        <div class="columns">
          <div class="column is-three-fourth">
            <div class="conntainer">
              <!-- <figure class="image  ">
               <img class ="" src="https://picsum.photos/id/823/600/400" alt="">
              </figure> -->
              <ImgCards>
                <template slot="details">
                  <h1 class="is-size-5">Web Developer</h1>
                  <span class="icon  ">
                <i>
                 <a :href="`${fb}`"> <v-icon name="md-facebook" scale="1.5" /></a>
                </i>
                <i>
                  <a :href="`${gh}`"> <v-icon name="oi-octoface" scale="1.5" /></a>
                </i>
                <i>
                  <a :href="`${tw}`"> <v-icon name="bi-twitter" scale="1.5"/></a>
                </i> <i>
                 <a :href="`${wp}`">  <v-icon name="fa-wordpress"  scale="1.5"/></a>
                </i></span>
                </template>
              </ImgCards>
            </div>
          </div>
          <div class="column is-three-fifths">
            <section class="block">
              <p class="is-size-1">I am a web developer from Frankfruit,Germany.</p>
            </section>
          </div>
        </div>
      </div>

      <div class="hero-foot mb-2 mt-2">
        <nav class="breadcrumb is-centered" aria-label="breadcrumbs">
          <ul>
            <li><a :href="`${gh}`">GitHub</a></li>
            <li><a :href="`${fb}`">Facebook</a></li>
            <li><a :href="`${tw}`">Twitter</a></li>
            <li class="is-active"><a href="`${us}`" aria-current="page">Unsplash</a></li>
          </ul>
        </nav>
      </div>
    </section>
  </div>
</template>

<script>
import ImgCards from "./components/ImgCards";
export default {
  name: "App",
  data() {
    return {
      fb:"https://facebook.com/manoj_melettur",
      tw: "https://twitter.ocm/codehat_",
      wp:"https://javascriptsu.wordpress.com",
      gh:"https://github.com/manojap",
      us:"https://unsplash.com/@manojap"
    }
  },
  components: {
    ImgCards,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helve</div> tica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.section1 {
  height: 100%;
}
</style>
