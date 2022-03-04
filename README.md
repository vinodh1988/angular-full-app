RESTAPI

    Webservice
	 
	 
	 <technology1>-----------------------------> <technology2>
	 
	 
	 [Webserver -[restapi]]------------------------> [response]
	                       <-------------------------[request]
						   
						   
		Request?
		            Content-type? - what kind of data sent to server
					Accept - what kind of data you want from server
					Method - what you want the server to do
					   HTTP VERB
					   
					      GET   - you want resource from the serve
						  POST   - you want to send data to the server and server to process it
						  DELETE  - you want server to delete the specified resource
						  PATCH - You want to partially update
						  PUT  - Updating/replacing resources in the server
						  
						  -------------
						  OPTION
						  HEAD
						  CONNECT
						  TRACE
						  
				client makes requests to end points ?
				
				    http://<ip>:8080/api/people  - URL
					
					En endpoint might be serving multiple methods - gET,post,put,patch
					
			Response
			
			       response header +response body
				   
				   generally response body would html, json, images files, pdf files, binary
				   data or text data




rest api?  ->Array of objects?

         [rest]<- angular service <- Parent component -> n child components
		 
		 [/contacts]<-contactservice <- contactComponent ->contact-box
		 
		 
		 In angular to make api call [get,post,delete,put..]
		 we use an inbuilt service call httpclient
		 httpclient is part of httpclientmodule
		 
		 for the service to work we need to import the above module