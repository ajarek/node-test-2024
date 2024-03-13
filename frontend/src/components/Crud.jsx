




  const fetchData = async () => {
    try {
      const response = await fetch('https://your-api.com/data'); // Replace with your API endpoint
      const fetchedData = await response.json();
      setData(fetchedData);
    } catch (error) {
      console.error(error);
    }
  };

  
  const createItem = async (newItem) => {
    try {
      const response = await fetch('https://your-api.com/data', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newItem),
      });
      const createdItem = await response.json();
      setData([...data, createdItem]);
    } catch (error) {
      console.error(error);
    }
  };


  const updateItem = async (id, updatedItem) => {
    try {
      const response = await fetch(`https://your-api.com/data/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedItem),
      });
      const updatedData = await response.json();
      setData(data.map((item) => (item.id === id ? updatedData : item)));
    } catch (error) {
      console.error(error);
    }
  };


  const deleteItem = async (id) => {
    try {
      await fetch(`https://your-api.com/data/${id}`, { method: 'DELETE' });
      setData(data.filter((item) => item.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

 
  


