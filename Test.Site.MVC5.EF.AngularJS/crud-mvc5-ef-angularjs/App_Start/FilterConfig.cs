using System.Web;
using System.Web.Mvc;

namespace crud_mvc5_ef_angularjs
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
