using System.Web;
using System.Web.Optimization;

namespace xtnAds.Web.App_Start
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryui").Include(
                        "~/Scripts/jquery-ui-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.unobtrusive*",
                        "~/Scripts/jquery.validate*"));

            bundles.Add(new ScriptBundle("~/bundles/ads").Include(
                "~/Scripts/Ads.js"));

            bundles.Add(new ScriptBundle("~/bundles/photosDynamic").Include(
               "~/Scripts/PhotosDynamic.js"));

            bundles.Add(new ScriptBundle("~/bundles/site").Include(
              "~/Scripts/Site.js"));

            bundles.Add(new ScriptBundle("~/bundles/chat").Include(
               "~/Scripts/Chat.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include("~/Content/site.css"));
        }
    }
}