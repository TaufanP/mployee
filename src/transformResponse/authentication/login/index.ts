import {z} from 'zod';
import {logger} from '../../../helpers';

export const LoginSchema = z.object({
  token: z.string(),
  expirationDate: z.union([z.number(), z.null()]),
});

export type LoginType = z.infer<typeof LoginSchema>;

export default function login(token: string) {
  try {
    const result = {token};
    return LoginSchema.parse({
      ...result,
      expirationDate: new Date().getTime() + 24 * 60 * 60 * 1000,
    });
  } catch (error) {
    logger(error, undefined, 'error', 'src/transformResponse/login');
  }
}
