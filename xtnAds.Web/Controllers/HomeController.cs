using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using xtnAds.Web.Models;

namespace xtnAds.Web.Controllers
{
    public class HomeController : Controller
    {
        //
        // GET: /Home/

        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Menu()
        {
            return PartialView();
        }

        public ActionResult Photos()
        {
            return PartialView();
        }

        public ActionResult Ads()
        {
            return PartialView();
        }
        
        public ActionResult About()
        {
            return PartialView();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public void About(Contact model)
        {
            if (ModelState.IsValid)
            {
                ModelState.Clear();
            }
        }

        public ActionResult PhotosDynamic()
        {
            return PartialView();
        }
    }
}
