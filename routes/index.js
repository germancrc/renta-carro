const express = require('express');
const router = express.Router();

const autos = [
  { id: 1, nombre: 'Toyota Corolla', imagen: '/images/auto1.png', descripcion: 'Auto económico y confiable' },
  { id: 2, nombre: 'Mazda CX-5', imagen: '/images/auto2.png', descripcion: 'SUV moderna y cómoda' },
];

// Página principal
router.get('/', (req, res) => {
  res.render('index', { autos, title: 'Inicio' });
});

// Listado de autos
router.get('/autos', (req, res) => {
  res.render('autos', { autos, title: 'Autos disponibles' });
});

// Detalle de auto
router.get('/autos/:id', (req, res) => {
  const auto = autos.find(a => a.id == req.params.id);
  if (!auto) return res.status(404).send('Auto no encontrado');
  res.render('auto-detail', { auto, title: auto.nombre });
});

// Panel admin
router.get('/admin', (req, res) => {
  res.render('admin', { autos, title: 'Panel de administración' });
});

module.exports = router;
