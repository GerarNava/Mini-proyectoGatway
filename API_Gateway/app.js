import express from 'express';
import axios from 'axios';

const app = express();
const PORT = 3000;

// Ruta para manejar todas las solicitudes GET a /vendedores
app.get('/vendedores', async (req, res) => {
  try {
    const response = await axios.get('http://localhost:8000/vendedores');
    res.json(response.data);
  } catch (error) {
    res.status(error.response.status).json(error.response.data);
  }
});

// Ruta para manejar la solicitud GET a /vendedores/:id
app.get('/vendedores/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const response = await axios.get(`http://localhost:8000/vendedores/${id}`);
    res.json(response.data);
  } catch (error) {
    res.status(error.response.status).json(error.response.data);
  }
});

// Ruta para manejar la solicitud POST a /vendedores
app.post('/vendedores', async (req, res) => {
  try {
    const response = await axios.post('http://localhost:8000/vendedores', req.body);
    res.json(response.data);
  } catch (error) {
    res.status(error.response.status).json(error.response.data);
  }
});

// Ruta para manejar la solicitud PUT a /vendedores/:id
app.put('/vendedores/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const response = await axios.put(`http://localhost:8000/vendedores/${id}`, req.body);
    res.json(response.data);
  } catch (error) {
    res.status(error.response.status).json(error.response.data);
  }
});

// Ruta para manejar la solicitud DELETE a /vendedores/:id
app.delete('/vendedores/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const response = await axios.delete(`http://localhost:8000/vendedores/${id}`);
    res.json(response.data);
  } catch (error) {
    res.status(error.response.status).json(error.response.data);
  }
});

// Ruta para manejar todas las solicitudes GET a /productos
app.get('/productos', async (req, res) => {
    try {
      const response = await axios.get('http://localhost:8001/productos');
      res.json(response.data);
    } catch (error) {
      res.status(error.response.status).json(error.response.data);
    }
  });
  
  // Ruta para manejar la solicitud GET a /productos/:id
  app.get('/productos/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const response = await axios.get(`http://localhost:8001/productos/${id}`);
      res.json(response.data);
    } catch (error) {
      res.status(error.response.status).json(error.response.data);
    }
  });
  
  // Ruta para manejar la solicitud POST a /productos
  app.post('/productos', async (req, res) => {
    try {
      const response = await axios.post('http://localhost:8001/productos', req.body);
      res.json(response.data);
    } catch (error) {
      res.status(error.response.status).json(error.response.data);
    }
  });
  
  // Ruta para manejar la solicitud PUT a /productos/:id
  app.put('/productos/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const response = await axios.put(`http://localhost:8001/productos/${id}`, req.body);
      res.json(response.data);
    } catch (error) {
      res.status(error.response.status).json(error.response.data);
    }
  });
  
  // Ruta para manejar la solicitud DELETE a /productos/:id
  app.delete('/productos/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const response = await axios.delete(`http://localhost:8001/productos/${id}`);
      res.json(response.data);
    } catch (error) {
      res.status(error.response.status).json(error.response.data);
    }
  });

// Ruta para manejar todas las solicitudes GET a /clientes
app.get('/clientes', async (req, res) => {
    try {
      const response = await axios.get('http://localhost:8002/clientes');
      res.json(response.data);
    } catch (error) {
      res.status(error.response.status).json(error.response.data);
    }
  });
  
  // Ruta para manejar la solicitud GET a /clientes/:id
  app.get('/clientes/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const response = await axios.get(`http://localhost:8002/clientes/${id}`);
      res.json(response.data);
    } catch (error) {
      res.status(error.response.status).json(error.response.data);
    }
  });
  
  // Ruta para manejar la solicitud POST a /clientes
  app.post('/clientes', async (req, res) => {
    try {
      const response = await axios.post('http://localhost:8002/clientes', req.body);
      res.json(response.data);
    } catch (error) {
      res.status(error.response.status).json(error.response.data);
    }
  });
  
  // Ruta para manejar la solicitud PUT a /clientes/:id
  app.put('/clientes/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const response = await axios.put(`http://localhost:8002/clientes/${id}`, req.body);
      res.json(response.data);
    } catch (error) {
      res.status(error.response.status).json(error.response.data);
    }
  });
  
  // Ruta para manejar la solicitud DELETE a /clientes/:id
  app.delete('/clientes/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const response = await axios.delete(`http://localhost:8002/clientes/${id}`);
      res.json(response.data);
    } catch (error) {
      res.status(error.response.status).json(error.response.data);
    }
  });

// Ruta para manejar todas las solicitudes GET a /facturas
app.get('/facturas', async (req, res) => {
    try {
      const response = await axios.get('http://localhost:8003/facturas');
      res.json(response.data);
    } catch (error) {
      res.status(error.response.status).json(error.response.data);
    }
  });
  
  // Ruta para manejar la solicitud GET a /facturas/:id
  app.get('/facturas/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const response = await axios.get(`http://localhost:8003/facturas/${id}`);
      res.json(response.data);
    } catch (error) {
      res.status(error.response.status).json(error.response.data);
    }
  });
  
  // Ruta para manejar la solicitud POST a /facturas
  app.post('/facturas', async (req, res) => {
    try {
      const response = await axios.post('http://localhost:8003/facturas', req.body);
      res.json(response.data);
    } catch (error) {
      res.status(error.response.status).json(error.response.data);
    }
  });
  
  // Ruta para manejar la solicitud PUT a /facturas/:id
  app.put('/facturas/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const response = await axios.put(`http://localhost:8003/facturas/${id}`, req.body);
      res.json(response.data);
    } catch (error) {
      res.status(error.response.status).json(error.response.data);
    }
  });
  
  // Ruta para manejar la solicitud DELETE a /facturas/:id
  app.delete('/facturas/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const response = await axios.delete(`http://localhost:8003/facturas/${id}`);
      res.json(response.data);
    } catch (error) {
      res.status(error.response.status).json(error.response.data);
    }
  });

// Inicia el servidor de la API Gateway
app.listen(PORT, () => {
  console.log(`API Gateway running on port ${PORT}`);
});
