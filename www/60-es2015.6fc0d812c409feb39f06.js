(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{F9fw:function(l,n,e){"use strict";e.r(n);var t=e("8Y7J"),o=e("mrSG"),u=e("ZZ/e"),i=e("Mvfr"),r=e("xoVG");class a{constructor(l,n,e,t,o,u,i,r,a,s){this.menu=l,this.navCtrl=n,this.loadingController=e,this.alertCtrl=t,this._alumnoPediente=o,this._tareaProvider=u,this.network=i,this.storage=r,this.route=a,this.router=s,this.info={},this.tituloColegio="COLEGIO",this.descripcionColegio="Colegio ASMS"}ngOnInit(){this.route.queryParams.subscribe(l=>{l&&l.dataCard&&(this.cui=JSON.parse(l.dataCard),console.log(this.cui))}),this.handleGetPhotos()}handleGetPhotos(){return o.__awaiter(this,void 0,void 0,(function*(){if(this.typeNetwork=this.network.type,"none"!=this.typeNetwork){let l={alumno:this.cui};yield this._alumnoPediente.handleAlumnoPen(l).subscribe(l=>{this.pendientes=l,console.log(this.pendientes),this.titulo=this.pendientes.titulo,this.materia=this.pendientes.materia},l=>{console.log(l),this.status=!1,this.alertMsj("Oh, algo salio mal","Intenta otra vez.")})}else this.alertMsj("Error de conexi\xf3n","Verifica tu conexi\xf3n a internet.")}))}alertMsj(l,n){return o.__awaiter(this,void 0,void 0,(function*(){(yield this.alertCtrl.create({header:l,message:n,buttons:["Ok"]})).present()}))}openTareap(l){let n={queryParams:{dataCard:JSON.stringify({cui:this.cui,tarea_codigo:l})}};this.router.navigate(["tareaspendientes1"],n)}}class s{}var d=e("pMnS"),c=e("oBZk"),g=e("SVse"),m=e("xgBC"),p=e("iInd"),f=t["\u0275crt"]({encapsulation:0,styles:[[".textomenu[_ngcontent-%COMP%]{top:0;left:0;padding:0 90px 1px;width:100%;height:100%;text-align:center}.custom-avatar[_ngcontent-%COMP%]{height:30vw;width:30vw;border:1px solid #fff;border-radius:50%;display:inline-block;margin-left:auto;margin-right:auto}.titleTarea[_ngcontent-%COMP%]{margin-left:20px;font-size:16px;color:#797d7f}.pAsignacion[_ngcontent-%COMP%]{margin-left:20px;font-size:14px;color:#797d7f;margin-top:5px}.nombrePerfil[_ngcontent-%COMP%]{color:#797d7f;font-size:16px}.bajoLabel[_ngcontent-%COMP%]{font-size:16px;color:#082232;margin:10px 0 0 20px}.title[_ngcontent-%COMP%]{margin-left:10%}"]],data:{}});function h(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,6,"ion-item",[["ion-item",""]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.openTareap(l.context.$implicit.codigo)&&t),t}),c.kb,c.v)),t["\u0275did"](1,49152,null,0,u.IonItem,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](2,0,null,0,4,"label",[],null,null,null,null,null)),(l()(),t["\u0275eld"](3,0,null,null,1,"p",[["class","bajoLabel"]],null,null,null,null,null)),(l()(),t["\u0275ted"](4,null,[" ",""])),(l()(),t["\u0275eld"](5,0,null,null,1,"p",[["class","pAsignacion"]],null,null,null,null,null)),(l()(),t["\u0275ted"](6,null,[" "," "]))],null,(function(l,n){l(n,4,0,n.context.$implicit.titulo),l(n,6,0,n.context.$implicit.materia)}))}function C(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,11,"ion-header",[["no-border",""]],null,null,null,c.cb,c.p)),t["\u0275did"](1,49152,null,0,u.IonHeader,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](2,0,null,0,9,"ion-toolbar",[["color","medium"],["no-border-bottom",""]],null,null,null,c.zb,c.M)),t["\u0275did"](3,49152,null,0,u.IonToolbar,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"]},null),(l()(),t["\u0275eld"](4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,c.R,c.e)),t["\u0275did"](5,49152,null,0,u.IonButtons,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](6,0,null,0,2,"ion-back-button",[],null,[[null,"click"]],(function(l,n,e){var o=!0;return"click"===n&&(o=!1!==t["\u0275nov"](l,8).onClick(e)&&o),o}),c.P,c.c)),t["\u0275did"](7,49152,null,0,u.IonBackButton,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),t["\u0275did"](8,16384,null,0,u.IonBackButtonDelegate,[[2,u.IonRouterOutlet],u.NavController],null,null),(l()(),t["\u0275eld"](9,0,null,0,2,"ion-title",[["class","title"]],null,null,null,c.yb,c.L)),t["\u0275did"](10,49152,null,0,u.IonTitle,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275ted"](-1,0,[" TAREAS PENDIENTES "])),(l()(),t["\u0275eld"](12,0,null,null,18,"ion-content",[],null,null,null,c.W,c.j)),t["\u0275did"](13,49152,null,0,u.IonContent,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](14,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t["\u0275eld"](15,0,null,0,11,"ion-grid",[["no-padding",""]],null,null,null,c.bb,c.o)),t["\u0275did"](16,49152,null,0,u.IonGrid,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),t["\u0275did"](17,16384,null,0,u.CssUtilsDeprecations,[t.ElementRef],null,null),(l()(),t["\u0275eld"](18,0,null,0,8,"ion-row",[],null,null,null,c.qb,c.D)),t["\u0275did"](19,49152,null,0,u.IonRow,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](20,0,null,0,1,"ion-col",[["class","bg-general"],["size","4"]],null,null,null,c.V,c.i)),t["\u0275did"](21,49152,null,0,u.IonCol,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{size:[0,"size"]},null),(l()(),t["\u0275eld"](22,0,null,0,2,"ion-col",[["class","bg-general"],["size","4"]],null,null,null,c.V,c.i)),t["\u0275did"](23,49152,null,0,u.IonCol,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{size:[0,"size"]},null),(l()(),t["\u0275eld"](24,0,null,0,0,"img",[["class","custom-avatar"],["src","../../../assets/asms/perfil.png"]],null,null,null,null,null)),(l()(),t["\u0275eld"](25,0,null,0,1,"ion-col",[["class","bg-general"],["size","4"]],null,null,null,c.V,c.i)),t["\u0275did"](26,49152,null,0,u.IonCol,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{size:[0,"size"]},null),(l()(),t["\u0275eld"](27,0,null,0,3,"ion-list",[],null,null,null,c.mb,c.z)),t["\u0275did"](28,49152,null,0,u.IonList,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275and"](16777216,null,0,1,null,h)),t["\u0275did"](30,278528,null,0,g.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var e=n.component;l(n,3,0,"medium"),l(n,21,0,"4"),l(n,23,0,"4"),l(n,26,0,"4"),l(n,30,0,e.pendientes)}),null)}function R(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"app-tareaspendientes",[],null,null,null,C,f)),t["\u0275did"](1,114688,null,0,a,[u.MenuController,u.NavController,u.LoadingController,u.AlertController,i.a,i.a,r.a,m.b,p.a,p.m],null,null)],(function(l,n){l(n,1,0)}),null)}var b=t["\u0275ccf"]("app-tareaspendientes",a,R,{},{},[]),_=e("s7LF");e.d(n,"TareaspendientesPageModuleNgFactory",(function(){return v}));var v=t["\u0275cmf"](s,[],(function(l){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[d.a,b]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,g.NgLocalization,g.NgLocaleLocalization,[t.LOCALE_ID,[2,g["\u0275angular_packages_common_common_a"]]]),t["\u0275mpd"](4608,_["\u0275angular_packages_forms_forms_o"],_["\u0275angular_packages_forms_forms_o"],[]),t["\u0275mpd"](4608,u.AngularDelegate,u.AngularDelegate,[t.NgZone,t.ApplicationRef]),t["\u0275mpd"](4608,u.ModalController,u.ModalController,[u.AngularDelegate,t.ComponentFactoryResolver,t.Injector]),t["\u0275mpd"](4608,u.PopoverController,u.PopoverController,[u.AngularDelegate,t.ComponentFactoryResolver,t.Injector]),t["\u0275mpd"](1073742336,g.CommonModule,g.CommonModule,[]),t["\u0275mpd"](1073742336,_["\u0275angular_packages_forms_forms_d"],_["\u0275angular_packages_forms_forms_d"],[]),t["\u0275mpd"](1073742336,_.FormsModule,_.FormsModule,[]),t["\u0275mpd"](1073742336,u.IonicModule,u.IonicModule,[]),t["\u0275mpd"](1073742336,p.o,p.o,[[2,p.t],[2,p.m]]),t["\u0275mpd"](1073742336,s,s,[]),t["\u0275mpd"](1024,p.k,(function(){return[[{path:"",component:a}]]}),[])])}))}}]);