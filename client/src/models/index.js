class Truck {
  constructor(name, start, end) {
    this.name = name;
    this.start_time = start;
    this.end_time = end;
  }
}

class Job {
  constructor(customerName, date, start, duration) {
    this.customer_name = customerName;
    this.date = date;
    this.start_time = start;
    this.duration = duration;
  }
}

module.exports = {
  Truck,
  Job
}