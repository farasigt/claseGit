(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{PG5D:function(l,e,n){"use strict";n.r(e);var o=n("8Y7J"),t=n("mrSG"),r=n("ZZ/e"),u=n("z6cu"),i=n("IheW"),a=n("lJxs"),s=n("JIr8"),d=n("owP1"),c=n("T4a8");let g=(()=>{class l{constructor(l){this.http=l}handleError(l){return l.error instanceof ErrorEvent?console.error("An error has been occurred:",l.error.message):console.error(`Backend returned code ${l.status}, `+`body was: ${l.error}`),Object(u.a)("Something bad happened; please try again later.")}extractData(l){return l||{}}handleHijos(l){const e={headers:new i.h({"Content-Type":"application/json"})};console.log(l);let n=`${d.a+c.c.gruposHijos+"&tipo="+l.tipo+"&codigo="+l.codigo} `;return console.log(n),this.http.get(n,e).pipe(Object(a.a)(this.extractData),Object(s.a)(this.handleError))}handlegruposMaestro(l){const e={headers:new i.h({"Content-Type":"application/json"})};return this.http.get(`${d.a+c.c.gruposMaestro+"&grupo="+l.grupo} `,e).pipe(Object(a.a)(this.extractData),Object(s.a)(this.handleError))}}return l.ngInjectableDef=o["\u0275\u0275defineInjectable"]({factory:function(){return new l(o["\u0275\u0275inject"](i.c))},token:l,providedIn:"root"}),l})();var p=n("xoVG");class f{constructor(l,e,n,o,t,r,u,i,a,s){this.menu=l,this.navCtrl=e,this.loadingController=n,this.alertCtrl=o,this._gruposProvider=t,this._codeMateriaProvider=r,this.network=u,this.storage=i,this.route=a,this.router=s,this.tituloColegio="COLEGIO",this.descripcionColegio="Colegio ASMS"}ngOnInit(){this.route.queryParams.subscribe(l=>{l&&l.dataCard&&(this.data=JSON.parse(l.dataCard),console.log(this.data))}),this.handleGetStorageUser()}handleGetStorageUser(){return t.__awaiter(this,void 0,void 0,(function*(){this.storage.get("user").then(l=>{this.tipo=l.tipo_usuario,this.codigo=l.tipo_codigo,this.typeNetwork=this.network.type,this.tipo&&this.codigo?this.handleGetPhotos():console.log("error faltan campos de el local storage")})}))}handleGetPhotos(){return t.__awaiter(this,void 0,void 0,(function*(){if(this.typeNetwork=this.network.type,"none"!=this.typeNetwork){let l={tipo:this.tipo,codigo:this.codigo};yield this._gruposProvider.handleHijos(l).subscribe(l=>{this.grupos=l,console.log(this.grupos),this.nombre=this.data.nombre},l=>{console.log(l),this.status=!1,this.alertMsj("Oh, algo salio mal","Intenta otra vez.")})}else this.alertMsj("Error de conexi\xf3n","Verifica tu conexi\xf3n a internet.")}))}alertMsj(l,e){return t.__awaiter(this,void 0,void 0,(function*(){(yield this.alertCtrl.create({header:l,message:e,buttons:["Ok"]})).present()}))}}class h{}var m=n("pMnS"),C=n("oBZk"),b=n("SVse"),R=n("xgBC"),v=n("iInd"),_=o["\u0275crt"]({encapsulation:0,styles:[[".title[_ngcontent-%COMP%]{margin-left:23%}.textomenu[_ngcontent-%COMP%]{top:0;left:0;padding:0 90px 1px;width:100%;height:100%;text-align:center}.custom-avatar[_ngcontent-%COMP%]{height:30vw;width:30vw;border:1px solid #fff;border-radius:50%;display:inline-block;margin-left:auto;margin-right:auto}.nombrePerfil[_ngcontent-%COMP%]{text-align:center;color:#797d7f}.iconMat[_ngcontent-%COMP%], .itemMateria[_ngcontent-%COMP%]{color:#797d7f}"]],data:{}});function I(l){return o["\u0275vid"](0,[(l()(),o["\u0275eld"](0,0,null,null,6,"ion-item",[],null,null,null,C.kb,C.v)),o["\u0275did"](1,49152,null,0,r.IonItem,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],null,null),(l()(),o["\u0275eld"](2,0,null,0,2,"label",[],null,null,null,null,null)),(l()(),o["\u0275eld"](3,0,null,null,1,"p",[["class","itemMateria"]],null,null,null,null,null)),(l()(),o["\u0275ted"](4,null,[" ",""])),(l()(),o["\u0275eld"](5,0,null,0,1,"ion-icon",[["class","iconMat"],["name","arrow-forward"],["slot","end"]],null,null,null,C.db,C.q)),o["\u0275did"](6,49152,null,0,r.IonIcon,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],{name:[0,"name"]},null)],(function(l,e){l(e,6,0,"arrow-forward")}),(function(l,e){l(e,4,0,e.context.$implicit.grupo)}))}function w(l){return o["\u0275vid"](0,[(l()(),o["\u0275eld"](0,0,null,null,3,"ion-list",[],null,null,null,C.mb,C.z)),o["\u0275did"](1,49152,null,0,r.IonList,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],null,null),(l()(),o["\u0275and"](16777216,null,0,1,null,I)),o["\u0275did"](3,278528,null,0,b.NgForOf,[o.ViewContainerRef,o.TemplateRef,o.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],(function(l,e){l(e,3,0,e.context.$implicit.grupos)}),null)}function M(l){return o["\u0275vid"](0,[(l()(),o["\u0275eld"](0,0,null,null,11,"ion-header",[["no-border",""]],null,null,null,C.cb,C.p)),o["\u0275did"](1,49152,null,0,r.IonHeader,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],null,null),(l()(),o["\u0275eld"](2,0,null,0,9,"ion-toolbar",[["color","medium"]],null,null,null,C.zb,C.M)),o["\u0275did"](3,49152,null,0,r.IonToolbar,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],{color:[0,"color"]},null),(l()(),o["\u0275eld"](4,0,null,0,2,"ion-title",[["class","title"]],null,null,null,C.yb,C.L)),o["\u0275did"](5,49152,null,0,r.IonTitle,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],null,null),(l()(),o["\u0275ted"](-1,0,[" MIS GRUPOS "])),(l()(),o["\u0275eld"](7,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,C.R,C.e)),o["\u0275did"](8,49152,null,0,r.IonButtons,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],null,null),(l()(),o["\u0275eld"](9,0,null,0,2,"ion-back-button",[["defaultHref","home"]],null,[[null,"click"]],(function(l,e,n){var t=!0;return"click"===e&&(t=!1!==o["\u0275nov"](l,11).onClick(n)&&t),t}),C.P,C.c)),o["\u0275did"](10,49152,null,0,r.IonBackButton,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],{defaultHref:[0,"defaultHref"]},null),o["\u0275did"](11,16384,null,0,r.IonBackButtonDelegate,[[2,r.IonRouterOutlet],r.NavController],{defaultHref:[0,"defaultHref"]},null),(l()(),o["\u0275eld"](12,0,null,null,18,"ion-content",[],null,null,null,C.W,C.j)),o["\u0275did"](13,49152,null,0,r.IonContent,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],null,null),(l()(),o["\u0275eld"](14,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),o["\u0275eld"](15,0,null,0,11,"ion-grid",[["no-padding",""]],null,null,null,C.bb,C.o)),o["\u0275did"](16,49152,null,0,r.IonGrid,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],null,null),o["\u0275did"](17,16384,null,0,r.CssUtilsDeprecations,[o.ElementRef],null,null),(l()(),o["\u0275eld"](18,0,null,0,8,"ion-row",[],null,null,null,C.qb,C.D)),o["\u0275did"](19,49152,null,0,r.IonRow,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],null,null),(l()(),o["\u0275eld"](20,0,null,0,1,"ion-col",[["class","bg-general"],["size","4"]],null,null,null,C.V,C.i)),o["\u0275did"](21,49152,null,0,r.IonCol,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],{size:[0,"size"]},null),(l()(),o["\u0275eld"](22,0,null,0,2,"ion-col",[["class","bg-general"],["size","4"]],null,null,null,C.V,C.i)),o["\u0275did"](23,49152,null,0,r.IonCol,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],{size:[0,"size"]},null),(l()(),o["\u0275eld"](24,0,null,0,0,"img",[["class","custom-avatar"],["src","../../../assets/asms/perfil.png"]],null,null,null,null,null)),(l()(),o["\u0275eld"](25,0,null,0,1,"ion-col",[["class","bg-general"],["size","4"]],null,null,null,C.V,C.i)),o["\u0275did"](26,49152,null,0,r.IonCol,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],{size:[0,"size"]},null),(l()(),o["\u0275eld"](27,0,null,0,1,"p",[["class","nombrePerfil"]],null,null,null,null,null)),(l()(),o["\u0275ted"](28,null,["",""])),(l()(),o["\u0275and"](16777216,null,0,1,null,w)),o["\u0275did"](30,278528,null,0,b.NgForOf,[o.ViewContainerRef,o.TemplateRef,o.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],(function(l,e){var n=e.component;l(e,3,0,"medium"),l(e,10,0,"home"),l(e,11,0,"home"),l(e,21,0,"4"),l(e,23,0,"4"),l(e,26,0,"4"),l(e,30,0,n.grupos)}),(function(l,e){l(e,28,0,e.component.nombre)}))}function D(l){return o["\u0275vid"](0,[(l()(),o["\u0275eld"](0,0,null,null,1,"app-misgrupos",[],null,null,null,M,_)),o["\u0275did"](1,114688,null,0,f,[r.MenuController,r.NavController,r.LoadingController,r.AlertController,g,g,p.a,R.b,v.a,v.m],null,null)],(function(l,e){l(e,1,0)}),null)}var N=o["\u0275ccf"]("app-misgrupos",f,D,{},{},[]),k=n("s7LF");n.d(e,"MisgruposPageModuleNgFactory",(function(){return O}));var O=o["\u0275cmf"](h,[],(function(l){return o["\u0275mod"]([o["\u0275mpd"](512,o.ComponentFactoryResolver,o["\u0275CodegenComponentFactoryResolver"],[[8,[m.a,N]],[3,o.ComponentFactoryResolver],o.NgModuleRef]),o["\u0275mpd"](4608,b.NgLocalization,b.NgLocaleLocalization,[o.LOCALE_ID,[2,b["\u0275angular_packages_common_common_a"]]]),o["\u0275mpd"](4608,k["\u0275angular_packages_forms_forms_o"],k["\u0275angular_packages_forms_forms_o"],[]),o["\u0275mpd"](4608,r.AngularDelegate,r.AngularDelegate,[o.NgZone,o.ApplicationRef]),o["\u0275mpd"](4608,r.ModalController,r.ModalController,[r.AngularDelegate,o.ComponentFactoryResolver,o.Injector]),o["\u0275mpd"](4608,r.PopoverController,r.PopoverController,[r.AngularDelegate,o.ComponentFactoryResolver,o.Injector]),o["\u0275mpd"](1073742336,b.CommonModule,b.CommonModule,[]),o["\u0275mpd"](1073742336,k["\u0275angular_packages_forms_forms_d"],k["\u0275angular_packages_forms_forms_d"],[]),o["\u0275mpd"](1073742336,k.FormsModule,k.FormsModule,[]),o["\u0275mpd"](1073742336,r.IonicModule,r.IonicModule,[]),o["\u0275mpd"](1073742336,v.o,v.o,[[2,v.t],[2,v.m]]),o["\u0275mpd"](1073742336,h,h,[]),o["\u0275mpd"](1024,v.k,(function(){return[[{path:"",component:f}]]}),[])])}))}}]);