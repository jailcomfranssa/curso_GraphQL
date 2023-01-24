const user = () => {
  return {
    id: '1',
    userName: 'Jailson',
  };
};

const users = () => {
  return [
    { id: '1', userName: 'Jailson' },
    { id: '2', userName: 'Jailson' },
    { id: '3', userName: 'Jailson' },
  ];
};

export const userResolvers = {
  Query: {
    user,
    users,
  },
};
