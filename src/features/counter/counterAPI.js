export function fetchCount(amount = 1) {
  return new Promise(async (resolve) => { // Mark the callback function as async
    try {
      const response = await fetch('http://localhost:8080');
      const data = await response.json();
      resolve({ data });
    } catch (error) {
      // Handle any errors here
      console.error('Error fetching data:', error);
      resolve({ error: 'Error fetching data' });
    }
  });
}
