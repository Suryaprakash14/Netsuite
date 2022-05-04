/**
 * @NApiVersion 2.1
 * @NScriptType Suitelet
 */
//define(['N/ui/serverWidget'], (serverWidget) => {
  //  const onRequest = (scriptContext) => {

            let form = serverWidget.createForm({
                title: 'Fresher Recruitment Process'
            });
            var fieldgroup = form.addFieldGroup({
                id : 'fieldgroupid',
                label : 'Candiadte Information'
            });
            var field12 = form.addField({
                id : 'custpage_textfield',
                type : serverWidget.FieldType.TEXT,
                label : 'Customer Form',
                container : 'fieldgroupid'
            });
  			var button = form.addButton({
              id:'buttonid',
              label:'submitt'
            })
      		var button = form.addButton({
              id:'buttonid1',
              label:'cancel'
            })
            var button = form.addButton({
              id:'buttonid2',
              label:'reset'
            })

            let field = form.addField({
                id: 'textfield',
                type: serverWidget.FieldType.TEXT,
                label: 'Serial No'
            });
           field.layoutType = serverWidget.FieldLayoutType.NORMAL;
         /*field.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTCOL*/

               let field1 = form.addField({
                id: 'textfield1',
                type: serverWidget.FieldType.TEXT,
                label: 'Mr/Ms'
            });

      			let field2 = form.addField({
                id: 'textfield2',
                type: serverWidget.FieldType.TEXT,
                label: 'Name'
            });

              /*var assistant = serverWidget.createAssistant({
              title : 'Simple Assistant'
              });
              var title = assistant.title;*/

      		  let field3 = form.addField({
                id: 'textfield3',
                type: serverWidget.FieldType.TEXT,
                label: 'College Name'
            });
      	  let field4 = form.addField({
                id: 'textfield4',
                type: serverWidget.FieldType.TEXT,
                label: 'Email Id'
            });
      	  let field5 = form.addField({
                id: 'textfield5',
                type: serverWidget.FieldType.TEXT,
                label: 'Recruting Process'
            });
      	  let field6 = form.addField({
                id: 'textfield6',
                type: serverWidget.FieldType.TEXT,
                label: 'Name'
            });

           let field7 = form.addField({
                id: 'textfield7',
                type: serverWidget.FieldType.TEXT,
                label: 'Contact Number'
            });
            let field8 = form.addField({
                id: 'textfield8',
                type: serverWidget.FieldType.TEXT,
                label: 'Source'
            });

            let field10 = form.addField({
                id: 'textfield10',
                type: serverWidget.FieldType.TEXT,
                label: 'Recrution Proces'});


////////////////////////////////////////////////////////////////
            let sublist = form.addSublist({
                id: 'sublist',
                type: serverWidget.SublistType.INLINEEDITOR,
                label: 'Personal_Detail'
            });
            sublist.addField({
                id: 'sublist1',
                type: serverWidget.FieldType.DATE,
                label: 'Date'
            });
            sublist.addField({
                id: 'sublist2',
                type: serverWidget.FieldType.TEXT,
                label: 'Text'
            });

      ////////////////////////////////////////////////////
       let sublist1 = form.addSublist({
                id: 'sublist1',
                type: serverWidget.SublistType.INLINEEDITOR,
                label: 'Communication_Detail'
            });
            sublist1.addField({
                id: 'sublist11',
                type: serverWidget.FieldType.DATE,
                label: 'Some'
            });
            sublist1.addField({
                id: 'sublist22',
                type: serverWidget.FieldType.TEXT,
                label: 'thing'
            });
	//////////////////////////////////////////////////////////
	  let sublist2 = form.addSublist({
                id: 'sublist12',
                type: serverWidget.SublistType.INLINEEDITOR,
                label: 'Educational_Detail'
            });
            sublist2.addField({
                id: 'sublist12',
                type: serverWidget.FieldType.DATE,
                label: 'Some'
            });
            sublist2.addField({
                id: 'sublist23',
                type: serverWidget.FieldType.TEXT,
                label: 'thing'
            });


            scriptContext.response.writePage(form);
        /* else {
            const delimiter = /\u0001/;
            const textField = scriptContext.request.parameters.textfield;
            const dateField = scriptContext.request.parameters.datefield;
            const currencyField = scriptContext.request.parameters.currencyfield;
            const selectField = scriptContext.request.parameters.selectfield;
            const sublistData = scriptContext.request.parameters.sublistdata.split(delimiter);
            const sublistField1 = sublistData[0];
            const sublistField2 = sublistData[1];

            scriptContext.response.write(`You have entered: ${textField} ${dateField} ${currencyField} ${selectField} ${sublistField1} ${sublistField2}`);
        }*/
    }

    return {onRequest}
});