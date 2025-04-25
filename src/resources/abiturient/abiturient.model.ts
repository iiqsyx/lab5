import { v4 as uuidv4 } from 'uuid';

interface AbiturientProps {
  id?: string;
  lastName: string;
  firstName: string;
  numCertificate: number;
}

class Abiturient {
  readonly id: string;
  readonly lastName: string;
  readonly firstName: string;
  readonly numCertificate: number;

  constructor({
                id = uuidv4(),
                lastName,
                firstName,
                numCertificate
              }: AbiturientProps = {
    lastName: '',
    firstName: '',
    numCertificate: 0
  }) {
    this.id = id;
    this.lastName = lastName;
    this.firstName = firstName;
    this.numCertificate = numCertificate;
  }
}

export default Abiturient;