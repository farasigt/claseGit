(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{AdZY:function(l,n,e){"use strict";e.r(n);var o=e("8Y7J"),t=e("mrSG"),u=e("ZZ/e"),i=e("lRuR"),r=e("xoVG");class a{constructor(l,n,e,o,t,u,i,r){this.menu=l,this.navCtrl=n,this.loadingController=e,this.alertCtrl=o,this._encuestaProvider=t,this.network=u,this.storage=i,this.router=r,this.tituloColegio="COLEGIO",this.descripcionColegio="Colegio ASMS"}ngOnInit(){this.handleGetStorageUser()}handleGetStorageUser(){return t.__awaiter(this,void 0,void 0,(function*(){this.storage.get("user").then(l=>{this.tipo=l.tipo_usuario,this.codigo=l.tipo_codigo,this.typeNetwork=this.network.type,this.tipo&&this.codigo?this.handleGetPhotos():console.log("error faltan campos de el local storage")})}))}handleGetPhotos(){return t.__awaiter(this,void 0,void 0,(function*(){if(this.typeNetwork=this.network.type,"none"!=this.typeNetwork){let l={tipo:this.tipo,codigo:this.codigo};yield this._encuestaProvider.handleHijos(l).subscribe(l=>{this.alumnos=l},l=>{console.log(l),this.status=!1,this.alertMsj("Oh, algo salio mal","Intenta otra vez.")})}else this.alertMsj("Error de conexi\xf3n","Verifica tu conexi\xf3n a internet.")}))}alertMsj(l,n){return t.__awaiter(this,void 0,void 0,(function*(){(yield this.alertCtrl.create({header:l,message:n,buttons:["Ok"]})).present()}))}openHijos(l,n,e){let o={queryParams:{dataCard:JSON.stringify({cui:l,nivel:this.alumnos[0].seccion[0].nivel,grado:this.alumnos[0].seccion[0].grado,nombre:n,seccion:e})}};this.router.navigate(["hijos1"],o)}}class s{}var d=e("pMnS"),c=e("oBZk"),g=e("SVse"),m=e("xgBC"),f=e("iInd"),p=o["\u0275crt"]({encapsulation:0,styles:[[".title[_ngcontent-%COMP%]{margin-left:25%}.textomenu[_ngcontent-%COMP%]{top:0;left:0;padding:0 90px 1px;width:100%;height:100%;text-align:center}.custom-avatar[_ngcontent-%COMP%]{height:30vw;width:30vw;border:1px solid #fff;border-radius:50%;display:inline-block;margin-left:auto;margin-right:auto}.cssgray[_ngcontent-%COMP%]{color:#797d7f}"]],data:{}});function h(l){return o["\u0275vid"](0,[(l()(),o["\u0275eld"](0,0,null,null,13,"div",[],null,null,null,null,null)),(l()(),o["\u0275eld"](1,0,null,null,12,"ion-item",[],null,[[null,"click"]],(function(l,n,e){var o=!0;return"click"===n&&(o=!1!==l.component.openHijos(l.context.$implicit.cui,l.context.$implicit.nombre,l.context.$implicit.seccion[0].seccion)&&o),o}),c.kb,c.v)),o["\u0275did"](2,49152,null,0,u.IonItem,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],null,null),(l()(),o["\u0275eld"](3,0,null,0,2,"ion-avatar",[["slot","start"]],null,null,null,c.O,c.b)),o["\u0275did"](4,49152,null,0,u.IonAvatar,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],null,null),(l()(),o["\u0275eld"](5,0,null,0,0,"img",[["src","../../../assets/asms/perfil.png"]],null,null,null,null,null)),(l()(),o["\u0275eld"](6,0,null,0,5,"ion-label",[],null,null,null,c.lb,c.y)),o["\u0275did"](7,49152,null,0,u.IonLabel,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],null,null),(l()(),o["\u0275eld"](8,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),o["\u0275ted"](9,null,[" ",""])),(l()(),o["\u0275eld"](10,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),o["\u0275ted"](11,null,[" "," "])),(l()(),o["\u0275eld"](12,0,null,0,1,"ion-icon",[["class","cssgray"],["name","arrow-forward"],["slot","end"]],null,null,null,c.db,c.q)),o["\u0275did"](13,49152,null,0,u.IonIcon,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],{name:[0,"name"]},null)],(function(l,n){l(n,13,0,"arrow-forward")}),(function(l,n){l(n,9,0,n.context.$implicit.nombre),l(n,11,0,n.context.$implicit.apellido)}))}function C(l){return o["\u0275vid"](0,[(l()(),o["\u0275eld"](0,0,null,null,11,"ion-header",[["no-border",""]],null,null,null,c.cb,c.p)),o["\u0275did"](1,49152,null,0,u.IonHeader,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],null,null),(l()(),o["\u0275eld"](2,0,null,0,9,"ion-toolbar",[["color","medium"]],null,null,null,c.zb,c.M)),o["\u0275did"](3,49152,null,0,u.IonToolbar,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],{color:[0,"color"]},null),(l()(),o["\u0275eld"](4,0,null,0,2,"ion-title",[["class","title"]],null,null,null,c.yb,c.L)),o["\u0275did"](5,49152,null,0,u.IonTitle,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],null,null),(l()(),o["\u0275ted"](-1,0,[" HIJOS "])),(l()(),o["\u0275eld"](7,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,c.R,c.e)),o["\u0275did"](8,49152,null,0,u.IonButtons,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],null,null),(l()(),o["\u0275eld"](9,0,null,0,2,"ion-back-button",[["defaultHref","home"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==o["\u0275nov"](l,11).onClick(e)&&t),t}),c.P,c.c)),o["\u0275did"](10,49152,null,0,u.IonBackButton,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],{defaultHref:[0,"defaultHref"]},null),o["\u0275did"](11,16384,null,0,u.IonBackButtonDelegate,[[2,u.IonRouterOutlet],u.NavController],{defaultHref:[0,"defaultHref"]},null),(l()(),o["\u0275eld"](12,0,null,null,16,"ion-content",[],null,null,null,c.W,c.j)),o["\u0275did"](13,49152,null,0,u.IonContent,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],null,null),(l()(),o["\u0275eld"](14,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),o["\u0275eld"](15,0,null,0,11,"ion-grid",[["no-padding",""]],null,null,null,c.bb,c.o)),o["\u0275did"](16,49152,null,0,u.IonGrid,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],null,null),o["\u0275did"](17,16384,null,0,u.CssUtilsDeprecations,[o.ElementRef],null,null),(l()(),o["\u0275eld"](18,0,null,0,8,"ion-row",[],null,null,null,c.qb,c.D)),o["\u0275did"](19,49152,null,0,u.IonRow,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],null,null),(l()(),o["\u0275eld"](20,0,null,0,1,"ion-col",[["class","bg-general"],["size","4"]],null,null,null,c.V,c.i)),o["\u0275did"](21,49152,null,0,u.IonCol,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],{size:[0,"size"]},null),(l()(),o["\u0275eld"](22,0,null,0,2,"ion-col",[["class","bg-general"],["size","4"]],null,null,null,c.V,c.i)),o["\u0275did"](23,49152,null,0,u.IonCol,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],{size:[0,"size"]},null),(l()(),o["\u0275eld"](24,0,null,0,0,"img",[["class","custom-avatar"],["src","../../../assets/asms/perfil.png"]],null,null,null,null,null)),(l()(),o["\u0275eld"](25,0,null,0,1,"ion-col",[["class","bg-general"],["size","4"]],null,null,null,c.V,c.i)),o["\u0275did"](26,49152,null,0,u.IonCol,[o.ChangeDetectorRef,o.ElementRef,o.NgZone],{size:[0,"size"]},null),(l()(),o["\u0275and"](16777216,null,0,1,null,h)),o["\u0275did"](28,278528,null,0,g.NgForOf,[o.ViewContainerRef,o.TemplateRef,o.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var e=n.component;l(n,3,0,"medium"),l(n,10,0,"home"),l(n,11,0,"home"),l(n,21,0,"4"),l(n,23,0,"4"),l(n,26,0,"4"),l(n,28,0,e.alumnos)}),null)}function R(l){return o["\u0275vid"](0,[(l()(),o["\u0275eld"](0,0,null,null,1,"app-hijos",[],null,null,null,C,p)),o["\u0275did"](1,114688,null,0,a,[u.MenuController,u.NavController,u.LoadingController,u.AlertController,i.a,r.a,m.b,f.m],null,null)],(function(l,n){l(n,1,0)}),null)}var v=o["\u0275ccf"]("app-hijos",a,R,{},{},[]),b=e("s7LF");e.d(n,"HijosPageModuleNgFactory",(function(){return _}));var _=o["\u0275cmf"](s,[],(function(l){return o["\u0275mod"]([o["\u0275mpd"](512,o.ComponentFactoryResolver,o["\u0275CodegenComponentFactoryResolver"],[[8,[d.a,v]],[3,o.ComponentFactoryResolver],o.NgModuleRef]),o["\u0275mpd"](4608,g.NgLocalization,g.NgLocaleLocalization,[o.LOCALE_ID,[2,g["\u0275angular_packages_common_common_a"]]]),o["\u0275mpd"](4608,b["\u0275angular_packages_forms_forms_o"],b["\u0275angular_packages_forms_forms_o"],[]),o["\u0275mpd"](4608,u.AngularDelegate,u.AngularDelegate,[o.NgZone,o.ApplicationRef]),o["\u0275mpd"](4608,u.ModalController,u.ModalController,[u.AngularDelegate,o.ComponentFactoryResolver,o.Injector]),o["\u0275mpd"](4608,u.PopoverController,u.PopoverController,[u.AngularDelegate,o.ComponentFactoryResolver,o.Injector]),o["\u0275mpd"](1073742336,g.CommonModule,g.CommonModule,[]),o["\u0275mpd"](1073742336,b["\u0275angular_packages_forms_forms_d"],b["\u0275angular_packages_forms_forms_d"],[]),o["\u0275mpd"](1073742336,b.FormsModule,b.FormsModule,[]),o["\u0275mpd"](1073742336,u.IonicModule,u.IonicModule,[]),o["\u0275mpd"](1073742336,f.o,f.o,[[2,f.t],[2,f.m]]),o["\u0275mpd"](1073742336,s,s,[]),o["\u0275mpd"](1024,f.k,(function(){return[[{path:"",component:a}]]}),[])])}))}}]);