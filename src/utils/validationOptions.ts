export const validationsOptionsName = {
  required: 'Name is required',
  minLength: {
    value: 3,
    message: 'minimum characters: 3',
  },
};

export const validationsOptionsEmail = {
  required: 'Email is required',
  pattern: {
    value: /^\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b$/gi,
    message: 'This email is not valid',
  },
};

export const validationsOptionsPassword = {
  required: 'Password is required',
  minLength: {
    value: 4,
    message: 'minimum characters: 4',
  },
};
