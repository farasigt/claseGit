(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{Z0me:function(l,n,e){"use strict";e.r(n);var o=e("CcnG"),t=e("mrSG"),u=e("ZZ/e"),a=e("Mvfr"),i=e("xoVG"),r=function(){function l(l,n,e,o,t,u,a,i,r,c){this.menu=l,this.navCtrl=n,this.loadingController=e,this.alertCtrl=o,this._alumnoPediente=t,this._tareaProvider=u,this.network=a,this.storage=i,this.route=r,this.router=c,this.info={},this.tituloColegio="COLEGIO",this.descripcionColegio="Colegio ASMS"}return l.prototype.ngOnInit=function(){var l=this;this.route.queryParams.subscribe((function(n){n&&n.dataCard&&(l.cui=JSON.parse(n.dataCard),console.log(l.cui))})),this.handleGetPhotos()},l.prototype.handleGetPhotos=function(){return t.__awaiter(this,void 0,void 0,(function(){var l=this;return t.__generator(this,(function(n){switch(n.label){case 0:return this.typeNetwork=this.network.type,"none"==this.typeNetwork?[3,2]:[4,this._alumnoPediente.handleAlumnoCal({alumno:this.cui}).subscribe((function(n){l.calificadas=n,console.log(l.calificadas),l.titulo=l.calificadas.titulo,l.materia=l.calificadas.materia}),(function(n){console.log(n),l.status=!1,l.alertMsj("Oh, algo salio mal","Intenta otra vez.")}))];case 1:return n.sent(),[3,3];case 2:this.alertMsj("Error de conexi\xf3n","Verifica tu conexi\xf3n a internet."),n.label=3;case 3:return[2]}}))}))},l.prototype.alertMsj=function(l,n){return t.__awaiter(this,void 0,void 0,(function(){return t.__generator(this,(function(e){switch(e.label){case 0:return[4,this.alertCtrl.create({header:l,message:n,buttons:["Ok"]})];case 1:return e.sent().present(),[2]}}))}))},l.prototype.openTareaC=function(l){var n={queryParams:{dataCard:JSON.stringify({cui:this.cui,tarea_codigo:l})}};this.router.navigate(["tareascalificadas1"],n)},l}(),c=function(){return function(){}}(),s=e("pMnS"),d=e("oBZk"),g=e("Ip0R"),f=e("iw74"),m=e("ZYCi"),p=o["\u0275crt"]({encapsulation:0,styles:[[".title[_ngcontent-%COMP%]{margin-left:13%}.textomenu[_ngcontent-%COMP%]{top:0;left:0;padding:0 90px 1px;width:100%;height:100%;text-align:center}.custom-avatar[_ngcontent-%COMP%]{height:30vw;width:30vw;border:1px solid #fff;border-radius:50%;display:inline-block;margin-left:auto;margin-right:auto}.titleTarea[_ngcontent-%COMP%]{font-size:16px;margin-left:20px;color:#797d7f}.pAsignacion[_ngcontent-%COMP%]{margin-top:0;margin-left:20px;color:#797d7f}.nombrePerfil[_ngcontent-%COMP%]{color:#797d7f}.bajoLabel[_ngcontent-%COMP%]{font-size:16px;color:#082232;margin:15px 0 0 20px}"]],data:{}});function C(l){return o["\u0275vid"](0,[(l()(),o["\u0275eld"](0,0,null,null,6,"ion-item",[["ion-item",""]],null,[[null,"click"]],(function(l,n,e){var o=!0;return"click"===n&&(o=!1!==l.component.openTareaC(l.context.$implicit.codigo)&&o),o}),d.kb,d.v)),o["\u0275did"](1,49152,null,0,u.IonItem,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],null,null),(l()(),o["\u0275eld"](2,0,null,0,4,"label",[],null,null,null,null,null)),(l()(),o["\u0275eld"](3,0,null,null,1,"p",[["class","bajoLabel"]],null,null,null,null,null)),(l()(),o["\u0275ted"](4,null,[" ",""])),(l()(),o["\u0275eld"](5,0,null,null,1,"p",[["class","pAsignacion"]],null,null,null,null,null)),(l()(),o["\u0275ted"](6,null,[" "," "]))],null,(function(l,n){l(n,4,0,n.context.$implicit.titulo),l(n,6,0,n.context.$implicit.materia)}))}function h(l){return o["\u0275vid"](0,[(l()(),o["\u0275eld"](0,0,null,null,11,"ion-header",[["no-border",""]],null,null,null,d.cb,d.p)),o["\u0275did"](1,49152,null,0,u.IonHeader,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],null,null),(l()(),o["\u0275eld"](2,0,null,0,9,"ion-toolbar",[["color","medium"],["no-border-bottom",""]],null,null,null,d.zb,d.M)),o["\u0275did"](3,49152,null,0,u.IonToolbar,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],{color:[0,"color"]},null),(l()(),o["\u0275eld"](4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,d.R,d.e)),o["\u0275did"](5,49152,null,0,u.IonButtons,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],null,null),(l()(),o["\u0275eld"](6,0,null,0,2,"ion-back-button",[],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==o["\u0275nov"](l,8).onClick(e)&&t),t}),d.P,d.c)),o["\u0275did"](7,49152,null,0,u.IonBackButton,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],null,null),o["\u0275did"](8,16384,null,0,u.IonBackButtonDelegate,[[2,u.IonRouterOutlet],u.NavController],null,null),(l()(),o["\u0275eld"](9,0,null,0,2,"ion-title",[["class","title"]],null,null,null,d.yb,d.L)),o["\u0275did"](10,49152,null,0,u.IonTitle,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],null,null),(l()(),o["\u0275ted"](-1,0,[" TAREAS CALIFICADAS "])),(l()(),o["\u0275eld"](12,0,null,null,18,"ion-content",[],null,null,null,d.W,d.j)),o["\u0275did"](13,49152,null,0,u.IonContent,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],null,null),(l()(),o["\u0275eld"](14,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),o["\u0275eld"](15,0,null,0,11,"ion-grid",[["no-padding",""]],null,null,null,d.bb,d.o)),o["\u0275did"](16,49152,null,0,u.IonGrid,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],null,null),o["\u0275did"](17,16384,null,0,u.CssUtilsDeprecations,[o.ElementRef],null,null),(l()(),o["\u0275eld"](18,0,null,0,8,"ion-row",[],null,null,null,d.qb,d.D)),o["\u0275did"](19,49152,null,0,u.IonRow,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],null,null),(l()(),o["\u0275eld"](20,0,null,0,1,"ion-col",[["class","bg-general"],["size","4"]],null,null,null,d.V,d.i)),o["\u0275did"](21,49152,null,0,u.IonCol,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],{size:[0,"size"]},null),(l()(),o["\u0275eld"](22,0,null,0,2,"ion-col",[["class","bg-general"],["size","4"]],null,null,null,d.V,d.i)),o["\u0275did"](23,49152,null,0,u.IonCol,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],{size:[0,"size"]},null),(l()(),o["\u0275eld"](24,0,null,0,0,"img",[["class","custom-avatar"],["src","../../../assets/asms/perfil.png"]],null,null,null,null,null)),(l()(),o["\u0275eld"](25,0,null,0,1,"ion-col",[["class","bg-general"],["size","4"]],null,null,null,d.V,d.i)),o["\u0275did"](26,49152,null,0,u.IonCol,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],{size:[0,"size"]},null),(l()(),o["\u0275eld"](27,0,null,0,3,"ion-list",[],null,null,null,d.mb,d.z)),o["\u0275did"](28,49152,null,0,u.IonList,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],null,null),(l()(),o["\u0275and"](16777216,null,0,1,null,C)),o["\u0275did"](30,278528,null,0,g.NgForOf,[o.ViewContainerRef,o.TemplateRef,o.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var e=n.component;l(n,3,0,"medium"),l(n,21,0,"4"),l(n,23,0,"4"),l(n,26,0,"4"),l(n,30,0,e.calificadas)}),null)}function b(l){return o["\u0275vid"](0,[(l()(),o["\u0275eld"](0,0,null,null,1,"app-tareascalificadas",[],null,null,null,h,p)),o["\u0275did"](1,114688,null,0,r,[u.MenuController,u.NavController,u.LoadingController,u.AlertController,a.a,a.a,i.a,f.b,m.a,m.m],null,null)],(function(l,n){l(n,1,0)}),null)}var R=o["\u0275ccf"]("app-tareascalificadas",r,b,{},{},[]),_=e("gIcY");e.d(n,"TareascalificadasPageModuleNgFactory",(function(){return v}));var v=o["\u0275cmf"](c,[],(function(l){return o["\u0275mod"]([o["\u0275mpd"](512,o.ComponentFactoryResolver,o["\u0275CodegenComponentFactoryResolver"],[[8,[s.a,R]],[3,o.ComponentFactoryResolver],o.NgModuleRef]),o["\u0275mpd"](4608,g.NgLocalization,g.NgLocaleLocalization,[o.LOCALE_ID,[2,g["\u0275angular_packages_common_common_a"]]]),o["\u0275mpd"](4608,_["\u0275angular_packages_forms_forms_o"],_["\u0275angular_packages_forms_forms_o"],[]),o["\u0275mpd"](4608,u.AngularDelegate,u.AngularDelegate,[o.NgZone,o.ApplicationRef]),o["\u0275mpd"](4608,u.ModalController,u.ModalController,[u.AngularDelegate,o.ComponentFactoryResolver,o.Injector]),o["\u0275mpd"](4608,u.PopoverController,u.PopoverController,[u.AngularDelegate,o.ComponentFactoryResolver,o.Injector]),o["\u0275mpd"](1073742336,g.CommonModule,g.CommonModule,[]),o["\u0275mpd"](1073742336,_["\u0275angular_packages_forms_forms_d"],_["\u0275angular_packages_forms_forms_d"],[]),o["\u0275mpd"](1073742336,_.FormsModule,_.FormsModule,[]),o["\u0275mpd"](1073742336,u.IonicModule,u.IonicModule,[]),o["\u0275mpd"](1073742336,m.o,m.o,[[2,m.t],[2,m.m]]),o["\u0275mpd"](1073742336,c,c,[]),o["\u0275mpd"](1024,m.k,(function(){return[[{path:"",component:r}]]}),[])])}))}}]);