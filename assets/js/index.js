let navLinks = document.querySelectorAll('.nav-link')
let sections = document.querySelectorAll('.app-section')
let imageTitle = document.getElementById('apod-title')
let imageDate = document.getElementById('apod-date')


navLinks.forEach((link) => {
  link.addEventListener('click', () => {

    let sectionId = link.getAttribute('data-section')

    navLinks.forEach((nav) => {

      nav.classList.remove('bg-blue-500/10', 'text-blue-400')

    })
    link.classList.add('bg-blue-500/10', 'text-blue-400')



    sections.forEach((section) => {
      section.classList.add('hidden')

    })
    document.getElementById(sectionId).classList.remove('hidden')
  })

})



const callApi1 = async () => {

  try {

    if (response.status <= 200) {


      let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=WrqQKPkBzw7RLdCzrdzjGWmmJfNWPfdfTGzfbMMq`)
      let data = await response.json()
      console.log(data)
      displayApi1(data)
    }
  } catch (error) {
    document.getElementById('api1').innerHTML += `              
          <div id="apod-image-container" class="relative rounded-2xl overflow-hidden group h-[300px] md:h-[400px] lg:h-[600px] bg-slate-800/50 flex items-center justify-center">
                <div id="apod-loading" class="text-center">
                  <i class="text-4xl text-blue-400 mb-4" data-fa-i2svg=""><svg class="svg-inline--fa fa-spinner fa-spin" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="spinner" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z"></path></svg></i>
                  <p class="text-slate-400">Loading today's image...</p>
                </div>
              <img id="apod-image" class="w-full h-full object-cover hidden" src="" alt=""></div>
                  
                `
    document.getElementById('apod-date-detail').innerHTML = `loading...`
    document.getElementById('apod-date-info').innerHTML = `loading...`
    document.getElementById('apod-date').innerHTML = `Astronomy Picture of the Day - loading...`
    document.getElementById('apod-explanation').innerHTML = `Loading description...`
    console.log('there is error here api1', error.message)
  }
}
callApi1()
const displayApi1 = (data) => {
  let cartona = '';


  cartona += `
        <div
          id="apod-image-container"
          class="relative rounded-2xl overflow-hidden group h-[300px] md:h-[400px] lg:h-[600px] bg-slate-800/50 flex items-center justify-center"
        >
          <img
            id="apod-image"
            class="w-full h-full object-cover"
            src="${data.hdurl}"
            alt="${data.title}"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
            <div class="absolute bottom-6 left-6 right-6">
              <a href="https://science.nasa.gov/wp-content/themes/nasa-child/assets/images/nasa-logo@2x.png" target="_blank" class="block w-full py-3 bg-white/10 backdrop-blur-md rounded-lg font-semibold hover:bg-white/20 transition-colors text-center">
                        <i class="mr-2" data-fa-i2svg=""><svg class="svg-inline--fa fa-expand" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="expand" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M32 32C14.3 32 0 46.3 0 64v96c0 17.7 14.3 32 32 32s32-14.3 32-32V96h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H32zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H64V352zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32h64v64c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32H320zM448 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64H320c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32V352z"></path></svg></i>View Full Resolution
                    </a>
            </div>
          </div>
        </div>
    `;



  imageTitle.innerHTML += `${data.title}`

  document.getElementById('apod-date-detail').innerHTML = `${data.date}`
  document.getElementById('apod-date').innerHTML = `Astronomy Picture of the Day - ${data.date}`
  document.getElementById('apod-explanation').innerHTML = `${data.explanation}`
  document.getElementById('apod-date-info').innerHTML = `${data.date}`
  document.getElementById('api1').innerHTML = cartona;
}

let callApi2 = async () => {
  try {
    let response = await fetch(`https://lldev.thespacedevs.com/2.3.0/launches/upcoming/?limit=10`)
    let data = await response.json()
    let result = data.results
    console.log(result)
    displayApi2P1(result)
    displayApi2P2(result)
  } catch (error) {
    console.log('there is error here api2', error.message)
  }
}
callApi2()

let displayApi2P1 = (result) => {
  cartona = ``
  cartona += `              <div class="flex flex-col justify-between h-auto">
                <div>
                  <div class="flex items-center gap-3 mb-4">
                    <span
                      class="px-4 py-1.5 bg-blue-500/20 text-blue-400 rounded-full text-sm font-semibold flex items-center gap-2">
                      <i class="fas fa-star"></i>
                      Featured Launch
                    </span>
                    <span class="px-4 py-1.5 bg-green-500/20 text-green-400 rounded-full text-sm font-semibold">
                      Go
                    </span>
                  </div>
                  <h3 class="text-3xl font-bold mb-3 leading-tight">
                    ${result[0].name}
                  </h3>
                  <div class="flex flex-col xl:flex-row xl:items-center gap-4 mb-6 text-slate-400">
                    <div class="flex items-center gap-2">
                      <i class="fas fa-building"></i>
                      <span>${result[0].launch_service_provider.name}</span>
                    </div>
                    <div class="flex items-center gap-2">
                      <i class="fas fa-rocket"></i>
                      <span>${result[0].name.slice(0,13)}</span>
                    </div>
                  </div>
                  <div class="grid xl:grid-cols-2 gap-4 mb-6">
                    <div class="bg-slate-900/50 rounded-xl p-4">
                      <p class="text-xs text-slate-400 mb-1 flex items-center gap-2">
                        <i class="fas fa-calendar"></i>
                        Launch Date
                      </p>
                      <p class="font-semibold">Thursday, October 22, 2026</p>
                    </div>
                    <div class="bg-slate-900/50 rounded-xl p-4">
                      <p class="text-xs text-slate-400 mb-1 flex items-center gap-2">
                        <i class="fas fa-clock"></i>
                        Launch Time
                      </p>
                      <p class="font-semibold">02:57 AM UTC</p>
                    </div>
                    <div class="bg-slate-900/50 rounded-xl p-4">
                      <p class="text-xs text-slate-400 mb-1 flex items-center gap-2">
                        <i class="fas fa-map-marker-alt"></i>
                        Location
                      </p>
                      <p class="font-semibold text-sm">Wenchang Space Launch Site, People's Republic of China</p>
                    </div>
                    <div class="bg-slate-900/50 rounded-xl p-4">
                      <p class="text-xs text-slate-400 mb-1 flex items-center gap-2">
                        <i class="fas fa-globe"></i>
                        Country
                      </p>
                      <p class="font-semibold">China</p>
                    </div>
                  </div>
                  <p class="text-slate-300 leading-relaxed mb-6">
                    Details TBD.
                  </p>
                </div>
                <div class="flex flex-col md:flex-row gap-3">
                  <button
                    class="flex-1 self-start md:self-center px-6 py-3 bg-blue-500 rounded-xl hover:bg-blue-600 transition-colors font-semibold flex items-center justify-center gap-2">
                    <i class="fas fa-info-circle"></i>
                    View Full Details
                  </button>
                  <div class="icons self-end md:self-center">
                    <button class="px-4 py-3 bg-slate-700 rounded-xl hover:bg-slate-600 transition-colors">
                      <i class="far fa-heart"></i>
                    </button>
                    <button class="px-4 py-3 bg-slate-700 rounded-xl hover:bg-slate-600 transition-colors">
                      <i class="fas fa-bell"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div class="relative">
                <div class="relative h-full min-h-[400px] rounded-2xl overflow-hidden bg-slate-900/50">
                  <img src="${result[0].image.image_url}" alt="Long March 8A | Unknown Payload" class="w-full h-full object-cover">
                  <div class="flex items-center justify-center h-full min-h-[100px] bg-slate-800">
                    <i class="fas fa-rocket text-9xl text-slate-700/50"></i>
                  </div>
                  <div class="absolute inset-0 bg-linear-to-t from-slate-900 via-transparent to-transparent"></div>
                </div>
              </div>`
  document.getElementById('big-div').innerHTML = cartona;
}
let displayApi2P2 = (result) => {
  cartona = ''
  for (let i = 1; i < result.length; i++) {
    cartona += `          <div 
            class="bg-slate-800/50 border border-slate-700 rounded-2xl overflow-hidden hover:border-blue-500/30 transition-all group cursor-pointer">
            <div class="relative h-48 bg-slate-900/50 overflow-hidden flex items-center justify-center">
            <img class='w-full h-full object-cover overflow-hidden group-hover:scale-110 transition-transform duration-500' src='${result[i].image.image_url}' ></img>
              
              <div class="absolute top-3 right-3">
                <span class="px-3 py-1 bg-green-500/90 text-white backdrop-blur-sm rounded-full text-xs font-semibold">
                  ${result[i].status.abbrev}
                </span>
              </div>
            </div>
            <div class="p-5">
              <div class="mb-3">
                <h4 class="font-bold text-lg mb-2 line-clamp-2 group-hover:text-blue-400 transition-colors">
                  ${result[i].name}
                </h4>
                <p class="text-sm text-slate-400 flex items-center gap-2">
                  <i class="fas fa-building text-xs"></i>
                  ${result[i].launch_service_provider.name}
                </p>
              </div>
              <div class="space-y-2 mb-4">
                <div class="flex items-center gap-2 text-sm">
                  <i class="fas fa-calendar text-slate-500 w-4"></i>
                  <span class="text-slate-300">${result[i].net.slice(0,10)}</span>
                </div>
                <div class="flex items-center gap-2 text-sm">
                  <i class="fas fa-clock text-slate-500 w-4"></i>
                  <span class="text-slate-300">23:00 UTC</span>
                </div>
                <div class="flex items-center gap-2 text-sm">
                  <i class="fas fa-rocket text-slate-500 w-4"></i>
                  <span class="text-slate-300">${result[i].name.split("|")[0].trim()}</span>
                </div>
                <div class="flex items-center gap-2 text-sm">
                  <i class="fas fa-map-marker-alt text-slate-500 w-4"></i>
                  <span class="text-slate-300 line-clamp-1">${result[i].pad.location.name}</span>
                </div>
              </div>
              <div class="flex items-center gap-2 pt-4 border-t border-slate-700">
                <button
                  class="flex-1 px-4 py-2 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors text-sm font-semibold">
                  Details
                </button>
                <button class="px-3 py-2 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors">
                  <i class="far fa-heart"></i>
                </button>
              </div>
            </div>
            </div>`
  }
  document.getElementById('launches-grid').innerHTML = cartona
}

let changePlanet = () => {
  let planets = document.querySelectorAll('.planet-card')
  planets.forEach((planet)=>{
    planet.addEventListener('click',()=>{
let planetName = planet.getAttribute('data-planet-id')

         callApi3(planetName)

    })

  });

}

let callApi3 = async (planetName)=>{
let response = await fetch('https://solar-system-opendata-proxy.vercel.app/api/planets')
let data = await response.json()
    let selectedPlanet = data.bodies.find((item) => {
        return item.englishName.toLowerCase() === planetName.toLowerCase();
    });
    displayPlanet(selectedPlanet)
    console.log(data.bodies)
    
    

}

changePlanet()
callApi3('venus')
let displayPlanet = (selectedPlanet)=>{ 
let cartona =''
cartona=`                 <div class="flex flex-col xl:flex-row xl:items-start space-y-4 xl:space-y-0">
              <div class="relative h-48 w-48 md:h-64 md:w-64 shrink-0 mx-auto xl:mr-6">
                <img id="planet-detail-image" class="w-full h-full object-contain" src="${selectedPlanet.image}"
                  alt="earth planet detailed realistic render with clouds and continents" />
              </div>
              <div class="flex-1">
                <div class="flex items-center justify-between mb-3 md:mb-4">
                  <h3 id="planet-detail-name" class="text-2xl md:text-3xl font-space font-bold">
                    ${selectedPlanet.englishName}
                  </h3>
                  <button class="w-10 h-10 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors">
                    <i class="far fa-heart"></i>
                  </button>
                </div>
                <p id="planet-detail-description"
                  class="text-slate-300 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
                ${selectedPlanet.description}
                </p>
              </div>
            </div>
            <div class="grid grid-cols-2 gap-2 md:gap-4 mt-4">
              <div class="bg-slate-900/50 rounded-lg p-3 md:p-4">
                <p class="text-xs text-slate-400 mb-1 flex items-center gap-1">
                  <i class="fas fa-ruler text-xs"></i>
                  <span class="text-xs">Semimajor Axis</span>
                </p>
                <p id="planet-distance" class="text-sm md:text-lg font-semibold">
                  ${(selectedPlanet.semimajorAxis / 1000000).toFixed(1)}M km
                </p>
              </div>
              <div class="bg-slate-900/50 rounded-lg p-4">
                <p class="text-xs text-slate-400 mb-1 flex items-center gap-1">
                  <i class="fas fa-circle"></i>
                  Mean Radius
                </p>
                <p id="planet-radius" class="text-lg font-semibold">
                 ${Math.floor(selectedPlanet.meanRadius)}
                </p>
              </div>
              <div class="bg-slate-900/50 rounded-lg p-4">
                <p class="text-xs text-slate-400 mb-1 flex items-center gap-1">
                  <i class="fas fa-weight"></i>
                  Mass
                </p>
                <p id="planet-mass" class="text-lg font-semibold">
                  ${selectedPlanet.mass.massValue} × 10^${selectedPlanet.mass.massExponent} kg
                </p>
              </div>
              <div class="bg-slate-900/50 rounded-lg p-4">
                <p class="text-xs text-slate-400 mb-1 flex items-center gap-1">
                  <i class="fas fa-compress"></i>
                  Density
                </p>
                <p id="planet-density" class="text-lg font-semibold">
                  ${(selectedPlanet.density).toFixed(2)} g/cm³
                </p>
              </div>
              <div class="bg-slate-900/50 rounded-lg p-4">
                <p class="text-xs text-slate-400 mb-1 flex items-center gap-1">
                  <i class="fas fa-sync-alt"></i>
                  Orbital Period
                </p>
                <p id="planet-orbital-period" class="text-lg font-semibold">
                  ${(selectedPlanet.sideralOrbit).toFixed(2)} days
                </p>
              </div>
              <div class="bg-slate-900/50 rounded-lg p-4">
                <p class="text-xs text-slate-400 mb-1 flex items-center gap-1">
                  <i class="fas fa-redo"></i>
                  Rotation Period
                </p>
                <p id="planet-rotation" class="text-lg font-semibold">
                  ${(selectedPlanet.sideralRotation).toFixed(2)} hours
                </p>
              </div>
              <div class="bg-slate-900/50 rounded-lg p-4">
                <p class="text-xs text-slate-400 mb-1 flex items-center gap-1">
                  <i class="fas fa-moon"></i>
                  Moons
                </p>
                <p id="planet-moons" class="text-lg font-semibold">${selectedPlanet.moons?.length || 0}</p>
              </div>
              <div class="bg-slate-900/50 rounded-lg p-4">
                <p class="text-xs text-slate-400 mb-1 flex items-center gap-1">
                  <i class="fas fa-arrows-alt-v"></i>
                  Gravity
                </p>
                <p id="planet-gravity" class="text-lg font-semibold">
                  ${(selectedPlanet.gravity).toFixed(2)} m/s²
                </p>
              </div>
            </div> ` 

            let cartona2= ''
            cartona2=`            <div class="bg-slate-800/50 border border-slate-700 rounded-2xl p-6">
              <h4 class="font-semibold mb-4 flex items-center">
                <i class="fas fa-user-astronaut text-purple-400 mr-2"></i>
                Discovery Info
              </h4>
              <div class="space-y-3 text-sm">
                <div class="flex justify-between items-center py-2 border-b border-slate-700">
                  <span class="text-slate-400">Discovered By</span>
                  <span id="planet-discoverer" class="font-semibold text-right">${selectedPlanet.discoveredBy || 'Known since antiquity'}</span>
                </div>
                <div class="flex justify-between items-center py-2 border-b border-slate-700">
                  <span class="text-slate-400">Discovery Date</span>
                  <span id="planet-discovery-date" class="font-semibold">${selectedPlanet.discoveryDate || 'Ancient times'}</span>
                </div>
                <div class="flex justify-between items-center py-2 border-b border-slate-700">
                  <span class="text-slate-400">Body Type</span>
                  <span id="planet-body-type" class="font-semibold">Planet</span>
                </div>
                <div class="flex justify-between items-center py-2">
                  <span class="text-slate-400">Volume</span>
                  <span id="planet-volume" class="font-semibold">${selectedPlanet.vol.volValue} × 10^${selectedPlanet.vol.volExponent} kg</span>
                </div>
              </div>
            </div>
            <div class="bg-slate-800/50 border border-slate-700 rounded-2xl p-6">
              <h4 class="font-semibold mb-4 flex items-center">
                <i class="fas fa-lightbulb text-yellow-400 mr-2"></i>
                Quick Facts
              </h4>
              <ul id="planet-facts" class="space-y-3 text-sm">
                <li class="flex items-start">
                  <i class="fas fa-check text-green-400 mt-1 mr-2"></i>
                  <span class="text-slate-300">Mass: ${selectedPlanet.mass.massValue} x 10^${selectedPlanet.mass.massExponent} kg</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check text-green-400 mt-1 mr-2"></i>
                  <span class="text-slate-300">Surface gravity: ${(selectedPlanet.gravity)} m/s²</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check text-green-400 mt-1 mr-2"></i>
                 
                  <span class="text-slate-300"> Density: ${(selectedPlanet.density).toFixed(2)} g/cm³</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check text-green-400 mt-1 mr-2"></i>
                  <span class="text-slate-300">Axial tilt: ${selectedPlanet.axialTilt}°</span>
                </li>
              </ul>
            </div>
            <div class="bg-slate-800/50 border border-slate-700 rounded-2xl p-6">
              <h4 class="font-semibold mb-4 flex items-center">
                <i class="fas fa-satellite text-blue-400 mr-2"></i>
                Orbital Characteristics
              </h4>
              <div class="space-y-3 text-sm">
                <div class="flex justify-between items-center py-2 border-b border-slate-700">
                  <span class="text-slate-400">Perihelion</span>
                  <span id="planet-perihelion" class="font-semibold">${(selectedPlanet.perihelion / 1000000).toFixed(1)}M km</span>
                </div>
                <div class="flex justify-between items-center py-2 border-b border-slate-700">
                  <span class="text-slate-400">Aphelion</span>
                  <span id="planet-aphelion" class="font-semibold">${(selectedPlanet.aphelion / 1000000).toFixed(1)}M km</span>
                </div>
                <div class="flex justify-between items-center py-2 border-b border-slate-700">
                  <span class="text-slate-400">Eccentricity</span>
                  <span id="planet-eccentricity" class="font-semibold">${selectedPlanet.eccentricity}</span>
                </div>
                <div class="flex justify-between items-center py-2 border-b border-slate-700">
                  <span class="text-slate-400">Inclination</span>
                  <span id="planet-inclination" class="font-semibold">${selectedPlanet.inclination}°</span>
                </div>
                <div class="flex justify-between items-center py-2 border-b border-slate-700">
                  <span class="text-slate-400">Axial Tilt</span>
                  <span id="planet-axial-tilt" class="font-semibold">${selectedPlanet.axialTilt}°</span>
                </div>
                <div class="flex justify-between items-center py-2 border-b border-slate-700">
                  <span class="text-slate-400">Avg Temperature</span>
                  <span id="planet-temp" class="font-semibold">${selectedPlanet.avgTemp}°C</span>
                </div>
                <div class="flex justify-between items-center py-2">
                  <span class="text-slate-400">Escape Velocity</span>
                  <span id="planet-escape" class="font-semibold">${(selectedPlanet.escape / 1000).toFixed(2)} km/s</span>
                </div>
              </div>
            </div>
            <button class="w-full py-3 bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors font-semibold">
              <i class="fas fa-book mr-2"></i>Learn More
            </button>`
            console.log(selectedPlanet.discoveredBy)
        document.getElementById('part-1').innerHTML = cartona
        document.getElementById('part-2').innerHTML = cartona2
}

