import { v4 as uuidv4 } from 'uuid';

interface ExamProps {
  id?: string;
  abiturientId?: string | null;
  teacherId?: string | null;
  subject: string;
  date?: string;
  score: number;
}

class Exam {
  readonly id: string;
  readonly abiturientId: string | null;
  readonly teacherId: string | null;
  readonly subject: string;
  readonly date: string;
  readonly score: number;

  constructor({
                id = uuidv4(),
                abiturientId = null,
                teacherId = null,
                subject,
                date = new Date().toISOString(),
                score
              }: ExamProps = {
    subject: '',
    score: 0
  }) {
    this.id = id;
    this.abiturientId = abiturientId;
    this.teacherId = teacherId;
    this.subject = subject;
    this.date = date;
    this.score = score;
  }
}

export default Exam;