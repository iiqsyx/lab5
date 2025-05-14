import morgan from 'morgan';
import logger from '../common/logger';

const stream = {
  write: (message: string) => logger.info(message.trim())
};

const requestLogger = morgan('combined', { stream });

export default requestLogger;