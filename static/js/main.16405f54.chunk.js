(this["webpackJsonpthe-shoppies"]=this["webpackJsonpthe-shoppies"]||[]).push([[0],{75:function(e,t,n){},85:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n(11),i=n.n(o),r=(n(75),n(60)),c=n(32),s=n(16),d=n(106),l=n(120),h=n(111),j=n(112),b=n(110),u=n.p+"static/media/NoImage.e17fd2f9.jpg",m=n(107),g=n(108),p=n(109),O=n(87),v=n(3),x=Object(d.a)({card:{width:250,height:400,margin:"auto",backgroundColor:"rgba(0, 0, 0, 0.1)"},cardMedia:{width:"100%",height:250,display:"block",paddingTop:"56.25%"},cardHeader:{color:"white",backgroundColor:"rgba 0 0 0 0.1"},cardSubheader:{textAlign:"center",fontWeight:"bold"}}),f=function(e){var t=e.movie,n=(e.nominatedMovies,x()),a="N/A"===(null===t||void 0===t?void 0:t.Poster)?u:t.Poster;return Object(v.jsx)(m.a,{children:Object(v.jsxs)(g.a,{children:[Object(v.jsx)(p.a,{className:n.cardMedia,image:a}),Object(v.jsxs)(b.a,{children:[Object(v.jsx)(O.a,{style:{fontWeight:"bold"},align:"center",noWrap:!0,children:t.Title}),Object(v.jsx)(O.a,{variant:"body2",component:"p",className:n.cardSubheader,children:t.Year})]})]})})},C=function(e){var t=e.header;return Object(v.jsx)(O.a,{gutterBottom:!0,variant:"h5",component:"h2",children:t})},y=n(121),k=function(e){var t=e.text,n="Movies"===t?"Search for":"Search and add movies to";return Object(v.jsx)(l.a,{children:Object(v.jsx)(O.a,{gutterBottom:!0,variant:"body1",component:"p",children:"".concat(n," ").concat(t)})})},N=Object(d.a)((function(e){return{root:{flexGrow:1},moviesListContainer:{minHeight:"40vh",maxHeight:"100vh",overflow:"auto",margin:20,display:"flex",flexWrap:"wrap",justifyContent:"space-evenly"},rootContainer:Object(s.a)({display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"start",padding:"2rem 0 0 2rem"},e.breakpoints.down("sm"),{alignItems:"center",padding:0}),card:{width:250,height:400,margin:"auto"},nominationCount:{fontWeight:"bold"}}})),w=function(e){var t=e.movies,n=e.header,a=e.page,o=e.handlePageChange,i=e.totalResult,r=e.nominationComponent,c=e.handleNominationClick,s=e.nominatedMovies,d=(e.addNomination,N()),u=r,m=(null===t||void 0===t?void 0:t.length)?Object(v.jsx)(y.a,{style:{marginBottom:"10px"},page:a,count:Math.ceil(i/10),onChange:o}):"";return Object(v.jsxs)(l.a,{className:d.rootContainer,children:[Object(v.jsx)(C,{header:n}),t&&!t.length&&Object(v.jsx)(k,{text:n}),"Nomination List"===n&&(null===s||void 0===s?void 0:s.length)>0&&Object(v.jsxs)(l.a,{className:d.nominationCount,children:[s.length,"/5"]}),Object(v.jsx)(h.a,{container:!0,spacing:1,className:d.moviesListContainer,children:t.map((function(e,t){return Object(v.jsx)(h.a,{item:!0,children:Object(v.jsxs)(j.a,{className:d.card,children:[Object(v.jsx)(f,{movie:e}),Object(v.jsx)(b.a,{onClick:function(){return c(e)},children:Object(v.jsx)(u,{disable:null===s||void 0===s?void 0:s.includes(e)})})]})},t)}))}),"movies"===n&&Object(v.jsx)(h.a,{style:{margin:14},children:m})]})},S=n(59),M=n(118),I=n(117),P=n(122),T=n(113),F=n(58),R=n.n(F),W=Object(d.a)((function(e){var t;return{input:Object(s.a)({borderRadius:"20px",height:"40px",backgroundColor:"rgba(0, 0, 0, 0.1)",border:"2px solid #dadada;",width:"100%",color:"white",outline:"none",fontSize:20,paddingLeft:"30px",paddingRight:"30px"},e.breakpoints.down("sm"),{fontSize:14,paddingLeft:"0.8rem",paddingRight:"0.8rem"}),containerCard:(t={width:"50%",minWidth:"200px",backgroundColor:"rgba(48, 48, 48, 0.1)",border:"none",boxShadow:"none",display:"flex",justifyContent:"center"},Object(s.a)(t,e.breakpoints.down("sm"),{width:"70%",padding:"1rem 0"}),Object(s.a)(t,"padding","2rem"),t)}})),L=function(e){var t=e.search,n=e.value,a=W();return Object(v.jsx)(j.a,{className:a.containerCard,children:Object(v.jsx)("form",{style:{width:"100%"},children:Object(v.jsx)(P.a,{className:a.input,placeholder:"Search for movies...",value:n,onChange:function(e){return t(e.target.value)},disableUnderline:!0,startAdornment:Object(v.jsx)(T.a,{position:"start",children:Object(v.jsx)(R.a,{})})})})})},z=n(114),B=function(e){var t=e.disable;return Object(v.jsx)(z.a,{fullWidth:!0,variant:"contained",style:{color:"red"},disabled:t,children:"NOMINATE"})},A=function(){return Object(v.jsx)(z.a,{fullWidth:!0,variant:"contained",style:{color:"red"},children:"Remove Nomination"})},D=n(45),E=n(64),J=n.p+"static/media/background.2735a66c.jpg",H=Object(d.a)((function(e){return{mainFeaturedPost:{position:"relative",backgroundColor:e.palette.grey[800],color:e.palette.common.white,marginBottom:e.spacing(3),backgroundImage:"url(".concat(J,")"),backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},overlay:{position:"absolute",top:0,bottom:0,right:0,left:0,backgroundColor:"rgba(0,0,0,.7)"},mainFeaturedPostContent:Object(s.a)({position:"relative",padding:e.spacing(3)},e.breakpoints.up("md"),{padding:e.spacing(12)}),title:Object(s.a)({},e.breakpoints.down("sm"),{fontSize:"2rem"}),subTitle:Object(s.a)({},e.breakpoints.down("sm"),{fontSize:"1.5rem"})}})),Y=function(){var e=H();return Object(v.jsxs)(E.a,{className:e.mainFeaturedPost,style:{backgroundImage:J},children:[Object(v.jsx)("div",{className:e.overlay}),Object(v.jsx)(h.a,{container:!0,children:Object(v.jsx)(h.a,{item:!0,md:12,zeroMinWidth:!0,children:Object(v.jsxs)("div",{className:e.mainFeaturedPostContent,children:[Object(v.jsx)(O.a,{component:"h1",variant:"h3",color:"inherit",gutterBottom:!0,style:{fontWeight:"bold"},className:e.title,children:"The Shoppies: Movie Awards"}),Object(v.jsx)(O.a,{variant:"h5",color:"inherit",paragraph:!0,className:e.subTitle,children:"Nominate Your Favorite Movies For The Shoppies Movie Award!"})]})})})]})},G=n(115),q=n(116),U=function(){return Object(v.jsx)(G.a,{position:"static",color:"transparent",children:Object(v.jsx)(q.a,{children:Object(v.jsx)(O.a,{align:"right",variant:"body1",children:"\xa9 2021 Shoppies"})})})},K=Object(S.a)({palette:{type:"dark",background:{default:"#1a1f36",paper:"#272b3a"},text:{primary:"#a2b2c4"}}}),Q=function(){var e=Object(a.useState)([]),t=Object(c.a)(e,2),n=t[0],o=t[1],i=Object(a.useState)(""),s=Object(c.a)(i,2),d=s[0],l=s[1],j=Object(a.useState)(1),b=Object(c.a)(j,2),u=b[0],m=b[1],g=Object(a.useState)(0),p=Object(c.a)(g,2),O=p[0],x=p[1],f=Object(a.useState)([]),C=Object(c.a)(f,2),y=C[0],k=C[1],N=Object(D.b)().enqueueSnackbar;Object(a.useEffect)((function(){P(d,u)}),[d,u]);var S=function(e){localStorage.setItem("nominatedMovies",JSON.stringify(e))};Object(a.useEffect)((function(){var e=JSON.parse(localStorage.getItem("nominatedMovies"));k(e)}),[]);var P=function(e,t){""===e&&o([]);var n="https://www.omdbapi.com/?&type=movie&apikey=a48618b7";e.length&&e.length<3?fetch("".concat(n,"&t=").concat(e)).then((function(e){return e.json()})).then((function(e){var t=[e];o(t),x(t.length)})).catch((function(e){console.log(e)})):fetch("".concat(n,"&s=").concat(e,"&page=").concat(t)).then((function(e){return e.json()})).then((function(e){"True"===e.Response&&(o(e.Search),x(e.totalResults))}))},T=function(e,t){m(t),P(d,u)},F=function(e){var t=y.includes(e)?y:[].concat(Object(r.a)(y),[e]);y.length<5&&(k(t),S(t)),4===y.length?N("Great choices! You have reached the maximum 5 nominations",{variant:"success"}):5===y.length&&N("Remove movies from nomination list to add new nominations",{variant:"error"})};return Object(v.jsxs)(I.a,{theme:K,children:[Object(v.jsx)(M.a,{}),Object(v.jsx)(Y,{}),Object(v.jsxs)(h.a,{container:!0,spacing:1,children:[Object(v.jsx)(h.a,{item:!0,xs:12,style:{display:"flex",justifyContent:"center"},children:Object(v.jsx)(L,{search:l,value:d})}),Object(v.jsx)(h.a,{item:!0,xs:12,sm:6,md:8,lg:8,xl:8,children:Object(v.jsx)(w,{movies:n,header:"Movies",page:u,handlePageChange:T,totalResult:O,handleNominationClick:F,nominationComponent:B,nominatedMovies:y,addNomination:F})}),Object(v.jsx)(h.a,{item:!0,xs:12,sm:6,md:4,lg:4,xl:4,children:Object(v.jsx)(w,{movies:y,header:"Nomination List",handlePageChange:T,handleNominationClick:function(e){var t=y.filter((function(t){return t.imdbID!==e.imdbID}));k(t),S(t)},nominationComponent:A,nominatedMovies:y})})]}),Object(v.jsx)(U,{})]})},V=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,124)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),o(e),i(e),r(e)}))},X=n(119);i.a.render(Object(v.jsx)(D.a,{anchorOrigin:{vertical:"top",horizontal:"center"},preventDuplicate:!0,TransitionComponent:X.a,children:Object(v.jsx)(Q,{})}),document.getElementById("root")),V()}},[[85,1,2]]]);
//# sourceMappingURL=main.16405f54.chunk.js.map