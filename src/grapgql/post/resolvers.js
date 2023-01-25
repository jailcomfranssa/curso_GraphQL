const post = () => {
  return {
    id: '1',
    titulo: 'Jailson',
  };
};

const posts = () => {
  return [
    { id: '1', titulo: 'Mais um Post 01' },
    { id: '2', titulo: 'Mais um Post 02' },
    { id: '3', titulo: 'Mais um Post 03' },
  ];
};

export const postResolvers = {
  Query: {
    post,
    posts,
  },
};
