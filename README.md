Software Requirement:  Visual Studio 2013, .NET Framework 4.5


How to provide input to the application?:
 
In this app there is input file “LannisterCarriageServices.html”.
You can use this html page to test Web APIs. You can also create your own input form to test Web APIs.

APIs Description:

API URL to save routes in a file: api/routes/ writeroutesinfile/{routes}
Example: api/routes/ writeroutesinfile/AB5, BC4, CD8, DC8, DE6, AD5, CE2, EB3, AE7

API URL to get route distance:  api/routes/getroutedistance/{route} 
Example: api/routes/getroutedistance/A-B-C

API URL to get available routes: api/routes/getavailableroutes/{origin}/{destination}/{maxroute}
Example: api/routes/getavailableroutes/A/D/4



How to run unit test?: 

Install Microsoft ASP.NET Web API 2.2 Core Libraries from NuGet Packages. Then Run AvenueCodeAssesment.Test.

Note: For unit test please Add a Folder "RouteData" inside bin>Debug folder of the Unit test project.
Then Add "RouteList.txt" file (which contains all the routes) inside "RouteData" folder.
