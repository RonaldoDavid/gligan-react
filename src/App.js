import React, { Component } from 'react';
// import LazyLoad from 'react-lazyload';
import axios from 'axios'

import './styles/App.scss';

const API_URL = "https://servidor-gligan.glitch.me/";

class App extends Component {

  state = {
    articles: []
  }

  componentDidMount() {
    const url = `${API_URL}/articles`;
    axios.get(url).then(response => response.data)
    .then((data) => {
      this.setState({ articles: Object.entries(data) });
      console.log(this.state.articles);
     })
  }

  render () {
    return (
      <div className="App">
        <div className="App-main">
          <div className="logo"><a href="/">RDGG</a></div>
          <div><h1>Ronaldo David Gomes Gligan</h1></div>
          <p className="left-indicator">
            <h2 className="txt">Introduction</h2>
            Hey! I'm <b>Ronaldo David Gomes Gligan</b> and I work as a <b>Programmer</b> 💻 from the age of 8, I like too much the web but I also know C (Arduino), PHP & Python.
          </p>
          <p className="left-indicator">
            <h2 className="txt">Programming Skills</h2>
            I have over four years of experience <b>designing webs</b> (blogs, systems, webapps...), mobile apps with <b>react native</b> and designing desktop apps with <b>electron</b>.
          </p>
          <p className="left-indicator">
            <h2 className="txt">Language Skills</h2>
            I speak <i>very well</i> <b>English</b> 🇺🇸 from many years ago 😊. También hablo <b>Español</b> 🇪🇸 (<i>Castellano</i>) a nivel nativo, <i>i també parle una mica de <b>Valencià</b></i> 🥘. Știu ceva despre limba <b>Română</b> 🇷🇴 et j'apprends le <b>Français</b> 🇫🇷.
          </p>
          <p className="left-indicator">
            <h2 className="txt">Other Skills</h2>
            I also like <b>photography</b> 📷, in my <a href="https://www.instagram.com/linux_rdgg/">Instagram</a> I have super cool photos, and of course I love the design. <i>“When I open Adobe XD I do amazing things”</i>.
          </p>
          <p className="left-indicator">
            <h2 className="txt">Social stuff</h2>
            I'm not very active 🙃 in my <b>social profiles</b>, but sometimes I upload <b>very good things</b> that you probably like. Click in these icons to make me happy 🙋‍♂️:
            <div className="social-icons">
              <a href="http://facebook.com/RonaldoDavidGomes" target="_blank" rel="noopener noreferrer"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg> </a>  <a href="https://twitter.com/linux_rdgg" target="_blank" rel="noopener noreferrer"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-twitter"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg> </a>  <a href="https://www.instagram.com/linux_rdgg/" target="_blank" rel="noopener noreferrer"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.5" y2="6.5"></line></svg> </a>  <a href="http://github.com/RonaldoDavid/" target="_blank" rel="noopener noreferrer"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg> </a>  <a href="https://codepen.com/linux_rdgg/" target="_blank" rel="noopener noreferrer"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-codepen"><polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon><line x1="12" y1="22" x2="12" y2="15.5"></line><polyline points="22 8.5 12 15.5 2 8.5"></polyline><polyline points="2 15.5 12 8.5 22 15.5"></polyline><line x1="12" y1="2" x2="12" y2="8.5"></line></svg> </a>
            </div>
          </p>
          <p className="left-indicator">
            <h2 className="txt">Articles</h2>
            Apart from programming, I like to write. I have written several books and guides and soon there will be many interesting things, here I leave you my knowledge:
            <br /><br />
            <div className="articles">

              <div>
                {this.state.articles.map((article) => (
                  <p>{article.title}</p>
                ))}
              </div>

              {/*<section className="a">
                <LazyLoad><div>
                  <img src="https://picsum.photos/300/200" />
                  <p className="title">
                    Título para el Artículo I
                    <span className="date">28th of June, 2019</span>
                  </p>
                </div></LazyLoad>
                <LazyLoad><div>
                  <img src="https://picsum.photos/280/250" />
                  <p className="title">
                    Título para el Artículo II
                    <span className="date">28th of June, 2019</span>
                  </p>
                </div></LazyLoad>
              </section>
              <section className="b">
                <LazyLoad><div>
                  <img src="https://picsum.photos/280/250" />
                  <p className="title">
                    Título para el Artículo III
                    <span className="date">28th of June, 2019</span>
                  </p>
                </div></LazyLoad>
                <div>
                  <img src="https://picsum.photos/300/200" />
                  <p className="title">
                    Título para el Artículo IV
                    <span className="date">28th of June, 2019</span>
                  </p>
                </div>
              </section>*/}
            </div>
            {/*<a href="#">*/}<button className="articlesbtn">Hey! This isn't all. Click here for more</button>{/*</a>*/}
          </p>
        </div>
      </div>
    ) // end return
  } // End render()
}

export default App;
