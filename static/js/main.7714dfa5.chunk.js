(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{31:function(e,t,a){e.exports=a(58)},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(29),s=a.n(l),i=(a(36),a(37),a(11)),o=a(1),u=(a(38),function(){return r.a.createElement("div",{className:"logo"},r.a.createElement("h1",null,"Transport.ma"),r.a.createElement("p",null,"Tout le transport .. Un seul site"))}),c=function(){return r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(i.b,{to:"/Transport.me/Voyage"},"Voyages")),r.a.createElement("li",null,r.a.createElement(i.b,{to:"/Transport.me/Colis"},"Colis")),r.a.createElement("li",null,r.a.createElement(i.b,{to:"/Transport.me/Tourisme"},"Tourisme")),r.a.createElement("li",null,r.a.createElement(i.b,{to:"/Transport.me/Contact"},"Contact"))))},m=function(){return r.a.createElement("div",{className:"header container-fluid"},r.a.createElement(u,null),r.a.createElement(c,null))},d=a(6),p=a(7),v=a(9),E=a(8),f=(a(43),a(44),a(10)),h=(a(45),a(13)),b=a.n(h);a(46),a(48);b.a.initializeApp({apiKey:"AIzaSyDs_ZHLRp5XKDQtWE3V2OzSYgH6OKZ7heg",authDomain:"transport-ma-9ae4d.firebaseapp.com",databaseURL:"https://transport-ma-9ae4d.firebaseio.com",projectId:"transport-ma-9ae4d",storageBucket:"transport-ma-9ae4d.appspot.com",messagingSenderId:"1096006464302",appId:"1:1096006464302:web:a6d9a27cb835edc15b80bf",measurementId:"G-PHMMPDRPFJ"}),b.a.analytics();var y=b.a,g=(b.a.auth(),b.a.firestore(),function(e){Object(v.a)(a,e);var t=Object(E.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={depart:"",arrive:"",options:[]},e.updateTrajet=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(f.a)({},n,r))},e.handleSubmit=function(t){if(e.verifierTrajet()){t.preventDefault();var a={depart:e.state.depart,arrive:e.state.arrive};e.props.sendTrajet(a,!0)}else t.preventDefault(),alert("SVP : Donner un trajet valide")},e.verifierTrajet=function(){return!(""===e.state.depart||""===e.state.arrive||e.state.depart===e.state.arrive)},e}return Object(p.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=y.database().ref("Trajectoires"),a=[];t.on("value",(function(t){for(var n in Object.values(t.val()))a[n]={id:n,ville:Object.values(t.val())[n]};e.setState({options:a})}))}},{key:"render",value:function(){var e=this,t=this.state.options.map((function(e){return r.a.createElement("option",{key:e.id,value:e.ville},e.ville)}));return r.a.createElement("div",{className:"choix"},r.a.createElement("form",{name:"choixForm",onSubmit:function(t){return e.handleSubmit(t)}},r.a.createElement("fieldset",null,r.a.createElement("legend",null,"Choisir un trajet :"),r.a.createElement("span",null,"D\xe9part"),r.a.createElement("select",{name:"depart",value:this.state.depart,onChange:function(t){return e.updateTrajet(t)}},r.a.createElement("option",{value:""},"------------"),t),r.a.createElement("span",null,"Arriv\xe9"),r.a.createElement("select",{name:"arrive",value:this.state.arrive,onChange:function(t){return e.updateTrajet(t)}},r.a.createElement("option",{value:""},"------------"),t),r.a.createElement("button",null,"Envoyer"))))}}]),a}(r.a.Component)),j=(a(51),function(e){Object(v.a)(a,e);var t=Object(E.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={traj:e.props.trajet.depart.substr(0,3)+e.props.trajet.arrive.substr(0,3),details:[]},e}return Object(p.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=y.database().ref("Details"),a=[];t.on("value",(function(t){var n=0;for(var r in Object.values(t.val()))Object.values(t.val())[r].traj===e.state.traj&&(a[r]={id:++n,infos:Object.values(t.val())[r]});e.setState({details:a})}))}},{key:"render",value:function(){var e=this.state.details.map((function(e){return r.a.createElement("tr",{className:e.id%2?"odd":"even",key:e.id},r.a.createElement("td",null,e.infos.Num),r.a.createElement("td",null,e.infos.depart),r.a.createElement("td",null,e.infos.arrive),r.a.createElement("td",null,e.infos.date),r.a.createElement("td",null,e.infos.heure),r.a.createElement("td",null,e.infos.prix))}));return r.a.createElement("div",{className:"tabvoyage"},r.a.createElement("h1",null,"Voyages Disponibles:"),r.a.createElement("table",{border:"1",cellSpacing:"0"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Num\xe9ro du Voyage"),r.a.createElement("th",null,"D\xe9part"),r.a.createElement("th",null,"Arriv\xe9"),r.a.createElement("th",null,"Date"),r.a.createElement("th",null,"Heure"),r.a.createElement("th",null,"Prix"))),r.a.createElement("tbody",null,e)))}}]),a}(r.a.Component)),N=(a(52),function(e){Object(v.a)(a,e);var t=Object(E.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={numTrip:"",nom:"",prenom:"",tel:"",cin:"",Erreures:{NumTrip:!1,nom:!1,prenom:!1,tel:!1,cin:!1},traj:e.props.trajet.depart.substr(0,3)+e.props.trajet.arrive.substr(0,3),Numbers:[]},e.updateData=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(f.a)({},n,r))},e}return Object(p.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=y.database().ref("Details"),a=[];t.on("value",(function(t){for(var n in Object.values(t.val()))Object.values(t.val())[n].traj===e.state.traj&&(a[n]=Object.values(t.val())[n].Num);e.setState({Numbers:a})}))}},{key:"validNumber",value:function(e){for(var t in this.state.Numbers)if(e===this.state.Numbers[t])return!0;return!1}},{key:"verifierInfos",value:function(){return""!==this.state.numTrip&&this.validNumber(parseInt(this.state.numTrip))?""!==this.state.nom&&isNaN(this.state.nom)?""!==this.state.prenom&&isNaN(this.state.prenom)?""!==this.state.cin&&isNaN(this.state.cin)?!(""===this.state.tel||isNaN(this.state.tel)||this.state.tel.length<10||this.state.tel.length>10)||(this.setState({Erreures:{tel:!0}}),!1):(this.setState({Erreures:{cin:!0}}),!1):(this.setState({Erreures:{prenom:!0}}),!1):(this.setState({Erreures:{nom:!0}}),!1):(this.setState({Erreures:{numTrip:!0}}),!1)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"demande container-fluid"},r.a.createElement("form",{name:"demandeForm container-fluid"},r.a.createElement("fieldset",null,r.a.createElement("legend",null,"Le num\xe9ro du voyage"),r.a.createElement("input",{type:"number",name:"numTrip",value:this.state.numTrip,onChange:function(t){return e.updateData(t)}}),this.state.Erreures.numTrip&&r.a.createElement("span",{className:"ErrValid"},"Veillez donner un num\xe9ro de voyage correct")),r.a.createElement("fieldset",{className:"infos"},r.a.createElement("legend",null,"Donner vos informations:"),r.a.createElement("table",{className:"infoperso"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Nom:"),r.a.createElement("td",null,r.a.createElement("input",{type:"text",value:this.state.nom,name:"nom",onChange:function(t){e.updateData(t)}}),this.state.Erreures.nom&&r.a.createElement("span",{className:"ErrValid"},"Veillez donner votre nom")),r.a.createElement("td",null,"CIN:"),r.a.createElement("td",null,r.a.createElement("input",{type:"text",value:this.state.cin,name:"cin",onChange:function(t){e.updateData(t)}}),this.state.Erreures.cin&&r.a.createElement("span",{className:"ErrValid"},"Veillez donner votre code cin"))),r.a.createElement("tr",null,r.a.createElement("td",null,"Pr\xe9nom:"),r.a.createElement("td",null,r.a.createElement("input",{type:"text",value:this.state.prenom,name:"prenom",onChange:function(t){e.updateData(t)}}),this.state.Erreures.prenom&&r.a.createElement("span",{className:"ErrValid"},"Veillez donner votre pr\xe9nom")),r.a.createElement("td",null,"Tel:"),r.a.createElement("td",null,r.a.createElement("input",{type:"number",value:this.state.tel,name:"tel",onChange:function(t){e.updateData(t)}}),this.state.Erreures.tel&&r.a.createElement("span",{className:"ErrValid"},"Veillez donner un num\xe9ro de t\xe9l\xe9phone valide"))))))),r.a.createElement("button",{className:"btn",onClick:function(t){e.verifierInfos()?e.props.sendInfos(e.state,!0):alert("Corriger les infos")}},"Demander"))}}]),a}(r.a.Component)),D=(a(53),function(e){Object(v.a)(a,e);var t=Object(E.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={details:{}},e}return Object(p.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=y.database().ref("Details"),a={};t.on("value",(function(t){for(var n in Object.values(t.val()))Object.values(t.val())[n].Num===parseInt(e.props.demande.numTrip)&&(a=Object.values(t.val())[n]);e.setState({details:a}),console.log(e.state.details)}));var n="Demande"+(new Date).toLocaleDateString(),r=n.split("/");n=r.join("-");var l=y.database().ref(n),s={client:{nom:this.props.demande.nom,prenom:this.props.demande.prenom,cin:this.props.demande.cin,tel:this.props.demande.tel},voyage:a};l.push(s)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"synthese "},r.a.createElement("h1",null,"Voici votre biellet:"),r.a.createElement("table",{border:"1",cellSpacing:"0"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",{className:"title"},"Nom:"),r.a.createElement("td",{id:"synNom"},this.props.demande.nom),r.a.createElement("td",{className:"title"},"T\xe9lephone:"),r.a.createElement("td",{id:"synTel"},this.props.demande.tel)),r.a.createElement("tr",null,r.a.createElement("td",{className:"title"},"Pr\xe9nom:"),r.a.createElement("td",{id:"synPrenom"},this.props.demande.prenom),r.a.createElement("td",{className:"title"},"Num\xe9ro De voyage:"),r.a.createElement("td",{id:"synNumVoy"},this.props.demande.numTrip)),r.a.createElement("tr",null,r.a.createElement("td",{className:"title"},"CIN:"),r.a.createElement("td",{id:"synCin"},this.props.demande.cin),r.a.createElement("td",{className:"title"},"Date"),r.a.createElement("td",{id:"synDate"},this.state.details.date)),r.a.createElement("tr",null,r.a.createElement("td",{className:"title"},"Prix:"),r.a.createElement("td",{id:"synPrix"},this.state.details.prix),r.a.createElement("td",{className:"title"},"Heure:"),r.a.createElement("td",null,this.state.details.heure)),r.a.createElement("tr",null,r.a.createElement("td",{className:"title"},"D\xe9part:"),r.a.createElement("td",null,this.state.details.depart),r.a.createElement("td",{className:"title"},"Arriv\xe9"),r.a.createElement("td",null,this.state.details.arrive)))),r.a.createElement("button",{className:"btn",onClick:function(t){e.props.reload(!1)}},"Autre r\xe9servation"))}}]),a}(r.a.Component)),C=function(e){Object(v.a)(a,e);var t=Object(E.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={trajet:{depart:"",arrive:""},shouldReaload:!1,demande:{},tripNumbers:[]},e.Keygen=0,e.getTrajet=function(t,a){e.setState({trajet:t})},e.getInfos=function(t,a){e.setState({demande:t,shouldReaload:a})},e.reload=function(t){e.setState({shouldReaload:t})},e}return Object(p.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"voyage"},r.a.createElement("div",{className:"part1"},!this.state.shouldReaload&&r.a.createElement(g,{key:this.Keygen++,sendTrajet:this.getTrajet}),!this.state.shouldReaload&&""!==this.state.trajet.depart&&""!==this.state.trajet.arrive&&r.a.createElement(j,{key:this.Keygen++,trajet:this.state.trajet,reload:this.state.shouldReaload})),!this.state.shouldReaload&&""!==this.state.trajet.depart&&""!==this.state.trajet.arrive&&r.a.createElement("div",{className:"part2"},r.a.createElement(N,{key:this.Keygen++,trajet:this.state.trajet,sendInfos:this.getInfos})),this.state.shouldReaload&&r.a.createElement(D,{demande:this.state.demande,reload:this.reload}))}}]),a}(r.a.Component),O=a(22),k=a(21),T=(a(54),function(e,t){var a=t.name,n=t.value;return Object(k.a)(Object(k.a)({},e),{},Object(f.a)({},a,n))}),x=function(e){var t=e.elmts,a=Object(n.useState)([]),l=Object(O.a)(a,2),s=l[0],i=l[1],o=Object(n.useReducer)(T,{}),u=Object(O.a)(o,2),c=u[0],m=u[1];Object(n.useEffect)((function(){i(Object.values(t))}),[]),Object(n.useEffect)((function(){return console.log(c)}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{key:s,onSubmit:function(e){e.preventDefault(),console.log("submitted")}},r.a.createElement("fieldset",null,s.map((function(e,t){return t?"Fragile:"===e.label?r.a.createElement(r.a.Fragment,null,r.a.createElement("label",{key:e.label}," ",e.label," "),r.a.createElement("input",{type:e.input1.type,value:e.input1.value,name:e.input1.name,key:e.input1.value,onChange:function(e){return m({name:e.target.name,value:e.target.value})}})," ",e.input1.value,r.a.createElement("input",{type:e.input2.type,value:e.input2.value,name:e.input2.name,key:e.input2.value,onChange:function(e){return m({name:e.target.name,value:e.target.value})}})," ",e.input2.value):"Addresse:"===e.label?r.a.createElement(r.a.Fragment,null,r.a.createElement("label",{key:e.label},e.label),r.a.createElement("textarea",{cols:e.textarea.cols,rows:e.textarea.rows,name:e.textarea.name,onChange:function(e){return m({name:e.target.name,value:e.target.value})},key:e.textarea.name})):r.a.createElement(r.a.Fragment,null,r.a.createElement("label",{key:e.label},e.label),r.a.createElement("input",{type:e.input.type,name:e.input.name,key:e.input.name,onChange:function(e){return m({name:e.target.name,value:e.target.value})}})):r.a.createElement("legend",{key:2*t}," ",e," ")}))),r.a.createElement("button",{onClick:function(){console.log("testFalse")}},"Next")))},S=[{legend:"Veillez donner les informations de votre colis :",Reference:{label:"R\xe9f\xe9rence:",input:{type:"text",name:"nomColis"}},Poids:{label:"Poids(kg):",input:{type:"number",name:"poids"}},Type:{label:"Type:",input:{type:"text",name:"type"}},Fragile:{label:"Fragile:",input1:{type:"radio",name:"Fragile",value:"oui"},input2:{type:"radio",name:"Fragile",value:"non"}},DateEnvoie:{label:"Date d'envoie:",input:{type:"date",name:"dateEnvoie"}}},{legend:"Veillez donner vos informations:",Nom:{label:"Nom:",input:{type:"text",name:"nomPersoColis"}},Prenom:{label:"Pr\xe9nom:",input:{type:"text",name:"prenomPersoColis"}},CIN:{label:"CIN:",input:{type:"text",name:"cinPersoColis"}},Tel:{label:"Tel:",input:{type:"text",name:"telPersoColis"}},Addresse:{label:"Addresse:",textarea:{name:"addresseDepart",cols:"40",rows:"3"}}},{legend:"Veillez donner les informations de votre destinatire:",Nom:{label:"Nom:",input:{type:"text",name:"nomDestColis"}},Prenom:{label:"Pr\xe9nom:",input:{type:"text",name:"prenomDestColis"}},CIN:{label:"CIN:",input:{type:"text",name:"cinDestColis"}},Tel:{label:"Tel:",input:{type:"text",name:"telDestColis"}},Addresse:{label:"Addresse:",textarea:{name:"addresseArrive",cols:"40",rows:"3"}}}],A=function(){var e=0;return r.a.createElement("div",{className:"Colis"},r.a.createElement(x,{key:e++,elmts:S[0]}),r.a.createElement(x,{key:e++,elmts:S[1]}),r.a.createElement(x,{key:e++,elmts:S[2]}))},P=function(e){var t=e.infos,a=t.city,n=t.image,l=t.title,s=t.description,i=t.hotel,o=t.food,u=t.car,c=t.duration;return r.a.createElement("div",{className:"DestOut"},r.a.createElement("img",{src:n}),r.a.createElement("h1",null,a),r.a.createElement("h5",null,l),r.a.createElement("p",null,s),r.a.createElement("ul",{className:"prices"},r.a.createElement("li",null,"H\xf4tel: ",i),r.a.createElement("li",null,"Repas: ",o),r.a.createElement("li",null,"Voiture (optionel): ",u)),r.a.createElement("span",{className:"duration"},"Duration: ",c))},w=(a(55),[{city:"Marrakech",image:"https://i.le360.ma/fr/sites/default/files/styles/asset_image_in_body/public/assets/images/2019/09/marrakech.jpg",title:"Prendre un voyage vers la ville rouge",description:"Souks color\xe9s, architecture maure, jardins intimes et h\xf4tels boutiques\u2026 Marrakech est une ville inoubliable. Passez vos journ\xe9es \xe0 explorer les cours int\xe9rieures paisibles, les ruelles tortueuses de la M\xe9dina historique, promenez-vous dans le Jardin Majorelle ou admirez la beaut\xe9 de la mosqu\xe9e avant de passer la soir\xe9e dans un riad sublime.",hotel:"700DH",food:"400DH",car:"500DH",duration:"5 days"},{city:"Agadir",image:"https://i.le360.ma/fr/sites/default/files/styles/asset_image_in_body/public/assets/images/2020/07/marina-d-agadir.jpg",title:"Visitez la Gazelle du Souss",description:"Avec ses boulevards bord\xe9s de palmiers et ses bars sur le front de mer, Agadir, 1\xe8re station baln\xe9aire du Maroc, poss\xe8de une atmosph\xe8re d\xe9cid\xe9ment tr\xe8s occidentale. Son climat exceptionnel, plus de 300 jours de soleil par an, et sa longue plage de 10 km, plus abrit\xe9e que de nombreuses plages de la c\xf4te atlantique, vous assureront des vacances au bord de la mer exceptionnelles.",hotel:"800DH",food:"300DH",car:"400DH",duration:"7 days"},{city:"Tanger",image:"https://www.h24info.ma/wp-content/uploads/2019/02/tanger.png",title:"Tanger, une ville maritime tr\xe8s belle",description:"Situ\xe9 sur le d\xe9troit de Gibraltar qui s\xe9pare l\u2019Afrique de l\u2019Europe, Tanger a longtemps \xe9t\xe9 une importante place strat\xe9gique. Au fil des si\xe8cles, elle passa successivement sous domination romaine, vandale, byzantine, arabe et portugaise, au gr\xe9 des invasions. Avec ses deux mille cinq cents ans d\u2019existence, c\u2019est l\u2019une des plus anciennes villes d\u2019Afrique du Nord. Sa m\xe9dina, sa kasbah, ses bazars et ses souks comptent parmi les plus anim\xe9s du pays, et ses plages sont superbes. Au si\xe8cle dernier, Tanger est devenu l\u2019un des lieux de pr\xe9dilection de la jet set internationale.",hotel:"800DH",food:"600DH",car:"400DH",duration:"10 days"},{city:"Fes",image:"https://img-4.linternaute.com/s5tz5DEpq-nAqqk54okS4ePhClU=/660x366/smart/e0b057f33de6453f981a7215ffbea132/ccmcms-linternaute/14804748.jpg",title:"Revenir vers la belle histoire du Maroc",description:"D\xe9trompez-vous : la plus vieille universit\xe9 du monde n'est pas Oxford ni la Sorbonne, c'est l'Universit\xe9 d'Al-Karaouine \xe0 F\xe8s el Bali. Cette ville fortifi\xe9e, inscrite au Patrimoine mondial de l\u2019UNESCO, vous ram\xe8nera au Moyen-\xc2ge. Pour d\xe9couvrir la culture de cette superbe ville, ou plut\xf4t des deux villes, tentez le diable en prenant un taxi ou allez d'un site \xe0 l'autre \xe0 pied, des vieux quartiers de la M\xe9dina truff\xe9s de labyrinthes \xe0 F\xe8s el Bali et les quatre Portes majestueuses de F\xe8s, avec leurs mosa\xefques typiquement marocaines.",hotel:"500DH",food:"200DH",car:"400DH",duration:"6 days"}]),V=function(){return r.a.createElement("div",{className:"DestContainer"},w.map((function(e){return r.a.createElement(P,{infos:e})})))},z=(a(56),function(){return r.a.createElement("div",{className:"Contact"},r.a.createElement("form",{onSubmit:function(e){return e.preventDefault(),void alert("Submitted")}},r.a.createElement("fieldset",null,r.a.createElement("legend",null,"Nous contacter"),r.a.createElement("label",null,"Nom :"),r.a.createElement("input",{type:"text"}),r.a.createElement("label",null,"Email :"),r.a.createElement("input",{type:"email"}),r.a.createElement("label",null,"Sujet :"),r.a.createElement("input",{type:"text"}),r.a.createElement("label",null,"Message :"),r.a.createElement("textarea",{cols:"70",rows:"10"})),r.a.createElement("button",{className:"btn"},"Envoyer")))});a(57);var I=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Page doesn't exist"))},H=function(){return r.a.createElement(i.a,null,r.a.createElement("div",{className:"app"},r.a.createElement(m,null),r.a.createElement(o.c,null,r.a.createElement(o.a,{path:"/Transport.me/Voyage",component:C}),r.a.createElement(o.a,{path:"/Transport.me/Colis",component:A}),r.a.createElement(o.a,{path:"/Transport.me/Tourisme",component:V}),r.a.createElement(o.a,{path:"/Transport.me/Contact",component:z}),r.a.createElement(o.a,{component:I}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(H,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[31,1,2]]]);
//# sourceMappingURL=main.7714dfa5.chunk.js.map