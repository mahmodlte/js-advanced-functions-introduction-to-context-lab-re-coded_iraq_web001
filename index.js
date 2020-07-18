// Your code here
const createEmployeeRecord = (array) => {
  return {
    firstName: array[0],
    familyName: array[1],
    title: array[2],
<<<<<<< HEAD
    payPerHour: array[3],
=======
    peyPerHour: array[3],
>>>>>>> 43b5e5ec47d208aa002d963b18edb6ba9a0412f6
    timeInEvents: [],
    timeOutEvents: [],
  };
};
const createEmployeeRecords = (array) => {
<<<<<<< HEAD
  return array.map((record) => {
    return createEmployeeRecord(record);
  });
};
const createTimeInEvent = (obj, str) => {
  let string = str.split(" ");

  obj.timeInEvents.push({
    type: "TimeIn",
    date: string[0],
    hour: parseInt(string[1]),
  });
  return obj;
};
const createTimeOutEvent = (obj, str) => {
  let string = str.split(" ");

  obj.timeOutEvents.push({
    type: "TimeOut",
    date: string[0],
    hour: parseInt(string[1]),
  });
  return obj;
};
const hoursWorkedOnDate = (employeeRecordObj, dateString) => {
  let timeInHour = employeeRecordObj.timeInEvents.find(
    (element) => element.date === dateString
  ).hour;
  let timeOutHour = employeeRecordObj.timeOutEvents.find(
    (element) => element.date === dateString
  ).hour;
  return (timeOutHour - timeInHour) / 100;
};
const wagesEarnedOnDate = (obj, dateStr) => {
  let result = hoursWorkedOnDate(obj, dateStr) * obj.payPerHour;
  return result;
};
const allWagesFor = (obj) => {
  let dateString = obj.timeInEvents.map((ele) => ele.date);
  return dateString.reduce((accu, current) => {
    return (accu += wagesEarnedOnDate(obj, current));
  }, 0);
};

function findEmployeeByFirstName(srcArray, firstName) {
  let finder = srcArray.find((info) => {
    if (info.firstName.startsWith(firstName)) {
      return info.firstName;
    }
  });
  return finder;
}
const calculatePayroll = (arr) => {
  return arr.reduce((accu, current) => {
    return accu + allWagesFor(current);
  }, 0);
=======
  return arr.reduce((accu, current) => {
    accu.push(createEmployeeRecord(current));
    return accu;
  }, []);
>>>>>>> 43b5e5ec47d208aa002d963b18edb6ba9a0412f6
};
