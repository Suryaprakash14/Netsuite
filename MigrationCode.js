/**
 * @NApiVersion 2.x
 * @NScriptType ClientScript
 * @NModuleScope SameAccount

 * Module Description
 * Offer Web Display Field Length Validation
 * 
 * Version    Date            Author           Remarks
 * 2.00       3/28/2022       Indhumalar M
 *
*/
/**
 * The recordType (internal id) corresponds to the "Applied To" record in your script deployment. 
 * @appliedtorecord recordType
 *   
 * @param {String} type Sublist internal id
 * @param {String} name Field internal id
 * @param {Number} linenum Optional line item number, starts from 1
 * @returns {Boolean} True to continue changing field value, false to abort value change
 */
/*
Web Key Benefits Statement	4000	custrecord_of_key_benefits_statement
Web Key Benefits Statement (Spanish)	4000	custrecord_of_key_benefits_statement_spa
Web Makering Incentive Description	2999	custrecord_of_marketing_inventive_descri	Rich Text
Web Makering Incentive Description (Spanish)	2999	custbody_of_marketing_inc_descri_spa	Rich Text
Web Offer Long Description	4000	custrecord_of_offer_long_description	Rich Text
Web Offer Long Description (Spanish)	4000	custrecord_of_offer_long_description_spa	Rich Text
Web Offer Summary	2999	custrecord_of_offer_summary	Rich Text
Web Offer Summary (Spanish)	2999	custrecord_of_offer_summary_spa	Rich Text
Contact Center Offer Description	500	custrecord_contact_center_offer_desc
Updated Reason	300	custrecord_of_updated_reason
*/
 
 
define(['N/currentRecord'],

function(currentRecord) {
  
         
    /**
     * Validation function to be executed when record is saved.
     *
     * @param {Object} scriptContext
     * @param {Record} scriptContext.currentRecord - Current form record
     * @returns {boolean} Return true if record is valid
     *
     * @since 2015.2
     */
   function saveFieldLengthVal(scriptContext)  {
     
     
      var currentRecord = scriptContext.currentRecord;
   	
    	var lenInternalDesc = String(currentRecord.getValue({
    	    fieldId: 'custrecord_of_internal_description'
    	})).length;
''
         log.debug({title :'lenInternalDesc', details : lenInternalDesc});
     
        var lenupdateReason = String(currentRecord.getValue({
    	    fieldId: 'custrecord_of_updated_reason'
    	})).length;
     


    	//Rich Text fields
      
        var lenWebKeyBenefits = getLengthIncludingLineBreak('custrecord_of_key_benefits_statement');
    	var lenWebKeyBenefitsSpa = getLengthIncludingLineBreak('custrecord_of_key_benefits_statement_spa');
    	var lenMarketingIncentive = getLengthIncludingLineBreak('custrecord_of_marketing_inventive_descri');
    	var lenMarketingIncentiveSpa = getLengthIncludingLineBreak('custrecord_of_marketing_inc_descri_spa');
    	var lenLongDesc = getLengthIncludingLineBreak('custrecord_of_offer_long_description');
    	var lenLongDescSpa = getLengthIncludingLineBreak('custrecord_of_offer_long_description_spa');
    	var lenSummary = getLengthIncludingLineBreak('custrecord_of_offer_summary');
    	var lenSummarySpa = getLengthIncludingLineBreak('custrecord_of_offer_summary_spa');
        var lenContactCenterDesc = getLengthIncludingLineBreak('custrecord_contact_center_offer_desc');
     
    
     
  
     
        if (lenInternalDesc > 255) {
    		alert("Internal Description field is limited to 255 Characters. \nPlease make necessary corrections.");
    		return false;
    	}
    	if (lenupdateReason > 300) {
    		alert("The Updated Reason field is limited to 300 Characters. \nPlease make necessary corrections.");
    		return false;
    	}
    	if (lenContactCenterDesc > 500) {
    		alert("The Contact Center Offer Description field is limited to 500 Characters. \nPlease make necessary corrections.");
    		return false;
    	}
    	if (lenWebKeyBenefits > 4000) {
    		alert("The Web Key Benefits Statement field is limited to 4000 Characters. \nPlease make necessary corrections.");
    		return false;
    	}
    	if (lenWebKeyBenefitsSpa > 4000) {
    		alert("The Web Key Benefits Statement (Spanish) field is limited to 4000 Characters. \nPlease make necessary corrections.");
    		return false;
    	}
    	if (lenMarketingIncentive > 2999) {
    		alert("The Web Makering Incentive Description field is limited to 2999 Characters. \nPlease make necessary corrections.");
    		return false;
    	}
    	if (lenMarketingIncentiveSpa > 2999) {
    		alert("The Web Makering Incentive Description (Spanish) field is limited to 2999 Characters. \nPlease make necessary corrections.");
    		return false;
    	}
    	//alert('lenLongDesc:'+lenLongDesc);
    	if (lenLongDesc > 10000) {
    		alert("The Web Offer Long Description  field is limited to 10000 Characters. \nPlease make necessary corrections.");
    		return false;
    	}
    	if (lenLongDescSpa > 10000) {
    		alert("The Web Offer Long Description (Spanish) field is limited to 10000 Characters. \nPlease make necessary corrections.");
    		return false;
    	}
    	if (lenSummary > 2999) {
    		alert("The Web Offer Summary field is limited to 2999 Characters. \nPlease make necessary corrections.");
    		return false;
    	}
    	if (lenSummarySpa > 2999) {
    		alert("The Web Offer Summary (Spanish) field is limited to 2999 Characters. \nPlease make necessary corrections.");
    		return false;
        }
    	
        //Validation on Spanish alt text fields
        var smallImageAltTxtSpaLength = getLengthIncludingSpanishChars('custrecord_of_image_small_alt_text_spa');
        if(smallImageAltTxtSpaLength>78) {
    		alert("The Web Small Offer Image Alt Text (Spanish) field is limited to 78 Characters. \nPlease make necessary corrections.");
    		return false;
        }
        
        var logoAltTxtSpaLength = getLengthIncludingSpanishChars('custrecord_of_logo_alt_text_spa');
        if(logoAltTxtSpaLength>78) {
    		alert("The AARP Logo Alt Text (Spanish) field is limited to 78 Characters. \nPlease make necessary corrections.");
    		return false;
        }
        
        var cobrandingImageAltTxtSpaLength = getLengthIncludingSpanishChars('custrecord_of_co_branding_alt_text_spa');
        if(cobrandingImageAltTxtSpaLength>78) {
    		alert("Web Co-branding Image Alt Text (Spanish) field is limited to 78 Characters. \nPlease make necessary corrections.");
    		return false;
        }
        
        var largeImageAltTxtSpaLength = getLengthIncludingSpanishChars('custrecord_of_image_big_alt_text_spa');
        if(largeImageAltTxtSpaLength>78) {
    		alert("Web Large Offer Image Alt Text (Spanish) field is limited to 78 Characters. \nPlease make necessary corrections.");
    		return false;
        }
      
        
    
    	
    	function getLengthIncludingLineBreak(fieldName){
    	    
    	    var str = currentRecord.getValue({ fieldId:fieldName });
          
    		if(!str)
    			return 0;
    		var lineCount = str.split('\n').length;
    		var newCount = str.length + (lineCount - 1);
    	    //if( fieldName=='custbody_of_offer_long_description')
    	    //alert("Count: "+str.length + "\n NewCount: "+newCount)
    		return newCount;
    	}
    	
    	function getLengthIncludingSpanishChars(fieldName){
    		var str = currentRecord.getValue({ fieldId:fieldName });
    		
    		var strLength = str.length;
    		var actualLength = strLength;
    		for (var idx=0; idx<strLength; idx++){
    			if( str[idx] == 'á' || str[idx] == 'Á'
		        || str[idx] == 'é' || str[idx] == 'É' 
		        ||str[idx] == 'í' ||str[idx] == 'Í' 
		        ||str[idx] == 'ó' ||str[idx] == 'Ó' 
		        ||str[idx] == 'ú' ||str[idx] == 'Ú' 
		        || str[idx] == 'ñ' || str[idx] == 'Ñ'
		        ||str[idx] == '¿' )
    			actualLength++;
    		}
    		
    		return actualLength;
    	}
     return true;
    }
   return {
       saveRecord: saveFieldLengthVal
    };
    
});
