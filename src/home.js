
const htmlIni = ()=>{
    const content = document.getElementById('content')
    const contacts = document.createElement('section')
    contacts.innerHTML = `
    <div class="descrip">
    <h2>RestauranteReal</h2>
    <p>Es un oasis culinario donde la esencia de la cocina venezolana se fusiona con la frescura y elegancia de los sabores mediterráneos. Nuestro establecimiento se enorgullece de ofrecer una experiencia gastronómica única, donde cada plato es una obra de arte elaborada con ingredientes de la más alta calidad, priorizando los productos frescos y de temporada. Desde nuestras vibrantes arepas rellenas hasta un suculento cordero marroquí, cada bocado te transportará a un viaje de sensaciones, acompañado por un ambiente cálido y acogedor, perfecto para cualquier ocasión, ya sea una cena íntima o una celebración familiar.</p>

    <p>Ubicado estratégicamente en el corazón del vibrante Paseo Bolívar, justo al lado de la Plaza Miranda, en Lechería, Estado Anzoátegui, "RestauranteReal" ofrece una atmósfera que combina la tradición y la modernidad. Nuestros espacios han sido diseñados para evocar la belleza de ambas culturas, con detalles artesanales venezolanos y la luminosidad característica de la arquitectura mediterránea. Te invitamos a sumergirte en una experiencia donde la pasión por la buena comida y el servicio excepcional se encuentran en cada rincón.</p>
    </div>
    `
    content.appendChild(contacts)
}

export default htmlIni
