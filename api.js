const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');

const app = express();
const PORT = 3000;






app.get('/', async (req, res) => {
  try {
    // Realiza la solicitud HTTP al sitio web
    const response = await axios.get('https://www.cambioschaco.com.py/api/branch_office/1/exchange');

    


   const iteam = response.data.items[2]
    //const ARG = response.data.items((currency) => currency.isoCode === 'ARS');

    console.log(iteam)


  

    // Utiliza Cheerio para cargar el HTML de la respuesta
    
    



    const apirect = {
        MONEDA: iteam.isoCode ,
        COMPRA: iteam.purchasePrice ,
        VENTA:  iteam.salePrice ,
        F: iteam.updatedAt
       
    }
    
    // Envía los datos en la respuesta
    res.json({ apirect });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ha ocurrido un error en el servidor' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor en funcionamiento en el puerto ${PORT}`);
});
