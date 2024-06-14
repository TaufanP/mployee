const employeeKeys = {
  all: ['employee'] as const,
  lists: () => [...employeeKeys.all, 'list'] as const,
  list: (filters: string) => [...employeeKeys.lists(), {filters}] as const,
  details: () => [...employeeKeys.all, 'detail'] as const,
  detail: (id: number) => [...employeeKeys.details(), id] as const,
};

const loginKey = ['login'];
const userAuthKey = ['userAuth'];

export default {loginKey, employeeKeys, userAuthKey};
