(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{sBxL:function(l,n,e){"use strict";e.r(n);var o=e("CcnG"),t=e("mrSG"),u=e("ZZ/e"),i=e("8pOH"),r=e("xoVG"),a=function(){function l(l,n,e,o,t,u,i,r,a,c){this.menu=l,this.navCtrl=n,this.loadingController=e,this.alertCtrl=o,this._conductaProvider=t,this._dataPanProvider=u,this.network=i,this.storage=r,this.route=a,this.router=c,this.tituloColegio="COLEGIO",this.descripcionColegio="Colegio ASMS"}return l.prototype.ngOnInit=function(){var l=this;this.route.queryParams.subscribe((function(n){n&&n.dataCard&&(l.cui=JSON.parse(n.dataCard),console.log(l.cui))})),this.handleGetPhotos()},l.prototype.handleGetPhotos=function(){return t.__awaiter(this,void 0,void 0,(function(){var l=this;return t.__generator(this,(function(n){switch(n.label){case 0:return this.typeNetwork=this.network.type,"none"==this.typeNetwork?[3,2]:[4,this._conductaProvider.handleRepConducta({alumno:this.cui}).subscribe((function(n){l.conductas=n,l.titulo=l.conductas[0].titulo,l.fecha=l.conductas[0].fecha,l.alumno=l.conductas[0].alumno}),(function(n){console.log(n),l.status=!1,l.alertMsj("Oh, algo salio mal","Intenta otra vez.")}))];case 1:return n.sent(),[3,3];case 2:this.alertMsj("Error de conexi\xf3n","Verifica tu conexi\xf3n a internet."),n.label=3;case 3:return[2]}}))}))},l.prototype.alertMsj=function(l,n){return t.__awaiter(this,void 0,void 0,(function(){return t.__generator(this,(function(e){switch(e.label){case 0:return[4,this.alertCtrl.create({header:l,message:n,buttons:["Ok"]})];case 1:return e.sent().present(),[2]}}))}))},l.prototype.openConducta=function(l){var n={queryParams:{dataCard:JSON.stringify(l)}};this.router.navigate(["reporteconducta2"],n)},l}(),c=function(){return function(){}}(),d=e("pMnS"),s=e("oBZk"),g=e("Ip0R"),f=e("iw74"),m=e("ZYCi"),p=o["\u0275crt"]({encapsulation:0,styles:[[".textomenu[_ngcontent-%COMP%]{top:0;left:0;padding:0 90px 1px;width:100%;height:100%;text-align:center}.customAvatar[_ngcontent-%COMP%]{height:90px;width:90px;border:1px solid #fff;border-radius:50%;display:inline-block;margin-left:5%;margin-top:5%}.inputNombre[_ngcontent-%COMP%]{margin-top:15%;font-size:17px;color:#082232}.egt[_ngcontent-%COMP%]{width:115%;height:22px;color:#fff;background:#082232}.thClass[_ngcontent-%COMP%]{width:25%}.colCss[_ngcontent-%COMP%]{margin-left:3%;margin-right:3%}.panalItem[_ngcontent-%COMP%]{width:100%;margin-left:18%;margin-right:18%;color:#797d7f}.panalCol[_ngcontent-%COMP%]{padding:0}"]],data:{}});function h(l){return o["\u0275vid"](0,[(l()(),o["\u0275eld"](0,0,null,null,11,"ion-row",[],null,null,null,s.qb,s.D)),o["\u0275did"](1,49152,null,0,u.IonRow,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],null,null),(l()(),o["\u0275eld"](2,0,null,0,4,"ion-col",[["class","panalCol"],["size","5"]],null,null,null,s.V,s.i)),o["\u0275did"](3,49152,null,0,u.IonCol,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],{size:[0,"size"]},null),(l()(),o["\u0275eld"](4,0,null,0,2,"ion-item",[["class","panalItem"]],null,[[null,"click"]],(function(l,n,e){var o=!0;return"click"===n&&(o=!1!==l.component.openConducta(l.context.$implicit.codigo)&&o),o}),s.kb,s.v)),o["\u0275did"](5,49152,null,0,u.IonItem,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],null,null),(l()(),o["\u0275ted"](6,0,[" "," "])),(l()(),o["\u0275eld"](7,0,null,0,4,"ion-col",[["class","panalCol"],["size","7"]],null,null,null,s.V,s.i)),o["\u0275did"](8,49152,null,0,u.IonCol,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],{size:[0,"size"]},null),(l()(),o["\u0275eld"](9,0,null,0,2,"ion-item",[["class","panalItem"]],null,[[null,"click"]],(function(l,n,e){var o=!0;return"click"===n&&(o=!1!==l.component.openConducta(l.context.$implicit.codigo)&&o),o}),s.kb,s.v)),o["\u0275did"](10,49152,null,0,u.IonItem,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],null,null),(l()(),o["\u0275ted"](11,0,[" "," "]))],(function(l,n){l(n,3,0,"5"),l(n,8,0,"7")}),(function(l,n){l(n,6,0,n.context.$implicit.titulo),l(n,11,0,n.context.$implicit.fecha)}))}function C(l){return o["\u0275vid"](0,[(l()(),o["\u0275eld"](0,0,null,null,11,"ion-header",[["no-border",""]],null,null,null,s.cb,s.p)),o["\u0275did"](1,49152,null,0,u.IonHeader,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],null,null),(l()(),o["\u0275eld"](2,0,null,0,9,"ion-toolbar",[["color","medium"],["no-border-bottom",""]],null,null,null,s.zb,s.M)),o["\u0275did"](3,49152,null,0,u.IonToolbar,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],{color:[0,"color"]},null),(l()(),o["\u0275eld"](4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,s.R,s.e)),o["\u0275did"](5,49152,null,0,u.IonButtons,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],null,null),(l()(),o["\u0275eld"](6,0,null,0,2,"ion-back-button",[],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==o["\u0275nov"](l,8).onClick(e)&&t),t}),s.P,s.c)),o["\u0275did"](7,49152,null,0,u.IonBackButton,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],null,null),o["\u0275did"](8,16384,null,0,u.IonBackButtonDelegate,[[2,u.IonRouterOutlet],u.NavController],null,null),(l()(),o["\u0275eld"](9,0,null,0,2,"ion-title",[["class","title"]],null,null,null,s.yb,s.L)),o["\u0275did"](10,49152,null,0,u.IonTitle,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],null,null),(l()(),o["\u0275ted"](-1,0,[" REPORTE DE CONDUCTA "])),(l()(),o["\u0275eld"](12,0,null,null,33,"ion-content",[],null,null,null,s.W,s.j)),o["\u0275did"](13,49152,null,0,u.IonContent,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],null,null),(l()(),o["\u0275eld"](14,0,null,0,12,"ion-grid",[],null,null,null,s.bb,s.o)),o["\u0275did"](15,49152,null,0,u.IonGrid,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],null,null),(l()(),o["\u0275eld"](16,0,null,0,10,"ion-row",[],null,null,null,s.qb,s.D)),o["\u0275did"](17,49152,null,0,u.IonRow,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],null,null),(l()(),o["\u0275eld"](18,0,null,0,2,"ion-col",[["size","3"]],null,null,null,s.V,s.i)),o["\u0275did"](19,49152,null,0,u.IonCol,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],{size:[0,"size"]},null),(l()(),o["\u0275eld"](20,0,null,0,0,"img",[["class","customAvatar"],["src","../../../assets/asms/perfil.png"]],null,null,null,null,null)),(l()(),o["\u0275eld"](21,0,null,0,5,"ion-col",[["size","9"]],null,null,null,s.V,s.i)),o["\u0275did"](22,49152,null,0,u.IonCol,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],{size:[0,"size"]},null),(l()(),o["\u0275eld"](23,0,null,0,3,"ion-label",[],null,null,null,s.lb,s.y)),o["\u0275did"](24,49152,null,0,u.IonLabel,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],null,null),(l()(),o["\u0275eld"](25,0,null,0,1,"p",[["class","inputNombre"]],null,null,null,null,null)),(l()(),o["\u0275ted"](26,null,["",""])),(l()(),o["\u0275eld"](27,0,null,0,11,"ion-grid",[],null,null,null,s.bb,s.o)),o["\u0275did"](28,49152,null,0,u.IonGrid,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],null,null),(l()(),o["\u0275eld"](29,0,null,0,9,"ion-row",[],null,null,null,s.qb,s.D)),o["\u0275did"](30,49152,null,0,u.IonRow,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],null,null),(l()(),o["\u0275eld"](31,0,null,0,7,"ion-col",[["class","colCss"],["size","10"]],null,null,null,s.V,s.i)),o["\u0275did"](32,49152,null,0,u.IonCol,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],{size:[0,"size"]},null),(l()(),o["\u0275eld"](33,0,null,0,5,"table",[["class","egt"]],null,null,null,null,null)),(l()(),o["\u0275eld"](34,0,null,null,4,"tr",[],null,null,null,null,null)),(l()(),o["\u0275eld"](35,0,null,null,1,"th",[["class","thClass"]],null,null,null,null,null)),(l()(),o["\u0275ted"](-1,null,["T\xedtulo"])),(l()(),o["\u0275eld"](37,0,null,null,1,"th",[["class","thClass"]],null,null,null,null,null)),(l()(),o["\u0275ted"](-1,null,["Fecha"])),(l()(),o["\u0275eld"](39,0,null,0,6,"ion-grid",[["class","panalCol"]],null,null,null,s.bb,s.o)),o["\u0275did"](40,49152,null,0,u.IonGrid,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],null,null),(l()(),o["\u0275eld"](41,0,null,0,4,"div",[],null,null,null,null,null)),(l()(),o["\u0275eld"](42,0,null,null,3,"ion-list",[],null,null,null,s.mb,s.z)),o["\u0275did"](43,49152,null,0,u.IonList,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],null,null),(l()(),o["\u0275and"](16777216,null,0,1,null,h)),o["\u0275did"](45,278528,null,0,g.NgForOf,[o.ViewContainerRef,o.TemplateRef,o.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var e=n.component;l(n,3,0,"medium"),l(n,19,0,"3"),l(n,22,0,"9"),l(n,32,0,"10"),l(n,45,0,e.conductas)}),(function(l,n){l(n,26,0,n.component.alumno)}))}function R(l){return o["\u0275vid"](0,[(l()(),o["\u0275eld"](0,0,null,null,1,"app-reporteconducta1",[],null,null,null,C,p)),o["\u0275did"](1,114688,null,0,a,[u.MenuController,u.NavController,u.LoadingController,u.AlertController,i.a,i.a,r.a,f.b,m.a,m.m],null,null)],(function(l,n){l(n,1,0)}),null)}var b=o["\u0275ccf"]("app-reporteconducta1",a,R,{},{},[]),_=e("gIcY");e.d(n,"Reporteconducta1PageModuleNgFactory",(function(){return I}));var I=o["\u0275cmf"](c,[],(function(l){return o["\u0275mod"]([o["\u0275mpd"](512,o.ComponentFactoryResolver,o["\u0275CodegenComponentFactoryResolver"],[[8,[d.a,b]],[3,o.ComponentFactoryResolver],o.NgModuleRef]),o["\u0275mpd"](4608,g.NgLocalization,g.NgLocaleLocalization,[o.LOCALE_ID,[2,g["\u0275angular_packages_common_common_a"]]]),o["\u0275mpd"](4608,_["\u0275angular_packages_forms_forms_o"],_["\u0275angular_packages_forms_forms_o"],[]),o["\u0275mpd"](4608,u.AngularDelegate,u.AngularDelegate,[o.NgZone,o.ApplicationRef]),o["\u0275mpd"](4608,u.ModalController,u.ModalController,[u.AngularDelegate,o.ComponentFactoryResolver,o.Injector]),o["\u0275mpd"](4608,u.PopoverController,u.PopoverController,[u.AngularDelegate,o.ComponentFactoryResolver,o.Injector]),o["\u0275mpd"](1073742336,g.CommonModule,g.CommonModule,[]),o["\u0275mpd"](1073742336,_["\u0275angular_packages_forms_forms_d"],_["\u0275angular_packages_forms_forms_d"],[]),o["\u0275mpd"](1073742336,_.FormsModule,_.FormsModule,[]),o["\u0275mpd"](1073742336,u.IonicModule,u.IonicModule,[]),o["\u0275mpd"](1073742336,m.o,m.o,[[2,m.t],[2,m.m]]),o["\u0275mpd"](1073742336,c,c,[]),o["\u0275mpd"](1024,m.k,(function(){return[[{path:"",component:a}]]}),[])])}))}}]);