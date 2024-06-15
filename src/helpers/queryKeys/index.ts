const employeeKeys = {
  all: ['employee'] as const,
  lists: () => [...employeeKeys.all, 'list'] as const,
  list: (filters: any) => [...employeeKeys.lists(), {filters}] as const,
  details: () => [...employeeKeys.all, 'detail'] as const,
  detail: (id: number) => [...employeeKeys.details(), id] as const,
};

const loginKey = ['login'];
const employeeCreateKey = ['employeeCreate'];
const userAuthKey = ['userAuth'];

const queryKeys = {loginKey, employeeKeys, userAuthKey, employeeCreateKey};

export default queryKeys;
