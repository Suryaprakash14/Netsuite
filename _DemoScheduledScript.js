/**
 * @NApiVersion 2.x
 * @NScriptType ScheduledScript
 * @NModuleScope SameAccount
 */
define(['N/search', 'N/record'],

function(search, record) {
   
    /**
     * Version 2.0
     * Date   01 FEB 2022
     * Author Suryaprakash Ragavan
     * 
     * Script Description : Create a search on customer record & updating 2 fields (companyName & jobTitle) 
     */
    function execute(context) {
    	try
    	{ 
		var filterSalesOrder = search.create({
        type: search.Type.CUSTOMER,
        columns: [{
                    name: 'companyname'
                }],
           filters: [['mainline', 'is', true],
	                  'and', ['custbody_update_memo', 'is', true]]
            }); 
			
			var searchResult = filterSalesOrder.run().getRange(0,1000);
			
			if(searchResult.length>0)
			{
				
				/*log.debug({
					title:'searchResult',
					details:searchResult.length
				});*/
				for(var i =0 ; i<searchResult.length;i++)
				{
                 log.debug({title:'result',details:searchResult[i].getValue('companyname')});
				  
				var value =searchResult[i].getValue('companyname');
		
				var id = record.submitFields({
				type: record.Type.SALES_ORDER,
				id: value,
				values: {
							memo: 'memo updated'
						},
				 options: {
							enableSourcing: false,
							ignoreMandatoryFields : true
						}
				
				});
					 
					/* searchResult[i].setValue({
						fieldId: 'memo',
						value: 'memo updated'
					});*/
			//log.debug({title:'updated',details:'searchResult[i]'});
				  
					//searchResult.push('memo')
					//var savRec = searchResult.save();
					//log.debug('memo record updated successfully',  savRec);
			}
			}
			
				
		}
    	catch(ex)
    	{
    		log.debug({title : "Exception", details : ex});
    	}      
    }

    return {
        execute: execute
    };
    
});
