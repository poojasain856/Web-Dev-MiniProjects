window.onload = function () {
    	setInterval(updateTime, 1000)
    };
    
    function updateTime() {
    	const format = number => `${ +!(number < 10) && '' }${number}`;
        
    	let date = new Date();
        
    	document.querySelector("#hour1")  .innerHTML = format( date.getHours()   );
    	document.querySelector("#minute1").innerHTML = format( date.getMinutes() );
    	document.querySelector("#second1").innerHTML = format( date.getSeconds() );
    
    	document.querySelector("#date1").innerHTML = (
    		[
    			date.getDate(),
          ++date.getMonth(), 
    			date.getFullYear()
    		]
    			.map(format)
    			.join('/')
    	);
        
    	const week = [
    		"Sunday", "Monday", "Tuesday", "Wednesday",
            "Thursday", "Friday", "Saturday"
    	];
        
    	document.querySelector("#day").innerHTML = week[ date.getDay() ];
    }