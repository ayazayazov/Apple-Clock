// document.addEventListener("DOMContentLoaded", function () {
//     // API'den verileri çek
//     fetch("https://script.google.com/macros/s/AKfycbyd5AcbAnWi2Yn0xhFRbyzS4qMq1VucMVgVvhul5XqS9HkAyJY/exec")
//         .then(response => response.json())
//         .then(data => {
//             // API'den gelen verileri kullanarak saat bilgilerini oluştur
//             const worldClockContainer = document.getElementById("worldClockContainer");

//             data.forEach(entry => {
//                 const paralelContainer = document.createElement("div");
//                 paralelContainer.classList.add("paralel-container");

//                 const h2 = document.createElement("h2");
//                 h2.classList.add("h22", "text-white");
//                 h2.textContent = entry.location;

//                 const h3 = document.createElement("h3");
//                 h3.classList.add("h33", "text-white");
//                 h3.textContent = entry.time;

//                 paralelContainer.appendChild(h2);
//                 paralelContainer.appendChild(h3);
//                 worldClockContainer.appendChild(paralelContainer);
//             });
//         })
//         .catch(error => console.error("Error fetching world time:", error));
// });


let containerid = document.querySelector("#containerid");

// async function containerapi (){
//     try{let url = `http://worldtimeapi.org/api/timezone/Asia/`;
//     const response = await fetch(url);

//     const data = await response.json();

//     let apidataall = data.PromiseResult.map((element)=>{
//         console.log(element, "element");
//     }).join('');}catch{

//     }
  
// };

// console.log(containerapi());

const worldClocks = document.querySelector('#worldClocks');

const BakuPromise = fetch('https://worldtimeapi.org/api/timezone/Asia/Baku');

BakuPromise.then((res)=>{
    const secondPromise = res.json();
    return secondPromise;
}).then((data)=>{
    console.log(data);
    // console.log('datetime', data.datetime.slice(11, 16));
    worldClocks.innerHTML = `
    <div class="line"></div>
    <div class="paralel-container">
      <h2 class="h22 text-white">Baku</h2>
      <h3 class="h33 text-white">${data.datetime.slice(11, 16)}</h3>
    </div>
    `
}).catch((err)=>{
    console.log('err', err);
}).finally(()=>{
    console.log('fetched.');
})

const IstanbulPromise = fetch('https://worldtimeapi.org/api/timezone/Europe/Istanbul');

IstanbulPromise.then((res)=>{
    const secondPromise = res.json();
    return secondPromise;
}).then((data)=>{
    console.log(data);
    // console.log('datetime', data.datetime.slice(11, 16));
    worldClocks.innerHTML += `
    <div class="line"></div>
    <div class="paralel-container">
      <h2 class="h22 text-white">Istanbul</h2>
      <h3 class="h33 text-white">${data.datetime.slice(11, 16)}</h3>
    </div>
    `

}).catch((err)=>{
    console.log('err', err);
}).finally(()=>{
    console.log('fetched.');
})

const BerlinPromise = fetch('https://worldtimeapi.org/api/timezone/Europe/Berlin');

BerlinPromise.then((res)=>{
    const secondPromise = res.json();
    return secondPromise;
}).then((data)=>{
    console.log(data);
    // console.log('datetime', data.datetime.slice(11, 16));
    worldClocks.innerHTML += `
    <div class="line"></div>
    <div class="paralel-container">
      <h2 class="h22 text-white">Berlin</h2>
      <h3 class="h33 text-white">${data.datetime.slice(11, 16)}</h3>
    </div>
    `

}).catch((err)=>{
    console.log('err', err);
}).finally(()=>{
    console.log('fetched.');
})

const DublinPromise = fetch('https://worldtimeapi.org/api/timezone/Europe/Dublin');

DublinPromise.then((res)=>{
    const secondPromise = res.json();
    return secondPromise;
}).then((data)=>{
    console.log(data);
    // console.log('datetime', data.datetime.slice(11, 16));
    worldClocks.innerHTML += `
    <div class="line"></div>
    <div class="paralel-container">
      <h2 class="h22 text-white">Dublin</h2>
      <h3 class="h33 text-white">${data.datetime.slice(11, 16)}</h3>
    </div>
    `

}).catch((err)=>{
    console.log('err', err);
}).finally(()=>{
    console.log('fetched.');
})

const NYCPromise = fetch('https://worldtimeapi.org/api/timezone/America/New_York');

NYCPromise.then((res)=>{
    const secondPromise = res.json();
    return secondPromise;
}).then((data)=>{
    console.log(data);
    // console.log('datetime', data.datetime.slice(11, 16));
    worldClocks.innerHTML += `
    <div class="line"></div>
    <div class="paralel-container">
      <h2 class="h22 text-white">New York</h2>
      <h3 class="h33 text-white">${data.datetime.slice(11, 16)}</h3>
    </div>
    `

}).catch((err)=>{
    console.log('err', err);
}).finally(()=>{
    console.log('fetched.');
})

const LosAngelesPromise = fetch('https://worldtimeapi.org/api/timezone/America/Los_Angeles');

LosAngelesPromise.then((res)=>{
    const secondPromise = res.json();
    return secondPromise;
}).then((data)=>{
    console.log(data);
    // console.log('datetime', data.datetime.slice(11, 16));
    worldClocks.innerHTML += `
    <div class="line"></div>
    <div class="paralel-container">
      <h2 class="h22 text-white">Los Angeles</h2>
      <h3 class="h33 text-white">${data.datetime.slice(11, 16)}</h3>
    </div>
    `

}).catch((err)=>{
    console.log('err', err);
}).finally(()=>{
    console.log('fetched.');
})

const BudapestPromise = fetch('https://worldtimeapi.org/api/timezone/Europe/Budapest');

BudapestPromise.then((res)=>{
    const secondPromise = res.json();
    return secondPromise;
}).then((data)=>{
    console.log(data);
    // console.log('datetime', data.datetime.slice(11, 16));
    worldClocks.innerHTML += `
    <div class="line"></div>
    <div class="paralel-container">
      <h2 class="h22 text-white">Budapest</h2>
      <h3 class="h33 text-white">${data.datetime.slice(11, 16)}</h3>
    </div>
    `

}).catch((err)=>{
    console.log('err', err);
}).finally(()=>{
    console.log('fetched.');
})

const LondonPromise = fetch('https://worldtimeapi.org/api/timezone/Europe/London');

LondonPromise.then((res)=>{
    const secondPromise = res.json();
    return secondPromise;
}).then((data)=>{
    console.log(data);
    // console.log('datetime', data.datetime.slice(11, 16));
    worldClocks.innerHTML += `
    <div class="line"></div>
    <div class="paralel-container">
      <h2 class="h22 text-white">London</h2>
      <h3 class="h33 text-white">${data.datetime.slice(11, 16)}</h3>
    </div>
    `

}).catch((err)=>{
    console.log('err', err);
}).finally(()=>{
    console.log('fetched.');
})

const MoscowPromise = fetch('https://worldtimeapi.org/api/timezone/Europe/Moscow');

MoscowPromise.then((res)=>{
    const secondPromise = res.json();
    return secondPromise;
}).then((data)=>{
    console.log(data);
    // console.log('datetime', data.datetime.slice(11, 16));
    worldClocks.innerHTML += `
    <div class="line"></div>
    <div class="paralel-container">
      <h2 class="h22 text-white">Moscow</h2>
      <h3 class="h33 text-white">${data.datetime.slice(11, 16)}</h3>
    </div>
    `

}).catch((err)=>{
    console.log('err', err);
}).finally(()=>{
    console.log('fetched.');
})


const RomePromise = fetch('https://worldtimeapi.org/api/timezone/Europe/Rome');

RomePromise.then((res)=>{
    const secondPromise = res.json();
    return secondPromise;
}).then((data)=>{
    console.log(data);
    // console.log('datetime', data.datetime.slice(11, 16));
    worldClocks.innerHTML += `
    <div class="line"></div>
    <div class="paralel-container">
      <h2 class="h22 text-white">Rome</h2>
      <h3 class="h33 text-white">${data.datetime.slice(11, 16)}</h3>
    </div>
    `

}).catch((err)=>{
    console.log('err', err);
}).finally(()=>{
    console.log('fetched.');
})

const MadridPromise = fetch('https://worldtimeapi.org/api/timezone/Europe/Madrid');

MadridPromise.then((res)=>{
    const secondPromise = res.json();
    return secondPromise;
}).then((data)=>{
    console.log(data);
    // console.log('datetime', data.datetime.slice(11, 16));
    worldClocks.innerHTML += `
    <div class="line"></div>
    <div class="paralel-container">
      <h2 class="h22 text-white">Madrid</h2>
      <h3 class="h33 text-white">${data.datetime.slice(11, 16)}</h3>
    </div>
    `

}).catch((err)=>{
    console.log('err', err);
}).finally(()=>{
    console.log('fetched.');
})

// const MadridPromise = fetch('http://worldtimeapi.org/api/timezone/Europe/Madrid');

// MadridPromise.then((res)=>{
//     const secondPromise = res.json();
//     return secondPromise;
// }).then((data)=>{
//     console.log(data);
//     // console.log('datetime', data.datetime.slice(11, 16));
//     worldClocks.innerHTML += `
//     <div class="line"></div>
//     <div class="paralel-container">
//       <h2 class="h22 text-white">Madrid</h2>
//       <h3 class="h33 text-white">${data.datetime.slice(11, 16)}</h3>
//     </div>
//     `

// }).catch((err)=>{
//     console.log('err', err);
// }).finally(()=>{
//     console.log('fetched.');
// })

const ViennaPromise = fetch('https://worldtimeapi.org/api/timezone/Europe/Vienna');

ViennaPromise.then((res)=>{
    const secondPromise = res.json();
    return secondPromise;
}).then((data)=>{
    console.log(data);
    // console.log('datetime', data.datetime.slice(11, 16));
    worldClocks.innerHTML += `
    <div class="line"></div>
    <div class="paralel-container">
      <h2 class="h22 text-white">Vienna</h2>
      <h3 class="h33 text-white">${data.datetime.slice(11, 16)}</h3>
    </div>
    `

}).catch((err)=>{
    console.log('err', err);
}).finally(()=>{
    console.log('fetched.');
})