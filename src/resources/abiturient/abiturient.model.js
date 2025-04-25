import { v4 as uuidv4 } from 'uuid';

class Abiturient {
  constructor({
                id = uuidv4(),
                lastName,
                firstName,
                numCertificate
              } = {}) {
    this.id = id;
    this.lastName = lastName;
    this.firstName = firstName;
    this.numCertificate = numCertificate;
  }
}

export default Abiturient;