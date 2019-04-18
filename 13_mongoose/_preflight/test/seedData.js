const chance = require('chance').Chance();
const Warehouse = require('../lib/modles/Warehouse');
const Employee = require('../lib/modles/Employee');
const Item = require('../lib/modles/Item');

module.exports = ({
  warehouseCount = 5,
  employeeCount = 100,
  itemCount = 1000
} = {}) => {
  const warehouses = [...Array(warehouseCount)]
    .map(() => ({
      city: chance.city(),
      state: chance.state(),
      zipcode: chance.zip()
    }));

  return Warehouse
    .create(warehouses)
    .then(createdWarehouses => {
      const employees = [...Array(employeeCount)]
        .map(() => ({
          name: chance.name(),
          dob: chance.date(),
          warehouse: chance.pickone(createdWarehouses)._id
        }));

      const items = [...Array(itemCount)]
        .map(() => ({
          type: chance.pickone([
            'toy',
            'game',
            'food'
          ]),
          warehouse: chance.pickone(createdWarehouses)._id,
          madeOn: chance.date()
        }));
      return Promise.all([
        createdWarehouses,
        Employee.create(employees),
        Item.create(items)
      ]);
    });
};
