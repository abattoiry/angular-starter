
// import { Injectable, Inject, forwardRef } from '@angular/core';
// import { Http, Response, URLSearchParams, Headers } from '@angular/http';
// import { Observable } from 'rxjs/Observable';

// import { LoggerService } from '../service';

// declare var jQuery: any;
// declare var document: any;

// @Injectable()
// export class UIHelperService {

//     constructor(private _http: Http, @Inject(forwardRef(() => LoggerService)) private _logger: LoggerService) { }

//     locale = {
//         en: {
//             month_names: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
//             month_names_short: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
//         }
//     }

//     showLoader() {
//         jQuery(".se-pre-con").fadeIn("slow");
//     }

//     hideLoader() {
//         jQuery(".se-pre-con").fadeOut("slow");
//     }

//     datePicker(elementSelector: string, thisObject: any, callBack: any) {
//         jQuery(elementSelector).datepicker({
//             autoclose: true,
//             todayHighlight: true
//         }).on('changeDate', function () {
//             thisObject.purchaseDate = $(this).find("input").val();
//             callBack.call(thisObject);
//         });
//     }

//     showBootstrapModal(elementSelector: string) {
//         this.checkboxRadioUI();
//         jQuery(elementSelector).modal('show');
//     }

//     hideBootstrapModal(elementSelector: string) {
//         jQuery(elementSelector).modal('hide');
//     }

//     setStaticJSComponent() {
//         jQuery(document).on('click', '.accPlusMinus .accordion-toggle', function () {
//             jQuery(this).find('.indicator').toggleClass('glyphicon-minus  glyphicon-plus');
//         });

//         jQuery(document).on('click', '.accUpDown .accordion-toggle', function () {
//             jQuery(this).find('.indicator').toggleClass('glyphicon-menu-up glyphicon-menu-down');
//         })
//     }

//     setOwlCarousel() {
//         //Owl carousel Function
//         jQuery(".owl-carousel").on('initialized.owl.carousel changed.owl.carousel refreshed.owl.carousel', function (event: any) {
//             if (!event.namespace) return;
//             var carousel = event.relatedTarget,
//                 element = event.target,
//                 current = carousel.current();
//             jQuery('.owl-next', element).toggleClass('disabled', current === carousel.maximum());
//             jQuery('.owl-prev', element).toggleClass('disabled', current === carousel.minimum());
//         });

//         jQuery("#categories_slider_business").owlCarousel({
//             items: 5,
//             slideBy: 1,
//             loop: false,
//             nav: true,
//             dots: false,
//             responsive: { 0: { items: 5 }, 421: { items: 5 }, 768: { items: 5 }, 992: { items: 5 } }
//         });
//     }

//     downloadHTML() {
//         if (document.documentMode) {
//             //var command = false;
//             //document.ir = document.createElement('iframe');
//             //document.ir.id = 'ifr';
//             //	document.body.appendChild(document.ir);

//             //	document.getElementById('ifr').contentWindow.document.write("dkfkdjkfjcvjcxjvjxkcjvkjxckvjkxjcvkjxlcvjxljcvlkjxcklvjkxcjvlkjxckljvkxlcjkvjxkcjvkxjckvjkxcjvkjxckjvkxjcvkjxkckjvxkljvkxjcvkjxckjvkxjkvjkdsf");
//             //		document.getElementById('ifr').contentWindow.document.charset = "utf-8";
//             //		document.getElementById('ifr').contentWindow.document.command = document.execCommand('SaveAs', true, "abc.html");
//         }
//         else {
//             let dataGet: any = 'data:application/html;charset=utf-8,' + encodeURIComponent("");
//             jQuery("#checkDownload").attr({ 'download': "abcdsds.html", 'href': dataGet, 'target': '_blank' });
//             //body.removeChild(ir);
//         }
//     }

//     calculateStringLenth(inputData: string) {
//         return jQuery.trim(inputData).length;
//     }

//     validateInputField(inputData: string) {
//         if (jQuery.trim(inputData).length == 0) {
//             return false;
//         } else {
//             return true;
//         }
//     }

//     isNumber(inputNumber: any) {
//         return jQuery.isNumeric(inputNumber);
//     }

//     getLoggedInAboId() {
//         //let aboId: string = "9184496"; 
//         //let aboId: string = jQuery('#aboId').val();
//         let aboId: string = "2001757";
//         return aboId;
//     }

//     getLoggedInCountryCode() {
//         //let loggedInCountry: string = "MY";
//         let loggedInCountry = jQuery('#countryIsoCode').val();
//         return loggedInCountry;
//     }

//     getCurrentlanguageCode() {
//         //let lang = "en";
//         let lang = jQuery('#currentLanguage').val();
//         lang = lang ? lang : "en";
//         return lang;
//     }

//     getCurrentPageId() {
//         //let pageId = "dashboard";
//         let pageId = jQuery('#currentPageId').val();
//         return pageId;
//     }

//     getAboClassification() {
//         //let aboClassification = "platinum";
//         let aboClassification = jQuery('#accountClassficationCode').val();
//         if (aboClassification == "PlatinumAndAbove" || aboClassification == "DiamondAndAbove") {
//             return true;
//         } else {
//             return false;
//         }
//     }

//     isEmptyObject(obj: any) {
//         return (Object.keys(obj).length === 0);
//     }

//     hideDom(selector: string) {
//         jQuery(selector).hide();
//     }
//     showDom(selector: string) {
//         jQuery(selector).show();
//     }

//     getDomValue(selector: string){
//         return jQuery(selector).val();
//     }

//     getDOMText(selector: string){
//         return jQuery(selector).html();
//     }

//     dateAMPM() {
//         let date: any = new Date();
//         let hours: any = date.getHours();
//         let minutes: any = date.getMinutes();
//         let ampm: any = hours >= 12 ? 'pm' : 'am';
//         hours = hours % 12;
//         hours = hours ? hours : 12; // the hour '0' should be '12'
//         minutes = minutes < 10 ? '0'+minutes : minutes;
//         let strTime = hours + ':' + minutes + ' ' + ampm;
//         return strTime;
//     }

//     getMonthName(lang: string, date: Date) {
//         lang = lang && (lang in this.locale) ? lang : 'en';
//         return this.locale[lang].month_names[date.getMonth()];
//     }

//     getMonthNameShort(lang: string, date: Date) {
//         lang = lang && (lang in this.locale) ? lang : 'en';
//         return this.locale[lang].month_names_short[date.getMonth()];
//     }

//     getCurrentDate(lang: string) {
//         let currDate = new Date();
//         return {
//             "date": currDate.getDate(),
//             "month": this.getMonthName(lang, currDate),
//             "year": currDate.getFullYear()
//         }
//     }   

//     getCurrentDateDDMMYYYY(){
//         let today: any = new Date();
//         let dd: any = today.getDate();
//         let mm: any = today.getMonth()+1; //January is 0!

//         let yyyy = today.getFullYear();
//         if(dd<10){
//             dd='0'+dd;
//         } 
//         if(mm<10){
//             mm='0'+mm;
//         } 
//         return dd+'/'+mm+'/'+yyyy;
//     }

//     checkboxRadioUI() {
//         //Global radio and checkbox custom design function Start
//         $('.checkbox input[type=checkbox], .radio input[type=radio],.checkbox-inline input[type=checkbox], .radio-inline input[type=radio]').each(function () {
//             $(this).wrap('<label class="radio-check"></label>').css({ 'position': 'relative', 'z-index': -1 });
//             if ($(this).is(':checked')) {
//                 $(this).parent().addClass('checked');
//             }
//         });

//         $('.checkbox input[type=checkbox], .checkbox-inline input[type=checkbox]').parent().addClass('checkbox');
//         $('.checkbox input[type=radio], .radio-inline input[type=radio]').parent().addClass('radiobutton');

//         $('.checkbox input[type=checkbox], .radio input[type=radio], .checkbox-inline input[type=checkbox], .radio-inline input[type=radio]').click(function () {
//             if ($(this).is(':checked')) {
//                 $(this).parent().addClass('checked');
//             } else {
//                 $(this).parent().removeClass('checked');
//             }
//         });

//         $('.checkbox input[type=checkbox], .radio input[type=radio], .checkbox-inline input[type=checkbox], .radio-inline input[type=radio]').parent().hover(function () {
//             $(this).addClass('hovered');
//         }, function () {
//             $(this).removeClass('hovered');
//         });

//         $('.checkbox input[type=radio], .radio-inline input[type=radio]').click(function () {
//             var i_name = $(this).attr('name');
//             $('.radio input[type=radio][name=' + i_name + '], .radio-inline input[type=radio][name=' + i_name + ']').parent().removeClass('checked');
//             $(this).parent().addClass('checked');
//         });

//         $('.checkbox input:disabled, .radio-inline input:disabled').parent().addClass('disabled');
//         //Global radio and checkbox custom design function end
//     }

//     tabContentHandleForMobile() {
//         if (jQuery('#productWarrantyTab')) {
//             jQuery('#productWarrantyTab').tabCollapse();
//         }

//         if (jQuery('#activityReport')) {
//             jQuery('#activityReport').tabCollapse();
//         }

//     }

//     drawCircularProgress = function (percentFill: any, textCenter: string) {
//         jQuery("#test-circle").circliful({
//             animationStep: 5,
//             foregroundColor: "#008FC5",
//             backgroundColor: "#eee",
//             foregroundBorderWidth: 15,
//             backgroundBorderWidth: 15,
//             percentageTextSize: 30,
//             //text: "Form 21% BV",
//             fontColor: "#008FC5",
//             //textColor: "#999",
//             //pointSize: "60",
//             percent: percentFill,
//             replacePercentageByText: textCenter
//         });
//     }

//     autoComplete(data: any) {

//         jQuery.widget("custom.volumeToAutoComplete", jQuery.ui.autocomplete, {
//             _create: function () {
//                 var count = 0;
//                 // get instance specific options form the html data attr
//                 var option = this.element.data("options");
//                 // set the options to the widget
//                 this._setOptions({
//                     source: this.source
//                 });

//                 // call the _super()
//                 jQuery.ui.autocomplete.prototype._create.call(this);

//             },
//             options: {
//                 select: function (event: any, ui: any) {
//                     event.preventDefault();
//                     $(event.target).val(ui.item.label);
//                     $(event.target).parent().next().html(ui.item.value)
//                 }
//             },
//             _renderItem: function (ul: any, item: any) {
//                 var renderHtml = "<a href='#' ><div class='name'>" + item.label + "</div></a>";
//                 return $("<li>")
//                     .data("item.autocomplete", item)
//                     .append(renderHtml)
//                     .appendTo(ul);
//             },
//             source: function (request: any, response: any) {

//                 function checkForABO(queryString: string) {
//                     return queryString.toLowerCase().indexOf(request.term.toLowerCase()) !== -1;
//                 }

//                 if (request.term === "") {
//                     response([]);
//                     return;
//                 }

//                 var length = data.length;
//                 var matches: Array<any> = [];
//                 for (var i = 0; i < length; i++) {
//                     var abo = data[i];
//                     if (checkForABO(abo.aboName) || checkForABO(abo.aboNo)) {
//                         var obj = {};
//                         obj["label"] = abo.aboNo + " " + abo.aboName;
//                         obj["value"] = abo.state;
//                         matches.push(obj);
//                     }
//                 }

//                 response(matches);
//             }

//         })

//         jQuery(".autocomplete").volumeToAutoComplete({
//             minLength: 3
//         })
//     }

//     autoCompleteProductWarranty(data: any, callbackFunction: any, thisObject:any) {

//         jQuery.widget("custom.productWarranty", jQuery.ui.autocomplete, {
//             _create: function () {
//                 var count = 0;
//                 // get instance specific options form the html data attr
//                 var option = this.element.data("options");
//                 // set the options to the widget
//                 this._setOptions({
//                     source: this.source
//                 });

//                 // call the _super()
//                 jQuery.ui.autocomplete.prototype._create.call(this);

//             },
//             options: {
//                 select: function (event: any, ui: any) {
//                     event.preventDefault();
//                     $(event.target).val(ui.item.label);
//                     //$(event.target).parent().next().html(ui.item.value)
//                     callbackFunction.call(thisObject,ui.item.label, event.target.id);
//                 }
//             },
//             _renderItem: function (ul: any, item: any) {
//                 var renderHtml = "<a href='#' ><div class='name'>" + item.label + "</div></a>";
//                 return $("<li>")
//                     .data("item.autocomplete", item)
//                     .append(renderHtml)
//                     .appendTo(ul);
//             },
//             source: function (request: any, response: any) {
//                 function checkForABO(queryString: string) {
//                     return queryString.toLowerCase().indexOf(request.term.toLowerCase()) !== -1;
//                 }

//                 if (request.term === "") {
//                     response([]);
//                     return;
//                 }

//                 var length = data.length;
//                 var matches: Array<any> = [];
//                 for (var i = 0; i < length; i++) {
//                     var abo = data[i];
//                     if (checkForABO(abo.aboName) || checkForABO(abo.aboNo)) {
//                         var obj = {};
//                         obj["label"] = abo.aboNo;
//                         obj["value"] = abo.aboNo;
//                         matches.push(obj);
//                     }
//                 }
//                 response(matches);
//             }

//         });

//         jQuery(".autocomplete").productWarranty({
//             minLength: 3
//         });
//     }

// }
