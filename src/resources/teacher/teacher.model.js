import { v4 as uuidv4 } from 'uuid';

class Teacher {
  constructor({
                id = uuidv4(),
                lastName,
                firstName,
                degree
              } = {}) {
    this.id = id;
    this.lastName = lastName;
    this.firstName = firstName;
    this.degree = degree;
  }
}

export default Teacher;