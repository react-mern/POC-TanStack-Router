export async function fetchUsers(): Promise<User[]> {
  const response = await fetch(
    'https://api.escuelajs.co/api/v1/users?offset=0&limit=5'
  );
  if (!response.ok) {
    throw new Error('Failed to fetch users');
  }

  const data = await response.json();
  return data;
}

export async function fetchSlowUsers(): Promise<User[]> {
  return new Promise((resolve, reject) => {
    setTimeout(async () => {
      try {
        const response = await fetch(
          'https://api.escuelajs.co/api/v1/users?limit=5&offset=10'
        );
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        const data = await response.json();
        resolve(data);
      } catch (error) {
        reject(error);
      }
    }, 3000); // 3 seconds delay
  });
}

export async function fetchUserById(userId: string) {
  const url = `https://api.escuelajs.co/api/v1/users/${userId}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Failed to fetch user');
  }

  const data = await response.json();
  return data;
}
