// Function Constructor and IIFEE
(function () {

    var Employee = function (empId, empName, salary) {
        this.empId = empId;
        this.empName = empName;
        this.salary = salary;
    }

    Employee.prototype.toString = function () {
        return this.empId + ' : ' + this.empName + ' : ' + this.salary;
    }

    var ram = new Employee(101, "Sai", 4500);
    var shyam = new Employee(102, "Shyam Kumar", 3500);
    var pavan = new Employee(103, "Pavan Kumar", 2500);

    var empList = [ram, shyam, pavan];

    var empData = document.getElementById('empData');
    var empButton = document.getElementById('empDetails');

    empButton.addEventListener('click', function () {
        empList.forEach(function (eachEmployee, idx) {

            var element = document.createElement("h4");
            var text = document.createTextNode(eachEmployee.toString());
            element.appendChild(text);
            empData.appendChild(element);
            //  console.log(eachEmployee.empName);
            //  empData.innerText += eachEmployee.toString()+'\n'+'\n';
            //  console.log(eachEmployee.toString());
        });
    });
})();