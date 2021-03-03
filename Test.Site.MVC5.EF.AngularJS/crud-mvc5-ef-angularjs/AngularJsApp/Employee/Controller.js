/*
 * Arquivo: Controller.js
 * Data: 03/03/2021
 * Descrição: Esse arquivo irá conter o código do 'employeeCtrl' a qual controlorá
 * os módulos de 'employees'
 * Author: Maycon Roberto de Oliveira
 */

// Controller - Employee
employeeApp.controller('employeeCtrl', function ($scope, employeeService) {

    loadEmployees();

    function loadEmployees() {
        var listEmployees = employeeService.Get();
        listEmployees.then(function (d) {
            // Sucesso
            $scope.Employess = d.data;
        },
            // Se der errado ...
            function () {
                alert('Ocorreu um erro ao listar os funcionários');
            });
    }
});