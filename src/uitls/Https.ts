export async function post(url: string, data: object) {
  try {
    const result = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
    });
    let res = await result.json();
    return res;
  } catch (error) {
    console.error(error);
  }
}

export async function get(url: string) {
  try {
    const result = await fetch(url, {
      method: 'GET',
    });
    let res = await result.json();
    return res;
  } catch (error) {
    console.error(error);
  }
}
