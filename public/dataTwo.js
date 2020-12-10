// Banner Section
document.getElementById("home").onclick = function () {
    location.href = "/index.html";
}
document.getElementById("about").onclick = function () {
  location.href = "/about.html";
}
document.getElementById("docs").onclick = function () {
  location.href = "/docs.html";
}

// Back Button
document.getElementById("backButton").onclick = function () {
    location.href = "/index.html";
}

// Data Visualization Section
function convertAgenciesToCategories(agencyList) {
    const newDataShape = agencyList.reduce((collection, item, i) => {
        const findCat = collection.find((findItem) => findItem.label === item.agency);
  
        if (!findCat) {
            collection.push({
            label: item.agency,
            y: 1,
        });
        } else {   
            const position = collection.findIndex((el) => el.label === item.agency);
            collection[position].y += 1;
        }
        return collection;
    }, []);
    
    console.log(newDataShape);
  
    return newDataShape;
  }
  
  function makeYourOptionsObject(datapointsFromAgencyList) {
    CanvasJS.addColorSet('customColorSet1', [
        '#F0A80A',
        '#900AFA',
    ]);
  
    return {
      animationEnabled: true,
      colorSet: 'customColorSet1',
      title: {
        text: 'Counts of Agencies in PG County'
      },
      axisX: {
        interval: 1,
        labelFontSize: 12,
      },
      axisY: {
        title: 'Agency Count',
        labelFontSize: 12,
        includeZero: true,
      },
      data: [{
        type: 'column',
        name: 'Agencies',
        yValueFormatString: "#,### Agency Count",
        dataPoints: datapointsFromAgencyList
      }]
    };
  }

  function runThisWithResultsFromServer(jsonFromServer) {
    console.log('jsonFromServer', jsonFromServer);
    sessionStorage.setItem('agencyList', JSON.stringify(jsonFromServer));
  
    const reorganizedData = convertAgenciesToCategories(jsonFromServer);
    const options = makeYourOptionsObject(reorganizedData);
    const chart = new CanvasJS.Chart('chartContainer', options);
    chart.render();
  }

document.body.addEventListener("submit", async (e) => {
    e.preventDefault();
    const form = $(e.target).serializeArray();
    console.log(form);
    fetch('/api2015', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    })
      .then((fromServer) => fromServer.json())
      .then((jsonFromServer) => runThisWithResultsFromServer(jsonFromServer))
      .catch((err) => {
        console.log(err);
      });
  });