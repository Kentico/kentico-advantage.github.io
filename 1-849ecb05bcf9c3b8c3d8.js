(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{143:function(e,n,t){"use strict";t.d(n,"a",function(){return o}),t.d(n,"b",function(){return r});t(77),t(52),t(176);var a=t(142),i={xs:38.5,sm:46,md:64},o=Object.keys(i).reduce(function(e,n){return e[n]=function(){return Object(a.css)(["@media (min-width:","em){","}"],i[n],a.css.apply(void 0,arguments))},e},{}),r={footer_foreground:"#c6cfd0",footer_background:"#3b3e3e",heading_foreground:"#2c2e2e",a_foreground:"#00a2b8",a_hover_foreground:"#008193",mobile_bar_foreground:"#2c2e2e",large_bar_foreground:"#2c2e2e",large_bar_background:"#fff",search_box_underline:"#e0e8ea",search_box_focus_underline:"#00a2b8",nav_foreground:"#2c2e2e",nav_hover:"#008193",jumbotron_heading_foreground:"#fff",jumbotron_content_heading_foreground:"#fff",jumbotron_heading_background:"rgba(0, 129, 147, .86)",jumbotron_content_heading_background:"none",jumbotron_paragraph_foreground:"#2c2e2e",jumbotron_paragraph_background:"rgba(251, 252, 252, .8)",zone_highlighted_background:"#eff3f4",zone_heading_foreground:"#2c2c2e",zone_content_foreground:"#000",zone_list_bullet_foreground:"#9aa1a2",project_phases_background:"#fbfcfc",project_phases_foreground:"#000",breadcrumbs_foreground:"#fff",nextprev_button_background:"#f05a22",nextprev_button_foreground:"#fff",nextprev_button_hover_foreground:"#fff",nextprev_button_hover_background:"#c53c0a",toc_background:"#eff3f4",scenarios_bottom_border:"#c8d1d1",scenarios_background:"#e6ecee",scenarios_plus_foreground:"#008193",scenarios_selected_background:"#bfcfd5"}},147:function(e,n,t){"use strict";var a=t(7),i=t.n(a),o=t(144),r=t.n(o),l=t(0),s=t.n(l),c=t(142),d=t(143);function u(){var e=r()(["\n            font-size: 2.8em;\n            margin: 15px 0 15px;\n        "]);return u=function(){return e},e}function m(){var e=r()(["\n            display: block;\n            width: 238px;\n            height: 238px;\n            background-size: contain;\n            margin: -80px 0 30px 0;\n        "]);return m=function(){return e},e}function f(){var e=r()(["\n        &.right-zone\n        {\n            display: block;\n            float: right;\n            width: 238px;\n            padding: 32px 20px 32px;\n        }\n    "]);return f=function(){return e},e}function p(){var e=r()(["\n            /*padding: 16px 278px 16px 20px;*/\n        "]);return p=function(){return e},e}function b(){var e=r()(["\n            padding: 32px 20px 32px;\n        "]);return b=function(){return e},e}function g(){var e=r()(["\n        padding: 16px 278px 16px 20px;\n    "]);return g=function(){return e},e}function h(){var e=r()(["\n        padding: 10px 20px;\n    "]);return h=function(){return e},e}var x=c.default.section.withConfig({displayName:"content-zone__ContentZoneContainer",componentId:"sc-1vbngvi-0"})(["padding:10px 20px;"," "," &.highlighted{background:",";margin:0px auto 0px;padding:20px;"," ","}"," &.right-zone .icon{display:none;","}h2{margin:0 0 15px;font-size:1.8em;line-height:1.1em;color:",";font-weight:bold;","}h3{font-size:1.4em;color:",';font-weight:bold;line-height:1.5em;}p{line-height:1.5em;margin:auto auto 16px;}p:last-of-type{margin:auto;}ul{list-style-type:none;margin:0;line-height:1.5em;margin:15px 15px 15px 30px;}ol{list-style-type:decimal;margin:15px 15px 15px 30px;line-height:1.5em;}ul li::before{display:inline-block;content:"•";margin-left:-15px;width:15px;color:',";}ul li,.zone ol li{margin:0;color:",";}ol li{margin-bottom:10px;}table{border:1px solid #e0e8ea;margin:24px 0;width:100%;}table th,table tr:first-of-type td{background:#e6ecee;font-weight:700;text-align:left;}table td,table th{padding:10px;border:1px solid #c8d1d1;}table td.red{background:#FFE7E7;}table td.green{background:#DDFADE;}table td.yellow{background:#FFD;}table td.lightgray{background:#F5F8F8;}"],d.a.sm(h()),d.a.md(g()),d.b.zone_highlighted_background,d.a.sm(b()),d.a.md(p()),d.a.md(f()),d.a.md(m()),d.b.zone_heading_foreground,d.a.md(u()),d.b.zone_heading_foreground,d.b.zone_list_bullet_foreground,d.b.zone_content_foreground),y=function(e){function n(){return e.apply(this,arguments)||this}return i()(n,e),n.prototype.render=function(){return s.a.createElement(x,{className:this.props.className},this.props.children)},n}(s.a.Component);n.a=y},152:function(e,n,t){"use strict";t.r(n),t.d(n,"graphql",function(){return p}),t.d(n,"StaticQueryContext",function(){return m}),t.d(n,"StaticQuery",function(){return f});var a=t(0),i=t.n(a),o=t(4),r=t.n(o),l=t(146),s=t.n(l);t.d(n,"Link",function(){return s.a}),t.d(n,"withPrefix",function(){return l.withPrefix}),t.d(n,"navigate",function(){return l.navigate}),t.d(n,"push",function(){return l.push}),t.d(n,"replace",function(){return l.replace}),t.d(n,"navigateTo",function(){return l.navigateTo});var c=t(164),d=t.n(c);t.d(n,"PageRenderer",function(){return d.a});var u=t(49);t.d(n,"parsePath",function(){return u.a});var m=i.a.createContext({}),f=function(e){return i.a.createElement(m.Consumer,null,function(n){return e.data||n[e.query]&&n[e.query].data?(e.render||e.children)(e.data?e.data.data:n[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:r.a.object,query:r.a.string.isRequired,render:r.a.func,children:r.a.func}},153:function(e,n,t){"use strict";var a=t(7),i=t.n(a),o=t(144),r=t.n(o),l=t(0),s=t.n(l),c=t(142),d=t(143);function u(){var e=r()(["\n            line-height: 1.5em;\n            padding: 20px;\n        "]);return u=function(){return e},e}function m(){var e=r()(["\n            font-size: 3.2em;\n            padding: 10px 20px;\n        "]);return m=function(){return e},e}function f(){var e=r()(["\n\t\t    margin: 32px 16px 16px;\n        "]);return f=function(){return e},e}function p(){var e=r()(["\n            align-items: flex-start;\n            margin: 32px 10px 16px;\n        "]);return p=function(){return e},e}function b(){var e=r()(["\n            min-height: auto;\n            padding-bottom: 30px;\n        "]);return b=function(){return e},e}function g(){var e=r()(["\n        margin-top: 60px;\n    "]);return g=function(){return e},e}function h(){var e=r()(["\n        min-height: 380px;\n        align-items: flex-end;\n        flex-direction: row;\n    "]);return h=function(){return e},e}var x=c.default.div.withConfig({displayName:"jumbotron__JumbotronContainer",componentId:"sc-1t5er3c-0"})(["position:relative;overflow:hidden;display:flex;flex-direction:column;align-items:flex-start;min-height:220px;"," ",' &.jumbotron-homepage{background-image:url("./assets/img/jumbotron/01.jpg");background-size:cover;}&.jumbotron-content-page{padding:70px 0 10px;min-height:50px;',"}&.green{background:#538e45;}&.violet{background:#424896;}&.blue{background:#134d86;}&.brown{background:#a97a3c;}&.red{background:#de3438;}&.gray{background:#696663;}&.light_blue{background:#2794cf;}&.violet{background:#424896;}section{margin:32px 0 16px;padding:10px;display:flex;flex-direction:column;align-items:stretch;"," ","}h1{color:",";background:",";font-size:1.8em;line-height:1.1em;font-weight:300;padding:10px 16px;","}&.jumbotron-content-page h1{color:",";background:",";}p{color:",";background:",";padding:16px;line-height:1.25em;","}"],d.a.sm(h()),d.a.md(g()),d.a.sm(b()),d.a.sm(p()),d.a.md(f()),d.b.jumbotron_heading_foreground,d.b.jumbotron_heading_background,d.a.sm(m()),d.b.jumbotron_content_heading_foreground,d.b.jumbotron_content_heading_background,d.b.jumbotron_paragraph_foreground,d.b.jumbotron_paragraph_background,d.a.sm(u())),y=function(e){function n(){return e.apply(this,arguments)||this}return i()(n,e),n.prototype.render=function(){return s.a.createElement(x,{className:this.props.className},this.props.children?this.props.children:"jumbotron-homepage"===this.props.className?s.a.createElement("section",null,s.a.createElement("h1",null,this.props.header),this.props.teaser?s.a.createElement("p",null,this.props.teaser):""):s.a.createElement(s.a.Fragment,null,s.a.createElement("h1",null,this.props.header),this.props.teaser?s.a.createElement("p",null,this.props.teaser):""))},n}(s.a.Component);n.a=y},156:function(e,n,t){"use strict";var a=t(7),i=t.n(a),o=t(51),r=t.n(o),l=t(144),s=t.n(l),c=t(0),d=t.n(c),u=t(142),m=t(143),f=t(184),p=t.n(f),b=t(151),g=t.n(b),h=t(192),x=t.n(h);function y(){var e=s()(["\n        flex-direction: row;\n        line-height: 30px;\n\n        > .cookieConsent > div\n        {\n            flex-grow: 5;\n    \t\tflex-basis: 0;\n        }\n\n        > .cookieConsent\n        {\n            flex-direction: row;\n        }\n\n        button\n        {\n            margin-left: 20px;\n            flex-grow: 1;\n            flex-basis: 0;\n        }\n    "]);return y=function(){return e},e}var _=u.default.div.withConfig({displayName:"cookie-consent-html__ConsentWrapper",componentId:"sc-7ldqwu-0"})(["display:flex;position:fixed;bottom:0;z-index:10;width:100%;background:",";color:",";flex-direction:column;align-items:stretch;font-size:0.95em;line-height:30px;box-sizing:border-box;-webkit-box-shadow:0px -3px 5px 0px rgba(0,0,0,0.2);box-shadow:0px -3px 5px 0px rgba(0,0,0,0.2);button{text-align:right;color:#fff;cursor:pointer;text-align:center;background:#00a2b8;border:none;padding:10px;:hover{background:",";}}> .cookieConsent{margin:10px;position:relative !important;bottom:auto !important;display:flex;flex-direction:column;width:100%;}",""],m.b.zone_highlighted_background,m.b.zone_heading_foreground,m.b.nav_hover,m.a.sm(y())),v=function(e){function n(){return e.apply(this,arguments)||this}return i()(n,e),n.prototype.render=function(){return d.a.createElement(_,null,d.a.createElement(x.a,{disableStyles:!0,buttonText:"I agree",cookieName:"kacookieconsent"},d.a.createElement("p",null,"Kentico uses small cookies to improve your website experience. You may disable them from your browser settings at any time. ",d.a.createElement("a",{href:"https://kentico.com/Kentico-com-Privacy-Policy"},"Learn more"))))},n}(d.a.Component);function k(){var e=s()(["\n        display: none;\n    "]);return k=function(){return e},e}var w=u.default.div.withConfig({displayName:"mobile-bar__MobileBarContainer",componentId:"sc-1vszik7-0"})(["display:flex;flex-shrink:0;height:60px;line-height:40px;font-size:125%;color:",";a{display:inline-block;color:",";padding:10px 20px;}> div{flex-basis:0;}form{width:100%;}input{height:30px;font-size:75%;border:0;border-bottom:2px solid ",";transition:all 0.3s;-webkit-transition:all 0.3s;:focus{border-color:",";}}",""],m.b.mobile_bar_foreground,m.b.mobile_bar_foreground,m.b.search_box_underline,m.b.search_box_focus_underline,m.a.md(k())),E=u.default.div.withConfig({displayName:"mobile-bar__MenuButton",componentId:"sc-1vszik7-1"})(["flex-grow:0;"]),C=u.default.div.withConfig({displayName:"mobile-bar__Search",componentId:"sc-1vszik7-2"})(["flex-grow:1;text-align:right;input[type=text]:focus{outline:none;border-color:#4a4d4d;}"]),z=function(e){function n(n){var t;return(t=e.call(this,n)||this).toggleVisibility=function(e){t.setState(function(e){return{visible:!e.visible}})},t.state={visible:!1},t.toggleVisiblity=t.toggleVisibility.bind(r()(r()(t))),t}return i()(n,e),n.prototype.render=function(){return d.a.createElement(w,null,d.a.createElement(E,null,d.a.createElement("a",{href:"javascript:;",title:"Open menu",className:"left-bar-button",onClick:this.props.onMenuButtonClick},d.a.createElement("i",{className:"fa fa-bars"}))),d.a.createElement(C,null,!this.state.visible&&d.a.createElement("div",null,d.a.createElement("a",{href:"javascript:;",onClick:this.toggleVisibility,title:"Search"},d.a.createElement("i",{className:"fa fa-search"}))),this.state.visible&&d.a.createElement("div",null,d.a.createElement("form",{action:"/search",method:"get"},d.a.createElement("input",{type:"text",name:"s",ref:function(e){e&&e.focus()}}),d.a.createElement("a",{href:"javascript:;",title:"Close",onClick:this.toggleVisibility},d.a.createElement("i",{className:"fa fa-times"}))))))},n}(d.a.Component);function j(){var e=s()(["\n        display: flex;\n    "]);return j=function(){return e},e}var N=u.default.div.withConfig({displayName:"large-bar__LargeBarContainer",componentId:"b371ya-0"})(["display:none;position:fixed;align-items:flex-end;flex-direction:column;z-index:2;width:100%;flex-shrink:0;height:60px;line-height:40px;font-size:125%;color:",";background:",";top:0;-webkit-box-shadow:0px 3px 5px 0px rgba(0,0,0,0.2);box-shadow:0px 3px 5px 0px rgba(0,0,0,0.2);transition:all 0.3s;-webkit-transition:all 0.3s;input[type=submit]{font-family:FontAwesome;display:inline-block;color:",";padding:10px 20px;background:none;border:0;cursor:pointer;font-size:1em;}input[type=text]{height:30px;font-size:75%;border:0;border-bottom:2px solid ",";transition:all 0.3s;-webkit-transition:all 0.3s;}"," &.closed{top:-70px;}"],m.b.large_bar_foreground,m.b.large_bar_background,m.b.mobile_bar_foreground,m.b.search_box_underline,m.a.md(j())),I=u.default.div.withConfig({displayName:"large-bar__Search",componentId:"b371ya-1"})(["flex-grow:1;text-align:center;line-height:60px;input[type=text]:focus{outline:none;border-color:#4a4d4d;}"]),S=function(e){function n(n){var t;return(t=e.call(this,n)||this).state={barVisible:!0},t.handleScroll=t.handleScroll.bind(r()(r()(t))),t}i()(n,e);var t=n.prototype;return t.componentDidMount=function(){window.addEventListener("scroll",this.handleScroll)},t.handleScroll=function(e){this.state.barVisible&&window.pageYOffset>250&&this.setState(function(e){return{barVisible:!1}}),!this.state.barVisible&&window.pageYOffset<=250&&this.setState(function(e){return{barVisible:!0}})},t.render=function(){return d.a.createElement(N,{className:this.state.barVisible?"open":"closed"},d.a.createElement(I,null,d.a.createElement("form",{action:"/search",method:"get"},d.a.createElement("input",{type:"text",name:"s"}),d.a.createElement("input",{type:"submit",value:""}))))},n}(d.a.Component),V=t(193),P=t(152);function F(){var e=s()(["\n        left: 0 !important;\n        box-shadow: none;\n        -webkit-box-shadow: none;\n        border-right: 1px solid #ddd;\n\n        .close\n        {\n            display: none;\n        }\n    "]);return F=function(){return e},e}var M=u.default.div.attrs({className:"closed"}).withConfig({displayName:"menu__LeftBar",componentId:"jl5rco-0"})(["position:fixed;width:250px;height:100%;display:flex;flex-direction:column;flex-shrink:0;background:#fff;top:0;z-index:10;-webkit-box-shadow:3px 0px 5px 0px rgba(0,0,0,0.2);box-shadow:3px 0px 5px 0px rgba(0,0,0,0.2);transition:all 0.3s;-webkit-transition:all 0.3s;overflow-y:auto;&.closed{left:-300px;}&.open{left:0px;}header{display:flex;flex-shrink:0;a{padding:20px;flex-grow:1;img{width:100%;}}}.close{align-self:left;margin-bottom:-20px;}.close a{text-align:right;color:@mobile-bar-foreground;font-size:150%;padding:10px 20px;line-height:40px;display:inline-block;}.active{font-weight:bold;}",""],m.a.md(F())),q=u.default.div.withConfig({displayName:"menu__PoweredBy",componentId:"jl5rco-1"})(["display:flex;flex-grow:1;align-items:flex-end;text-align:center;padding-bottom:15px;a{display:flex;flex-direction:column;flex-grow:1;align-items:center;}"]),K=function(e){function n(){return e.apply(this,arguments)||this}return i()(n,e),n.prototype.render=function(){var e=this;return d.a.createElement(P.StaticQuery,{query:"950334259",render:function(n){var t=n.allKenticoCloudItemNavigationItem.edges[0].node.elements.child_items.map(function(t){var a=t.elements.child_items.map(function(t){var a=!1;if(e.props.activePageId&&Array.isArray(t.elements.content_item)&&1===t.elements.content_item.length)if(e.props.activePageId===t.elements.content_item[0].system.id)a=!0;else{var i=n.allKenticoCloudItemPhase.edges.filter(function(e){return e.node.system.id===t.elements.content_item[0].system.id});1===i.length&&i[0].node.elements.subphases.filter(function(n){return n.system.id===e.props.activePageId}).length>0&&(a=!0)}return d.a.createElement("li",{key:t.system.id},d.a.createElement(P.Link,{to:t.elements.content_item[0].elements.url.value,className:a?"active":"",title:t.elements.title.value},t.elements.title.value))});a&&(a=d.a.createElement("ul",null,a));var i=t.elements.title.value;return 1===t.elements.content_item.length&&(i=d.a.createElement(P.Link,{to:t.elements.content_item[0].elements.url.value,title:t.elements.title.value},i)),d.a.createElement("li",{key:t.system.id},i,a)});return d.a.createElement(M,{className:e.props.menuVisible?"open":"closed"},d.a.createElement("div",{className:"close"},d.a.createElement("a",{href:"javascript:;",title:"Close",className:"left-bar-button",onClick:e.props.onMenuButtonClick},d.a.createElement("i",{className:"fa fa-times"}))),d.a.createElement("header",null,d.a.createElement("a",{href:"/"},d.a.createElement("img",{src:Object(P.withPrefix)("/assets/img/kentico_rgb_small.png"),alt:"Kentico Advantage"}))),d.a.createElement("nav",null,d.a.createElement("ul",null,t)),d.a.createElement(q,null,d.a.createElement("a",{href:"https://kenticocloud.com"},d.a.createElement("img",{src:"../assets/img/powered-by-kc@1x.png",alt:"KC"}))))},data:V})},n}(d.a.Component);function B(){var e=s()(["\n        margin: 0 0 0 250px;    \n    "]);return B=function(){return e},e}var D=u.default.div.withConfig({displayName:"right-bar__RightBarContainer",componentId:"sc-17lsdio-0"})(["display:flex;flex-direction:column;flex-grow:1;main{flex-grow:1;}",""],m.a.md(B())),L=u.default.div.withConfig({displayName:"right-bar__Footer",componentId:"sc-17lsdio-1"})(["margin:40px 0 0;color:",";background:",";padding:20px 0;text-align:center;a{color:",";}"],m.b.footer_foreground,m.b.footer_background,m.b.footer_foreground),O=function(e){function n(){return e.apply(this,arguments)||this}return i()(n,e),n.prototype.render=function(){return d.a.createElement(D,null,this.props.children,d.a.createElement(L,null,d.a.createElement("p",null,"Copyright © ",(new Date).getFullYear()," Kentico Software. All rights reserved."),d.a.createElement("ul",null,d.a.createElement("li",null,d.a.createElement("a",{href:"http://www.kentico.com",title:"Kentico.com",target:"_blank",rel:"noopener noreferrer"},"Kentico main website")))))},n}(d.a.Component);function A(){var e=s()(["\n        flex-direction: row;\n    "]);return A=function(){return e},e}function R(){var e=s()(["\n    ","\n\n    body, html\n    {\n        width: 100%;\n        font-family: 'Source Sans Pro', sans-serif;\n        counter-reset: section;\n    }\n\n    a\n    {\n        color: ",";\n        text-decoration: underline;\n    }\n    a:hover\n    {\n        color: ",";\n        text-decoration: none;\n    }\n    .visible\n    {\n        display: block;\n    }\n    .hidden\n    {\n        display: none;\n    }\n    strong\n    {\n        font-weight: bold;\n    }\n    nav\n    {\n        padding: 0 20px;\n        flex-shrink: 0;\n\n        a\n        {\n            display: block;\n            text-decoration: none;\n            color: ",";\n            line-height: 2em;\n\n            transition: all 0.3s;\n            -webkit-transition: all 0.3s;\n\n            :hover\n            {\n                color: ",";\n            }\n        }\n\n        ul\n        {\n            margin: 5px 0 10px 20px;\n            list-style-type: none;\n\n            li\n            {\n                font-weight: bold;\n\n                ul li\n                {\n                    font-weight: normal;\n                }\n            }\n        }\n    }\n"]);return R=function(){return e},e}var G=Object(u.createGlobalStyle)(R(),p.a,m.b.a_foreground,m.b.a_foreground,m.b.nav_foreground,m.b.nav_hover),T=u.default.div.withConfig({displayName:"layout__BodyContainer",componentId:"sc-1po3vnd-0"})(["display:flex;flex-direction:column;height:100vh;",""],m.a.md(A())),Q=function(e){function n(n){var t;return(t=e.call(this,n)||this).state={menuVisible:!1},t.toggleMenuVisibility=t.toggleMenuVisibility.bind(r()(r()(t))),t}i()(n,e);var t=n.prototype;return t.toggleMenuVisibility=function(){this.setState({menuVisible:!this.state.menuVisible})},t.render=function(){return d.a.createElement(d.a.Fragment,null,d.a.createElement(g.a,null,d.a.createElement("link",{rel:"canonical",href:"http://advantage.kentico.com"}),d.a.createElement("meta",{name:"viewport",content:"width=device-width,minimum-scale=1,initial-scale=1"}),d.a.createElement("link",{rel:"stylesheet",href:"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"}),d.a.createElement("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,700,400italic&subset=latin,latin-ext"}),d.a.createElement("link",{rel:"shortcut icon",type:"image/ico",href:"/favicon.ico"}),d.a.createElement("title",null,"Kentico Advantage")),d.a.createElement(G,null),d.a.createElement(T,null,d.a.createElement(z,{onMenuButtonClick:this.toggleMenuVisibility}),d.a.createElement(S,null),d.a.createElement(K,{activePageId:this.props.pageId,menuVisible:this.state.menuVisible,onMenuButtonClick:this.toggleMenuVisibility}),d.a.createElement(O,{children:this.props.children})),d.a.createElement(v,null))},n}(d.a.Component);n.a=Q},164:function(e,n,t){var a;e.exports=(a=t(196))&&a.default||a},193:function(e){e.exports={data:{allKenticoCloudItemNavigationItem:{edges:[{node:{elements:{child_items:[{system:{id:"7af66f9b-d91a-49cd-be81-24285c4fbeca"},elements:{title:{value:"Project phases"},content_item:[],child_items:[{system:{id:"e7d0157d-271d-4a6b-b620-b9d7b1cfd6a9"},elements:{title:{value:"Gathering"},content_item:[{system:{id:"ad05c758-4c4a-4e28-a4f0-8d0438929ce5"},elements:{url:{value:"gathering"}}}]}},{system:{id:"63290b09-f2eb-4ff1-98ad-f15a29f2afa4"},elements:{title:{value:"Planning"},content_item:[{system:{id:"7f52b669-8485-4de9-9ac0-5b0c4e3a2d7d"},elements:{url:{value:"planning"}}}]}},{system:{id:"22fbc582-253d-41f4-80be-07c9d6a1bd06"},elements:{title:{value:"Developing"},content_item:[{system:{id:"2eb6a258-635a-4c21-8739-841c01652f39"},elements:{url:{value:"developing"}}}]}},{system:{id:"492d2833-b6ba-47d3-8d9d-5f0d65089225"},elements:{title:{value:"Testing"},content_item:[{system:{id:"ba524685-fe9e-4ccf-a0a2-c74e79c752f5"},elements:{url:{value:"testing"}}}]}},{system:{id:"33268ebd-b256-45b9-a632-9616096e0ec4"},elements:{title:{value:"Deploying"},content_item:[{system:{id:"cdd91a89-a393-43c6-a855-d0d148a64cb5"},elements:{url:{value:"deploying"}}}]}},{system:{id:"143d437b-18c4-4eb5-ac97-5fdd196feecd"},elements:{title:{value:"Maintaining"},content_item:[{system:{id:"2f435937-dd3f-45ca-9429-bbd24fa66480"},elements:{url:{value:"maintaining"}}}]}}]}},{system:{id:"ea6f7c1b-c080-4131-b320-934aede53511"},elements:{title:{value:"Conclusion"},content_item:[{system:{id:"8152a11a-0dc1-4dc2-a0f1-652b933c8f42"},elements:{url:{value:"conclusion"}}}],child_items:[]}}]}}}]},allKenticoCloudItemPhase:{edges:[{node:{system:{id:"8152a11a-0dc1-4dc2-a0f1-652b933c8f42"},elements:{subphases:[]}}},{node:{system:{id:"cdd91a89-a393-43c6-a855-d0d148a64cb5"},elements:{subphases:[]}}},{node:{system:{id:"2eb6a258-635a-4c21-8739-841c01652f39"},elements:{subphases:[{system:{id:"2ca8b62a-e7e7-4603-bb18-ea3f576dce3d"}},{system:{id:"6e2d1894-f0d5-4b57-891f-a64bbbf72b83"}}]}}},{node:{system:{id:"2ca8b62a-e7e7-4603-bb18-ea3f576dce3d"},elements:{subphases:[]}}},{node:{system:{id:"6e2d1894-f0d5-4b57-891f-a64bbbf72b83"},elements:{subphases:[]}}},{node:{system:{id:"ad05c758-4c4a-4e28-a4f0-8d0438929ce5"},elements:{subphases:[{system:{id:"9195a378-f8ba-43ba-b527-28241d7630be"}},{system:{id:"767e65d5-6aac-47fc-8759-efec5f786ee6"}}]}}},{node:{system:{id:"767e65d5-6aac-47fc-8759-efec5f786ee6"},elements:{subphases:[]}}},{node:{system:{id:"9195a378-f8ba-43ba-b527-28241d7630be"},elements:{subphases:[]}}},{node:{system:{id:"2f435937-dd3f-45ca-9429-bbd24fa66480"},elements:{subphases:[]}}},{node:{system:{id:"7f52b669-8485-4de9-9ac0-5b0c4e3a2d7d"},elements:{subphases:[{system:{id:"01db3705-f9ba-4cb4-b3ab-341cbabff5a7"}},{system:{id:"1d9b8e3c-2568-4242-835f-205e6b44c9d9"}},{system:{id:"c4901224-e559-4ecf-9ace-f2a88dcf21d8"}},{system:{id:"e7604240-5012-483f-a7c6-34498ee53b01"}}]}}},{node:{system:{id:"e7604240-5012-483f-a7c6-34498ee53b01"},elements:{subphases:[]}}},{node:{system:{id:"01db3705-f9ba-4cb4-b3ab-341cbabff5a7"},elements:{subphases:[]}}},{node:{system:{id:"1d9b8e3c-2568-4242-835f-205e6b44c9d9"},elements:{subphases:[]}}},{node:{system:{id:"c4901224-e559-4ecf-9ace-f2a88dcf21d8"},elements:{subphases:[]}}},{node:{system:{id:"ba524685-fe9e-4ccf-a0a2-c74e79c752f5"},elements:{subphases:[]}}}]}}}},196:function(e,n,t){"use strict";t.r(n);t(33);var a=t(0),i=t.n(a),o=t(4),r=t.n(o),l=t(68),s=t(2),c=function(e){var n=e.location,t=s.default.getResourcesForPathnameSync(n.pathname);return i.a.createElement(l.a,Object.assign({location:n,pageResources:t},t.json))};c.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},n.default=c}}]);
//# sourceMappingURL=1-849ecb05bcf9c3b8c3d8.js.map