/*
 * Arquivo: Service.js
 * Data: 03/03/2021
 * Descrição: Arquivo responsável por carregar os dados via $http.get - do MVC controller
 * (onde transformará os dados via json)
 * Author: Maycon Roberto de Oliveira
 */

employeeApp.service('employeeService', function ($http) {

    // Obter todos os funcionários
    this.Get = function () {
        return $http.get("/employee/get");
    }

    // Adicionar funcionário
    this.Add = function (employee) {

        var request = $http({
            method: 'POST',
            url: '/employee/add',
            data: employee
        });

        return request;
    }

    // Atualizar funcionário por ID
    this.Update = function (employee) {

        var request = $http({
            method: 'POST',
            url: '/employee/update',
            data: employee
        });

        return request;
    }

});