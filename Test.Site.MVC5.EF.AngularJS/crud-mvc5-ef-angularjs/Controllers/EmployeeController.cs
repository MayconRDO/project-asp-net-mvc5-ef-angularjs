using crud_mvc5_ef_angularjs.Models;
using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;

namespace crud_mvc5_ef_angularjs.Controllers
{
    public class EmployeeController : Controller
    {
        /// <summary>
        /// GET - Obter funcionários
        /// </summary>
        /// <returns>Lista Funcionarios</returns>
        [HttpGet]
        public JsonResult Get()
        {
            using (var db = new EmployeesEntities())
            {
                var employees = db.Employees.ToList();
                return Json(employees, JsonRequestBehavior.AllowGet);
            }
        }

        /// <summary>
        /// POST - Cadastrar funcionário
        /// </summary>
        /// <param name="employee">Objeto funcionário</param>
        /// <returns>Json</returns>
        [HttpPost]
        public JsonResult Add(Employee employee)
        {
            if (employee != null)
            {
                using (var db = new EmployeesEntities())
                {
                    db.Employees.Add(employee);
                    db.SaveChanges();

                    return Json(new { success = true });
                }
            }
            return Json(new { success = false });
        }

        /// <summary>
        /// Atualizar funcionário
        /// </summary>
        /// <param name="employee">Objeto funcionário</param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult Update(Employee employee)
        {
            using (var db = new EmployeesEntities())
            {
                var employeeDB = db.Employees.Find(employee.Id);

                if (employeeDB == null)
                {
                    return Json(new { success = false });
                }
                else
                {
                    employeeDB.Name = employee.Name;
                    employeeDB.Email = employee.Email;
                    employeeDB.Department = employee.Department;
                    employeeDB.Office = employee.Office;

                    db.SaveChanges();

                    return Json(new { success = true });
                }
            }
        }

        /// <summary>
        /// Remover funcionário por Id
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult Delete(int id)
        {
            using (var db = new EmployeesEntities())
            {
                var employee = db.Employees.Find(id);

                if (employee == null)
                {
                    return Json(new { success = false });
                }

                db.Employees.Remove(employee);
                db.SaveChanges();

                return Json(new { success = true });
            }
        }
    }
}