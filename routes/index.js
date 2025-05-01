const express = require('express');
const router = express.Router();

const autos = [
  { 
    id: 1, 
    nombre: 'Toyota Corolla', 
    imagen: '/images/auto1.png', 
    descripcion: 'Auto económico y confiable', 
    precio: '3,000.00',
    caracteristicas: ['Híbrido', '5 pasajeros', 'Automático']
  },
  { 
    id: 2, 
    nombre: 'Mazda CX-5', 
    imagen: '/images/auto2.png', 
    descripcion: 'SUV moderna y cómoda', 
    precio: '3,500.00',
    caracteristicas: ['Gasolina', '5 pasajeros', 'Automático']
  },
  { 
    id: 3, 
    nombre: 'Hyundai Tucson', 
    imagen: '/images/auto3.png', 
    descripcion: 'SUV compacta con tecnología avanzada', 
    precio: '3,200.00',
    caracteristicas: ['Híbrido', '5 pasajeros', 'Tracción delantera']
  },
  { 
    id: 4, 
    nombre: 'Kia Sportage', 
    imagen: '/images/auto4.png', 
    descripcion: 'Diseño moderno y amplio espacio interior', 
    precio: '3,400.00',
    caracteristicas: ['Gasolina', '5 pasajeros', 'Sistema de infoentretenimiento']
  },
  { 
    id: 5, 
    nombre: 'Honda CR-V', 
    imagen: '/images/auto5.png', 
    descripcion: 'Confort familiar y tecnología premium', 
    precio: '3,600.00',
    caracteristicas: ['Híbrido', '7 pasajeros', 'Tracción integral']
  },
  { 
    id: 6, 
    nombre: 'Nissan Rogue', 
    imagen: '/images/auto6.png', 
    descripcion: 'Eficiencia y seguridad inteligente', 
    precio: '3,450.00',
    caracteristicas: ['Gasolina', '5 pasajeros', 'Asistencia al conductor']
  },
  { 
    id: 7, 
    nombre: 'Ford Escape', 
    imagen: '/images/auto7.png', 
    descripcion: 'Potencia y conectividad moderna', 
    precio: '3,550.00',
    caracteristicas: ['Híbrido enchufable', '5 pasajeros', 'Sistema SYNC 4']
  }
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