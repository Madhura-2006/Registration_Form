function validate() 
{
    let fullName = document.getElementById("fullName").value.trim();
    alert("Full name :"+fullName);
    let nameError = false;

    let name = fullName.split(" ");
    if (name.length <= 3) 
    {
        alert("First name : " + name[0]);
        alert("Middle name : " + name[1]);
        alert("Last name : " + name[2]);
    } 
    else 
    {
        alert("Please enter full name with First, Middle and Last name.");
        nameError = true;
    }



   	let aadharNum = document.getElementById("aadhar").value.trim();
    let aadharError = false;
	if (aadharNum.length == 12 && !isNaN(aadharNum)) {
   		alert("Aadhar Number : " + aadharNum);
	} 
	else 
	{
    	alert("Please enter Aadhar Number with 12 digits only");
    	aadharError = true; 
	}


    let pancard = document.getElementById("pancard").value.trim();
    let panError = false;
    const panPattern = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    if (panPattern.test(pancard)) 
    {
        alert("PAN Card number is : " +pancard);
    }
    else 
    {
        alert("Please enter a valid PAN number. PAN number Formate : [A-Z]{5} [0-9]{4} [A-Z]{1})");
        panError = true; 
    }



	let mobileNum = document.getElementById("mobileNum").value.trim();
	let mobileError = false;
		if (!/^[6-9]\d{9}$/.test(mobileNum)) {
   			 alert("Invalid Mobile Number! It should be 10 digits and start with 6, 7, 8, or 9");
		} 
		else {
   			 alert("Mobile Number :" + mobileNum);
   			 mobileError = true; 
		}



	let dob = document.getElementById("dob").value.trim();
    let dobError = false;
    let today = new Date();
    let dobDate = new Date(dob);
    if (dobDate.getTime() >= today.getTime()) 
    {
        alert("Date of Birth should be in the past.");
        dobError = true; 
    } 
    else 
    {
        alert("Date of Birth: " + dob);
    }


    let marksArray = document.getElementById("marks").value.trim().split(",").map(Number).filter(n => !isNaN(n));
    let marksError = false;

	if (marksArray.length !== 6) {
  		alert("Please enter marks for exactly 6 subjects.");
  		marksError = true; 
	} 
	else 
	{
    let bestFive = marksArray.sort((a, b) => b - a).slice(0, 5);
    let percentage = bestFive.reduce((sum, mark) => sum + mark, 0) / 5;
    alert("Marks: " + marksArray.join(", ") + "\nPercentage: " + percentage + "%");
	}

   
    if (nameError || aadharError || panError || mobileError || dobError || marksError) 
    {
        return false; 
    }
    else
    {
    	alert("Successfully Registered...");
    	document.getElementById("fullName").value = "";
    	document.getElementById("aadharNum").value = "";
    	document.getElementById("pancard").value = "";
    	document.getElementById("mobileNum").value = "";
    	document.getElementById("dob").value = "";
    	document.getElementById("marks").value = "";

    }
}