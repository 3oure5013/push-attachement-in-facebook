var request = require('request');

/*
| @params 
| URL : 'https://graph.facebook.com/v2.6/106650577838707/message_attachments?access_token=<PAGE_ACCESS_TOKEN>'
| OBJECT_URL : url of the object
| OBJECT_TYPE : image, video, audio, file
| PAGE_ACCESS_TOKEN : token generated on https://developers.facebook.com/docs/marketing-api/access/ that give  
| access to facebook graph api
|
|@return
|body: '{"attachment_id":"610873522933283"}'
*/


var imageUploadWithFbGrphApi = (OBJECT_URL_PARAM, OBJECT_TYPE_PARAM) => {
  var OBJECT_URL = OBJECT_URL_PARAM //"https://proxymedia.woopic.com/api/v1/images/1202%2F/offre-options/seo-modalites-de-resiliation.jpg"
  var OBJECT_TYPE = OBJECT_TYPE_PARAM || "image" ; //image
  const PAGE_ACCESS_TOKEN = "EAAGU9tyMafUBACq0hqsNANtwMbu5EsQiyvtCynZBuURLoYEKaEzL5MgIn0IoojAEUeCG4WmZByc6tqQvFKcToXDcesMJZAkUIMcvqLY1ar5cqv39Vnt0gZC1hqRZBYnoADt5yg5uBUcZBLhXF2oHi06ldwDxV2pWanR6TgyLjAZCyImFHZCox3zkvmhe6i6OCNhKaK6cFnlOnQZDZD";
  var headers = {
    'Content-Type': 'application/json'
  };

  var dataString = '{ "message":{ "attachment":{ "type":"' + OBJECT_TYPE + '", "payload":{ "is_reusable": true, "url":"' + OBJECT_URL + '" } } } }';

  var URL = 'https://graph.facebook.com/v2.6/106650577838707/message_attachments?access_token=' + PAGE_ACCESS_TOKEN
  var options = {
    url: URL,
    method: 'POST',
    headers: headers,
    body: dataString
  };

  function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log('-----------------AN ERROR OCCURED -----------------')
      console.log("ERROR : " + JSON.stringify(error));
    }
    console.log("THE OBJECT IN BETTER UPLOADED");
    console.log(response.body)
    return response.body;
  }
  request(options, callback);
}

var imgurl = "https://smartly-image-stage.s3.us-west-2.amazonaws.com/1596535438194.png"
//imageUploadWithFbGrphApi(imgurl, "image")


/*
|-----|Smartly side|-----|
|@params
|OBJECT_TYPE : image, video, audio, file
|Use the api return
|@return
|body: '{"attachment_id":"ATACHEMENT_ID_RETURNED"}'
  {
    "type": "OBJECT_TYPE",
    "payload": {
      "attachment_id": "ATACHEMENT_ID_RETURNED" / * au lieu de« url »:« https://blabla.com »* /
    }
  }
*/
 /*
 {
    "type": "image",
    "payload": {
      "attachment_id": "349322022869623" 
    }
  }
*/