(function(e){function t(t){for(var c,r,n=t[0],a=t[1],l=t[2],u=0,U=[];u<n.length;u++)r=n[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&U.push(i[r][0]),i[r]=0;for(c in a)Object.prototype.hasOwnProperty.call(a,c)&&(e[c]=a[c]);A&&A(t);while(U.length)U.shift()();return o.push.apply(o,l||[]),s()}function s(){for(var e,t=0;t<o.length;t++){for(var s=o[t],c=!0,n=1;n<s.length;n++){var a=s[n];0!==i[a]&&(c=!1)}c&&(o.splice(t--,1),e=r(r.s=s[0]))}return e}var c={},i={app:0},o=[];function r(t){if(c[t])return c[t].exports;var s=c[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=e,r.c=c,r.d=function(e,t,s){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)r.d(s,c,function(t){return e[t]}.bind(null,c));return s},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/proj-html-vuejs/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],a=n.push.bind(n);n.push=t,n=n.slice();for(var l=0;l<n.length;l++)t(n[l]);var A=a;o.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"0b4c":function(e,t){e.exports="data:image/png;base64,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"},"1ec5":function(e,t,s){e.exports=s.p+"img/dc-logo-bg.f4404ce9.png"},"1f06":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAQAAAC00HvSAAACE0lEQVR4AZ2WA6xeQRBGp7ZtG1FfUNt2G1Rx7Z7atm3GrBXUtm3bmKf/4e7uz3OiO5v5dvda3JCK2kxiD/f4gPKJRxxgFk1IK6FCLibzDHX6jgUUCR6RlpF8QQP6i1lkDhRShrNoSN6mmrihJu/RkP1BO7GhBt/QsPxLB3s7H9Gw/UWN5CHpOI9G5CNySgKMQSN2VUJIvpDOym+OspPj/DPq/6gcHzPDU37LHdTyKEUlDipyjhMMSnZrbBMRUvPS07CE4lbQZTKKB/rxInH0JzmFBkZLPxHyst9TMy4s2YliMZpob3NLykQREVLQk4eJtdxGTEqja5sY8ypXSCVxkJpWrOMaP8lpxBQ1em4Kj43SJyaKASmM4/JGzx/hq1EaShWySEBoinoV1HCfBIWxdoy5mv+0Cxpz3I55jBp+ZwjZAoRU5L99bg6ghv/oRqUAMZtRw1vCTNRyXYCQmvxDDbcLjVCHa8jlDMnNfdSyj5CaV+6XJAOt+yUrJ5wvr5wirm29Zxe1xIBSXEYdbo8fzs/3xNIHJlGUVGJARkby1Rnyn6oSD+M9A3eZQG0yScIkLVjOO9Qta5O/i6+glt94H/S9+Nzz2FKBj2gE1hYv1Od72N+p7mJDHT6gIfuTjuKGclwIMeQ+UYH/KMYGPa2/mU8WCQZ5mcFz1Ol7llJcQoVUNGAq+3jAF5RvPOUQc2lBOnESDev+cHktH1NXAAAAAElFTkSuQmCC"},"2eb0":function(e,t,s){"use strict";s("e210")},"3a8f":function(e,t,s){e.exports=s.p+"img/footer-bg.dfd68d29.jpg"},"49c4":function(e,t,s){},"513c":function(e,t,s){},"563a":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAQAAAC00HvSAAACpElEQVR4AY2WA5QYPQCE57dt27ZZ27ZtfrVt86F2+1Dbtm3r7LtUe9hsDhNPZidYZOUGD/A3nVnIcW5iCOU0S+lNLh5WVsELdOE8xhmuM5C3lBl4mFaEYzIMsfTmyYxMPmIbJkvhCD/KDf7kBibLIZoiLpM/iHSIQ9jAUnY5B0igWHA5IZYonon8zgNe//38zmQSA7v0R1qTR9hhCQ7yg8QntGcuy5hOO96X+IPTlu40zysZtLU6N/McLzCeRN/sBvEYr3PU0o72THjF2pVzvM77nMAEwkae4XPrgUjky3s2PS1xLp7kEMYZFnA/DSxusiQe5JKPXCPROU37GLmoxZaUdgUe4YzvihieF9ks79o8RVjKfhgMpSQeYCze5jvmXzVIvUUJr7aMmRgM/0kSD3HM4z/lv8CyWOKfoEQnr16RZ2hFQUn+PSzPm5bNIVnrPCMx3KvnkQ/U9/hmPGw/qiLCR9yQ6OPVG1s2Qzy+Gi9h/EE2wRuU9GoH0n6keInrHv8t/wRtIiyqMk8T5dVn4X1XeJm1HneC++getDljUcskRqe0LjICGEdICtOM+zkZ3JultjPf8x4xGGc4z+OUDLCHRa8AuUSiB26bqjzE4QA7ReRwiAvzKHsd/FLuo4mDryYe5HKAPsfzfEtk4FR4m/cJc3zin5dcyzLM4j7KkuT7ZObgIdZhHEuSJF4lytGJRKuUVhK1JAY6dEl8rXugg7O7mkRLEjEk0kiiIcYRxqX5Fjs3NIHKEjmYR26JeiQ5NBd4XqngM0KcMxrK0xJPMMx9fvK3/OB/opzSENa4j0ESKKsg+IebmCyHGIrLDT5hZxZNTvBTxn8U7YjMxCKOATylzMDL9OSC24IbDONdZRU8QDa6sZiThGOI5BzL6Uc+HpETtwDp5wIpWJbQHAAAAABJRU5ErkJggg=="},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var c=s("2b0e"),i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("Header"),s("Main"),s("Footer")],1)},o=[],r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("header",[s("div",{staticClass:"container"},[e._m(0),s("nav",[s("ul",e._l(e.links,(function(t,c){return s("li",{key:c},[s("a",{class:{active:t.current},attrs:{href:t.url},on:{click:function(t){return t.preventDefault(),e.changePage(c)}}},[e._v(e._s(t.text))])])})),0)])])])},n=[function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("a",{staticClass:"logo",attrs:{href:"#"}},[c("img",{attrs:{src:s("9f51"),alt:"DC logo header"}})])}],a=(s("d3b7"),s("159b"),{name:"Header",data:function(){return{links:[{text:"characters",url:"#",current:!1},{text:"comics",url:"#",current:!0},{text:"movies",url:"#",current:!1},{text:"tv",url:"#",current:!1},{text:"games",url:"#",current:!1},{text:"collectibles",url:"#",current:!1},{text:"videos",url:"#",current:!1},{text:"fans",url:"#",current:!1},{text:"news",url:"#",current:!1},{text:"shop",url:"#",current:!1}]}},methods:{changePage:function(e){this.links.forEach((function(e){return e.current=!1})),this.links[e].current=!0}}}),l=a,A=(s("ab9a"),s("2877")),u=Object(A["a"])(l,r,n,!1,null,"18bb5b51",null),U=u.exports,m=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("main",[s("Hero"),s("div",{staticClass:"container"},[s("CurrentSeries")],1)],1)},f=[],p=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},b=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"hero"},[s("div",{staticClass:"text"},[s("h2",[e._v("Teen Titans Go!: Titans Together")]),s("p",[e._v("A new full-size collection featuring TEEN TITANS GO #27-32!")])])])}],d={name:"Hero"},v=d,g=(s("806b"),Object(A["a"])(v,p,b,!1,null,"cbc7712c",null)),x=g.exports,y=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",[s("h2",[e._v("Current series")]),s("div",{staticClass:"comics-list"},e._l(e.comics,(function(e,t){return s("ComicCard",{key:t,attrs:{comic:e}})})),1),e._m(0)])},S=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"load-more"},[s("a",{attrs:{href:"#"}},[e._v("Load more")])])}],k=[{thumb:"https://www.dccomics.com/sites/default/files/styles/covers192x291/public/comic-covers/2018/09/AC1000_DLX_162-001_HD_5ba13723281ab0.37845353.jpg?itok=ZsI-C5eX",price:"$19.99",series:"Action Comics",type:"comic book"},{thumb:"https://www.dccomics.com/sites/default/files/styles/covers192x291/public/comic-covers/2020/09/AV1976_01_300-001_HD_5f738f6e39ddd7.18205602.jpg?itok=VgdYdJ01",price:"$3.99",series:"American Vampire 1976",type:"comic book"},{thumb:"https://www.dccomics.com/sites/default/files/styles/covers192x291/public/gn-covers/2018/08/AQMv4_UW_153-001_HD_5b7efa1745a9b8.08589135.jpg?itok=HPTtnrsb",price:"$16.99",series:"Aquaman",type:"graphic novel"},{thumb:"https://www.dccomics.com/sites/default/files/styles/covers192x291/public/comic-covers/2018/06/batgirl_v5_1_5b23e1f1124941.50950783.jpg?itok=VnrJah76",price:"$2.99",series:"Batgirl",type:"comic book"},{thumb:"https://www.dccomics.com/sites/default/files/styles/covers192x291/public/comic-covers/2018/09/BM_56_300-001_HD_5ba137a85c3bf3.33122291.jpg?itok=3FHJQYJZ",price:"$3.99",series:"Batman",type:"comic book"},{thumb:"https://www.dccomics.com/sites/default/files/styles/covers192x291/public/comic-covers/2018/09/BM_56_300-001_HD_5ba137a85c3bf3.33122291.jpg?itok=3FHJQYJZ",price:"$2.99",series:"Batman Beyond",type:"comic book"},{thumb:"https://www.dccomics.com/sites/default/files/styles/covers192x291/public/comic-covers/2019/08/BMSM_5d4361b7116261.74371456.jpg?itok=kEDR2OL8",price:"$3.99",series:"Batman/Superman",type:"comic book"},{thumb:"https://www.dccomics.com/sites/default/files/styles/covers192x291/public/comic-covers/2020/09/BMSMANN_01_300-001_HD_5f5ff17fa1d665.74704970.jpg?itok=azz5sfGk",price:"$4.99",series:"Batman/Superman Annual",type:"comic book"},{thumb:"https://www.dccomics.com/sites/default/files/styles/covers192x291/public/comic-covers/2020/09/BMTJWZ_01_300-001_HD_5f5ff2307dcb37.34652945.jpg?itok=VswVjLR8",price:"$5.99",series:"Batman: The Joker War Zone",type:"comic book"},{thumb:"https://www.dccomics.com/sites/default/files/styles/covers192x291/public/comic-covers/2020/08/cover-v2_5f40314645a734.37285065.png?itok=ImNM2QBY",price:"$6.99",series:"Batman: Three Jokers",type:"comic book"},{thumb:"https://www.dccomics.com/sites/default/files/styles/covers192x291/public/comic-covers/2020/10/BMWK_HQ_01_300-001_HD_5f7cb4945e13f6.89501032.jpg?itok=sVwALbUX",price:"$4.99",series:"Batman: White Knight Presents: Harley Quinn",type:"comic book"},{thumb:"https://www.dccomics.com/sites/default/files/styles/covers192x291/public/gn-covers/2019/04/CTWv1_CC_144-001_HD_5ca5299a751963.53054221.jpg?itok=ooPaoLDq",price:"$16.99",series:"Catwoman",type:"graphic novel"}],h=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"card"},[s("div",{staticClass:"img"},[s("img",{attrs:{src:e.comic.thumb,alt:e.comic.series}}),s("div",{staticClass:"info"},[s("p",[e._v("Price: "+e._s(e.comic.price))]),s("p",[e._v("Type: "+e._s(e.comic.type))])])]),s("h4",[e._v(e._s(e.comic.series))])])},M=[],w={name:"ComicCard",props:{comic:Object}},j=w,R=(s("b160"),Object(A["a"])(j,h,M,!1,null,"bf5d6b42",null)),C=R.exports,Z={name:"CurrentSeries",components:{ComicCard:C},data:function(){return{comics:k}}},K=Z,N=(s("d878"),Object(A["a"])(K,y,S,!1,null,"22c7b130",null)),B=N.exports,z={name:"Main",components:{Hero:x,CurrentSeries:B}},O=z,D=(s("67ac"),Object(A["a"])(O,m,f,!1,null,"73897729",null)),G=D.exports,H=function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("footer",[c("div",{staticClass:"footer-top"},[c("div",{staticClass:"container"},[c("ul",e._l(e.topLinks,(function(t,i){return c("li",{key:i},[c("a",{attrs:{href:t.url}},[c("img",{attrs:{src:s("bb6e")("./"+t.img),alt:t.text+" icon"}}),c("span",[e._v(e._s(t.text))])])])})),0)])]),c("div",{staticClass:"footer-main"},[c("div",{staticClass:"container"},[c("div",{staticClass:"col"},[c("h3",[e._v(e._s(e.mainCategories[0].title))]),c("ul",e._l(e.mainCategories[0].links,(function(t,s){return c("li",{key:s},[c("a",{attrs:{href:t.url}},[e._v(e._s(t.text))])])})),0),c("h3",[e._v(e._s(e.mainCategories[1].title))]),c("ul",e._l(e.mainCategories[1].links,(function(t,s){return c("li",{key:s},[c("a",{attrs:{href:t.url}},[e._v(e._s(t.text))])])})),0)]),c("div",{staticClass:"col"},[c("h3",[e._v(e._s(e.mainCategories[2].title))]),c("ul",e._l(e.mainCategories[2].links,(function(t,s){return c("li",{key:s},[c("a",{attrs:{href:t.url}},[e._v(e._s(t.text))])])})),0)]),c("div",{staticClass:"col"},[c("h3",[e._v(e._s(e.mainCategories[3].title))]),c("ul",e._l(e.mainCategories[3].links,(function(t,s){return c("li",{key:s},[c("a",{attrs:{href:t.url}},[e._v(e._s(t.text))])])})),0)])])]),e._m(0)])},L=[function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("div",{staticClass:"footer-bottom"},[c("div",{staticClass:"container"},[c("a",{staticClass:"sign",attrs:{href:"#"}},[e._v("sign-up now!")]),c("div",{staticClass:"socials"},[c("span",[e._v("follow us")]),c("div",{staticClass:"icons"},[c("div",{staticClass:"icon"},[c("a",{attrs:{href:"#"}},[c("img",{attrs:{src:s("7430"),alt:"Facebook icon"}})])]),c("div",{staticClass:"icon"},[c("a",{attrs:{href:"#"}},[c("img",{attrs:{src:s("1f06"),alt:"Twitter icon"}})])]),c("div",{staticClass:"icon"},[c("a",{attrs:{href:"#"}},[c("img",{attrs:{src:s("61b2"),alt:"YouTube icon"}})])]),c("div",{staticClass:"icon"},[c("a",{attrs:{href:"#"}},[c("img",{attrs:{src:s("ae27"),alt:"Pinterest icon"}})])]),c("div",{staticClass:"icon"},[c("a",{attrs:{href:"#"}},[c("img",{attrs:{src:s("563a"),alt:"Periscope icon"}})])])])])])])}],J={name:"Footer",data:function(){return{topLinks:[{img:"buy-comics-digital-comics.png",text:"digital comics",url:"#"},{img:"buy-comics-merchandise.png",text:"dc merchandise",url:"#"},{img:"buy-comics-subscriptions.png",text:"subscription",url:"#"},{img:"buy-comics-shop-locator.png",text:"comic shop locator",url:"#"},{img:"buy-dc-power-visa.svg",text:"dc power visa",url:"#"}],mainCategories:[{title:"dc comics",links:[{text:"Characters",url:"#"},{text:"Comics",url:"#"},{text:"Movies",url:"#"},{text:"TV",url:"#"},{text:"Games",url:"#"},{text:"Videos",url:"#"},{text:"News",url:"#"}]},{title:"shop",links:[{text:"Shop DC",url:"#"},{text:"Shop DC Collectibles",url:"#"}]},{title:"dc",links:[{text:"Terms Of Use",url:"#"},{text:"Privacy policy (New)",url:"#"},{text:"Ad Choices",url:"#"},{text:"Advertising",url:"#"},{text:"Jobs",url:"#"},{text:"Subscriptions",url:"#"},{text:"Talent Workshops",url:"#"},{text:"CPSC Certificates",url:"#"},{text:"Ratings",url:"#"},{text:"Shop Help",url:"#"},{text:"Contact Us",url:"#"}]},{title:"sites",links:[{text:"DC",url:"#"},{text:"MAD Magazine",url:"#"},{text:"DC Kids",url:"#"},{text:"DC Universe",url:"#"},{text:"DC Power Visa",url:"#"}]}]}}},W=J,V=(s("2eb0"),Object(A["a"])(W,H,L,!1,null,"385bb16a",null)),P=V.exports,T={name:"App",components:{Header:U,Main:G,Footer:P}},X=T,E=(s("5c0b"),Object(A["a"])(X,i,o,!1,null,null,null)),F=E.exports;c["a"].config.productionTip=!1,new c["a"]({render:function(e){return e(F)}}).$mount("#app")},"5c0b":function(e,t,s){"use strict";s("9c0c")},"5ead":function(e,t,s){e.exports=s.p+"img/jumbotron.1b0a3671.jpg"},"61b2":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAQAAAC00HvSAAACd0lEQVR4AaWWA3AlaRRGb2yNbdu2bdsoOzljrG3btm0ztm07+bf2oat7nmu+U2jcPr9aYj/4sIDLfEwGVShqyOFzbmUl/uJu6MoVClB2qeBu+rtW+BNNHcopLdxKqDPJcP5AuUUq0xxJ5lGJcpsmNtuTzKUB5SFbbYdTbSh4iB9RPMOnLmZprl4SwF8oAwdYRzNBvIpySg5dNA1nURh5n1A+JoR6fuMmPkfxC3+Sbqd3j1olPe3MSguRzGIHOfizH1/+Yg+neYjxNpUdjDNrbkbZ4ZAIb/K9CNVE8KJDjeJFEcGXYrua10SocEvTTBdhKcouH5gE7mgUR4SbnWoSRHgMfz5hD/NY5EDzovCZA00sJ2hEcReLgXbe4iCPcdlubbKQi7pu2oR6m4N/cg+3OOFV23eAGHdp56AIUSbCxBLC8RNd6MPv12qMvbkkIlb199plsawVQ+hJjVFjnJteYgofEGNqNZRehBLLdoaLEMEiuogpPGOcm891u/UiBs337OED9hDL1zQxjWS+Jw9fU8V5lEaKcItut9qhZi2xnEYxEkVfU0UMSuMlYblHmtd4jW42mqOCLyXabp1TzSkUftxCuHFQtNBFxDisHgbN5/xOsUnzLtUsoZxXKDUvPk/phvR/6EWjdihGTGESg0QYxWQm0YtZjGMFXgzlMMPM3zLt9d/JBDGHC7oObhaXoQvfalc8oX8Xx6E0vuEq0Q45wxNUabWFdNH7R1ON8pgWFogxLKHRQ0k7e8Q2LKTKA0kz28R+GMnfbkoyme78j+Kcy49wK3cRJq5CD26m0IGikgcYJO4GH5ZyA5+SRR2KBvL5kjtYS4DYzX+j8JtZPb8iWQAAAABJRU5ErkJggg=="},6718:function(e,t,s){},"67ac":function(e,t,s){"use strict";s("6718")},"702c":function(e,t){e.exports="data:image/png;base64,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"},7430:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAQAAAC00HvSAAABnUlEQVR4Aa3VA+xXURjG8Tfbto2phmwOacia7fpm29acx4bc1JBt97eZdfKP971+nvHgc3ct1qEcA1jOGV5SiKGYt1xgPSOpKG5DPVaQjrFsPltp4UxUZB6lGNt+Zj3VRQ8duIFx1Wf00pB+FGBc9yPjrZC+vMd46jcmJp9Okbr8BSfY/6dXk65S31ikErcU4j3TKBNZNz9p/i11IwwLMUpny5+ojGH//8lG6lXJppwj853ufyfXYpReigAzOPmr9yxXHRERypOlMkcizB2M2k/UFYZiXDD3MHqZo5/SbfYzN8Is+XPDL6uH47wytVaSwmJl7RMhxQOzV1n7VXjngTmlXR3BeLg2mTrzLoQ7ZZRrozH6tbkQAvNUWBcCc1QYHgIzVyhPdkDmM3VFhHUBmaN/lzTmQwDmBz0jD1cA5lDst/i+TyaDuhINXSz/DJlc+NdS5eIOkPgwhA+e/1NTJDkMpNAD8olJYh06cdsl8oreooeKLHL8CX9hCzXEKTRkLRkKUcAuWovbUI6hrOIcrynF8J40LrGJsVQSy/wEkq70Q3uDxroAAAAASUVORK5CYII="},"7aa6":function(e,t,s){e.exports=s.p+"img/buy-dc-power-visa.409b42b7.svg"},"806b":function(e,t,s){"use strict";s("f90b")},"9c0c":function(e,t,s){},"9f51":function(e,t){e.exports="data:image/png;base64,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"},a395:function(e,t,s){},a9b3:function(e,t){throw new Error("Module parse failed: Unexpected character '\0' (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n(Source code omitted for this binary file)")},ab9a:function(e,t,s){"use strict";s("a395")},ae27:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAQAAAC00HvSAAACt0lEQVR4AZWWA7AkMRiEc7Zt27Zt27b5nW3bZuFQONu2bdtW6q/KJW8etnd3ZtLd6Zp4lTcIQWGGspmbvOY3b7nLdsZShtAqqCAGw3jIb8/PSyaTKPCI0PThPb8D/HxlLBEDCknFCbEG9rlGTv9CCvLKGAP9fKaaV0gBfnpX4DWPeMUvD+WY3+a8cU0cpge5kF4gLHkYwDXHU0AZEIZTjnyQwp4ND049Hhsfd4luxP7OSLSxqkYhMWFNmfgcwLjnCk0cPlohpYUPS0u2iPaLswwlhijhOYL4+UlGTTLaepeGYs3LdcPK5wXFRY3FM4Rl5T8iJE8wxrViK84nz1H7SE5xtEE4vhBdUQJj+k4yaf0rYS6y2ZlNRyUmJA8QjuZ2kzaKZbYu/aC1LsVzhjmVuGZgmsU2jKGFlqPyRZdmKQE9rZimwrZAGK4o7mEMebRcUUoZlYDGVkwfYcuazlB8wBgSarmTrJlgSsAAK6adsMUNpyxDIi331c9vzYRjq+WqLWx1w9lvk0/LDaQUQezhnMHPJHw3w9l901nLsaVaZbFXsELeEFL4JZi+Yfv/a1op0yzqS2mWFbNS2GDcRTiuKsZYpqoy1f89J5YK9qLI57eDWaUo5bxyPhnyO0rAM4y+XglYa803QvLU2Sbm6o1ghRIwx+x2RBMuJz9NDb3nOM2Sj9lzCMsYLnOOgcjYEYVLVpM0GddzNaeXYy+UckBE9mB8v8gsAoM8dpZgWsnNAkJaIXk5bzkXGCmMkeSzQZQ+erPoSBYSkYW27HVOiEdEVwakc06GnsJvCeS0cjd+ivPTPTgIzccAIn7IBLVBGb4hFqJopkgAIV+oqbxBeibyy6xuZvobcotcKiBQiDM8kD8o3v8tvjGJSCowEJwy+j7NI+IVM0iqfAHNWcxZ3sqh9o5LTCeMt/cPilw4xl5ZzNIAAAAASUVORK5CYII="},b160:function(e,t,s){"use strict";s("513c")},bb6e:function(e,t,s){var c={"./buy-comics-digital-comics.png":"f9e3","./buy-comics-merchandise.png":"e51f","./buy-comics-shop-locator.png":"702c","./buy-comics-subscriptions.png":"0b4c","./buy-dc-power-visa.svg":"7aa6","./dc-logo-bg.png":"1ec5","./dc-logo.png":"9f51","./favicon.ico":"a9b3","./footer-bg.jpg":"3a8f","./footer-facebook.png":"7430","./footer-periscope.png":"563a","./footer-pinterest.png":"ae27","./footer-twitter.png":"1f06","./footer-youtube.png":"61b2","./jumbotron.jpg":"5ead"};function i(e){var t=o(e);return s(t)}function o(e){if(!s.o(c,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return c[e]}i.keys=function(){return Object.keys(c)},i.resolve=o,e.exports=i,i.id="bb6e"},d878:function(e,t,s){"use strict";s("49c4")},e210:function(e,t,s){},e51f:function(e,t){e.exports="data:image/png;base64,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"},f90b:function(e,t,s){},f9e3:function(e,t){e.exports="data:image/png;base64,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"}});
//# sourceMappingURL=app.7f7d6741.js.map