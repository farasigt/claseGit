(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{MT0p:function(l,n,e){"use strict";e.r(n);var u=e("CcnG"),o=e("mrSG"),t=e("ZZ/e"),i=e("lRuR"),d=e("xoVG"),r=function(){function l(l,n,e,u,o,t,i,d,r){this.route=l,this.router=n,this.menu=e,this.navCtrl=u,this.loadingController=o,this.alertCtrl=t,this._encuestaProvider=i,this.network=d,this.storage=r,this.tituloColegio="COLEGIO",this.descripcionColegio="Colegio ASMS"}return l.prototype.ngOnInit=function(){var l=this;this.route.queryParams.subscribe((function(n){n&&n.dataCard&&(l.codigo=JSON.parse(n.dataCard),console.log(l.codigo))})),this.handleGetPhotos()},l.prototype.handleGetPhotos=function(){return o.__awaiter(this,void 0,void 0,(function(){var l=this;return o.__generator(this,(function(n){switch(n.label){case 0:return this.typeNetwork=this.network.type,"none"==this.typeNetwork?[3,2]:[4,this._encuestaProvider.handleEncu({codigo:this.codigo}).subscribe((function(n){l.encuestas=n,l.titulo=l.encuestas[0].titulo,l.descripcion=l.encuestas[0].descripcion}),(function(n){console.log(n),l.status=!1,l.alertMsj("Oh, algo salio mal","Intenta otra vez.")}))];case 1:return n.sent(),[3,3];case 2:this.alertMsj("Error de conexi\xf3n","Verifica tu conexi\xf3n a internet."),n.label=3;case 3:return[2]}}))}))},l.prototype.alertMsj=function(l,n){return o.__awaiter(this,void 0,void 0,(function(){return o.__generator(this,(function(e){switch(e.label){case 0:return[4,this.alertCtrl.create({header:l,message:n,buttons:["Ok"]})];case 1:return e.sent().present(),[2]}}))}))},l}(),a=function(){return function(){}}(),c=e("pMnS"),s=e("oBZk"),g=e("ZYCi"),f=e("iw74"),m=u["\u0275crt"]({encapsulation:0,styles:[[".title[_ngcontent-%COMP%]{margin-left:25%}.textomenu[_ngcontent-%COMP%]{top:0;left:0;padding:0 90px 1px;width:100%;height:100%;text-align:center}.titEnc[_ngcontent-%COMP%]{padding:0;margin:0 0 5px 20px;background-color:#7c7c7c;font-family:sans-serif;color:#fff}.descEnc[_ngcontent-%COMP%]{padding:0;margin:0 0 5px 40px;background-color:#7c7c7c;font-family:sans-serif;color:#fff}.headCont[_ngcontent-%COMP%]{background-color:#7c7c7c;color:#fff}.radioB[_ngcontent-%COMP%]{height:25px;width:25px;color:#797d7f}.numberB[_ngcontent-%COMP%]{margin-left:5px;color:#797d7f}.itemMult[_ngcontent-%COMP%]{padding:15px;border:5px}.inputTitle[_ngcontent-%COMP%]{height:100px;border:#000}.titBut[_ngcontent-%COMP%]{color:#797d7f;font-family:sans-serif;font-size:15px}"]],data:{}});function C(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,11,"ion-header",[["no-border",""]],null,null,null,s.cb,s.p)),u["\u0275did"](1,49152,null,0,t.IonHeader,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],null,null),(l()(),u["\u0275eld"](2,0,null,0,9,"ion-toolbar",[["color","medium"],["no-border-bottom",""]],null,null,null,s.zb,s.M)),u["\u0275did"](3,49152,null,0,t.IonToolbar,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],{color:[0,"color"]},null),(l()(),u["\u0275eld"](4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,s.R,s.e)),u["\u0275did"](5,49152,null,0,t.IonButtons,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],null,null),(l()(),u["\u0275eld"](6,0,null,0,2,"ion-back-button",[],null,[[null,"click"]],(function(l,n,e){var o=!0;return"click"===n&&(o=!1!==u["\u0275nov"](l,8).onClick(e)&&o),o}),s.P,s.c)),u["\u0275did"](7,49152,null,0,t.IonBackButton,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],null,null),u["\u0275did"](8,16384,null,0,t.IonBackButtonDelegate,[[2,t.IonRouterOutlet],t.NavController],null,null),(l()(),u["\u0275eld"](9,0,null,0,2,"ion-title",[["class","title"]],null,null,null,s.yb,s.L)),u["\u0275did"](10,49152,null,0,t.IonTitle,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],null,null),(l()(),u["\u0275ted"](-1,0,[" ENCUESTA "])),(l()(),u["\u0275eld"](12,0,null,null,107,"ion-content",[],null,null,null,s.W,s.j)),u["\u0275did"](13,49152,null,0,t.IonContent,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],null,null),(l()(),u["\u0275eld"](14,0,null,0,8,"div",[["class","headCont"]],null,null,null,null,null)),(l()(),u["\u0275eld"](15,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),u["\u0275eld"](16,0,null,null,5,"ion-label",[],null,null,null,s.lb,s.y)),u["\u0275did"](17,49152,null,0,t.IonLabel,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],null,null),(l()(),u["\u0275eld"](18,0,null,0,1,"h1",[["class","titEnc"]],null,null,null,null,null)),(l()(),u["\u0275ted"](19,null,[" ",""])),(l()(),u["\u0275eld"](20,0,null,0,1,"p",[["class","descEnc"]],null,null,null,null,null)),(l()(),u["\u0275ted"](21,null,[" "," "])),(l()(),u["\u0275eld"](22,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),u["\u0275eld"](23,0,null,0,49,"ion-card",[["class","itemMult"]],null,null,null,s.U,s.f)),u["\u0275did"](24,49152,null,0,t.IonCard,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],null,null),(l()(),u["\u0275eld"](25,0,null,0,5,"ion-row",[],null,null,null,s.qb,s.D)),u["\u0275did"](26,49152,null,0,t.IonRow,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],null,null),(l()(),u["\u0275eld"](27,0,null,0,3,"ion-col",[["size","12"]],null,null,null,s.V,s.i)),u["\u0275did"](28,49152,null,0,t.IonCol,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],{size:[0,"size"]},null),(l()(),u["\u0275eld"](29,0,null,0,1,"p",[["class","titBut"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["1. Pregunta 1"])),(l()(),u["\u0275eld"](31,0,null,0,20,"ion-row",[],null,null,null,s.qb,s.D)),u["\u0275did"](32,49152,null,0,t.IonRow,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],null,null),(l()(),u["\u0275eld"](33,0,null,0,1,"ion-col",[["size","1"]],null,null,null,s.V,s.i)),u["\u0275did"](34,49152,null,0,t.IonCol,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],{size:[0,"size"]},null),(l()(),u["\u0275eld"](35,0,null,0,2,"ion-col",[["size","2"]],null,null,null,s.V,s.i)),u["\u0275did"](36,49152,null,0,t.IonCol,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],{size:[0,"size"]},null),(l()(),u["\u0275eld"](37,0,null,0,0,"input",[["class","radioB"],["name","OpcionM"],["type","radio"],["value","1"]],null,null,null,null,null)),(l()(),u["\u0275eld"](38,0,null,0,2,"ion-col",[["size","2"]],null,null,null,s.V,s.i)),u["\u0275did"](39,49152,null,0,t.IonCol,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],{size:[0,"size"]},null),(l()(),u["\u0275eld"](40,0,null,0,0,"input",[["class","radioB"],["name","OpcionM"],["type","radio"],["value","2"]],null,null,null,null,null)),(l()(),u["\u0275eld"](41,0,null,0,2,"ion-col",[["size","2"]],null,null,null,s.V,s.i)),u["\u0275did"](42,49152,null,0,t.IonCol,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],{size:[0,"size"]},null),(l()(),u["\u0275eld"](43,0,null,0,0,"input",[["class","radioB"],["name","OpcionM"],["type","radio"],["value","3"]],null,null,null,null,null)),(l()(),u["\u0275eld"](44,0,null,0,2,"ion-col",[["size","2"]],null,null,null,s.V,s.i)),u["\u0275did"](45,49152,null,0,t.IonCol,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],{size:[0,"size"]},null),(l()(),u["\u0275eld"](46,0,null,0,0,"input",[["class","radioB"],["name","OpcionM"],["type","radio"],["value","4"]],null,null,null,null,null)),(l()(),u["\u0275eld"](47,0,null,0,2,"ion-col",[["size","2"]],null,null,null,s.V,s.i)),u["\u0275did"](48,49152,null,0,t.IonCol,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],{size:[0,"size"]},null),(l()(),u["\u0275eld"](49,0,null,0,0,"input",[["class","radioB"],["name","OpcionM"],["type","radio"],["value","5"]],null,null,null,null,null)),(l()(),u["\u0275eld"](50,0,null,0,1,"ion-col",[["size","1"]],null,null,null,s.V,s.i)),u["\u0275did"](51,49152,null,0,t.IonCol,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],{size:[0,"size"]},null),(l()(),u["\u0275eld"](52,0,null,0,20,"ion-row",[],null,null,null,s.qb,s.D)),u["\u0275did"](53,49152,null,0,t.IonRow,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],null,null),(l()(),u["\u0275eld"](54,0,null,0,1,"ion-col",[["size","1"]],null,null,null,s.V,s.i)),u["\u0275did"](55,49152,null,0,t.IonCol,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],{size:[0,"size"]},null),(l()(),u["\u0275eld"](56,0,null,0,2,"ion-col",[["class","numberB"]],null,null,null,s.V,s.i)),u["\u0275did"](57,49152,null,0,t.IonCol,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],null,null),(l()(),u["\u0275ted"](-1,0,[" 1 "])),(l()(),u["\u0275eld"](59,0,null,0,2,"ion-col",[["class","numberB"]],null,null,null,s.V,s.i)),u["\u0275did"](60,49152,null,0,t.IonCol,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],null,null),(l()(),u["\u0275ted"](-1,0,[" 2 "])),(l()(),u["\u0275eld"](62,0,null,0,2,"ion-col",[["class","numberB"]],null,null,null,s.V,s.i)),u["\u0275did"](63,49152,null,0,t.IonCol,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],null,null),(l()(),u["\u0275ted"](-1,0,[" 3 "])),(l()(),u["\u0275eld"](65,0,null,0,2,"ion-col",[["class","numberB"]],null,null,null,s.V,s.i)),u["\u0275did"](66,49152,null,0,t.IonCol,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],null,null),(l()(),u["\u0275ted"](-1,0,[" 4 "])),(l()(),u["\u0275eld"](68,0,null,0,2,"ion-col",[["class","numberB"]],null,null,null,s.V,s.i)),u["\u0275did"](69,49152,null,0,t.IonCol,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],null,null),(l()(),u["\u0275ted"](-1,0,[" 5 "])),(l()(),u["\u0275eld"](71,0,null,0,1,"ion-col",[["size","1"]],null,null,null,s.V,s.i)),u["\u0275did"](72,49152,null,0,t.IonCol,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],{size:[0,"size"]},null),(l()(),u["\u0275eld"](73,0,null,0,33,"ion-card",[["class","itemMult"]],null,null,null,s.U,s.f)),u["\u0275did"](74,49152,null,0,t.IonCard,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],null,null),(l()(),u["\u0275eld"](75,0,null,0,5,"ion-row",[],null,null,null,s.qb,s.D)),u["\u0275did"](76,49152,null,0,t.IonRow,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],null,null),(l()(),u["\u0275eld"](77,0,null,0,3,"ion-col",[["size","12"]],null,null,null,s.V,s.i)),u["\u0275did"](78,49152,null,0,t.IonCol,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],{size:[0,"size"]},null),(l()(),u["\u0275eld"](79,0,null,0,1,"p",[["class","titBut"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["2. Pregunta 2"])),(l()(),u["\u0275eld"](81,0,null,0,11,"ion-row",[],null,null,null,s.qb,s.D)),u["\u0275did"](82,49152,null,0,t.IonRow,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],null,null),(l()(),u["\u0275eld"](83,0,null,0,1,"ion-col",[["size","3"]],null,null,null,s.V,s.i)),u["\u0275did"](84,49152,null,0,t.IonCol,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],{size:[0,"size"]},null),(l()(),u["\u0275eld"](85,0,null,0,2,"ion-col",[["size","5"]],null,null,null,s.V,s.i)),u["\u0275did"](86,49152,null,0,t.IonCol,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],{size:[0,"size"]},null),(l()(),u["\u0275eld"](87,0,null,0,0,"input",[["class","radioB"],["name","OpcionM"],["type","radio"],["value","1"]],null,null,null,null,null)),(l()(),u["\u0275eld"](88,0,null,0,2,"ion-col",[["size","3"]],null,null,null,s.V,s.i)),u["\u0275did"](89,49152,null,0,t.IonCol,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],{size:[0,"size"]},null),(l()(),u["\u0275eld"](90,0,null,0,0,"input",[["class","radioB"],["name","OpcionM"],["type","radio"],["value","2"]],null,null,null,null,null)),(l()(),u["\u0275eld"](91,0,null,0,1,"ion-col",[["size","1"]],null,null,null,s.V,s.i)),u["\u0275did"](92,49152,null,0,t.IonCol,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],{size:[0,"size"]},null),(l()(),u["\u0275eld"](93,0,null,0,13,"ion-row",[],null,null,null,s.qb,s.D)),u["\u0275did"](94,49152,null,0,t.IonRow,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],null,null),(l()(),u["\u0275eld"](95,0,null,0,1,"ion-col",[["size","3"]],null,null,null,s.V,s.i)),u["\u0275did"](96,49152,null,0,t.IonCol,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],{size:[0,"size"]},null),(l()(),u["\u0275eld"](97,0,null,0,2,"ion-col",[["class","numberB"]],null,null,null,s.V,s.i)),u["\u0275did"](98,49152,null,0,t.IonCol,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],null,null),(l()(),u["\u0275ted"](-1,0,[" Si "])),(l()(),u["\u0275eld"](100,0,null,0,1,"ion-col",[["col-2",""]],null,null,null,s.V,s.i)),u["\u0275did"](101,49152,null,0,t.IonCol,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],null,null),(l()(),u["\u0275eld"](102,0,null,0,2,"ion-col",[["class","numberB"]],null,null,null,s.V,s.i)),u["\u0275did"](103,49152,null,0,t.IonCol,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],null,null),(l()(),u["\u0275ted"](-1,0,[" No "])),(l()(),u["\u0275eld"](105,0,null,0,1,"ion-col",[["size","1"]],null,null,null,s.V,s.i)),u["\u0275did"](106,49152,null,0,t.IonCol,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],{size:[0,"size"]},null),(l()(),u["\u0275eld"](107,0,null,0,12,"ion-card",[["class","itemMult"]],null,null,null,s.U,s.f)),u["\u0275did"](108,49152,null,0,t.IonCard,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],null,null),(l()(),u["\u0275eld"](109,0,null,0,5,"ion-row",[],null,null,null,s.qb,s.D)),u["\u0275did"](110,49152,null,0,t.IonRow,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],null,null),(l()(),u["\u0275eld"](111,0,null,0,3,"ion-col",[["size","12"]],null,null,null,s.V,s.i)),u["\u0275did"](112,49152,null,0,t.IonCol,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],{size:[0,"size"]},null),(l()(),u["\u0275eld"](113,0,null,0,1,"p",[["class","titBut"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["3. Pregunta 3"])),(l()(),u["\u0275eld"](115,0,null,0,4,"ion-row",[],null,null,null,s.qb,s.D)),u["\u0275did"](116,49152,null,0,t.IonRow,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],null,null),(l()(),u["\u0275eld"](117,0,null,0,2,"ion-col",[["size","12"]],null,null,null,s.V,s.i)),u["\u0275did"](118,49152,null,0,t.IonCol,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],{size:[0,"size"]},null),(l()(),u["\u0275eld"](119,0,null,0,0,"textarea",[["cols","43"],["name","comentarios"],["placeholder","Titulo de la informacion"],["rows","5"]],null,null,null,null,null))],(function(l,n){l(n,3,0,"medium"),l(n,28,0,"12"),l(n,34,0,"1"),l(n,36,0,"2"),l(n,39,0,"2"),l(n,42,0,"2"),l(n,45,0,"2"),l(n,48,0,"2"),l(n,51,0,"1"),l(n,55,0,"1"),l(n,72,0,"1"),l(n,78,0,"12"),l(n,84,0,"3"),l(n,86,0,"5"),l(n,89,0,"3"),l(n,92,0,"1"),l(n,96,0,"3"),l(n,106,0,"1"),l(n,112,0,"12"),l(n,118,0,"12")}),(function(l,n){var e=n.component;l(n,19,0,e.titulo),l(n,21,0,e.descripcion)}))}function R(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,1,"app-encuesta2",[],null,null,null,C,m)),u["\u0275did"](1,114688,null,0,r,[g.a,g.m,t.MenuController,t.NavController,t.LoadingController,t.AlertController,i.a,d.a,f.b],null,null)],(function(l,n){l(n,1,0)}),null)}var p=u["\u0275ccf"]("app-encuesta2",r,R,{},{},[]),h=e("Ip0R"),z=e("gIcY");e.d(n,"Encuesta2PageModuleNgFactory",(function(){return D}));var D=u["\u0275cmf"](a,[],(function(l){return u["\u0275mod"]([u["\u0275mpd"](512,u.ComponentFactoryResolver,u["\u0275CodegenComponentFactoryResolver"],[[8,[c.a,p]],[3,u.ComponentFactoryResolver],u.NgModuleRef]),u["\u0275mpd"](4608,h.NgLocalization,h.NgLocaleLocalization,[u.LOCALE_ID,[2,h["\u0275angular_packages_common_common_a"]]]),u["\u0275mpd"](4608,z["\u0275angular_packages_forms_forms_o"],z["\u0275angular_packages_forms_forms_o"],[]),u["\u0275mpd"](4608,t.AngularDelegate,t.AngularDelegate,[u.NgZone,u.ApplicationRef]),u["\u0275mpd"](4608,t.ModalController,t.ModalController,[t.AngularDelegate,u.ComponentFactoryResolver,u.Injector]),u["\u0275mpd"](4608,t.PopoverController,t.PopoverController,[t.AngularDelegate,u.ComponentFactoryResolver,u.Injector]),u["\u0275mpd"](1073742336,h.CommonModule,h.CommonModule,[]),u["\u0275mpd"](1073742336,z["\u0275angular_packages_forms_forms_d"],z["\u0275angular_packages_forms_forms_d"],[]),u["\u0275mpd"](1073742336,z.FormsModule,z.FormsModule,[]),u["\u0275mpd"](1073742336,t.IonicModule,t.IonicModule,[]),u["\u0275mpd"](1073742336,g.o,g.o,[[2,g.t],[2,g.m]]),u["\u0275mpd"](1073742336,a,a,[]),u["\u0275mpd"](1024,g.k,(function(){return[[{path:"",component:r}]]}),[])])}))}}]);