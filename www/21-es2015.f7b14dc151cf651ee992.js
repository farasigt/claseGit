(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"6hr4":function(l,n,e){"use strict";e.r(n);var o=e("8Y7J"),t=e("mrSG"),u=e("ZZ/e"),i=e("ZkOO"),a=e("xoVG");class r{constructor(l,n,e,o,t,u,i,a,r){this.route=l,this.router=n,this.menu=e,this.navCtrl=o,this.loadingController=t,this.alertCtrl=u,this._detalleProvider=i,this.network=a,this.storage=r,this.info={},this.tituloColegio="COLEGIO",this.descripcionColegio="Colegio ASMS"}ionViewDidLoad(){}ngOnInit(){this.route.queryParams.subscribe(l=>{l&&l.dataCard&&(this.codigo=JSON.parse(l.dataCard))}),this.handleGetPhotos()}handleGetPhotos(){return t.__awaiter(this,void 0,void 0,(function*(){if(this.typeNetwork=this.network.type,"none"!=this.typeNetwork){let l={codigo:this.codigo};yield this._detalleProvider.handleDetalleInfo(l).subscribe(l=>{this.infodetalle=l},l=>{console.log(l),this.status=!1,this.alertMsj("Oh, algo salio mal","Intenta otra vez.")})}else this.alertMsj("Error de conexi\xf3n","Verifica tu conexi\xf3n a internet.")}))}alertMsj(l,n){return t.__awaiter(this,void 0,void 0,(function*(){(yield this.alertCtrl.create({header:l,message:n,buttons:["Ok"]})).present()}))}}class d{}var c=e("pMnS"),s=e("oBZk"),g=e("SVse"),f=e("iInd"),m=e("xgBC"),p=o["\u0275crt"]({encapsulation:0,styles:[[".textomenu[_ngcontent-%COMP%]{top:0;left:0;padding:0 90px 1px;width:100%;height:100%;text-align:center}.custom-avatar[_ngcontent-%COMP%]{height:90px;width:90px;border:1px solid #fff;border-radius:50%;margin-top:0}.colInput[_ngcontent-%COMP%]{padding:0}.inputPerfil1[_ngcontent-%COMP%]{margin-left:20px;height:25px;font-size:17px;color:#797d7f}.inputPerfil[_ngcontent-%COMP%]{margin-left:25px;height:25px;font-size:15px;color:#797d7f}.inputTitle[_ngcontent-%COMP%]{font-weight:700;margin-left:12px;font-size:20px;height:40px;color:#797d7f}.cardFormulario[_ngcontent-%COMP%]{width:100%;height:250px;margin:0!important;padding:0!important;border-radius:0}ion-card[_ngcontent-%COMP%]{position:relative;text-align:center}.title[_ngcontent-%COMP%]{margin-left:18%}.card-title[_ngcontent-%COMP%]{position:absolute;top:30%;margin-left:40%;margin-right:40%}.cardImage[_ngcontent-%COMP%]{height:100%;width:100%}.colLabel[_ngcontent-%COMP%]{padding:0}.label-md[_ngcontent-%COMP%]{margin:5px 0 0}.labelPerfil[_ngcontent-%COMP%]{margin-left:35px;height:25px;font-size:15px}.inputPerfil2[_ngcontent-%COMP%], .inputPerfil3[_ngcontent-%COMP%]{margin-left:25px;margin-top:0;height:25px;font-size:15px;color:#797d7f}.labelPerfil2[_ngcontent-%COMP%], .labelPerfil3[_ngcontent-%COMP%], .labelPerfil4[_ngcontent-%COMP%], .labelPerfil5[_ngcontent-%COMP%]{margin-top:0;margin-left:35px;height:25px;font-size:15px;color:#797d7f}"]],data:{}});function h(l){return o["\u0275vid"](0,[(l()(),o["\u0275eld"](0,0,null,null,72,"div",[],null,null,null,null,null)),(l()(),o["\u0275eld"](1,0,null,null,2,"ion-card",[["class","cardFormulario"]],null,null,null,s.U,s.f)),o["\u0275did"](2,49152,null,0,u.IonCard,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],null,null),(l()(),o["\u0275eld"](3,0,null,0,0,"img",[["class","cardImage"]],[[8,"src",4]],null,null,null,null)),(l()(),o["\u0275eld"](4,0,null,null,2,"ion-avatar",[],null,null,null,s.O,s.b)),o["\u0275did"](5,49152,null,0,u.IonAvatar,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],null,null),(l()(),o["\u0275eld"](6,0,null,0,0,"img",[["class","custom-avatar card-title"],["src","../../../assets/asms/perfil.png"]],null,null,null,null,null)),(l()(),o["\u0275eld"](7,0,null,null,65,"ion-grid",[],null,null,null,s.bb,s.o)),o["\u0275did"](8,49152,null,0,u.IonGrid,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],null,null),(l()(),o["\u0275eld"](9,0,null,0,5,"ion-row",[],null,null,null,s.qb,s.D)),o["\u0275did"](10,49152,null,0,u.IonRow,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],null,null),(l()(),o["\u0275eld"](11,0,null,0,3,"ion-col",[["class","colInput"],["size","12"]],null,null,null,s.V,s.i)),o["\u0275did"](12,49152,null,0,u.IonCol,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],{size:[0,"size"]},null),(l()(),o["\u0275eld"](13,0,null,0,1,"label",[["class","inputPerfil"]],null,null,null,null,null)),(l()(),o["\u0275ted"](14,null,["",""])),(l()(),o["\u0275eld"](15,0,null,0,5,"ion-row",[],null,null,null,s.qb,s.D)),o["\u0275did"](16,49152,null,0,u.IonRow,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],null,null),(l()(),o["\u0275eld"](17,0,null,0,3,"ion-col",[["class","colInput"],["size","12"]],null,null,null,s.V,s.i)),o["\u0275did"](18,49152,null,0,u.IonCol,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],{size:[0,"size"]},null),(l()(),o["\u0275eld"](19,0,null,0,1,"label",[["class","inputPerfil"]],null,null,null,null,null)),(l()(),o["\u0275ted"](20,null,["",""])),(l()(),o["\u0275eld"](21,0,null,0,5,"ion-row",[],null,null,null,s.qb,s.D)),o["\u0275did"](22,49152,null,0,u.IonRow,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],null,null),(l()(),o["\u0275eld"](23,0,null,0,3,"ion-col",[["class","colInput"],["size","12"]],null,null,null,s.V,s.i)),o["\u0275did"](24,49152,null,0,u.IonCol,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],{size:[0,"size"]},null),(l()(),o["\u0275eld"](25,0,null,0,1,"label",[["class","inputPerfil"]],null,null,null,null,null)),(l()(),o["\u0275ted"](26,null,["",""])),(l()(),o["\u0275eld"](27,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),o["\u0275eld"](28,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),o["\u0275eld"](29,0,null,0,10,"ion-row",[],null,null,null,s.qb,s.D)),o["\u0275did"](30,49152,null,0,u.IonRow,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],null,null),(l()(),o["\u0275eld"](31,0,null,0,4,"ion-col",[["class","colLabel"],["size","6"]],null,null,null,s.V,s.i)),o["\u0275did"](32,49152,null,0,u.IonCol,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],{size:[0,"size"]},null),(l()(),o["\u0275eld"](33,0,null,0,2,"ion-label",[["class","labelPerfil2"]],null,null,null,s.lb,s.y)),o["\u0275did"](34,49152,null,0,u.IonLabel,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],null,null),(l()(),o["\u0275ted"](-1,0,["Fecha de inicio: "])),(l()(),o["\u0275eld"](36,0,null,0,3,"ion-col",[["class","colInput"],["size","6"]],null,null,null,s.V,s.i)),o["\u0275did"](37,49152,null,0,u.IonCol,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],{size:[0,"size"]},null),(l()(),o["\u0275eld"](38,0,null,0,1,"label",[["class","inputPerfil"]],null,null,null,null,null)),(l()(),o["\u0275ted"](39,null,["",""])),(l()(),o["\u0275eld"](40,0,null,0,10,"ion-row",[],null,null,null,s.qb,s.D)),o["\u0275did"](41,49152,null,0,u.IonRow,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],null,null),(l()(),o["\u0275eld"](42,0,null,0,4,"ion-col",[["class","colLabel"],["size","6"]],null,null,null,s.V,s.i)),o["\u0275did"](43,49152,null,0,u.IonCol,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],{size:[0,"size"]},null),(l()(),o["\u0275eld"](44,0,null,0,2,"ion-label",[["class","labelPerfil3"]],null,null,null,s.lb,s.y)),o["\u0275did"](45,49152,null,0,u.IonLabel,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],null,null),(l()(),o["\u0275ted"](-1,0,["Hora: "])),(l()(),o["\u0275eld"](47,0,null,0,3,"ion-col",[["class","colInput"],["size","6"]],null,null,null,s.V,s.i)),o["\u0275did"](48,49152,null,0,u.IonCol,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],{size:[0,"size"]},null),(l()(),o["\u0275eld"](49,0,null,0,1,"label",[["class","inputPerfil"]],null,null,null,null,null)),(l()(),o["\u0275ted"](50,null,["",""])),(l()(),o["\u0275eld"](51,0,null,0,10,"ion-row",[],null,null,null,s.qb,s.D)),o["\u0275did"](52,49152,null,0,u.IonRow,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],null,null),(l()(),o["\u0275eld"](53,0,null,0,4,"ion-col",[["class","colLabel"],["size","6"]],null,null,null,s.V,s.i)),o["\u0275did"](54,49152,null,0,u.IonCol,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],{size:[0,"size"]},null),(l()(),o["\u0275eld"](55,0,null,0,2,"ion-label",[["class","labelPerfil4"]],null,null,null,s.lb,s.y)),o["\u0275did"](56,49152,null,0,u.IonLabel,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],null,null),(l()(),o["\u0275ted"](-1,0,["Fecha de finalizaci\xf3n: "])),(l()(),o["\u0275eld"](58,0,null,0,3,"ion-col",[["class","colInput"],["size","6"]],null,null,null,s.V,s.i)),o["\u0275did"](59,49152,null,0,u.IonCol,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],{size:[0,"size"]},null),(l()(),o["\u0275eld"](60,0,null,0,1,"label",[["class","inputPerfil"]],null,null,null,null,null)),(l()(),o["\u0275ted"](61,null,["",""])),(l()(),o["\u0275eld"](62,0,null,0,10,"ion-row",[],null,null,null,s.qb,s.D)),o["\u0275did"](63,49152,null,0,u.IonRow,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],null,null),(l()(),o["\u0275eld"](64,0,null,0,4,"ion-col",[["class","colLabel"],["size","6"]],null,null,null,s.V,s.i)),o["\u0275did"](65,49152,null,0,u.IonCol,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],{size:[0,"size"]},null),(l()(),o["\u0275eld"](66,0,null,0,2,"ion-label",[["class","labelPerfil5"]],null,null,null,s.lb,s.y)),o["\u0275did"](67,49152,null,0,u.IonLabel,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],null,null),(l()(),o["\u0275ted"](-1,0,["Hora: "])),(l()(),o["\u0275eld"](69,0,null,0,3,"ion-col",[["class","colInput"],["size","6"]],null,null,null,s.V,s.i)),o["\u0275did"](70,49152,null,0,u.IonCol,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],{size:[0,"size"]},null),(l()(),o["\u0275eld"](71,0,null,0,1,"label",[["class","inputPerfil"]],null,null,null,null,null)),(l()(),o["\u0275ted"](72,null,["",""]))],(function(l,n){l(n,12,0,"12"),l(n,18,0,"12"),l(n,24,0,"12"),l(n,32,0,"6"),l(n,37,0,"6"),l(n,43,0,"6"),l(n,48,0,"6"),l(n,54,0,"6"),l(n,59,0,"6"),l(n,65,0,"6"),l(n,70,0,"6")}),(function(l,n){l(n,3,0,o["\u0275inlineInterpolate"](1,"",n.context.$implicit.imagen,"")),l(n,14,0,n.context.$implicit.titulo),l(n,20,0,n.context.$implicit.descripcion),l(n,26,0,n.context.$implicit.titulo),l(n,39,0,n.context.$implicit.fecha_inicio),l(n,50,0,n.context.$implicit.hora_inicio),l(n,61,0,n.context.$implicit.fecha_final),l(n,72,0,n.context.$implicit.hora_final)}))}function C(l){return o["\u0275vid"](0,[(l()(),o["\u0275eld"](0,0,null,null,11,"ion-header",[["no-border",""]],null,null,null,s.cb,s.p)),o["\u0275did"](1,49152,null,0,u.IonHeader,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],null,null),(l()(),o["\u0275eld"](2,0,null,0,9,"ion-toolbar",[["color","medium"],["no-border-bottom",""]],null,null,null,s.zb,s.M)),o["\u0275did"](3,49152,null,0,u.IonToolbar,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],{color:[0,"color"]},null),(l()(),o["\u0275eld"](4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,s.R,s.e)),o["\u0275did"](5,49152,null,0,u.IonButtons,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],null,null),(l()(),o["\u0275eld"](6,0,null,0,2,"ion-back-button",[],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==o["\u0275nov"](l,8).onClick(e)&&t),t}),s.P,s.c)),o["\u0275did"](7,49152,null,0,u.IonBackButton,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],null,null),o["\u0275did"](8,16384,null,0,u.IonBackButtonDelegate,[[2,u.IonRouterOutlet],u.NavController],null,null),(l()(),o["\u0275eld"](9,0,null,0,2,"ion-title",[["class","title"]],null,null,null,s.yb,s.L)),o["\u0275did"](10,49152,null,0,u.IonTitle,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],null,null),(l()(),o["\u0275ted"](-1,0,[" INFORMACI\xd3N "])),(l()(),o["\u0275eld"](12,0,null,null,3,"ion-content",[],null,null,null,s.W,s.j)),o["\u0275did"](13,49152,null,0,u.IonContent,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],null,null),(l()(),o["\u0275and"](16777216,null,0,1,null,h)),o["\u0275did"](15,278528,null,0,g.NgForOf,[o.ViewContainerRef,o.TemplateRef,o.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var e=n.component;l(n,3,0,"medium"),l(n,15,0,e.infodetalle)}),null)}function R(l){return o["\u0275vid"](0,[(l()(),o["\u0275eld"](0,0,null,null,1,"app-formularioinformacion",[],null,null,null,C,p)),o["\u0275did"](1,114688,null,0,r,[f.a,f.m,u.MenuController,u.NavController,u.LoadingController,u.AlertController,i.a,a.a,m.b],null,null)],(function(l,n){l(n,1,0)}),null)}var b=o["\u0275ccf"]("app-formularioinformacion",r,R,{},{},[]),I=e("s7LF");e.d(n,"FormularioinformacionPageModuleNgFactory",(function(){return _}));var _=o["\u0275cmf"](d,[],(function(l){return o["\u0275mod"]([o["\u0275mpd"](512,o.ComponentFactoryResolver,o["\u0275CodegenComponentFactoryResolver"],[[8,[c.a,b]],[3,o.ComponentFactoryResolver],o.NgModuleRef]),o["\u0275mpd"](4608,g.NgLocalization,g.NgLocaleLocalization,[o.LOCALE_ID,[2,g["\u0275angular_packages_common_common_a"]]]),o["\u0275mpd"](4608,I["\u0275angular_packages_forms_forms_o"],I["\u0275angular_packages_forms_forms_o"],[]),o["\u0275mpd"](4608,u.AngularDelegate,u.AngularDelegate,[o.NgZone,o.ApplicationRef]),o["\u0275mpd"](4608,u.ModalController,u.ModalController,[u.AngularDelegate,o.ComponentFactoryResolver,o.Injector]),o["\u0275mpd"](4608,u.PopoverController,u.PopoverController,[u.AngularDelegate,o.ComponentFactoryResolver,o.Injector]),o["\u0275mpd"](1073742336,g.CommonModule,g.CommonModule,[]),o["\u0275mpd"](1073742336,I["\u0275angular_packages_forms_forms_d"],I["\u0275angular_packages_forms_forms_d"],[]),o["\u0275mpd"](1073742336,I.FormsModule,I.FormsModule,[]),o["\u0275mpd"](1073742336,u.IonicModule,u.IonicModule,[]),o["\u0275mpd"](1073742336,f.o,f.o,[[2,f.t],[2,f.m]]),o["\u0275mpd"](1073742336,d,d,[]),o["\u0275mpd"](1024,f.k,(function(){return[[{path:"",component:r}]]}),[])])}))}}]);