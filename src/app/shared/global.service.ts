import { Injectable, Inject, forwardRef } from '@angular/core';
import { Http, Response, URLSearchParams, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { LoggerService } from './logger.service';

@Injectable()
export class GLobalService {
  public cloneObject = {};
  public baseURL: string;
  private sep = '/';

  // baseURL = 'https://localhost:8080/demo/businesscentre/';
  // baseURL = '/_ui/addons/lynxbusinesscenter/responsive/common/business/public/api/';

  private serviceURL: any;

  constructor(
    private _http: Http,
    private _logger: LoggerService,
  ) {
    // this.initiliazeURLs();
  }

  getServiceURL(urlName: string) {
    return this.serviceURL[urlName];
  }

  ajaxCallerGet(requestURL: string, requestParams: URLSearchParams): Observable<any> {
    // this._uiHelper.showLoader();
    return this._http.get(requestURL, { search: requestParams })
      .map(this.extractData)
      .do((data) => { /*this._uiHelper.hideLoader();*/ })
      .catch(this.handleError);
  }

  ajaxCallerPost(requestURL: string, requestParams: Object): Observable<any> {

    // this._uiHelper.showLoader();
    let body = JSON.stringify(requestParams);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ 'headers': headers });

    /*return this._http.get(requestURL, { search: body })
        .map(this.extractData)
        .do(data => { })
        .catch(this.handleError);*/

    return this._http.post(requestURL, body, options)
      .map(this.extractData)
      .do((data) => { })
      .catch(this.handleError);
  }

  downloadfile() {
    const headers = new Headers();
    headers.append('responseType', 'arraybuffer');
    return this._http.get('build/assets/ALSCalculator.htm?file=html')
      .map(this.getHTMLFile)
      .catch(this.handleError);
  }

  handleError(error: any) {

    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

  drawCircle = function (ctx: any, color: any, lineWidth: any, percent: any) {
    percent = Math.min(Math.max(0, percent || 1), 1);
    ctx.beginPath();
    ctx.arc(0, 0, 50, 0, Math.PI * 2 * percent, false);
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;
    ctx.stroke();
  };

  setCloneObject(cloneObj: any) {
    this.cloneObject = cloneObj;
  }

  getCloneObject() {
    return this.cloneObject;
  }

  keyValuePair(arr: any) {
    let obj = {};
    arr.forEach((element) => {
      obj[element.key] = element.value;
    });
    return obj;
  }

  generateKeyValueCount(length: number) {
    let arr: any[] = [];
    for (let index = 0; index < length; index++) {
      let obj = {};
      obj['key'] = index + 1;
      obj['value'] = index + 1;
      arr.push(obj);
    }

    return arr;
  }

  initiliazeURLs() {
    if (window.location.href.indexOf('localhost') > -1) {
      this.baseURL = 'api/';
      this.serviceURL = {
        'dashboard': this.baseURL + 'dashboard.json',
        'productWarranty': {
          'prodctWarrantyInitURL': this.baseURL + 'productsWarrantyInit.json',
          'myProductsAndDownline': this.baseURL + 'productsWarrantyMyProductsRegistered.json',
          'trackReplacement': this.baseURL + 'productsWarrantyMyProductsRegistered.json',
          'search': '/businesscenter/product-warranty/search',
          'registrationAndEdit': this.baseURL + 'productsWarrantyEditView.json'
        },
        'myPerformance': {
          'myALSPoint': this.baseURL + 'myAlsPoints.json',
          'myALSCalculator': this.baseURL + 'myAlsCalculator.json',
          'myGIPProgress': this.baseURL + 'myGipProgress.json',
          'myPlatinumReQualification': this.baseURL + 'myPlatinumReQualification.json'
        },
        'bec': {
          'becBooking': this.baseURL + 'becBooking.json',
          'becBookingConfirmation': this.baseURL + 'becBookingConfirmation.json',
          'becBookingConfirmationSuccess': this.baseURL + 'becBookingConfirmationSuccess.json',
          'becInquiry': '',
        },
        'businessReport': {
          'activityReportAll': this.baseURL + 'activityReport.json',
          'progressReport': this.baseURL + 'progressReport.json',
          'intentToContinue': this.baseURL + 'intentToContinue.json',
          'newAboActivationReport': this.baseURL + 'newAboActivationReport.json',
          'newAboRenewalReport': this.baseURL + 'newAboRenewalReport.json'
        },
        'pvbv': {
          'pvbvPerformanceBonusSchedule': this.baseURL + 'pvbvPerformanceBonusSchedule.json',
          'pvbvEstimatedSummary': this.baseURL + 'pvbvEstimatedSummary.json',
          'pvbvSummaryByCountry': this.baseURL + 'pvbvSummaryByCountry.json',
          'pvbvHistory': this.baseURL + 'pvbvHistory.json',
          'pvbvDownline': this.baseURL + 'pvbvDownline.json',
          'pvbvPersonal': this.baseURL + 'pvbvPersonal.json',
          'pvbvAutoSuggest': this.baseURL + 'pvbvAutoSuggest.json'
        },
        'pinInvt': {
          'pinInvitation': this.baseURL + 'pinInvitation.json',
          'pinInvitationSubmit': this.baseURL + 'pinInvitationSubmit.json'
        },
        'onlineAward': {
          'initAwardPageData': this.baseURL + 'initAwardPageData.json',
          'onlineAwardPost': this.baseURL + 'onlineAwardPost.json'
        },
        'itccas': {
          'itccasInitData': this.baseURL + 'itccasInquiryInit.json',
          'itccasInquiry': this.baseURL + 'itccasInquiry.json',
          'itccasDetailInquiry': this.baseURL + 'OnlineITCCASEditDetail(TT-36).json'
        }
      }
    } else {
      this.baseURL = '/_ui/addons/lynxbusinesscenter/responsive/common/business/public/api/';
      this.serviceURL = {
        'dashboard': '/businesscenter/pVbVInquiry/dashboard',
        'productWarranty': {
          'prodctWarrantyInitURL': '/businesscenter/product-warranty/initial',
          'myProductsAndDownline': '/businesscenter/product-warranty/products',
          'trackReplacement': '/businesscenter/product-warranty/trackReplacement',
          'search': '/businesscenter/product-warranty/search',
          'registrationAndEdit': '/businesscenter/product-warranty',
          'getAboDetail': '/businesscenter/aboDetails',
          'postCodeVerify': '/businesscenter/isServicable'
        },
        'myPerformance': {
          'myALSPoint': '/businesscenter/als',
          'myALSCalculator': '/businesscenter/alscalculator',
          'myGIPProgress': '/businesscenter/gip',
          'myPlatinumReQualification': '/businesscenter/dd'
        },
        'bec': {
          'becBooking': this.baseURL + 'becBooking.json',
          'becBookingConfirmation': this.baseURL + 'becBookingConfirmation.json',
          'becBookingConfirmationSuccess': this.baseURL + 'becBookingConfirmationSuccess.json',
          'becInquiry': ''
        },
        'businessReport': {
          'activityReportAll': '/businesscenter/activityReport',
          'progressReport': '/businesscenter/ddProgressReport',
          'intentToContinue': '/businesscenter/intentToContinue',
          'newAboActivationReport': this.baseURL + 'newAboActivationReport.json',
          'newAboRenewalReport': this.baseURL + 'newAboRenewalReport.json',
          'progressReportLegend': this.baseURL + 'progressReportLegend.json'
        },
        'pvbv': {
          'pvbvPerformanceBonusSchedule': '/businesscenter/pVbVInquiry/performanceBonus',
          'pvbvEstimatedSummary': '/businesscenter/pVbVInquiry/estimatedSummary',
          'pvbvSummaryByCountry': '/businesscenter/pVbVInquiry/summaryByCountry',
          'pvbvHistory': '/businesscenter/pVbVInquiry/performanceHistory',
          'pvbvDownline': this.baseURL + 'pvbvDownline.json',
          'pvbvPersonal': this.baseURL + 'pvbvPersonal.json',
          'pvbvAutoSuggest': '/businesscenter/downlines'
        },
        'pinInvt': {
          'pinInvitation': this.baseURL + 'pinInvitation.json',
          'pinInvitationSubmit': this.baseURL + 'pinInvitationSubmit.json'
        },
        'onlineAward': {
          'initAwardPageData': '/businesscenter/awardReporting',
          'onlineAwardPost': '/businesscenter/awardReportingData'
        },
        'itccas': {
          'itccasInitData': this.baseURL + 'itccasInquiryInit.json',
          'itccasInquiry': '/businesscenter/itc-header-enquiry',
          'itccasDetailInquiry': '/businesscenter/itc/cas'
        }
      }
    }
  }

  private getHTMLFile(res: any) {
    return new Blob([res._body], { type: 'text/html' });
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }
}
