(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(20)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(2),o=n.n(r),c=(n(14),n(3)),l=n(4),s=n(6),m=n(5),u=n(7),g=(n(15),{API_KEY:{V3:"25407f7c807d02fb57fef8ee0586086c",V4:"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNTQwN2Y3YzgwN2QwMmZiNTdmZWY4ZWUwNTg2MDg2YyIsInN1YiI6IjVjOTI3NzgyOTI1MTQxMGI2ZjllZjFiMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kJRCj6S5AQi3AWCvL7ZFTh7SycVpTGamIcr88jMkDUM"},BASE_URI:window.location.protocol+"//api.themoviedb.org/3/",IMAGES_URI:window.location.protocol+"//image.tmdb.org/t/p/"}),h=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3;return e.filter(function(e){return t.every(function(t){return e.genre_ids.includes(t)})&&e.vote_average>=n})},v=function(e){return i.a.createElement("header",{className:"app-header"},i.a.createElement("div",{className:"app-logo"}),i.a.createElement("h1",null,"Currently airing movies"),i.a.createElement("div",{className:"app-logo"}))},f=(n(16),n(17),function(e){return i.a.createElement("div",{className:"movie-filter"},i.a.createElement("input",{type:"checkbox",onChange:e.onChange,id:e.value}),i.a.createElement("label",{htmlFor:e.value},e.name))}),p=function(e){return i.a.createElement("section",{className:"movie-filters"},i.a.createElement("div",{className:"movie-filters-genres"},Object.keys(e.genres).map(function(t){return i.a.createElement(f,{key:t,name:e.genres[t],onChange:e.onChangeGenreFilters,value:t})})),i.a.createElement("input",{type:"number",defaultValue:"3",min:"0",max:"10",step:"0.5",onChange:e.onChangeMinRating,id:"min-rating"}),i.a.createElement("label",{htmlFor:"min-rating"},"Minimum Rating"))},d=(n(18),n(19),function(e){return i.a.createElement("div",{className:"movie-card"},i.a.createElement("div",{className:"movie-card-content"},i.a.createElement("img",{className:"movie-poster",src:"".concat(g.IMAGES_URI,"w300").concat(e.movie.poster_path),alt:e.movie.title}),i.a.createElement("div",{className:"movie-info"},i.a.createElement("h3",null,(t=e.movie,"".concat(t.title).concat(t.title!==t.original_title?" (Original Title: ".concat(t.original_title,")"):""))),i.a.createElement("div",{className:"movie-genres"},i.a.createElement("h4",null,"Genres:"),i.a.createElement("ul",null,e.movie.genre_ids.map(function(t){return i.a.createElement("li",{key:t,className:"genre-item"},e.genres[t])}))),i.a.createElement("div",{className:"movie-description desktop-only"},i.a.createElement("h4",null,"Description:"),i.a.createElement("p",null,e.movie.overview)))));var t}),E=function(e){var t=h(e.movies,e.filters,e.minRating);return i.a.createElement("section",{className:"movie-list"},e.error?i.a.createElement("h3",{className:"error"},JSON.stringify(e.error)):e.movies.length&&!t.length?i.a.createElement("h3",{className:"error"},"No Movies Matching the Current Filter Criteria"):h(e.movies,e.filters,e.minRating).map(function(t){return i.a.createElement(d,{key:t.title,movie:t,genres:e.genres})}))},y=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={movies:[],error:null,filters:[],genres:[],minRating:0},n.onChangeGenreFilters=function(e){var t=+e.currentTarget.id,a=n.state.filters.indexOf(t);n.setState({filters:-1===a?n.state.filters.concat(t):n.state.filters.filter(function(e){return e!==t})})},n.onChangeMinRating=function(e){return n.setState({minRating:+e.currentTarget.value})},n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("".concat(g.BASE_URI,"movie/now_playing?api_key=").concat(g.API_KEY.V3),{"Content-Type":"application/json"}).then(function(e){return e.json()}).then(function(t){e.setState({movies:t.results.sort(function(e,t){return t.popularity-e.popularity})})}).catch(function(t){return e.setState({error:t})}),fetch("".concat(g.BASE_URI,"genre/movie/list?api_key=").concat(g.API_KEY.V3),{"Content-Type":"application/json"}).then(function(e){return e.json()}).then(function(t){var n;e.setState({genres:(n=t.genres,n.reduce(function(e,t){return e[t.id]=t.name,e},{}))})}).catch(function(t){return e.setState({error:t})})}},{key:"render",value:function(){return i.a.createElement("div",{className:"app"},i.a.createElement(v,null),i.a.createElement("main",null,i.a.createElement(p,{filters:this.state.filters,genres:this.state.genres,onChangeGenreFilters:this.onChangeGenreFilters,onChangeMinRating:this.onChangeMinRating}),i.a.createElement(E,{error:this.state.error,filters:this.state.filters,genres:this.state.genres,minRating:this.state.minRating,movies:this.state.movies})))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[8,1,2]]]);
//# sourceMappingURL=main.6fa49d4a.chunk.js.map