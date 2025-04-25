import { v4 as uuidv4 } from 'uuid';

interface TeacherProps {
  id?: string;
  lastName: string;
  firstName: string;
  degree: string;
}

class Teacher {
  readonly id: string;
  readonly lastName: string;
  readonly firstName: string;
  readonly degree: string;

  constructor({
                id = uuidv4(),
                lastName,
                firstName,
                degree
              }: TeacherProps = {
    lastName: '',
    firstName: '',
    degree: ''
  }) {
    this.id = id;
    this.lastName = lastName;
    this.firstName = firstName;
    this.degree = degree;
  }
}

export default Teacher;