using System;
using System.Web.Http;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using KHCodeAssesment.Entities;
using System.Collections.Generic;
using KHCodeAssesment.Controllers;
using KHCodeAssesment.BL;

namespace AvenueCodeAssessment.Tests
{
    [TestClass]
    public class RouteUnitTest
    {
        [TestMethod]        
        public void GetRouteDistance_ShouldReturn9()
        {
            Result result = new Result();
            RouteController controler = new RouteController();
            result = controler.GetRouteDistance("A-B-C");
            Assert.AreEqual(9, result.Data);
        }

        [TestMethod]
        public void GetRouteDistance_ShouldReturnNoMutch()
        {
            Result result = new Result();
            RouteController controler = new RouteController();
            result = controler.GetRouteDistance("A-E-D");
            Assert.AreEqual(null, result.Data);
        }

        [TestMethod]
        public void GetAvailableRoutes_ShouldReturn6Routes()
        {
            Result result = new Result();
            RouteController controler = new RouteController();
            result = controler.GetAvailableRoutes("A", "C", 4);
            List<string> availableRoutes = new List<string>();
            availableRoutes = (List<string>)result.Data;

            Assert.AreEqual(6, availableRoutes.Count);
        }

        [TestMethod]
        public void GetAvailableRoutes_ShouldReturn2Routes()
        {
            Result result = new Result();
            RouteController controler = new RouteController();
            result = controler.GetAvailableRoutes("C", "C", 3);
            List<string> availableRoutes = new List<string>();
            availableRoutes = (List<string>)result.Data;

            Assert.AreEqual(2, availableRoutes.Count);
        }

        

    }
}
