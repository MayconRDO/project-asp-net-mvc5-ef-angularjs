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

    // Obter funcionários
    function loadEmployees() {

        var listEmployees = employeeService.Get();

        listEmployees.then(function (d) {

            // Sucesso
            $scope.Employees = d.data;
        },
            // Se der errado ...
            function () {
                alert('Ocorreu um erro ao listar os funcionários');
            });
    }

    // Cadastrar funcionários
    $scope.addEmployee = function () {
        var employee = {
            id: $scope.id,
            name: $scope.name,
            department: $scope.department,
            office: $scope.office,
            email: $scope.email
        };

        var addInfos = employeeService.Add(employee);

        addInfos.then(function (d) {
            if (d.data.success === true) {
                loadEmployees();
                alert('Funcionário cadastrado com sucesso!');
            } else {
                alert('Funcionário não cadastrado!');
            }
        },
            function () {
                alert('Erro ocorrido ao tentar cadastrar novo funcionário!')
            }
        );
    }

    // Limpar dados
    $scope.clearData = function () {
        $scope.id = '';
        $scope.name = '';
        $scope.department = '';
        $scope.office = '';
        $scope.email = '';
    }

    // Atualizar funcionário por ID
    $scope.updateEmployeeById = function (employee) {

        $scope.id = employee.Id;
        $scope.name = employee.Name;
        $scope.email = employee.Email;
        $scope.department = employee.Department;
        $scope.office = employee.Office;
    };

    $scope.updateEmployee = function () {

        var employee = {
            Id: $scope.id,
            Name: $scope.name,
            Email: $scope.email,
            Department: $scope.department,
            Office: $scope.office
        };

        var updateInfos = employeeService.Update(employee);

        updateInfos.then(function (d) {
            if (d.data.success === true) {
                loadEmployees();
                alert('Funcionário atualizado com sucesso');
                $scope.clearData();
            } else {
                alert('Funcionário não atualizado');
            }
        }, function () {
            alert('Ocorreu um erro ao tentar o funcionário');
        });
    }
});