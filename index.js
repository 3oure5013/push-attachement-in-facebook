var request = require('request');

/*
| @params 
| URL : 'https://graph.facebook.com/v2.6/106650577838707/message_attachments?access_token=<PAGE_ACCESS_TOKEN>'
| OBJECT_URL : url of the object
| OBJECT_TYPE : image, video, audio, file
| PAGE_ACCESS_TOKEN : token generated on https://developers.facebook.com/docs/marketing-api/access/ that give  
| access to facebook graph api
*/
var OBJECT_URL = "https://proxymedia.woopic.com/api/v1/images/1202%2F/offre-options/seo-modalites-de-resiliation.jpg"
var OBJECT_TYPE = 'image'
const PAGE_ACCESS_TOKEN = "EAAGU9tyMafUBAJ4BCwVis0Svhzh56ZBZBYBWgexTmhj61V4nmuIkxCgtHStWpN2uzeeM6jO2yUQADOzmZBZBzKOsZCHZBmfDwKw9L7HJYwPBEPvKTs81B2XZCNgRgZAr0i61wHdCWpkk8pkyYZAAYAgBLqZBlZBo5JPDJTF3GRY2Qp0nl5CMfPg5A58UG5LxYlbZCvgZD";


var headers = {
  'Content-Type': 'application/json'
};

var dataString = '{ "message":{ "attachment":{ "type":"' + OBJECT_TYPE + '", "payload":{ "is_reusable": true, "url":"' + OBJECT_URL + '" } } } }';

var URL = 'https://graph.facebook.com/v2.6/106650577838707/message_attachments?access_token='+PAGE_ACCESS_TOKEN
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
  console.log(response)
}

request(options, callback);


/*
  //Smartly side
  { 
    "type": "video",
    "payload": {
      "attachment_id": "123452640641789" / * au lieu de« url »:« https://blabla.com »* /
    }
  }
 */