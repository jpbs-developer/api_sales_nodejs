import 'dotenv/config';
import { hash } from 'bcryptjs';

const generatedHashedPassword = (password: string): Promise<string> => hash(password, 8);

export default generatedHashedPassword;
