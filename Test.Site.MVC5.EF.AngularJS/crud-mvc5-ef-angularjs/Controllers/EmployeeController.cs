using crud_mvc5_ef_angularjs.Models;
using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;

namespace crud_mvc5_ef_angularjs.Controllers
{
    public class EmployeeController : Controller
    {
        /// <summary>
        /// Obter funcionários
        /// </summary>
        /// <returns>Lista Funcionarios</returns>
        public JsonResult Get()
        {
            using(var db = new EmployeesEntities())
            {
                var employees = db.Employees.ToList();
                return Json(employees, JsonRequestBehavior.AllowGet);
            }
        }
    }
}