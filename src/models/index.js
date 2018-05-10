class Truck {
  constructor(name, start, end) {
    this.name = name;
    this.start = start;
    this.end = end;
  }
}

class Job {
  constructor(customerName, date, start, duration) {
    this.customerName = customerName;
    this.date = date;
    this.start = start;
    this.duration = duration;
  }
}

module.exports = {
  Truck,
  Job
}