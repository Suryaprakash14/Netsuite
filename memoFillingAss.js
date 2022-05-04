/**
 * @NApiVersion 2.x
 * @NScriptType ClientScript
 * @NModuleScope SameAccount
 */
define([],

function() {
	 /**
     * Version 2.0
     * Date    03 FEB 2022
     * Author  Suryaprakash Ragavan
     *
     * Script Description : Set the vendor name on memo field on selection of vendor name in purchase order
     **/
	
    function pageInit(scriptContext) {
    
        var dataGetFromRestlets=https.get('/app/site/hosting/restlet.nl?    script=1418&deploy=1')
        alert(dataGetFromRestlets.body);
        

    	var data={};
    	data={
    			"firstname":"Surya",
    			"lastname": "prakash",
    			"emailid":"something@demo.in"
    	}
    	var headerObj ={
    			name:'Accept-Language',
    			value:'en-us'
    	}
    	var response = https.post({
    		url:'/app/site/hosting/restlet.nl?script=1418&deploy=1',
    		body:data,
    		headers:headerObj
    	});
    	
    	
    	
    	
    	
    	
    	
    	
    	
    	
    	
    	
      log.debug("just check");
      	 var currentRecord = scriptContext.currentRecord;
      	var vendorName = scriptContext.getValue({fieldId : 'entity'});
         currentRecord.setValue({
                  fieldId: 'entity',
                  value: 'Amazon',
                  ignorefieldIdChange:true
              });
         log.debug(vendorName);

    }

    function fieldChanged(scriptContext) {
      alert("some");
         /*var currentRecord = scriptContext.currentRecord;
  currentRecord.setValue({
                  fieldId: 'memo',
                  value: 'vendorName',
                  ignorefieldIdChange:true
              });*/
    	 var currentRecord = scriptContext.currentRecord;
    	  var vendorName = scriptContext.getValue({fieldId : 'entity'});
      log.debug(vendorName);
          if (vendorName){
             scriptContext.setValue({
                  fieldId: 'memo',
                  value: 'surya',
                  ignorefieldIdChange:true
              });
            log.debug("yes i'm running");
          }

    }

    return {
        pageInit: pageInit,
        fieldChanged: fieldChanged,
    };

});
