const getData = async function (URL) {
    return await fetch(URL)
    .then(res => res.json())
    .then(data => {
      let transcludedData = [];
      data.forEach((value, index) => {
        value['featureImg'] = "https://cdn.pixabay.com/photo/2017/09/06/13/56/armageddon-2721568__340.jpg";
        transcludedData.push(value)
       
    });
      return transcludedData;
    }).catch((error) => {
      console.log(error);
    });
}

export default getData;