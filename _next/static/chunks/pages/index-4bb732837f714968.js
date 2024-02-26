(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(730)}])},730:function(e,n,i){"use strict";i.r(n),i.d(n,{default:function(){return Home}});var t,s,l=i(5893),r=i(7294),a=i(4184),o=i.n(a),c=i(801),d=i.n(c),container=e=>{let{as:n,className:i,children:t,...s}=e,r=o()(d()[n],i);return(0,l.jsx)(n,{className:r,...s,children:t})},h=i(5675),u=i.n(h),x=i(5233),_=i.n(x),m=i(8100),p=i.n(m);(t=s||(s={})).PRIMARY="primary",t.SECONDARY="secondary",t.TERTIARY="tertiary",t.BASE="base",t.WHITE="white",t.RED="red",t.YELLOW="yellow",t.GREEN="green";let g=(0,r.forwardRef)((e,n)=>{let{as:i,colorScheme:t=s.WHITE,className:r,children:a,...c}=e,d=o()(_()[i],p()[t],r);return(0,l.jsx)(i,{className:d,...c,ref:n,children:a})});g.displayName="Heading";var v=i(1163),j=i(1664),f=i.n(j),y=i(2177),b=i.n(y),layout_link=e=>{let{type:n=s.PRIMARY,activeClassName:i="active",colorScheme:t=s.WHITE,className:r,children:a,...c}=e,{asPath:d}=(0,v.useRouter)(),h=d===c.href,u=o()(b()[n],p()[t],{[i]:h},r);return c.rel&&c.target?(0,l.jsx)("a",{className:u,...c,children:a}):(0,l.jsx)(f(),{className:u,...c,children:a})},k=i(7931),w=i.n(k),pill=e=>{let{colorScheme:n=s.PRIMARY,outline:i=!0,className:t,children:r,...a}=e,c=o()(w()[i?"outline":"filled"],w()[n],t);return(0,l.jsx)("p",{className:c,...a,children:r})},N=i(7850),T=i.n(N),layout_text=e=>{let{as:n="p",colorScheme:i=s.WHITE,className:t,children:r,...a}=e,c=o()(T()[n],p()[i],t);return(0,l.jsx)(n,{className:c,...a,children:r})},S=i(7314),C=i.n(S),I=i(1472),H=i.n(I),hero=()=>(0,l.jsxs)("header",{id:"hero",className:H().wrapper,"aria-label":"Hero - Hello, I'm Hern\xe1n",children:[(0,l.jsxs)("div",{className:C().container,children:[(0,l.jsxs)("div",{className:C().top,children:[(0,l.jsxs)(g,{as:"h6",children:["Looking for",(0,l.jsx)("br",{}),"your next developer?"]}),(0,l.jsx)(layout_link,{href:"mailto:hello@hernanfabrica.com",className:C().link,children:"Get in touch!"})]}),(0,l.jsxs)("div",{className:C().centered,children:[(0,l.jsxs)("hgroup",{children:[(0,l.jsx)(layout_text,{className:C().iam,children:"I am"}),(0,l.jsx)(g,{as:"h1",children:"Hern\xe1n"}),(0,l.jsx)(g,{as:"h2",children:"Full Stack Engineer"})]}),(0,l.jsxs)("div",{className:C().pills,children:[(0,l.jsx)(pill,{colorScheme:s.WHITE,children:"NodeJS\xa0"}),(0,l.jsx)(pill,{colorScheme:s.WHITE,children:"VueJS\xa0"}),(0,l.jsx)(pill,{colorScheme:s.WHITE,children:"ReactJS\xa0"}),(0,l.jsx)(pill,{colorScheme:s.WHITE,children:"Ruby on Rails\xa0"}),(0,l.jsx)(pill,{colorScheme:s.WHITE,children:"Java\xa0"})]})]}),(0,l.jsxs)("div",{className:C().links,children:[(0,l.jsxs)(layout_link,{href:"https://github.com/hfjuarez",className:C().link,children:[(0,l.jsx)(u(),{width:13.6,height:13.6,src:"/images/github-mark-white.svg",alt:"Github Mark White"}),"\xa0Github"]}),(0,l.jsxs)(layout_link,{href:"https://www.linkedin.com/in/hfjuarez/",className:C().link,children:[(0,l.jsx)(u(),{height:13.6,width:13.6,src:"/images/linkedin-icon-white.svg",alt:"Linkedin Icon White"}),"\xa0Linkedin"]})]})]}),(0,l.jsxs)("div",{className:C().animation,children:[(0,l.jsx)("div",{className:C().left,children:(0,l.jsxs)("div",{children:[(0,l.jsx)(layout_text,{children:"Hello"}),(0,l.jsx)(layout_text,{children:"Hello"}),(0,l.jsx)(layout_text,{children:"Hello"}),(0,l.jsx)(layout_text,{children:"Hello"}),(0,l.jsx)(layout_text,{children:"Hello"}),(0,l.jsx)(layout_text,{children:"Hello"}),(0,l.jsx)(layout_text,{children:"Hello"}),(0,l.jsx)(layout_text,{children:"Hello"})]})}),(0,l.jsx)("div",{className:C().right,children:(0,l.jsxs)("div",{children:[(0,l.jsx)(layout_text,{children:"Hello"}),(0,l.jsx)(layout_text,{children:"Hello"}),(0,l.jsx)(layout_text,{children:"Hello"}),(0,l.jsx)(layout_text,{children:"Hello"}),(0,l.jsx)(layout_text,{children:"Hello"}),(0,l.jsx)(layout_text,{children:"Hello"}),(0,l.jsx)(layout_text,{children:"Hello"}),(0,l.jsx)(layout_text,{children:"Hello"})]})})]})]}),L=i(990),R=i(5341),A=i(6546);let E=(0,r.forwardRef)((e,n)=>{let{as:i,children:t,className:s,...r}=e,a=o()(H().wrapper,s);return(0,l.jsx)(i,{className:a,...r,ref:n,children:t})});E.displayName="HeightWrapper";var D=i(4945),F=i.n(D);L.p8.registerPlugin(R.Flip,A.ScrollTrigger);var values=()=>{let e=(0,r.useRef)(null),n=(0,r.useRef)(null),i=(0,r.useRef)(null);return(0,r.useEffect)(()=>{let t=e.current,s=n.current,l=i.current;if(!t||!s||!l)return;t.classList.add(F().afterAnimation);let r=R.Flip.getState([t]);t.classList.remove(F().afterAnimation),R.Flip.to(r,{absolute:!1,absoluteOnLeave:!1,ease:"none",scale:!0,scrollTrigger:{end:"+=".concat(innerHeight+600),scrub:!0,start:"-=".concat(innerHeight),trigger:t},simple:!0,stagger:0}),s.classList.add(F().afterAnimation);let a=R.Flip.getState([s]);s.classList.remove(F().afterAnimation),R.Flip.to(a,{absolute:!1,absoluteOnLeave:!1,ease:"none",scale:!0,scrollTrigger:{end:"+=".concat(1.75*innerHeight),scrub:!0,start:"-=".concat(innerHeight),trigger:s},simple:!0,stagger:0}),l.classList.add(F().afterAnimation);let o=R.Flip.getState([l]);l.classList.remove(F().afterAnimation),R.Flip.to(o,{absolute:!1,absoluteOnLeave:!1,ease:"none",scale:!0,scrollTrigger:{end:"+=".concat(1.75*innerHeight),scrub:!0,start:"-=".concat(innerHeight),trigger:l},simple:!0,stagger:0})},[]),(0,l.jsx)(E,{as:"section",id:"values",className:F().bgColor,children:(0,l.jsxs)(container,{as:"div",className:F().values,children:[(0,l.jsxs)("div",{className:F().committed,ref:e,children:[(0,l.jsx)(layout_text,{children:"Committed"}),(0,l.jsx)(layout_text,{children:"Committed"}),(0,l.jsx)(layout_text,{children:"Committed"}),(0,l.jsx)(layout_text,{children:"Committed"}),(0,l.jsx)(layout_text,{children:"Committed"})]}),(0,l.jsxs)("div",{className:F().innovative,ref:n,children:[(0,l.jsx)(layout_text,{children:"Innovative"}),(0,l.jsx)(layout_text,{children:"Innovative"}),(0,l.jsx)(layout_text,{children:"Innovative"}),(0,l.jsx)(layout_text,{children:"Innovative"}),(0,l.jsx)(layout_text,{children:"Innovative"})]}),(0,l.jsxs)("div",{className:F().resultsDriven,ref:i,children:[(0,l.jsx)(layout_text,{children:"Results-Driven"}),(0,l.jsx)(layout_text,{children:"Results-Driven"}),(0,l.jsx)(layout_text,{children:"Results-Driven"}),(0,l.jsx)(layout_text,{children:"Results-Driven"}),(0,l.jsx)(layout_text,{children:"Results-Driven"}),(0,l.jsx)(layout_text,{children:"Results-Driven"})]}),(0,l.jsx)("div",{className:F().backgroundText,children:(0,l.jsx)(layout_text,{className:F().bgTextCommitted,children:"Committed"})}),(0,l.jsx)("div",{className:F().backgroundText,children:(0,l.jsx)(layout_text,{className:F().bgTextInnovative,children:"Innovative"})}),(0,l.jsx)("div",{className:F().backgroundText,children:(0,l.jsx)(layout_text,{className:F().bgTextResultsDrive,children:"Results-Driven"})})]})})},W=i(8189),G=i(6671),M=i(6637),P=i.n(M),common_button=e=>{let{colorScheme:n="primary",size:i="medium",className:t,type:s="button",marquee:r=!1,fill:a=!1,children:c,...d}=e,h=r&&P()["btn-marquee"],u=o()(P()[n],P()[i],h,a&&P().fill,t);return(0,l.jsx)("button",{type:s,className:u,...d,children:r?(0,l.jsx)("div",{className:P()["txt-marquee"],children:(0,l.jsxs)("div",{children:[(0,l.jsxs)("span",{children:[c,"\xa0\xa0-\xa0\xa0"]}),(0,l.jsxs)("span",{children:[c,"\xa0\xa0-\xa0\xa0"]})]})}):c})},expertise_FrontendExpertise=()=>{let e=new Date("2021-01"),n=new Date,i=(n.getTime()-e.getTime())/2592e6;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(g,{as:"h3",colorScheme:s.RED,children:"Frontend"}),(0,l.jsxs)(layout_text,{children:["With ",Math.round(i/12),"+ years of frontend development experience, I specialize in creating dynamic, user-centric interfaces."]}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:"React"}),(0,l.jsx)("li",{children:"Next.js"}),(0,l.jsx)("li",{children:"Vue.js"}),(0,l.jsx)("li",{children:"Nuxt.js"}),(0,l.jsx)("li",{children:"JS"}),(0,l.jsx)("li",{children:"CSS"}),(0,l.jsx)("li",{children:"HTML - Semantic and Accessibility"}),(0,l.jsx)("li",{children:"Redux"}),(0,l.jsx)("li",{children:"React Native"}),(0,l.jsx)("li",{children:"Webpack"})]})]})},V=i(5144),O=i.n(V),macosActions=()=>(0,l.jsxs)("div",{className:O().actions,children:[(0,l.jsx)("div",{className:O().close,children:(0,l.jsx)("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,l.jsx)("path",{d:"M3.75 3.75L8.25 8.25M8.25 3.75L3.75 8.25",stroke:"#921D16",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}),(0,l.jsx)("div",{className:O().minimize,children:(0,l.jsx)("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,l.jsx)("path",{d:"M2.75 6H9.25",stroke:"#8F591D",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}),(0,l.jsx)("div",{className:O().maximize,children:(0,l.jsxs)("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,l.jsx)("path",{d:"M7.08578 3.85355C7.40076 3.53857 7.17768 3 6.73223 3H3.5C3.22386 3 3 3.22386 3 3.5V6.73223C3 7.17768 3.53857 7.40077 3.85355 7.08578L7.08578 3.85355Z",fill:"#285F18"}),(0,l.jsx)("path",{d:"M4.91422 8.14645C4.59924 8.46143 4.82232 9 5.26777 9H8.5C8.77614 9 9 8.77614 9 8.5V5.26777C9 4.82232 8.46143 4.59923 8.14645 4.91422L4.91422 8.14645Z",fill:"#285F18"})]})})]}),z=i(2578),q=i.n(z);L.p8.registerPlugin(A.ScrollTrigger);var expertise=()=>{let[e,n]=(0,r.useState)(!0),[i,t]=(0,r.useState)(!0),[a,o]=(0,r.useState)(!0),c=(0,r.useRef)(null),d=(0,r.useRef)(null),h=(0,r.useRef)(null),u=(0,r.useRef)(null),x=(0,r.useRef)(null);return(0,r.useEffect)(()=>{let e=null==c?void 0:c.current,n=null==d?void 0:d.current,i=null==h?void 0:h.current,t=null==u?void 0:u.current,s=null==x?void 0:x.current;e&&n&&i&&t&&s&&(L.p8.to(e,{delay:0,duration:.75,ease:"none",fontSize:"7.5rem",fontStretch:"95%",fontWeight:600,marginTop:0,scrollTrigger:{start:"top 70%",trigger:s}}),L.p8.to(n,{delay:0,duration:.5,ease:"none",marginTop:0,opacity:1,scrollTrigger:{start:"top 70%",trigger:s}}),L.p8.to(i,{delay:.2,duration:.75,ease:"none",marginTop:0,opacity:1,scrollTrigger:{start:"top 70%",trigger:s}}),L.p8.to(t,{delay:.4,duration:1,ease:"none",marginTop:0,opacity:1,scrollTrigger:{start:"top 70%",trigger:s}}))},[]),(0,l.jsx)(E,{as:"section",ref:x,id:"expertise",style:{backgroundColor:"#000",paddingTop:"6rem"},children:(0,l.jsxs)(container,{as:"div",children:[(0,l.jsx)(g,{as:"h2",className:q().title,ref:c,children:"My Expertise"}),(0,l.jsxs)("div",{className:q().cardContainers,children:[(0,l.jsxs)("div",{className:q().cardWrapper,ref:d,children:[(0,l.jsxs)("div",{className:q().card,children:[(0,l.jsx)(macosActions,{}),(0,l.jsx)("div",{className:q().content,children:e?(0,l.jsx)("div",{className:q().transpiledCode,children:(0,l.jsx)(expertise_FrontendExpertise,{})}):(0,l.jsx)(W.Z,{language:"javascript",showLineNumbers:!0,style:G.Bn,children:"import React from 'react';\n\nimport Heading from '@/components/common/layout/heading';\nimport Text from '@/components/common/layout/text';\n\nconst FrontendExpertise = () => {\n	const startDate = new Date('2021-01');\n	const currentDate = new Date();\n	const diffInMonths =\n		(currentDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24 * 30);\n	const years = Math.round(diffInMonths / 12);\n\n	return (\n		<div>\n			<Heading as=\"h3\" colorScheme={UIColors.RED}>\n				Frontend\n			</Heading>\n			<Text>\n				With {years}+ years of frontend development experience, I specialize in\n				creating dynamic, user-centric interfaces.\n			</Text>\n			<ul>\n				<li>React</li>\n				<li>Next.js</li>\n				<li>Vue.js</li>\n				<li>Nuxt.js</li>\n				<li>JS</li>\n				<li>CSS</li>\n				<li>HTML - Semantic and Accessibility</li>\n				<li>Redux</li>\n				<li>React Native</li>\n				<li>Webpack</li>\n			</ul>\n		</div>\n	);\n};\n\nexport default FrontendExpertise;"})})]}),(0,l.jsx)(common_button,{onClick:()=>{n(!e)},children:e?"View Source Code":"View Preview"})]}),(0,l.jsxs)("div",{className:q().cardWrapper,ref:h,children:[(0,l.jsxs)("div",{className:q().card,children:[(0,l.jsx)(macosActions,{}),(0,l.jsx)("div",{className:q().content,children:i?(0,l.jsxs)("div",{className:q().transpiledCode,children:[(0,l.jsx)(g,{as:"h3",colorScheme:s.YELLOW,children:"Backend"}),(0,l.jsx)(layout_text,{children:"Proficient in backend development, I specialize in building robust, scalable server-side solutions."}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:"NodeJS"}),(0,l.jsx)("li",{children:"Ruby on Rails"}),(0,l.jsx)("li",{children:"Java"}),(0,l.jsx)("li",{children:"Express"}),(0,l.jsx)("li",{children:"SQL"}),(0,l.jsx)("li",{children:"Sequelize"}),(0,l.jsx)("li",{children:"MongoDB"}),(0,l.jsx)("li",{children:"Mongoose"}),(0,l.jsx)("li",{children:"AWS - EC2 - RDS"})]})]}):(0,l.jsx)(W.Z,{language:"javascript",showLineNumbers:!0,style:G.Bn,children:"import express from 'express';\n\nconst app = express();\nconst port = 3000;\n\napp.get('/list-of-backend-expertise', (req, res) => {\n	const backendExpertise = {\n		title: 'Backend',\n		paragraph: `Proficient in backend development, I specialize in building robust, scalable server-side solutions.`,\n		list: ['NodeJS', 'Ruby on Rails', 'Java', 'Express', 'SQL', 'Sequelize', 'MongoDB', 'Mongoose', 'AWS - EC2 - RDS' ]\n	};\n	res.json(backendExpertise);\n});\n\napp.listen(port, () => {\n	console.log(`Server listening at http://localhost:${port}`);\n});\n"})})]}),(0,l.jsx)(common_button,{onClick:()=>{t(!i)},children:i?"View Source Code":"View Preview"})]}),(0,l.jsxs)("div",{className:q().cardWrapper,ref:u,children:[(0,l.jsxs)("div",{className:q().card,children:[(0,l.jsx)(macosActions,{}),(0,l.jsx)("div",{className:q().content,children:a?(0,l.jsxs)("div",{className:q().transpiledCode,children:[(0,l.jsx)(g,{as:"h3",colorScheme:s.GREEN,children:"Others"}),(0,l.jsx)(layout_text,{children:"I offer a diverse skill set that enriches my capacity to provide holistic solutions."}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:"Git"}),(0,l.jsx)("li",{children:"Docker"}),(0,l.jsx)("li",{children:"AWS"}),(0,l.jsx)("li",{children:"REST API"}),(0,l.jsx)("li",{children:"Unit Testing"}),(0,l.jsx)("li",{children:"Integration Testing"}),(0,l.jsx)("li",{children:"End-to-End Testing"}),(0,l.jsx)("li",{children:" Fast Learning"}),(0,l.jsx)("li",{children:"Detail-Oriented"}),(0,l.jsx)("li",{children:"Proactive"}),(0,l.jsx)("li",{children:"Problem-Solving"})]})]}):(0,l.jsx)(W.Z,{language:"markdown",showLineNumbers:!0,style:G.Bn,children:"### Others\n\nI offer a diverse skill set that enriches my capacity to provide holistic solutions.\n\n- Git\n- Docker\n- AWS\n- REST API\n- Unit Testing\n- Integration Testing\n- End-to-End Testing\n- Fast Learning\n- Detail-Oriented\n- Proactive\n- Problem-Solving\n"})})]}),(0,l.jsx)(common_button,{onClick:()=>{o(!a)},children:a?"View Source Code":"View Preview"})]})]})]})})},B=i(267),Z=i.n(B);L.p8.registerPlugin(R.Flip,A.ScrollTrigger);var summary=()=>(0,l.jsx)(E,{as:"section",id:"summary",className:Z().customHeightWrapper,children:(0,l.jsx)(container,{as:"div",className:Z().container,children:(0,l.jsx)(g,{as:"h3",className:Z().summary,children:"Dynamic Full Stack Engineer with a proven history of driving impactful projects, such as pioneering the innovative LAND Sale system at The Sandbox Game. Proficient in JavaScript, Node, Java, Vue, and React, with a focus on delivering results and innovative solutions. Ready to contribute expertise to your team's success."})})}),J=i(1286),U=i.n(J),components_work=e=>{var n,i,t,s,r,a,c,d,h,x,_,m,p,v,j,f,y,b,k,w,N,T,S;let{work:C}=e,I=o()(U().work,(null==C?void 0:null===(n=C.header)||void 0===n?void 0:n.image)&&U().hasImage),H=(null==C?void 0:null===(t=C.description)||void 0===t?void 0:null===(i=t.paragraphs)||void 0===i?void 0:i.length)&&(0,l.jsxs)("section",{className:U().description,children:[(0,l.jsx)(g,{as:"h4",className:U().visuallyHidden,children:"Description"}),null==C?void 0:null===(s=C.description)||void 0===s?void 0:s.paragraphs.map((e,n)=>(0,l.jsx)(layout_text,{children:e},"work-".concat(C.header.title.replaceAll(" ","-"),"-p-").concat(n)))]}),L=((null==C?void 0:null===(a=C.skills)||void 0===a?void 0:null===(r=a.frontend)||void 0===r?void 0:r.length)||(null==C?void 0:null===(d=C.skills)||void 0===d?void 0:null===(c=d.backend)||void 0===c?void 0:c.length)||(null==C?void 0:null===(x=C.skills)||void 0===x?void 0:null===(h=x.others)||void 0===h?void 0:h.length))&&(0,l.jsxs)("section",{className:U().skills,children:[(0,l.jsx)(g,{as:"h4",className:U().visuallyHidden,children:"Skills"}),!!(null==C?void 0:null===(m=C.skills)||void 0===m?void 0:null===(_=m.frontend)||void 0===_?void 0:_.length)&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(g,{as:"h5",children:"Frontend"}),(0,l.jsx)("ul",{className:U().pills,children:null==C?void 0:null===(p=C.skills)||void 0===p?void 0:p.frontend.map(e=>(0,l.jsx)("li",{className:U().red,children:e.name},e.key))})]}),!!(null==C?void 0:null===(j=C.skills)||void 0===j?void 0:null===(v=j.backend)||void 0===v?void 0:v.length)&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(g,{as:"h5",children:"Backend"}),(0,l.jsx)("ul",{className:U().pills,children:null==C?void 0:null===(f=C.skills)||void 0===f?void 0:f.backend.map(e=>(0,l.jsx)("li",{className:U().yellow,children:e.name},e.key))})]}),!!(null==C?void 0:null===(b=C.skills)||void 0===b?void 0:null===(y=b.others)||void 0===y?void 0:y.length)&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(g,{as:"h5",children:"Other"}),(0,l.jsx)("ul",{className:U().pills,children:null==C?void 0:null===(k=C.skills)||void 0===k?void 0:k.others.map(e=>(0,l.jsx)("li",{className:U().green,children:e.name},e.key))})]})]});return(0,l.jsxs)("article",{className:I,children:[(0,l.jsxs)("header",{className:U().title,children:[(0,l.jsxs)("div",{children:[(0,l.jsx)(g,{as:"h3",children:null==C?void 0:null===(w=C.header)||void 0===w?void 0:w.title}),(0,l.jsxs)("hgroup",{children:[(0,l.jsx)(g,{as:"h4",children:null==C?void 0:null===(N=C.header)||void 0===N?void 0:N.position}),(0,l.jsx)(g,{as:"h5",children:null==C?void 0:null===(T=C.header)||void 0===T?void 0:T.companyAndDuration})]})]}),(0,l.jsx)("hr",{})]}),(null==C?void 0:null===(S=C.header)||void 0===S?void 0:S.image)&&(0,l.jsx)(u(),{className:U().image,width:C.header.image.width,height:C.header.image.height,src:C.header.image.url,alt:C.header.image.alt}),H,L]})},X=i(3335),Y=i.n(X),Q=i(8786);let K=[{description:{paragraphs:["As a Full Stack Engineer I was a key part of the development of this critical system from conception to execution. As the technical lead, I spearheaded the development of incredible new features.","We designed and implemented a robust and secure platform for users to purchase virtual lands, enabling them to create immersive gaming experiences within the metaverse.","The LAND Sale project was a groundbreaking initiative aimed at revolutionizing land sales within our gaming platform."]},header:{companyAndDuration:"The Sandbox Game, 2022-Present",position:"Technical Lead",title:"LAND Sale"},skills:{backend:(0,Q.GZ)("node","sql","sequelize","adr"),frontend:(0,Q.GZ)("vue","nuxt","strapi"),others:(0,Q.GZ)("problem-solving","project-management","project-leadership","blockchain","security")}},{description:{paragraphs:["The Private Healthcare Web App & Mobile App project was a comprehensive solution catering to the needs of healthcare provider and their patients.","Beginning as a Full Stack Developer, I transitioned into the role of Technical Lead, overseeing the evolution and enhancement of the platform.","We facilitated seamless interactions between healthcare professionals and patients. Noteworthy achievements include the successful integration of a new payment gateway (Plexo), migration to a new server infrastructure, and resolution of long-standing bugs.","Additionally, I led the transition to a new provider following the acquisition of Cualit by The Sandbox Game, ensuring uninterrupted service for users."]},header:{companyAndDuration:"Cualit, 2021-2022",position:"Technical Lead",title:"Private Healthcare"},skills:{backend:(0,Q.GZ)("ror","sql","aws","payment-gateway","server-maintenance"),frontend:(0,Q.GZ)("ionic","angular"),others:(0,Q.GZ)("problem-solving","project-leadership")}},{description:{paragraphs:["The Simple & Supper project was a fundamental system designed for electronic billing, stock management, and customer relations.","As part of a five-member development team, I contributed to the end-to-end development of the system.","This system addressed critical business needs, streamlining billing processes, managing inventory efficiently, and enhancing customer relationships."]},header:{companyAndDuration:"Cualit, 2021-2022",position:"Full Stack Developer",title:"Simple & Supper"},skills:{backend:(0,Q.GZ)("node","mongo","mongoose"),frontend:(0,Q.GZ)("vue"),others:(0,Q.GZ)("problem-solving")}}];var components_works=()=>{let[e,n]=(0,r.useState)(1),[i,t]=(0,r.useState)(Y()["position".concat(e)]),s=o()(Y().carrousel,i),a=o()(Y().carrouselControls,i),handleClick=e=>{n(e),t(Y()["position".concat(e)])};return(0,l.jsx)(E,{as:"section",id:"work",className:Y().customHeightWrapper,children:(0,l.jsxs)(container,{as:"div",className:Y().container,children:[(0,l.jsx)(g,{as:"h2",children:"My Work"}),(0,l.jsxs)("div",{className:Y().carrouselContainer,children:[(0,l.jsx)("section",{className:s,children:(null==K?void 0:K.length)&&K.map((e,n)=>(0,l.jsx)(components_work,{work:e},"work"+n))}),1!==e&&(0,l.jsx)("button",{onClick:()=>handleClick(e-1),className:Y().back,children:(0,l.jsx)(u(),{width:12.5,height:21.25,src:"/images/arrow.svg",alt:"Arrow"})}),3!==e&&(0,l.jsx)("button",{onClick:()=>handleClick(e+1),className:Y().next,children:(0,l.jsx)(u(),{width:12.5,height:21.25,src:"/images/arrow.svg",alt:"Arrow"})})]}),(0,l.jsxs)("div",{className:a,children:[(0,l.jsx)("button",{onClick:()=>handleClick(1)}),(0,l.jsx)("button",{onClick:()=>handleClick(2)}),(0,l.jsx)("button",{onClick:()=>handleClick(3)})]})]})})},$=i(8872),ee=i.n($),contact=()=>(0,l.jsx)(E,{as:"section",id:"contact",children:(0,l.jsxs)(container,{as:"div",className:ee().container,children:[(0,l.jsx)(g,{as:"h2",className:ee().title,children:"Let’s get to know each other."}),(0,l.jsxs)("div",{className:ee().contactInfoContainer,children:[(0,l.jsx)(g,{as:"h3",className:ee().label,children:"Contact"}),(0,l.jsx)("div",{className:ee().linksContainer,children:(0,l.jsx)(layout_link,{className:_().h3,href:"mailto:hello@hernanfabrica.com",children:"hello@hernanfabrica.com"})})]}),(0,l.jsx)("hr",{}),(0,l.jsxs)("div",{className:ee().contactInfoContainer,children:[(0,l.jsx)(g,{as:"h3",className:ee().label,children:"Social"}),(0,l.jsxs)("div",{className:ee().linksContainer,children:[(0,l.jsx)(layout_link,{className:_().h3,href:"https://www.linkedin.com/in/hfjuarez/",children:"LinkedIn"}),(0,l.jsx)(layout_link,{className:_().h3,href:"https://github.com/hfjuarez",children:"GitHub"})]})]})]})}),en=i(8889),ei=i.n(en),legal=()=>(0,l.jsxs)("div",{className:ei().wrapper,children:[(0,l.jsx)(layout_text,{children:"Font: Mona Sans"}),(0,l.jsxs)(layout_text,{children:["Copyright \xa9 2024, GitHub\xa0",(0,l.jsx)(layout_link,{href:"https://github.com/github/mona-sans",target:"_blank",colorScheme:s.PRIMARY,children:"https://github.com/github/mona-sans"}),"."]}),(0,l.jsx)(layout_text,{children:"License: SIL Open Font License, Version 1.1"}),(0,l.jsxs)(layout_text,{children:['This website uses the "Mona Sans" font, which is licensed under the SIL Open Font License, Version 1.1. You are free to use, study, modify, and redistribute the font in accordance with the terms of this license. For more information about the license, please visit\xa0',(0,l.jsx)(layout_link,{href:"http://scripts.sil.org/OFL",target:"_blank",colorScheme:s.PRIMARY,children:"http://scripts.sil.org/OFL"}),"."]}),(0,l.jsx)(layout_text,{children:'Please note that the "Mona Sans" font is subject to the conditions and limitations outlined in the SIL Open Font License, and any use of the font must comply with those terms.'}),(0,l.jsx)("hr",{}),(0,l.jsx)(layout_text,{children:"LinkedIn, the LinkedIn logo, the IN logo and InMail are registered trademarks or trademarks of LinkedIn Corporation and its affiliates in the United States and/or other countries."}),(0,l.jsx)(layout_text,{children:'This website may use the LinkedIn logo as a reference or link to our LinkedIn profile. The use of the LinkedIn logo is in accordance with LinkedIn\'s "Brand Guidelines" and does not imply any endorsement, sponsorship, or affiliation with LinkedIn Corporation. For more information about the use of the LinkedIn logo, please refer to LinkedIn\'s "Brand Guidelines.".'}),(0,l.jsx)("hr",{}),(0,l.jsx)(layout_text,{children:"GITHUB\xae, the GITHUB\xae logo design, the INVERTOCAT logo design, OCTOCAT\xae, and the OCTOCAT\xae logo design are trademarks of GitHub, Inc., registered in the United States and other countries."}),(0,l.jsx)(layout_text,{children:'This website may use the GitHub logo as a reference or link to our GitHub profile. The use of the GitHub logo is in accordance with GitHub\'s "GitHub Logos and Usage" and does not imply any endorsement, sponsorship, or affiliation with GitHub, Inc. For more information about the use of the GitHub logo, please refer to GitHub\'s "GitHub Logos and Usage.".'})]}),et=i(7497),es=i.n(et),footer=()=>(0,l.jsx)("footer",{className:es().footer,id:"contact",children:(0,l.jsxs)(container,{as:"div",children:[(0,l.jsx)("div",{className:es().content,children:(0,l.jsx)(layout_text,{children:"Copyright \xa9 2024 Hernan Fabrica. All rights reserved."})}),(0,l.jsx)(legal,{})]})});function Home(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(hero,{}),(0,l.jsxs)(container,{as:"main",children:[(0,l.jsx)(values,{}),(0,l.jsx)(summary,{}),(0,l.jsx)(expertise,{}),(0,l.jsx)(components_works,{}),(0,l.jsx)(contact,{})]}),(0,l.jsx)(footer,{})]})}},6637:function(e){e.exports={"button-basic":"button_button-basic__US_oS",primary:"button_primary__Loht6",secondary:"button_secondary__70cLM",white:"button_white__2_4iU","btn-marquee":"button_btn-marquee__GT8ER","txt-marquee":"button_txt-marquee__yLbTf",scrollText:"button_scrollText__bw7Ls",fill:"button_fill__kIf1q"}},801:function(e){e.exports={"basic-container":"container_basic-container__XDclV",div:"container_div__nmyLt",section:"container_section__wgCM_",main:"container_main__NU5kT"}},7497:function(e){e.exports={footer:"footer_footer__CxLXI",content:"footer_content__Z0hWb"}},5233:function(e){e.exports={"heading-basic":"heading_heading-basic__taKlE",h1:"heading_h1__Vi5BG",h2:"heading_h2__VVNjP",h3:"heading_h3__LvEm0",h4:"heading_h4__C00Tx",h5:"heading_h5__MGvrq",h6:"heading_h6__Qs1fC"}},1472:function(e){e.exports={wrapper:"height_wrapper__80c7e"}},2177:function(e){e.exports={"link-basic":"link_link-basic__AYfsO"}},7850:function(e){e.exports={p:"text_p__NOenv"}},8889:function(e){e.exports={wrapper:"legal_wrapper__Hnaue"}},5144:function(e){e.exports={actions:"macosActions_actions__Chqt5",close:"macosActions_close___O0rX",minimize:"macosActions_minimize__FjI_o",maximize:"macosActions_maximize__G7SL0"}},7931:function(e){e.exports={"pill-basic":"pill_pill-basic__8LL89",outline:"pill_outline__O1hj5",primary:"pill_primary__bVNkr",secondary:"pill_secondary__Ibpiq",white:"pill_white__w1M6K"}},8872:function(e){e.exports={container:"contact_container__2LRQD",title:"contact_title__lpcrG",contactInfoContainer:"contact_contactInfoContainer__xO3kt",label:"contact_label__ecKka",linksContainer:"contact_linksContainer__HInlX"}},2578:function(e){e.exports={title:"expertise_title__tMwcz",cardContainers:"expertise_cardContainers__spAJ6",cardWrapper:"expertise_cardWrapper__s_l5X",card:"expertise_card__19jm3",content:"expertise_content__oXtzr",transpiledCode:"expertise_transpiledCode__dSpTz"}},7314:function(e){e.exports={"button-basic":"hero_button-basic__EbbV1",link:"hero_link__bx1E_",primary:"hero_primary___VP7N",secondary:"hero_secondary__Bu1kS",white:"hero_white__nAPz3","btn-marquee":"hero_btn-marquee__wqLvA","txt-marquee":"hero_txt-marquee__MFu6J",scrollText:"hero_scrollText__U5aek",fill:"hero_fill__nrwVx",container:"hero_container__D4gao",top:"hero_top__ObmjR",centered:"hero_centered__kwAWa",iam:"hero_iam___CrSJ",pills:"hero_pills__0NF4M",links:"hero_links__EIP2y",animation:"hero_animation__9_ZVi",left:"hero_left__FvCD_",right:"hero_right__WnRFk",scrollTextDown:"hero_scrollTextDown__sZEDr",scrollTextUp:"hero_scrollTextUp__SLpj5"}},267:function(e){e.exports={customHeightWrapper:"summary_customHeightWrapper__PYPVm",container:"summary_container__dVoHW",summary:"summary_summary__0bZcR",afterAnimation:"summary_afterAnimation__M4F9x"}},4945:function(e){e.exports={bgColor:"values_bgColor__E853p",values:"values_values__HE2LG",backgroundText:"values_backgroundText__jxFK4",bgTextCommitted:"values_bgTextCommitted__V5rP8",bgTextInnovative:"values_bgTextInnovative__g9Mik",bgTextResultsDrive:"values_bgTextResultsDrive__DnDbG",committed:"values_committed__A8zIZ",afterAnimation:"values_afterAnimation__n362q",innovative:"values_innovative__E3yFN",resultsDriven:"values_resultsDriven__gVPqf"}},1286:function(e){e.exports={work:"work_work__3M0gO",hasImage:"work_hasImage__52gbF",image:"work_image__Rh81a",description:"work_description__I7Rl2",skills:"work_skills__ULI3s",title:"work_title__IuTvD",pills:"work_pills__QPZ0_",red:"work_red__iFGCI",yellow:"work_yellow__jQ46N",green:"work_green__zWXiV",visuallyHidden:"work_visuallyHidden___HGKG"}},3335:function(e){e.exports={customHeightWrapper:"works_customHeightWrapper__J2Qoc",container:"works_container__SnQAB",carrouselContainer:"works_carrouselContainer__vk3wj",back:"works_back__cfm5s",next:"works_next__aMNVX",carrousel:"works_carrousel__wXz2A",position1:"works_position1___wyhN",position2:"works_position2__sFgQB",position3:"works_position3__LVFof",carrouselControls:"works_carrouselControls__V0OFs"}},8100:function(e){e.exports={primary:"colors_primary__AHrwy",secondary:"colors_secondary__ts8sw",tertiary:"colors_tertiary__457Vs",red:"colors_red__n_3SW",yellow:"colors_yellow__FgJvd",green:"colors_green__XcoZP","bg-secondary":"colors_bg-secondary__TnVq3",white:"colors_white__IK7V5"}}},function(e){e.O(0,[802,728,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);