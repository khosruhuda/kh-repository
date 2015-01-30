using KHCodeAssesment.BL;
using KHCodeAssesment.Entities;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Net;
using System.Net.Http;
using System.Web.Http;


namespace KHCodeAssesment.Controllers
{
    [RoutePrefix("api/routes")]
    public class RouteController : ApiController
    {
        IRouteLogic routeLogic = new RouteLogic();
        Result result = new Result();        

        //Get the distance of the given route
        [Route("getroutedistance/{route}")]
        [HttpGet]
        public Result GetRouteDistance(string route)
        {
            result = routeLogic.GetRouteDistance(route);                      
            return result;
        }

        //Get available routes
        [Route("getavailableroutes/{origin}/{destination}/{maxroute}")]
        [HttpGet]
        public Result GetAvailableRoutes(string origin, string destination, int maxroute)
        {
            result = routeLogic.GetAvailableRoutes(origin, destination, maxroute);
            return result;
        }

        //Save routes in a text file
        [Route("writeroutesinfile/{routes}")]
        [HttpGet]
        public Result WriteDataInFile(string routes)
        {
            result = routeLogic.WriteRoutesInFile(routes);
            return result;
        }

        [Route("GetMyTestResult")]
        [HttpPost]
        public Result GetMyTestResult(Result result)
        {
            return result;
        }

    }
}
