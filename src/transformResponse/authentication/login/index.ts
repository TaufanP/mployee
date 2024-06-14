import {z} from 'zod';
import {logger} from '../../../helpers';

export const LoginSchema = z.object({
  token: z.string(),
});

export type LoginType = z.infer<typeof LoginSchema>;

export default function login(token: string) {
  try {
    const result = {token};
    return LoginSchema.parse(result);
  } catch (error) {
    logger(error, undefined, 'error', 'src/transformResponse/login');
  }
}
