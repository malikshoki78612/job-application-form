let applications=
    [
       {
		  name:"Ali Asghar",email:"shokimalikgmail.com",contact:"03134950595",
		  position:"Graphic Designer",gender:"Male"
        }
     ];
        tabledata.style.display="none"
       showApplication();
        function addapplication()
         {
        	let userName1=userName.value;
        	let emailId1=emailId.value;
        	let contact1=parseInt(contactNo.value);
        	let position1=position.value;
        	let male1=male.value;
        	let feMale1=feMale.value;
        	let other1=other.value;

        	tabledata.style.display="block"
           //hide item
            items.style.display='none';


        	applications.push(
					{		
					name:userName1,email:emailId1,
					contact:contact1,position:position1,male:male1,feMale:feMale1
					,other:other1
					}
				);
        	userName.value=emailId.value=contactNo.value=position.value=male.value=feMale.value=other.value="";

        		tabledata.style.display='none';


        	showApplication();
        }
       function showApplication()
{
	let rowCounter=0;
	let colorClass;
	
	//show data div
	items.style.display='block';

	//empty the dataItems div 
	dataItems.innerHTML='';
	//loop comapnies array data, fetch one by one and put in record
    applications.map(record=>{
		colorclass='';
		//check if id exists, send record.id to the function to check
		
			//get id from record
			let name=record.name;
			//get name from record
			let email=record.email;
			//get contact from record
			let contact=record.contact;

			let position=record.position;
			let gender=record.gender
			
			//to set gray color for even rows
			colorclass='';
			if(rowCounter%2==0){colorClass='row-color';}
			
			//make string in str variable of all divs with data
			str=`<div class="row">`;
			str=str+`
				<div class="heading2 `+colorClass+`">
							 `+name+`
				</div>`;
			str=str+`
				<div class="heading2 `+colorClass+`">
							 `+email+`
				</div>`;
			str=str+`
				<div class="heading2 `+colorClass+`">
							 `+contact+`
				</div>`;
			str=str+`
				<div class="heading2 `+colorClass+`">
							 `+position+`
				</div>`;
			str=str+`
				<div class="heading2 `+colorClass+`">
							 `+gender+`
				</div>`;
			str=str+"</div>";		
			dataItems.innerHTML+=str;
		
		//increment row counter for gray color to reflect
		rowCounter++;
		//empty colorClass variable for the next record
		colorClass='';			
		});
}

