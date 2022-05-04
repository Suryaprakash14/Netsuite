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
    	  var currentRecord = scriptContext.currentRecord;
    	  var vendorName = currentRecord.getValue({fieldId : 'entity'});
          if (vendorName)
              currentRecord.setValue({
                  fieldId: 'memo',
                  value: vendorName,
                  ignorefieldIdChange:true
              });

    }


    return {
        
        pageInit: pageInit,
      
    };
    
});
