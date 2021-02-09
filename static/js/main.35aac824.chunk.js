(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{11:function(e,t,a){e.exports={imageGalleryItem:"ImageGalleryItem_imageGalleryItem__v-iQU",galleryItemImage:"ImageGalleryItem_galleryItemImage__2ECbR"}},12:function(e,t,a){e.exports={overlay:"Modal_overlay__1P3cK",modal:"Modal_modal__3Jwog"}},13:function(e,t,a){e.exports={buttonLoadContainer:"Button_buttonLoadContainer__1KFb4",buttonLoad:"Button_buttonLoad__3uYBJ"}},16:function(e,t,a){e.exports={containerLoader:"Loader_containerLoader__CnZR_"}},17:function(e,t,a){e.exports={imageGallery:"ImageGallery_imageGallery__1ctZ4"}},23:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(0),o=a.n(r),c=a(7),i=a.n(c),s=(a(23),a(3)),l=a(4),m=a(6),u=a(5),h=a(9),d=(a(24),a(8)),g=a.n(d),b=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={imageName:""},e.handleSubmit=function(t){t.preventDefault(),""!==e.state.imageName.trim()?(e.props.onSubmit(e.state.imageName),e.setState({imageName:""})):h.b.error("Enter correct value!")},e.handleNameChange=function(t){e.setState({imageName:t.currentTarget.value.toLowerCase()})},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsx)("div",{children:Object(n.jsx)("header",{className:g.a.searchbar,children:Object(n.jsxs)("form",{className:g.a.searchForm,onSubmit:this.handleSubmit,children:[Object(n.jsx)("button",{type:"submit",className:g.a.searchFormButton,children:Object(n.jsx)("span",{className:g.a.searchFormButtonLabel,children:"Search"})}),Object(n.jsx)("input",{className:g.a.searchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:this.handleNameChange})]})})})}}]),a}(r.Component),j=a(14),p=a(11),f=a.n(p),O=function(e){var t=e.images,a=e.onClick;return Object(n.jsx)(n.Fragment,{children:t.map((function(e){return Object(n.jsx)("li",{className:f.a.imageGalleryItem,children:Object(n.jsx)("img",{className:f.a.galleryItemImage,src:e.webformatURL,alt:"",onClick:function(){return a(e.largeImageURL)}})},e.id)}))})};function v(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a="https://pixabay.com/api/",n="19136098-9af9f23d9dd8880169b991a94";return fetch("".concat(a,"?q=").concat(e,"&page=").concat(t,"&key=").concat(n,"&image_type=photo&orientation=horizontal&per_page=12")).then((function(t){return t.ok?t.json():Promise.reject(new Error("Sorry, the ".concat(e," you entered does not exist!")))}))}var y=a(12),_=a.n(y),x=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onCloseModal()},e.handleOverlayClick=function(t){t.currentTarget===t.target&&e.props.onCloseModal()},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var e=this.props.image;return Object(n.jsx)("div",{className:_.a.overlay,onClick:this.handleOverlayClick,children:Object(n.jsx)("div",{className:_.a.modal,children:Object(n.jsx)("img",{src:e,alt:""})})})}}]),a}(r.Component),w=a(13),S=a.n(w);function C(e){var t=e.onClick;return Object(n.jsx)("div",{className:S.a.buttonLoadContainer,children:Object(n.jsx)("button",{type:"button",className:S.a.buttonLoad,onClick:t,"aria-label":"Load more",children:"Load more"})})}var N=a(15),I=a.n(N),k=a(16),L=a.n(k),F=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsx)("div",{className:L.a.containerLoader,children:Object(n.jsx)(I.a,{type:"ThreeDots",color:"#00BFFF",height:50,width:50,timeout:1e3})})}}]),a}(r.Component),M=a.p+"static/media/nothing-found.5d033e46.png";function B(e){var t=e.message;return Object(n.jsxs)("div",{role:"alert",children:[Object(n.jsx)("img",{src:M,width:"540",alt:"sadmagnifier"}),Object(n.jsx)("p",{children:t})]})}var E=a(17),G=a.n(E),D=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={images:[],page:1,showModal:!1,largeImageURL:null,loading:!1,error:null},e.toglleModal=function(t){e.setState((function(e){return{showModal:!e.showModal,largeImageURL:t}}))},e.onIncrementPage=function(t){e.setState({page:e.state.page+1})},e}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this,n=e.imageName,r=this.props.imageName,o=t.page,c=this.state.page;n!==r&&(this.setState({loading:!0,images:[]}),v(r).then((function(e){e.hits.length>0&&a.setState({images:e.hits})})).catch((function(e){return a.setState({error:e})})).finally((function(){return a.setState({loading:!1})}))),o!==c&&(this.setState({loading:!0}),v(r,c).then((function(e){a.setState((function(t){return{images:[].concat(Object(j.a)(t.images),Object(j.a)(e.hits))}}))})).catch((function(e){return a.setState({error:e})})).finally((function(){return a.setState({loading:!1})}))),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"render",value:function(){var e=this.state,t=e.error,a=e.largeImageURL,r=e.showModal,o=e.images,c=e.loading;return Object(n.jsxs)(n.Fragment,{children:[t&&Object(n.jsx)(B,{message:t.message}),o&&Object(n.jsx)("ul",{className:G.a.imageGallery,children:Object(n.jsx)(O,{images:o,onClick:this.toglleModal})}),c&&Object(n.jsx)(F,{}),o.length>0&&!c&&Object(n.jsx)(C,{onClick:this.onIncrementPage}),r&&Object(n.jsx)(x,{image:a,onCloseModal:this.toglleModal})]})}}]),a}(r.Component),U=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={imageName:""},e.handleFormSubmit=function(t){e.setState({imageName:t})},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(b,{onSubmit:this.handleFormSubmit}),Object(n.jsx)(D,{imageName:this.state.imageName}),Object(n.jsx)(h.a,{autoClose:3e3,position:"top-right",type:"default"})]})}}]),a}(r.Component);i.a.render(Object(n.jsx)(o.a.StrictMode,{children:Object(n.jsx)(U,{})}),document.getElementById("root"))},8:function(e,t,a){e.exports={searchbar:"Searchbar_searchbar__fBodT",searchForm:"Searchbar_searchForm__qcAdm",searchFormButton:"Searchbar_searchFormButton__tAnoz",searchFormButtonLabel:"Searchbar_searchFormButtonLabel__1EbtP",searchFormInput:"Searchbar_searchFormInput__36DFM"}}},[[46,1,2]]]);
//# sourceMappingURL=main.35aac824.chunk.js.map