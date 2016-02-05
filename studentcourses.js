function Student(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.courses = [];
}

Student.prototype.name = function () {
  return this.firstName + this.lastName;
};

Student.prototype.courses = function () {
  return this.courses;
};

Array.prototype.check_conflict = function(course) {
  for (var i = 0; i < this.length; i++) {
    if (this[i].conflicts_with(course)) {
      return true;
    }
  }
  return false;
};

Student.prototype.enroll = function(course) {
  if (!this.courses.include(course)) {
  this.courses.push(course);
} else if (this.courses.check_conflict(course)) {
  throw "Course conflict!!!";
}
};

Array.prototype.include = function(el) {
  for (var i = 0; i < this.length; i++) {
    if (this[i] === el) {
      return true;
    }
  }
  return false;
};

Student.prototype.courseLoad = function () {
  var load = {};
  for(var i = 0; i < this.courses.length; i++) {
    var dept = this.courses[i].department;
    var cred = this.courses[i].numOfCredits;
    if (load[dept]) {
      load[dept] += cred;
    } else {
      load[dept] = cred;
    }
  }
  return load;
};

function Course(name, department, numOfCredits, days, block) {
  this.name = name;
  this.department = department;
  this.numOfCredits = numOfCredits;
  this.students = [];
  this.days = days;
  this.block = block;
}

Course.prototype.students = function () {
  return this.students;
};

Course.prototype.addStudent = function (student) {
  student.enroll(this);
  this.students.push(student);
};

Course.prototype.conflicts_with = function (course) {
  var dayIntersection = this.days.filter(function(n) {
    return course.days.indexOf(n) !== -1;
  });

  if (dayIntersection.length === 0) {
    return false;
  } else {
    if (this.block === course.block) {
      return true;
    } else {
      return false;
    }
  }
};
