(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(2990)}])},2990:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Home}});var i=n(5893),s=n(7294),r=n(990),a=n(5341),l=n(6546),o=n(801),c=n.n(o),d=n(4184),h=n.n(d),container=e=>{let{as:t,className:n,children:s,...r}=e,a=h()(c()[t],n);return(0,i.jsx)(t,{className:a,...r,children:s})},x=n(5233),_=n.n(x),u=n(8100),m=n.n(u),p=n(9350);let j=(0,s.forwardRef)((e,t)=>{let{as:n,colorScheme:s=p.r.WHITE,className:r,children:a,...l}=e,o=h()(_()[n],m()[s],r);return(0,i.jsx)(n,{className:o,...l,ref:t,children:a})});j.displayName="Heading";var g=n(1804),v=n.n(g);r.p8.registerPlugin(a.Flip,l.ScrollTrigger);var about=()=>(0,i.jsx)("div",{className:v().height,children:(0,i.jsx)(container,{as:"section",className:v().centeredWrapper,children:(0,i.jsxs)(j,{as:"h2",className:v().title,children:["Passionate Full Stack Developer about delivering",(0,i.jsx)("span",{children:" innovative"})," solutions that ",(0,i.jsx)("span",{children:"drive success"})," and have a ",(0,i.jsx)("span",{children:"significant impact"})," on projects."]})})}),f=n(8189),b=n(6671),y=n(7850),N=n.n(y),layout_text=e=>{let{as:t="p",colorScheme:n=p.r.PRIMARY,className:s,children:r,...a}=e,l=h()(N()[t],m()[n],s);return(0,i.jsx)(t,{className:l,...a,children:r})},T=n(2578),k=n.n(T),expertise_FrontendExpertise=()=>{let e=new Date("2021-01"),t=new Date,n=(t.getTime()-e.getTime())/2592e6;return(0,i.jsxs)("div",{children:[(0,i.jsx)(j,{as:"h3",colorScheme:p.r.RED,children:"Frontend"}),(0,i.jsxs)(layout_text,{children:["Over ",Math.round(n/12)," years of development experience in Vue.js, React, NextJS and Nuxt frameworks."]}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:"HTML"}),(0,i.jsx)("li",{children:"CSS"}),(0,i.jsx)("li",{children:"JS"}),(0,i.jsx)("li",{children:"React"}),(0,i.jsx)("li",{children:"Next.js"}),(0,i.jsx)("li",{children:"Redux"}),(0,i.jsx)("li",{children:"React Native"}),(0,i.jsx)("li",{children:"Vue.js"}),(0,i.jsx)("li",{children:"Nuxt.js"}),(0,i.jsx)("li",{children:"Webpack"})]})]})},w=n(6637),S=n.n(w),common_button=e=>{let{colorScheme:t="primary",size:n="medium",className:s,type:r="button",marquee:a=!1,fill:l=!1,children:o,...c}=e,d=a&&S()["btn-marquee"],x=h()(S()[t],S()[n],d,l&&S().fill,s);return(0,i.jsx)("button",{type:r,className:x,...c,children:a?(0,i.jsx)("div",{className:S()["txt-marquee"],children:(0,i.jsxs)("div",{children:[(0,i.jsxs)("span",{children:[o,"\xa0\xa0-\xa0\xa0"]}),(0,i.jsxs)("span",{children:[o,"\xa0\xa0-\xa0\xa0"]})]})}):o})};r.p8.registerPlugin(l.ScrollTrigger);var expertise=()=>{let[e,t]=(0,s.useState)(!0),[n,a]=(0,s.useState)(!0),[l,o]=(0,s.useState)(!0),c=(0,s.useRef)(null),d=(0,s.useRef)(null),h=(0,s.useRef)(null),x=(0,s.useRef)(null),_=(0,s.useRef)(null);return(0,s.useEffect)(()=>{let e=c.current,t=d.current,n=h.current,i=x.current,s=_.current;r.p8.to(e,{delay:0,duration:.75,ease:"none",fontStretch:"90%",scale:1.05,scrollTrigger:{start:"top 60%",trigger:s}}),r.p8.to(t,{delay:0,duration:.5,ease:"power1.inOut",marginTop:"-2rem",opacity:1,scrollTrigger:{start:"top 60%",trigger:s}}),r.p8.to(n,{delay:0,duration:.75,ease:"power1.inOut",marginTop:"-2rem",opacity:1,scrollTrigger:{start:"top 60%",trigger:s}}),r.p8.to(i,{delay:0,duration:1.25,ease:"power1.inOut",marginTop:"-2rem",opacity:1,scrollTrigger:{start:"top 60%",trigger:s}})},[]),(0,i.jsx)("div",{className:k().height,ref:_,children:(0,i.jsxs)(container,{as:"section",children:[(0,i.jsx)(j,{as:"h2",className:k().sectionTitle,ref:c,children:"My Expertise"}),(0,i.jsxs)("div",{className:k().cardContainers,children:[(0,i.jsxs)("div",{className:k().cardWrapper,ref:d,children:[(0,i.jsxs)("div",{className:k().card,children:[(0,i.jsxs)("div",{className:k().topBar,children:[(0,i.jsx)("div",{className:k().macosClose}),(0,i.jsx)("div",{className:k().macosMinimize}),(0,i.jsx)("div",{className:k().macosMaximize})]}),(0,i.jsx)("div",{className:k().content,children:e?(0,i.jsx)("div",{className:k().transpiledCode,children:(0,i.jsx)(expertise_FrontendExpertise,{})}):(0,i.jsx)(f.Z,{language:"javascript",showLineNumbers:!0,style:b.Bn,children:"import React from 'react';\n\nimport Heading from '@/components/common/layout/heading';\nimport Text from '@/components/common/layout/text';\n\nconst FrontendExpertise = () => {\n	const startDate = new Date('2021-01');\n	const currentDate = new Date();\n	const diffInMonths =\n		(currentDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24 * 30);\n	const years = Math.round(diffInMonths / 12);\n\n	return (\n		<div>\n			<Heading as=\"h3\" colorScheme={UIColors.RED}>\n				Frontend\n			</Heading>\n			<Text>\n				Over {years} years of development experience in HTML,\n				CSS, JS, Vue.js, React, NextJS and Nuxt frameworks.\n			</Text>\n			<ul>\n				<li>HTML</li>\n				<li>CSS</li>\n				<li>JS</li>\n				<li>React</li>\n				<li>Next.js</li>\n				<li>Redux</li>\n				<li>React Native</li>\n				<li>Vue.js</li>\n				<li>Nuxt.js</li>\n				<li>Webpack</li>\n			</ul>\n		</div>\n	);\n};\n\nexport default FrontendExpertise;"})})]}),(0,i.jsx)(common_button,{onClick:()=>{t(!e)},children:e?"View Source Code":"View Preview"})]}),(0,i.jsxs)("div",{className:k().cardWrapper,ref:h,children:[(0,i.jsxs)("div",{className:k().card,children:[(0,i.jsxs)("div",{className:k().topBar,children:[(0,i.jsx)("div",{className:k().macosClose}),(0,i.jsx)("div",{className:k().macosMinimize}),(0,i.jsx)("div",{className:k().macosMaximize})]}),(0,i.jsx)("div",{className:k().content,children:n?(0,i.jsxs)("div",{className:k().transpiledCode,children:[(0,i.jsx)(j,{as:"h3",colorScheme:p.r.YELLOW,children:"Backend"}),(0,i.jsx)(layout_text,{children:"Proficiency in backend development."}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:"NodeJS"}),(0,i.jsx)("li",{children:"Ruby on Rails"}),(0,i.jsx)("li",{children:"Java"}),(0,i.jsx)("li",{children:"SQL"}),(0,i.jsx)("li",{children:"Express"})]})]}):(0,i.jsx)(f.Z,{language:"javascript",showLineNumbers:!0,style:b.Bn,children:"import express from 'express';\n\nconst app = express();\nconst port = 3000;\n\napp.get('/list-of-backend-expertise', (req, res) => {\n	const backendExpertise = {\n		title: 'Backend',\n		paragraph: `Proficiency in backend development. `,\n		list: ['Node.js', 'Java', 'Ruby', 'Express']\n	};\n	res.json(backendExpertise);\n});\n\napp.listen(port, () => {\n	console.log(`Server listening at http://localhost:${port}`);\n});\n"})})]}),(0,i.jsx)(common_button,{onClick:()=>{a(!n)},children:n?"View Source Code":"View Preview"})]}),(0,i.jsxs)("div",{className:k().cardWrapper,ref:x,children:[(0,i.jsxs)("div",{className:k().card,children:[(0,i.jsxs)("div",{className:k().topBar,children:[(0,i.jsx)("div",{className:k().macosClose}),(0,i.jsx)("div",{className:k().macosMinimize}),(0,i.jsx)("div",{className:k().macosMaximize})]}),(0,i.jsx)("div",{className:k().content,children:l?(0,i.jsxs)("div",{className:k().transpiledCode,children:[(0,i.jsx)(j,{as:"h3",colorScheme:p.r.GREEN,children:"Others"}),(0,i.jsx)(layout_text,{children:"In addition, I also have experience in the following:"}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:"Git"}),(0,i.jsx)("li",{children:"Docker"}),(0,i.jsx)("li",{children:"AWS"}),(0,i.jsx)("li",{children:"SQL"}),(0,i.jsx)("li",{children:"MongoDB"}),(0,i.jsx)("li",{children:"REST API"}),(0,i.jsx)("li",{children:"Unit Testing"}),(0,i.jsx)("li",{children:"Integration Testing"}),(0,i.jsx)("li",{children:"End-to-End Testing"})]})]}):(0,i.jsx)(f.Z,{language:"markdown",showLineNumbers:!0,style:b.Bn,children:"### Others\n\nIn addition, I also have experience in the following:\n\n- Git\n- Docker\n- AWS\n- SQL\n- MongoDB\n- REST API\n- Unit Testing\n- Integration Testing\n- End-to-End Testing\n"})})]}),(0,i.jsx)(common_button,{onClick:()=>{o(!l)},children:l?"View Source Code":"View Preview"})]})]})]})})},I=n(1163),C=n(1664),H=n.n(C),L=n(2177),R=n.n(L),layout_link=e=>{let{type:t=p.r.PRIMARY,activeClassName:n="active",colorScheme:s=p.r.WHITE,className:r,children:a,...l}=e,{asPath:o}=(0,I.useRouter)(),c=o===l.href,d=h()(R()[t],m()[s],{[n]:c},r);return l.rel&&l.target?(0,i.jsx)("a",{className:d,...l,children:a}):(0,i.jsx)(H(),{className:d,...l,children:a})},E=n(8889),M=n.n(E),legal=()=>(0,i.jsxs)("div",{className:M().wrapper,children:[(0,i.jsx)(layout_text,{children:"Font: Mona Sans"}),(0,i.jsxs)(layout_text,{children:["Copyright \xa9 2023, GitHub\xa0",(0,i.jsx)(layout_link,{href:"https://github.com/github/mona-sans",target:"_blank",children:"https://github.com/github/mona-sans"}),"."]}),(0,i.jsx)(layout_text,{children:"License: SIL Open Font License, Version 1.1"}),(0,i.jsxs)(layout_text,{children:['This website uses the "Mona Sans" font, which is licensed under the SIL Open Font License, Version 1.1. You are free to use, study, modify, and redistribute the font in accordance with the terms of this license. For more information about the license, please visit\xa0',(0,i.jsx)(layout_link,{href:"http://scripts.sil.org/OFL",target:"_blank",children:"http://scripts.sil.org/OFL"}),"."]}),(0,i.jsx)(layout_text,{children:'Please note that the "Mona Sans" font is subject to the conditions and limitations outlined in the SIL Open Font License, and any use of the font must comply with those terms.'}),(0,i.jsx)("hr",{}),(0,i.jsx)(layout_text,{children:"LinkedIn, the LinkedIn logo, the IN logo and InMail are registered trademarks or trademarks of LinkedIn Corporation and its affiliates in the United States and/or other countries."}),(0,i.jsx)(layout_text,{children:'This website may use the LinkedIn logo as a reference or link to our LinkedIn profile. The use of the LinkedIn logo is in accordance with LinkedIn\'s "Brand Guidelines" and does not imply any endorsement, sponsorship, or affiliation with LinkedIn Corporation. For more information about the use of the LinkedIn logo, please refer to LinkedIn\'s "Brand Guidelines.".'}),(0,i.jsx)("hr",{}),(0,i.jsx)(layout_text,{children:"GITHUB\xae, the GITHUB\xae logo design, the INVERTOCAT logo design, OCTOCAT\xae, and the OCTOCAT\xae logo design are trademarks of GitHub, Inc., registered in the United States and other countries."}),(0,i.jsx)(layout_text,{children:'This website may use the GitHub logo as a reference or link to our GitHub profile. The use of the GitHub logo is in accordance with GitHub\'s "GitHub Logos and Usage" and does not imply any endorsement, sponsorship, or affiliation with GitHub, Inc. For more information about the use of the GitHub logo, please refer to GitHub\'s "GitHub Logos and Usage.".'})]}),F=n(7497),D=n.n(F),footer=()=>(0,i.jsx)("footer",{className:D().footer,children:(0,i.jsxs)(container,{as:"div",children:[(0,i.jsx)(legal,{}),(0,i.jsx)("div",{className:D().content,children:(0,i.jsx)(layout_text,{children:"Copyright \xa9 2023 Hernan Fabrica. All rights reserved."})})]})}),O=n(5675),W=n.n(O),V=n(7931),G=n.n(V),pill=e=>{let{colorScheme:t=p.r.PRIMARY,outline:n=!0,className:s,children:r,...a}=e,l=h()(G()[n?"outline":"filled"],G()[t],s);return(0,i.jsx)("p",{className:l,...a,children:r})},P=n(7314),A=n.n(P);r.p8.registerPlugin(l.ScrollTrigger);var hero=()=>(0,i.jsxs)("div",{className:A().background,children:[(0,i.jsx)("div",{className:A().wrapper,children:(0,i.jsxs)("header",{className:A().centeredContainer,children:[(0,i.jsxs)("div",{className:A().topBar,children:[(0,i.jsx)("div",{className:A().macosClose}),(0,i.jsx)("div",{className:A().macosMinimize}),(0,i.jsx)("div",{className:A().macosMaximize})]}),(0,i.jsxs)("div",{className:A().top,children:[(0,i.jsxs)(j,{as:"h6",children:["Looking for",(0,i.jsx)("br",{}),"your next developer?"]}),(0,i.jsx)(layout_link,{href:"mailto:hello@hernanfabrica.com",className:A().link,children:"Get in touch!"})]}),(0,i.jsxs)("div",{className:A().titleWrapper,children:[(0,i.jsx)(layout_text,{className:A().iam,children:"I am"}),(0,i.jsx)(j,{as:"h1",children:"Hern\xe1n"})]}),(0,i.jsxs)("div",{className:A().bottom,children:[(0,i.jsx)(j,{as:"h2",className:A().centered,children:"Full Stack Engineer"}),(0,i.jsxs)("div",{className:A().pills,children:[(0,i.jsx)(pill,{colorScheme:p.r.WHITE,children:"NodeJS"}),(0,i.jsx)(pill,{colorScheme:p.r.WHITE,children:"VueJS"}),(0,i.jsx)(pill,{colorScheme:p.r.WHITE,children:"ReactJS"}),(0,i.jsx)(pill,{colorScheme:p.r.WHITE,children:"Ruby on Rails"}),(0,i.jsx)(pill,{colorScheme:p.r.WHITE,children:"Java"})]}),(0,i.jsxs)("div",{className:A().links,children:[(0,i.jsxs)(layout_link,{href:"https://github.com/hfjuarez",className:A().link,children:[(0,i.jsx)(W(),{width:13.6,height:13.6,src:"/images/github-mark-white.svg",alt:"Github Mark White"}),"\xa0Github\xae"]}),(0,i.jsxs)(layout_link,{href:"https://www.linkedin.com/in/hfjuarez/",className:A().link,children:[(0,i.jsx)(W(),{height:13.6,width:13.6,src:"/images/linkedin-icon-white.svg",alt:"Linkedin Icon White"}),"\xa0Linkedin\xae"]})]})]})]})}),(0,i.jsxs)("div",{className:A().bgTextContainer,children:[(0,i.jsx)("div",{className:A().left,children:(0,i.jsxs)("div",{children:[(0,i.jsx)(layout_text,{children:"Hello"}),(0,i.jsx)(layout_text,{children:"Hello"}),(0,i.jsx)(layout_text,{children:"Hello"}),(0,i.jsx)(layout_text,{children:"Hello"}),(0,i.jsx)(layout_text,{children:"Hello"}),(0,i.jsx)(layout_text,{children:"Hello"}),(0,i.jsx)(layout_text,{children:"Hello"}),(0,i.jsx)(layout_text,{children:"Hello"})]})}),(0,i.jsx)("div",{className:A().right,children:(0,i.jsxs)("div",{children:[(0,i.jsx)(layout_text,{children:"Hello"}),(0,i.jsx)(layout_text,{children:"Hello"}),(0,i.jsx)(layout_text,{children:"Hello"}),(0,i.jsx)(layout_text,{children:"Hello"}),(0,i.jsx)(layout_text,{children:"Hello"}),(0,i.jsx)(layout_text,{children:"Hello"}),(0,i.jsx)(layout_text,{children:"Hello"}),(0,i.jsx)(layout_text,{children:"Hello"})]})})]})]}),z=n(4945),B=n.n(z);r.p8.registerPlugin(a.Flip,l.ScrollTrigger);var values=()=>{let e=(0,s.useRef)(null),t=(0,s.useRef)(null),n=(0,s.useRef)(null);return(0,s.useEffect)(()=>{let i=e.current,s=t.current,r=n.current;if(!i||!s||!r)return;i.classList.add(B().afterAnimation);let l=a.Flip.getState([i]);i.classList.remove(B().afterAnimation),a.Flip.to(l,{absolute:!1,absoluteOnLeave:!1,ease:"none",scale:!0,scrollTrigger:{end:"+=".concat(innerHeight+600),scrub:!0,start:"-=".concat(innerHeight),trigger:i},simple:!0,stagger:0}),s.classList.add(B().afterAnimation);let o=a.Flip.getState([s]);s.classList.remove(B().afterAnimation),a.Flip.to(o,{absolute:!1,absoluteOnLeave:!1,ease:"none",scale:!0,scrollTrigger:{end:"+=".concat(1.75*innerHeight),scrub:!0,start:"-=".concat(innerHeight),trigger:s},simple:!0,stagger:0}),r.classList.add(B().afterAnimation);let c=a.Flip.getState([r]);r.classList.remove(B().afterAnimation),a.Flip.to(c,{absolute:!1,absoluteOnLeave:!1,ease:"none",scale:!0,scrollTrigger:{end:"+=".concat(1.75*innerHeight),scrub:!0,start:"-=".concat(innerHeight),trigger:r},simple:!0,stagger:0})},[]),(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("div",{className:B().height,id:"introduction",children:(0,i.jsx)(container,{as:"section",children:(0,i.jsxs)("div",{className:B().introduction,children:[(0,i.jsxs)("div",{className:B().committed,ref:e,children:[(0,i.jsx)(layout_text,{children:"Committed"}),(0,i.jsx)(layout_text,{children:"Committed"}),(0,i.jsx)(layout_text,{children:"Committed"}),(0,i.jsx)(layout_text,{children:"Committed"}),(0,i.jsx)(layout_text,{children:"Committed"})]}),(0,i.jsxs)("div",{className:B().innovative,ref:t,children:[(0,i.jsx)(layout_text,{children:"Innovative"}),(0,i.jsx)(layout_text,{children:"Innovative"}),(0,i.jsx)(layout_text,{children:"Innovative"}),(0,i.jsx)(layout_text,{children:"Innovative"}),(0,i.jsx)(layout_text,{children:"Innovative"})]}),(0,i.jsxs)("div",{className:B().resultsDriven,ref:n,children:[(0,i.jsx)(layout_text,{children:"Results-Driven"}),(0,i.jsx)(layout_text,{children:"Results-Driven"}),(0,i.jsx)(layout_text,{children:"Results-Driven"}),(0,i.jsx)(layout_text,{children:"Results-Driven"}),(0,i.jsx)(layout_text,{children:"Results-Driven"}),(0,i.jsx)(layout_text,{children:"Results-Driven"})]}),(0,i.jsx)("div",{className:B().backgroundText,children:(0,i.jsx)(layout_text,{className:B().bgTextCommitted,children:"Committed"})}),(0,i.jsx)("div",{className:B().backgroundText,children:(0,i.jsx)(layout_text,{className:B().bgTextInnovative,children:"Innovative"})}),(0,i.jsx)("div",{className:B().backgroundText,children:(0,i.jsx)(layout_text,{className:B().bgTextResultsDrive,children:"Results-Drive"})})]})})})})};function Home(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(hero,{}),(0,i.jsxs)(container,{as:"main",children:[(0,i.jsx)(values,{}),(0,i.jsx)(expertise,{}),(0,i.jsx)(about,{}),(0,i.jsx)(footer,{})]})]})}},1804:function(e){e.exports={height:"about_height__r1nG6",centeredWrapper:"about_centeredWrapper__vtBEa",title:"about_title__EccMl"}},6637:function(e){e.exports={"button-basic":"button_button-basic__US_oS",primary:"button_primary__Loht6",secondary:"button_secondary__70cLM",white:"button_white__2_4iU","btn-marquee":"button_btn-marquee__GT8ER","txt-marquee":"button_txt-marquee__yLbTf",scrollText:"button_scrollText__bw7Ls",fill:"button_fill__kIf1q"}},801:function(e){e.exports={"basic-container":"container_basic-container__XDclV",div:"container_div__nmyLt",section:"container_section__wgCM_",main:"container_main__NU5kT"}},7497:function(e){e.exports={footer:"footer_footer__CxLXI",content:"footer_content__Z0hWb"}},5233:function(e){e.exports={"heading-basic":"heading_heading-basic__taKlE",h1:"heading_h1__Vi5BG",h2:"heading_h2__VVNjP",h3:"heading_h3__LvEm0",h4:"heading_h4__C00Tx",h5:"heading_h5__MGvrq",h6:"heading_h6__Qs1fC"}},2177:function(e){e.exports={"link-basic":"link_link-basic__AYfsO"}},7850:function(e){e.exports={p:"text_p__NOenv"}},8889:function(e){e.exports={wrapper:"legal_wrapper__Hnaue"}},7931:function(e){e.exports={"pill-basic":"pill_pill-basic__8LL89",outline:"pill_outline__O1hj5",primary:"pill_primary__bVNkr",secondary:"pill_secondary__Ibpiq",white:"pill_white__w1M6K"}},2578:function(e){e.exports={height:"expertise_height__uktfq",sectionTitle:"expertise_sectionTitle__yaHeU",cardContainers:"expertise_cardContainers__spAJ6",cardWrapper:"expertise_cardWrapper__s_l5X",card:"expertise_card__19jm3",topBar:"expertise_topBar__uYkva",macosClose:"expertise_macosClose__ur_Df",macosMinimize:"expertise_macosMinimize__Iak5N",macosMaximize:"expertise_macosMaximize__k3bKj",content:"expertise_content__oXtzr",transpiledCode:"expertise_transpiledCode__dSpTz"}},7314:function(e){e.exports={"button-basic":"hero_button-basic__EbbV1",link:"hero_link__bx1E_",primary:"hero_primary___VP7N",secondary:"hero_secondary__Bu1kS",white:"hero_white__nAPz3","btn-marquee":"hero_btn-marquee__wqLvA","txt-marquee":"hero_txt-marquee__MFu6J",scrollText:"hero_scrollText__U5aek",fill:"hero_fill__nrwVx",background:"hero_background__X3NSU",wrapper:"hero_wrapper__zdQw3",centeredContainer:"hero_centeredContainer__VwQUa",topBar:"hero_topBar__ckOQH",macosClose:"hero_macosClose__hbluq",macosMinimize:"hero_macosMinimize__MNd8J",macosMaximize:"hero_macosMaximize__hW5ez",top:"hero_top__ObmjR",titleWrapper:"hero_titleWrapper__Ou2Q_",iam:"hero_iam___CrSJ",bottom:"hero_bottom__qyxFn",pills:"hero_pills__0NF4M",links:"hero_links__EIP2y",bgTextContainer:"hero_bgTextContainer__3TPF_",left:"hero_left__FvCD_",right:"hero_right__WnRFk",scrollTextUp:"hero_scrollTextUp__SLpj5",scrollTextDown:"hero_scrollTextDown__sZEDr"}},4945:function(e){e.exports={height:"values_height__h1vUZ",introduction:"values_introduction__Fpvyx",backgroundText:"values_backgroundText__jxFK4",bgTextCommitted:"values_bgTextCommitted__V5rP8",bgTextInnovative:"values_bgTextInnovative__g9Mik",bgTextResultsDrive:"values_bgTextResultsDrive__DnDbG",committed:"values_committed__A8zIZ",afterAnimation:"values_afterAnimation__n362q",innovative:"values_innovative__E3yFN",resultsDriven:"values_resultsDriven__gVPqf"}},8100:function(e){e.exports={primary:"colors_primary__AHrwy",secondary:"colors_secondary__ts8sw",red:"colors_red__n_3SW",yellow:"colors_yellow__FgJvd",green:"colors_green__XcoZP","bg-secondary":"colors_bg-secondary__TnVq3",white:"colors_white__IK7V5"}}},function(e){e.O(0,[802,728,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);