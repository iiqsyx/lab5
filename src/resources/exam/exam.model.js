import { v4 as uuidv4 } from 'uuid';

class Exam {
  constructor({
                id = uuidv4(),
                abiturientId = null,
                teacherId = null,
                subject,
                date = new Date().toISOString(),
                score
              } = {}) {
    this.id = id;
    this.abiturientId = abiturientId;
    this.teacherId = teacherId;
    this.subject = subject;
    this.date = date;
    this.score = score;
  }
}

export default Exam;