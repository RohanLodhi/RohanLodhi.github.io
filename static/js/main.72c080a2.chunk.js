(this.webpackJsonpdevx=this.webpackJsonpdevx||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),r=a(2),s=a.n(r),c=(a(12),a(3)),i=a(4),l=a(6),p=a(5),h=(a(13),a(14),function(e){return n.a.createElement("div",{className:"card-container"},n.a.createElement("div",{className:"image"},n.a.createElement("img",{alt:"project",src:e.project.url})),n.a.createElement("h1",{key:e.project.id}," ",e.project.name," "),n.a.createElement("p",null,e.project.language),n.a.createElement("p",null,n.a.createElement("a",{href:e.project.site},"Check it out!")))}),m=function(e){return n.a.createElement("div",{className:"card-list"},e.projects.reverse().map((function(e){return n.a.createElement(h,{key:"project.id",project:e})})))},u=(a(15),a(16),function(e){var t=e.placeholder,a=e.handleChange;return n.a.createElement("input",{className:"search",type:"search",placeholder:t,onChange:a})}),d=function(e){Object(l.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).handleChange=function(t){e.setState({searchField:t.target.value})},e.state={projects:[{name:"Corona Test",id:"pr1",language:"Tells you your chances of being infected from covid19.",site:"/amiinfected",url:"https://images.pexels.com/photos/4031867/pexels-photo-4031867.jpeg?cs=srgb&dl=concept-of-covid-19-in-red-background-4031867.jpg&fm=jpg"},{name:"Simple Weather",id:"pr2",language:"Displays weather in a minimallistic manner.",site:"/weather",url:"https://images.pexels.com/photos/125510/pexels-photo-125510.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"},{name:"Router Library",id:"pr3",language:"Router library that handles SPA routing in vanilla JS.",site:"/routerjs",url:"https://moduscreate.com/wp-content/uploads/2018/04/extjs-react-how-to-configure-routes-00.jpg"},{name:"Flappy Bird",id:"pr4",language:"flappy bird pygame.",site:"https://github.com/RohanLodhi/flappy",url:"https://www.gannett-cdn.com/-mm-/26950e92aa73a383259467887fe6ca0c4ab636b2/c=0-758-1536-1623/local/-/media/Indianapolis/Indianapolis/2014/02/08//1391895756000-photo.PNG?width=660&height=372&fit=crop&format=pjpg&auto=webp"},{name:"ToDo pwa",id:"pr5",language:"Simple and easy to use todo app.",site:"/todo",url:"http://icon-library.com/images/todo-list-icon/todo-list-icon-20.jpg"},{name:"Portfolio",id:"pr6",language:"Clean and nice portfolio website.",site:"/portfolio",url:"https://images.pexels.com/photos/2442888/pexels-photo-2442888.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"},{name:"Hangman",id:"pr7",language:"Hangman game in py and c++.",site:"https://github.com/RohanLodhi/hangman-school",url:"https://media.istockphoto.com/photos/hangman-sketched-on-blackboard-picture-id466313780?k=6&m=466313780&s=612x612&w=0&h=Wpx_vgPCyt3oEJ5CIAhHxVfWlqdRfXrAfsHX4MbPfe8="},{name:"Sudoku solver",id:"pr8",language:"Sudoku solver that uses back tracking algorithm to solve.",site:"https://devx.tk/sudoku",url:"https://images.pexels.com/photos/207580/pexels-photo-207580.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"},{name:"Reactango",id:"pr9",language:"Coding challenges website for a discord server.",site:"https://reactango.tk",url:"https://images.pexels.com/photos/260024/pexels-photo-260024.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"}],searchField:""},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state,t=e.projects,a=e.searchField,o=t.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())}));return n.a.createElement("div",{className:"App"},n.a.createElement("h1",{className:"title"},"MY PROJECTS"),n.a.createElement(u,{placeholder:"search projects",handleChange:this.handleChange}),n.a.createElement(m,{projects:o}))}}]),a}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.72c080a2.chunk.js.map