(this["webpackJsonpwanted-preonboarding-subject-2"]=this["webpackJsonpwanted-preonboarding-subject-2"]||[]).push([[0],{453:function(t,e,n){"use strict";n.r(e);var a,r,c,i,o,s,l,d,u,b,p,j,h,f,O,g,x,v,m,k,D,S,y,w,L=n(1),I=n.n(L),C=n(28),P=n.n(C),B=n(6),N=n(7),M=n(9),F=n(8),T=n(57),J=n(11),z=n(34),R=n.n(z),H=n(55),U=n(15),W=n(12),A=n(4),K=n(3),E=(K.c.nav(a||(a=Object(A.a)([""]))),K.c.ul(r||(r=Object(A.a)(["\n  display: flex;\n  justify-content: space-around;\n  height: 50px;\n  align-items: center;\n"])))),G=K.c.li(c||(c=Object(A.a)(["\n  width: 100%;\n  text-align: center;\n  & > a {\n    text-decoration: none;\n    width: 100%;\n    display: inline-block;\n  }\n  & > a.disable-link {\n    pointer-events: none;\n    border-bottom: 1px solid black;\n  }\n"]))),V=n(2),$=function(t){Object(M.a)(n,t);var e=Object(F.a)(n);function n(t){var a;return Object(B.a)(this,n),(a=e.call(this,t)).state={},a}return Object(N.a)(n,[{key:"render",value:function(){return Object(V.jsx)("nav",{children:Object(V.jsxs)(E,{children:[Object(V.jsx)(G,{children:Object(V.jsx)(T.b,{className:"/product"===window.location.pathname?"disable-link":"active-link",to:"/product",children:"\uc0c1\ud488 \uc0c1\uc138"})}),Object(V.jsx)(G,{children:Object(V.jsx)(T.b,{to:"/recentList",className:"/recentList"===window.location.pathname?"disable-link":"active-link",children:"\ucd5c\uadfc \uc774\ub825"})})]})})}}]),n}(L.Component),q=K.c.header(i||(i=Object(A.a)(["\n  width: 100%;\n"]))),Q=function(t){Object(M.a)(n,t);var e=Object(F.a)(n);function n(t){return Object(B.a)(this,n),e.call(this,t)}return Object(N.a)(n,[{key:"componentWillMount",value:function(){}},{key:"componentDidMount",value:function(){}},{key:"componentWillReceiveProps",value:function(t){}},{key:"componentDidUpdate",value:function(t,e){}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){return Object(V.jsx)(q,{children:Object(V.jsx)($,{})})}}]),n}(L.Component),X="http://localhost:3000",Y=function(t){Object(M.a)(n,t);var e=Object(F.a)(n);function n(t){var a;return Object(B.a)(this,n),(a=e.call(this,t)).setRecentListNoInterestingData=function(t){var e=a.getLocalStorageData("recentList");e.some((function(t){return(null===t||void 0===t?void 0:t.title)===a.state.currentPrintData.title}))?a.setLocalStorageData("recentList",[].concat(Object(W.a)(e.filter((function(t){return t.title!==a.state.currentPrintData.title}))),[Object(U.a)(Object(U.a)({},a.state.currentPrintData),{},{time:Date.now(),isInteresting:t})])):a.setLocalStorageData("recentList",[].concat(Object(W.a)(e),[Object(U.a)(Object(U.a)({},a.state.currentPrintData),{},{time:Date.now(),isInteresting:t})])),a.setLocalStorageData("printableLocalData",a.state.printableData)},a.noInteresting=function(){var t=a.state,e=t.printableData,n=t.currentTitle;a.setState((function(t){return{recentListData:[]}}),(function(){return a.setRecentListNoInterestingData(!1)}));var r=e.filter((function(t){return t.title!==n}));a.setState({printableData:Object(W.a)(r)},(function(){return a.randomPicker()}))},a.randomPicker=function(){for(var t=a.state,e=t.printableData,n=t.currentTitle,r=e.length,c=Math.floor(Math.random()*r);r>0&&e[c].title===n;)c=Math.floor(Math.random()*r);c>r||0===r||a.setState({currentTitle:e[c].title,currentPrintData:e[c]},(function(){return a.setRecentListNoInterestingData(!0)}))},a.getLocalStorageData=function(t){var e=localStorage.getItem(t);return null===e?[]:JSON.parse(e)},a.setLocalStorageData=function(t,e){localStorage.setItem(t,JSON.stringify(e))},a.getApiData=Object(H.a)(R.a.mark((function t(){var e,n;return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(X,"/MockData/data.json"));case 2:return e=t.sent,t.next=5,e.json();case 5:n=t.sent,a.setState({printableData:Object(W.a)(n.map((function(t){return Object(U.a)(Object(U.a)({},t),{},{isInteresting:!0})})))}),a.randomPicker();case 8:case"end":return t.stop()}}),t)}))),a.state={currentPrintData:{},currentTitle:"",printableData:[],recentListData:[]},a}return Object(N.a)(n,[{key:"componentDidMount",value:function(){var t=Object(H.a)(R.a.mark((function t(){var e,n,a;return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.getLocalStorageData("printableLocalData");case 2:if(e=t.sent,null!==localStorage.getItem("printableLocalData")){t.next=14;break}return t.next=6,fetch("".concat(X,"/MockData/data.json"));case 6:return n=t.sent,t.next=9,n.json();case 9:a=t.sent,this.setState({printableData:Object(W.a)(a.map((function(t){return Object(U.a)(Object(U.a)({},t),{},{isInteresting:!0})})))}),this.setLocalStorageData("printableLocalData",this.state.printableData),t.next=15;break;case 14:0===e.length||this.setState({printableData:Object(W.a)(e)});case 15:this.randomPicker();case 16:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this.setLocalStorageData("printableLocalData",this.state.printableData)}},{key:"render",value:function(){var t=this,e=this.state,n=e.printableData,a=e.currentTitle;return Object(V.jsxs)(q,{children:[Object(V.jsx)(Q,{}),0===n.length?Object(V.jsx)("div",{children:"\ub108\uac00 \ub2e4 \uad00\uc2ec\uc5c6\ub2e4 \ud574\ub530 \uac00\uc11c \uc9c0\uc6cc\uc640~"}):Object(V.jsxs)("div",{children:[a,Object(V.jsx)("button",{disabled:1===n.length,onClick:function(){return t.randomPicker()},children:"\ub3cc\ub824\ub3cc\ub824!"}),Object(V.jsx)("button",{onClick:function(){return t.noInteresting()},children:"\uad00\uc2ec\uc5c6\uc5b4"})]})]})}}]),n}(L.Component),Z=K.c.div(o||(o=Object(A.a)(["\n  padding: 15px 0 0 15px;\n"]))),_=K.c.ul(s||(s=Object(A.a)(["\n  display: flex;\n"]))),tt=K.c.li(l||(l=Object(A.a)(["\n  cursor: pointer;\n  padding: 13px;\n  border: 1px solid black;\n  border-radius: 7px;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  color: ",";\n  background-color: ",";\n  & + & {\n    margin-left: 10px;\n  }\n"])),(function(t){return t.isSelected?"white":"black"}),(function(t){return t.isSelected?"black":"white"})),et=function(t){Object(M.a)(n,t);var e=Object(F.a)(n);function n(t){return Object(B.a)(this,n),e.call(this,t)}return Object(N.a)(n,[{key:"render",value:function(){var t=this.props,e=t.selectBrand,n=t.brand,a=t.selectedBrand;return Object(V.jsx)(Z,{children:Object(V.jsxs)(_,{children:[Object(V.jsx)(tt,{"data-kind":"ALL",onClick:e,isSelected:!a.length,children:"\uc804\uccb4"}),n.map((function(t){return Object(V.jsx)(tt,{"data-kind":t,onClick:e,value:t,isSelected:a.includes(t),children:t},t)}))]})})}}]),n}(L.Component),nt=K.c.div(d||(d=Object(A.a)(["\n  /* padding-left: 15px; */\n  & input {\n    transform: scale(1.5);\n  }\n  & span {\n    font-size: 20px;\n    padding-left: 5px;\n  }\n"]))),at=function(t){Object(M.a)(n,t);var e=Object(F.a)(n);function n(t){return Object(B.a)(this,n),e.call(this,t)}return Object(N.a)(n,[{key:"render",value:function(){var t=this.props.hideNoInterestingFilter;return Object(V.jsxs)(nt,{children:[Object(V.jsx)("input",{type:"checkbox",onChange:t}),Object(V.jsx)("span",{children:" \uad00\uc2ec\uc5c6\ub294 \uc0c1\ud488 \uc228\uae30\uae30"})]})}}]),n}(L.Component),rt=K.c.div(u||(u=Object(A.a)(["\n  display: flex;\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  z-index: 99;\n  background-color: rgba(0, 0, 0, 0.6);\n"]))),ct=K.c.div(b||(b=Object(A.a)(["\n  position: absolute;\n  bottom: 0;\n  left: 50%;\n  width: 90%;\n  max-width: 1024px;\n  height: 200px;\n  border-radius: 20px;\n  background-color: #fff;\n  padding: 20px 0;\n  transform: translate(-50%, 5%);\n  button {\n    display: inline-block;\n    width: 100%;\n    height: 50%;\n    padding: 20px;\n    background-color: #fff;\n    border: none;\n\n    font-size: 1.3rem;\n    text-align: left;\n    font-weight: 600;\n  }\n"]))),it=function(t){Object(M.a)(n,t);var e=Object(F.a)(n);function n(t){var a;return Object(B.a)(this,n),(a=e.call(this,t)).componentDidMount=function(){window.addEventListener("mousedown",a.handleClickOutSide)},a.componentWillUnmount=function(){window.removeEventListener("mousedown",a.handleClickOutSide)},a.handleButton=function(t){a.props.selectValue(t.target.value),a.props.close()},a.setContainerRef=function(t){a.containerRef=t},a.handleClickOutSide=function(t){a.containerRef&&!a.containerRef.contains(t.target)&&a.props.close()},a}return Object(N.a)(n,[{key:"render",value:function(){return Object(V.jsx)(rt,{children:Object(V.jsxs)(ct,{ref:this.setContainerRef,children:[Object(V.jsx)("button",{name:"sortGroup",value:"recentOrder",onClick:this.handleButton,children:"\ucd5c\uc2e0\uc21c"}),Object(V.jsx)("button",{name:"sortGroup",value:"lowPriceOrder",onClick:this.handleButton,children:"\ucd5c\uc800\uac00\uc21c"})]})})}}]),n}(L.Component),ot=K.c.button(p||(p=Object(A.a)(["\n  background-color: #fff;\n  border: none;\n  font-size: 20px;\n"]))),st=function(t){Object(M.a)(n,t);var e=Object(F.a)(n);function n(t){var a;return Object(B.a)(this,n),(a=e.call(this,t)).openModal=function(){a.setState({open:!0})},a.closeModal=function(){a.setState({open:!1})},a.state={open:!1},a}return Object(N.a)(n,[{key:"render",value:function(){return Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)(ot,{onClick:this.openModal,children:"recentOrder"===this.props.value?"\ucd5c\uc2e0\uc21c":"\ucd5c\uc800\uac00\uc21c"}),this.state.open&&Object(V.jsx)(it,{selectValue:this.props.selectedOrderedKind,close:this.closeModal})]})}}]),n}(L.Component),lt=K.c.div(j||(j=Object(A.a)(["\n  width: 100%;\n"]))),dt=K.c.div(h||(h=Object(A.a)(["\n  display: flex;\n  justify-content: space-between;\n  padding: 0 15px;\n"]))),ut=K.c.div(f||(f=Object(A.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),bt=K.c.div(O||(O=Object(A.a)(["\n  display: flex;\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  z-index: 99;\n  background-color: rgba(0, 0, 0, 0.6);\n\n  span {\n    display: inline-block;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    border-radius: 10px;\n    transform: translate(-50%, -50%);\n    height: fit-content;\n    padding: 10px;\n    background-color: #f84242;\n    color: #fff;\n  }\n"]))),pt=function(t){Object(M.a)(n,t);var e=Object(F.a)(n);function n(t){return Object(B.a)(this,n),e.call(this,t)}return Object(N.a)(n,[{key:"render",value:function(){var t=this.props.open;return Object(V.jsx)(V.Fragment,{children:t?Object(V.jsx)(bt,{children:Object(V.jsx)("span",{children:"\uad00\uc2ec\uc5c6\ub294 \uc0c1\ud488 \uc785\ub2c8\ub2e4. \uad00\uc2ec\uc5c6\uc74c\uc744 \ud574\uc9c0\ud574 \uc8fc\uc138\uc694"})}):null})}}]),n}(L.Component),jt=K.c.div(g||(g=Object(A.a)(["\n  position: relative;\n  &.hide {\n    display: none;\n  }\n"]))),ht=K.c.div(x||(x=Object(A.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 780px;\n  border-radius: 10px;\n  border: 0.5px solid black;\n  margin-top: 10px;\n  padding: 20px;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  cursor: pointer;\n"]))),ft=K.c.div(v||(v=Object(A.a)(["\n  height: 50px;\n  p {\n    font-size: 1.2rem;\n    margin-right: 25px;\n    line-height: 50px;\n  }\n"]))),Ot=K.c.div(m||(m=Object(A.a)(["\n  text-align: right;\n  span {\n    font-size: 0.8rem;\n  }\n  p {\n    margin-top: 40px;\n    font-size: 1.5rem;\n    font-weight: 600;\n  }\n"]))),gt=K.c.button(k||(k=Object(A.a)(["\n  position: absolute;\n  top: 25px;\n  right: 20px;\n  border: 0.5px solid black;\n  color: black;\n  border-radius: 20px;\n  padding: 7px;\n  background-color: #fff;\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);\n  cursor: pointer;\n  &:hover {\n    color: #fff;\n    background-color: black;\n  }\n  ",";\n"])),(function(t){return t.isHasInteresting&&Object(K.b)(D||(D=Object(A.a)(["\n      border: 0.5px solid black;\n      color: red;\n      $:hover {\n        border: 0.5px solid #1f29f0;\n        color: #1f29f0;\n      }\n    "])))})),xt=function(){var t=Object(H.a)(R.a.mark((function t(e,n){var a,r,c,i;return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=localStorage.getItem("recentList"),r=JSON.parse(a),c=localStorage.getItem("printableLocalData"),i=JSON.parse(c),!r){t.next=7;break}return t.next=7,localStorage.setItem("recentList",JSON.stringify([].concat(Object(W.a)(r.filter((function(t){return t.title!==e.title}))),[Object(U.a)(Object(U.a)({},e),{},{isInteresting:n})])));case 7:!1===n?localStorage.setItem("printableLocalData",JSON.stringify(Object(W.a)(i.filter((function(t){return t.title!==e.title}))))):localStorage.setItem("printableLocalData",JSON.stringify([].concat(Object(W.a)(i),Object(W.a)(r.filter((function(t){return t.title===e.title}))))));case 8:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),vt=function(t){Object(M.a)(n,t);var e=Object(F.a)(n);function n(t){var a;return Object(B.a)(this,n),(a=e.call(this,t)).handleClick=function(){a.setState({hasInteresting:!a.state.hasInteresting},(function(){return xt(a.props.data,a.state.hasInteresting)}))},a.state={hasInteresting:a.props.data.isInteresting},a}return Object(N.a)(n,[{key:"render",value:function(){var t=this.state.hasInteresting,e=this.props.data,n=e.title,a=e.price,r=(e.isInteresting,this.props),c=r.goToProduct,i=r.hide;return Object(V.jsxs)(jt,{id:"ct",className:i&&!t?"hide":"",children:[Object(V.jsxs)(ht,{onClick:c,children:[Object(V.jsx)(ft,{children:Object(V.jsx)("p",{children:n})}),Object(V.jsx)(Ot,{children:Object(V.jsx)("p",{children:"".concat(a.toLocaleString(),"\uc6d0")})})]}),Object(V.jsx)(gt,{isInteresting:!1,onClick:this.handleClick,children:t?Object(V.jsx)("span",{children:"\uad00\uc2ec\uc788\ub294 \uc0c1\ud0dc"}):Object(V.jsx)("span",{children:"\uad00\uc2ec\uc5c6\ub294 \uc0c1\ud0dc *\u3145*"})})]})}}]),n}(I.a.Component),mt=function(t){return t.sort((function(t,e){return e.time-t.time}))},kt=function(t){Object(M.a)(n,t);var e=Object(F.a)(n);function n(t){var a;return Object(B.a)(this,n),(a=e.call(this,t)).orderedFiltered=function(t){var e=[];return e="recentOrder"===a.state.value&&null!==t?mt(t):function(t){return t.sort((function(t,e){return t.price-e.price}))}(t),a.setState({selectProductData:Object(W.a)(e)}),e},a.selectedOrderedKind=function(t,e){a.setState({value:t},(function(){return a.orderedFiltered(a.state.selectedProductData)}))},a.openModal=function(){a.setState({open:!0});setTimeout((function(){a.closeModal()}),2e3)},a.closeModal=function(){a.setState({open:!1})},a.goToProduct=function(){a.props.history.push("/product")},a.makeBrnadData=function(){for(var t=a.state.productData,e=[],n=0,r=Object.entries(t);n<r.length;n++){var c=r[n];e.push(c[1].brand)}var i=new Set(e),o=Object(W.a)(i);a.setState({brand:o})},a.selectBrand=function(t){var e=a.state.selectedBrand,n=t.target.dataset.kind;return"ALL"===n?a.setState({selectedBrand:[]}):e.includes(n)?a.setState({selectedBrand:e.filter((function(t){return t!==n}))}):void a.setState((function(t){return{selectedBrand:t.selectedBrand.concat(n)}}))},a.hideNoInterestingFilter=function(){a.setState({isHideNoInteresting:!a.state.isHideNoInteresting})},a.state={open:!1,brand:[],selectedBrand:[],productData:[],selectedProductData:[],value:"recentOrder",isHideNoInteresting:!1},a}return Object(N.a)(n,[{key:"componentDidMount",value:function(){var t=JSON.parse(localStorage.getItem("recentList"));null===t?this.setState({productData:[]}):this.setState({productData:Object(W.a)(mt(t))})}},{key:"componentDidUpdate",value:function(t,e){var n=this,a=this.state,r=a.productData,c=a.brand,i=a.selectedBrand,o=a.selectedProductData;r.length&&!c.length&&this.makeBrnadData(),r.length>0&&!o.length&&!i.length&&this.setState({selectedProductData:Object(W.a)(this.orderedFiltered(r))}),e.selectedBrand.length!==(null===i||void 0===i?void 0:i.length)&&this.setState({selectedProductData:r.filter((function(t){return i.some((function(e){return[t.brand].includes(e)}))}))},(function(){return n.orderedFiltered(n.state.selectedProductData)})),r.length>0&&c.length===i.length&&this.setState({selectedBrand:[],selectedProductData:Object(W.a)(this.orderedFiltered(this.state.productData))},(function(){return n.orderedFiltered(n.state.productData)}))}},{key:"render",value:function(){var t=this.state,e=t.brand,n=t.selectedProductData,a=t.selectedBrand,r=t.value,c=t.isHideNoInteresting,i=this.hideNoInterestingFilter,o=this.selectBrand,s=this.goToProduct;return n&&Object(V.jsxs)(lt,{children:[Object(V.jsx)(Q,{}),Object(V.jsxs)(dt,{children:[Object(V.jsx)(at,{hideNoInterestingFilter:i}),Object(V.jsx)(st,{value:r,selectedOrderedKind:this.selectedOrderedKind})]}),Object(V.jsx)(et,{brand:e,selectBrand:o,selectedBrand:a}),Object(V.jsx)(ut,{children:n.map((function(t){return Object(V.jsx)(vt,{hide:c,data:t,goToProduct:s},t.title)}))}),Object(V.jsx)(pt,{open:this.state.open})]})}}]),n}(L.Component),Dt=n(146),St=Object(K.a)(S||(S=Object(A.a)(["\n  ",";\n  *, *::before, *::after {\n    box-sizing: border-box;\n  }\n\n"])),Dt.a),yt=K.c.div(y||(y=Object(A.a)(["\n  margin: 0 auto;\n  max-width: 1080px;\n  display: flex;\n  justify-content: center;\n"]))),wt=St,Lt=(n(158),function(t){Object(M.a)(n,t);var e=Object(F.a)(n);function n(){var t;Object(B.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).checkTheTime=function(){var t=new Date,e=t.getHours(),n=t.getMinutes(),a=t.getSeconds();"16:43:20"==="".concat(e<10?"0".concat(e):e,":").concat(n<10?"0".concat(n):n,":").concat(a<10?"0".concat(a):a)&&localStorage.removeItem("recentList")},t}return Object(N.a)(n,[{key:"componentDidMount",value:function(){var t=this;w=setInterval((function(){t.checkTheTime()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(w)}},{key:"render",value:function(){return Object(V.jsxs)(T.a,{children:[Object(V.jsx)(wt,{}),Object(V.jsx)(yt,{children:Object(V.jsxs)(J.d,{children:[Object(V.jsx)(J.b,{exact:!0,path:"/",children:Object(V.jsx)(J.a,{to:"/recentList"})}),Object(V.jsx)(J.b,{path:"/product",component:Y}),Object(V.jsx)(J.b,{path:"/recentList",component:kt})]})})]})}}]),n}(I.a.Component)),It=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,454)).then((function(e){var n=e.getCLS,a=e.getFID,r=e.getFCP,c=e.getLCP,i=e.getTTFB;n(t),a(t),r(t),c(t),i(t)}))};P.a.render(Object(V.jsx)(I.a.StrictMode,{children:Object(V.jsx)(Lt,{})}),document.getElementById("root")),It()}},[[453,1,2]]]);
//# sourceMappingURL=main.69ce3084.chunk.js.map