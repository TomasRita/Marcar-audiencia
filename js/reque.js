"use strict"
function ajax(obj, formData) {
  var urlHome,objJson;
  urlHome=document.getElementById("urlHome");
  if (!urlHome) {
    alert("Configure o elemento id url")
  }
  if (!formData) {
    requisicao(ObjXMLHTTP(), obj, urlHome.href + '/' + obj.file ,ajaxCallback) 
  } else {
    requisicao(ObjXMLHTTP(), obj, formData.href + '/' + obj.file ,ajaxCallback) 
  }
  function requisicao(ObjAjax, data, urlData ,callback) {
    ObjAjax.onreadystatechange = function () {
      callback(ObjAjax.responseText , ObjAjax.readyState);
    }
    ObjAjax.open('POST',urlData,true);
    if (String(data).indexOf('FormData') == -1) {
      ObjAjax.setRequestHeader("Content-type","application/json; charset=utf-8");
      ObjAjax.send(JSON.stringify(data))
    } else {
      ObjAjax.setRequestHeader('X-requested-with', 'XMLHttpRequest');
      ObjAjax.send(data)
    }
 }
  //Return um obj XMLHttpRequest 
  function ObjXMLHTTP(){
    return new (window.XMLHttpRequest || ActiveXObject)
    ('MSLXML2.XMLHTTP.3.0')
  }
  function ajaxCallback(response,state) {
    console.log(response)
  }

}
var ObjData={
  file:'rquer.php'
}
 ajax(ObjData)

