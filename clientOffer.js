/**
 * @NApiVersion 2.x
 * @NScriptType ClientScript
 * @NModuleScope SameAccount
 */
define(['N/currentRecord', 'N/search'],

function(currentRecord , search) {
  
  
    
    /**
     * Validation function to be executed when field is changed.
     *
     * @param {Object} scriptContext
     * @param {Record} scriptContext.currentRecord - Current form record
     * @param {string} scriptContext.sublistId - Sublist name
     * @param {string} scriptContext.fieldId - Field name
     * @param {number} scriptContext.lineNum - Line number. Will be undefined if not a sublist or matrix field
     * @param {number} scriptContext.columnNum - Line number. Will be undefined if not a matrix field
     *
     * @returns {boolean} Return true if field is valid
     *
     * @since 2015.2
     */
    function clientValidateField(scriptContext) {
    	
    	var currentRecord = scriptContext.currentRecord;
    	var type = scriptContext.sublistId ;
    	var name = scriptContext.fieldId;
    	var linenum = scriptContext.lineNum;
     // alert("type :"+type+"\nname :"+name+"\nlinenum :"+linenum);
    	
    	  try{
    	        
    		  if (name  == 'assemblyitem') {
    	            var selectedBundle = currentRecord.getValue({fieldId:'assemblyitem'});
                
    	            if(selectedBundle && !isApproved(selectedBundle)){
    	                alert('Approve the Bundle prior to adding to the Offer or choose an approved Bundle.');
    	                return false;
    	            }
    	        }
             
    	        if (name == 'item' && type =='item') {
                  
    	            var selectedItem  = currentRecord.getSublistValue({
    	                sublistId: 'item',
    	                fieldId: 'item',
    	                line: linenum
    	            });
    	            alert(selectedItem + '::'+isApproved(selectedItem));
    	            if(selectedItem && !isApproved(selectedItem)){
    	                alert('Approve the Product prior to adding to the offer or choose an approved Product.'); 
    	                return false;  
    	            }
    	        }
    	        // * 5/10/17
    	        // * ME-141 Remove HTML tag validation completly
    		    // if(!cogHTMLValidation.htmlTagValidationRequired(name)) return true;
    			// var value = nlapiGetFieldValue(name);
    			// if(null==value) return true;
    			
    			// var htmlTagList = cogHTMLValidation.gethtmlTagsInString(value);
    			// if(null!=htmlTagList&&htmlTagList.length>0){
    			// 	alert("These HTML tags are not allowed " + htmlTagList);
    			// }	
    		}catch(err){
    		}
    		return true;
    	

    }

    /**
     * Validation function to be executed when sublist line is committed.
     *
     * @param {Object} scriptContext
     * @param {Record} scriptContext.currentRecord - Current form record
     * @param {string} scriptContext.sublistId - Sublist name
     *
     * @returns {boolean} Return true if sublist line is valid
     *
     * @since 2015.2
     */
    function clientValidateLine(scriptContext) {
    	
    	var currentRecord = scriptContext.currentRecord;
    	var type =  scriptContext.sublistId;
    	
    	
    	try{
            if ( type=='item') {
                var selectedItem = currentRecord.getCurrentSublistValue({
                    sublistId: 'item',
                    fieldId: 'item'
                });
                
                if(selectedItem && !isApproved(selectedItem)){
                    alert('Approve the Bundle/Product prior to adding to the offer or choose an approved Bundle/Product.'); 
                    return false;  
                }
            }
    	}catch(err){
    	}
    	return true;

    }

   

    /**
     * Validation function to be executed when record is saved.
     *
     * @param {Object} scriptContext
     * @param {Record} scriptContext.currentRecord - Current form record
     * @returns {boolean} Return true if record is valid
     *
     * @since 2015.2
     */
    function clientSaveRecord() {
    	//Offer Family code Validation
        var offerFamily =  currentRecord.getValue({fieldId:'custbody_offer_family'});
        var offerFamilyCode = currentRecord.getValue({fieldId:'custbody_offer_family_id'});
        if(offerFamily && !offerFamilyCode){
            alert('Please reselect Offer Family to source Offer Family Code');
            return false;
        }
        //INCENTIVE VALIDATION
        
        var incentivesCount = currentRecord.getLineCount({
            sublistId: 'recmachcustrecord_offer'
        });
       // alert('incentivesCount:'+incentivesCount);
        var incentiveArr = [];
        for (var line = 1; incentivesCount > 0 && line <= incentivesCount; line++) {
            var incentiveProduct = currentRecord.getSublistValue({
                sublistId: 'recmachcustrecord_offer',
                fieldId: 'custrecord_premium_product',
                line: line
            });
            if(incentiveArr[incentiveProduct]){
                incentiveArr[incentiveProduct] = getFloat(incentiveArr[incentiveProduct])+1
            }else
                incentiveArr[incentiveProduct] = 1;
        }

            for (var incentiveIdx = 0; incentiveArr!=null && incentiveIdx < incentiveArr.length; incentiveIdx++) {
                var count =incentiveArr[incentiveIdx];
                if(getFloat(incentiveArr[incentiveIdx])>1){
                    alert('Please remove duplicate Incentive');
                    return false;
                }
            }
        
        //  * 5/10/17
        //  * ME-141 Remove HTML tag validation completly
        // try{
        //    for ( var i =0; i < cogHTMLValidation.validationRequiredFields.length; i++) {
    	// 		name = cogHTMLValidation.validationRequiredFields[i];
    	// 		var value = nlapiGetFieldValue(name);
    	// 		if(null==value) continue;
    			
    	// 		var htmlTagList = cogHTMLValidation.gethtmlTagsInString(value);
    	// 		if(null!=htmlTagList&&htmlTagList.length>0){
    	// 			alert("The html tags : " + htmlTagList + " are not allowed \n in the text: " + value);
    	// 			return false;
    	// 		}
    	// 	}
    	// }catch(err){
    	// 	//nlapiLogExecution("ERROR", )
    	// }
    	return true;

    }
    
    function getFloat(aValue){
    	if (aValue == null ||  isNaN(aValue) || aValue=='') return 0;
    	return parseFloat(aValue);
    }
    function isApproved(itemId){
        
        if(!itemId)
          alert("true");
            return true;
        /*var itemFields=nlapiLookupField('item', itemId, 
                        ['custitem_qc_approval_status', 'custitem_business_approval_status'],
                         true);*/
        var itemFields = search.lookupFields({
            type: search.Type.ITEM,
            id: 'itemId',
            columns: ['custitem_qc_approval_status', 'custitem_business_approval_status']
        });
      
        
        if (itemFields.custitem_qc_approval_status!='Approved'
                    || itemFields.custitem_business_approval_status!='Approved')
            return false;
        else
            return true;
    }
    if (!Array.prototype.indexOf) {
    	Array.prototype.indexOf = function(obj, start) {
         	for (var i = (start || 0), j = this.length; i < j; i++) {
            	 if (this[i] === obj) { return i; }
         	}
         	return -1;
    	};
    }
    var cogHTMLValidation = {
            specialcharacterRegex : new RegExp("<(.|\n)*?>","g"),
            validationRequiredFields : ["custbody_of_offer_web_name", "custbody_of_sign_up_form_header", "custbody_of_offer_header", "custbody_of_sign_up_button_language", 
                                        "custbody_of_logo_alt_text", "custbody_of_logo_image_url", "custbody_of_offer_image_url_big","custbody_of_offer_image_url_small",
                                        "custbody_of_co_branding_image_url", "custbody_of_co_branding_alt_text", "custbody_of_image_big_alt_text", "custbody_of_image_small_alt_text", 
                                         "custbody_of_key_benefits_statement", "custbody_of_offer_summary", 
                                        "custbody_of_marketing_inventive_descri"],
            gethtmlTagsInString : function(inputstr){
                var res = inputstr.match(cogHTMLValidation.specialcharacterRegex);
                return cogHTMLValidation.filterAllowedTags(res);
           },
           htmlTagValidationRequired : 
        	   function(name){
    				return (cogHTMLValidation.validationRequiredFields.indexOf(name) >=0);
           		},
           filterAllowedTags : function(tags){
               var notAllowed= [];
               var allowedTags = cogHTMLValidation.allowTags();
               var skiptag=false;
               for(var tag in tags){
                   skiptag=false;
                   for(var allowedTag in allowedTags){
                       if(tags[tag].indexOf(allowedTags[allowedTag])==0){
                           skiptag=true;
                          break; 
                       }
                   }
                   if(!skiptag){
                       notAllowed.push(tags[tag]);
                   }
               }
               return notAllowed;
           },
           allowTags : function() {
               var tagsAllowed=[];
    		   //var tags = ["b","a"];custbody_allowed_html_tags
    		   var commaSeparatedTags=currentRecord.getValue({ fieldId :'custbody_allowed_html_tags'});
    		   if(!commaSeparatedTags)	return tagsAllowed;
    		   var tags=[];
    		   tags=commaSeparatedTags.split(",");
    		   //alert('tags:'+tags);
               for(var i = 0; i<tags.length; i++){
                   tagsAllowed.push("<"+tags[i]+">");
                   tagsAllowed.push("<"+tags[i]+" ");
                   tagsAllowed.push("</"+tags[i]+">");
                   tagsAllowed.push("<"+tags[i]+"/>");
               }
    		   //alert('tagsAllowed:'+tagsAllowed);
               return tagsAllowed;
           }
    };


    return {
      
        validateField: clientValidateField,
        validateLine: clientValidateLine,
        saveRecord: clientSaveRecord
    };
    
});
