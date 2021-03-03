/*
 * Arquivo: Service.js
 * Data: 03/03/2021
 * Descrição: Arquivo responsável por carregar os dados via $http.get - do MVC controller
 * (onde transformará os dados via json)
 * Author: Maycon Roberto de Oliveira
 */

employeeApp.service('employeeService', function ($http) {
    this.get = function () {
        return $http.get("/Employee/Get");
    }
});