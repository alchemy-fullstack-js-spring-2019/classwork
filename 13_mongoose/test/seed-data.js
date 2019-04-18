const chance = require('chance').Chance();
const Warehouse = require('../lib/models/Warehouse');
const Employee = require('../lib/models/Employee');

module.exports = ({ warehouseCount = 5, employeeCount = 100 } = {}) => {
  const warehouses = [...Array(warehouseCount)].map(() => ({
    city: chance.city(),
    state: chance.state(),
    zipcode: chance.zip()
  }));

  return Warehouse
    .create(warehouses)
    .then(createdWarehouses => {
      const employees = [...Array(employeeCount)].map(() => ({
        name: chance.name(),
        dob: chance.date(),
        warehouse: chance.pickone(createdWarehouses)._id
      }));

      return Employee.create(employees);
    });
};
