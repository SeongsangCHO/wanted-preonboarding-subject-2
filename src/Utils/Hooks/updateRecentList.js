// state : recentProducts : []

// For example :
// const upDateArr = (randomProducts) => {
//   const {recentProducts} = this.state;
//   const willUpDateProduct = updateRecentList(randomProducts);
//   this.setState((prevProducts) => {recentProducts : prevProducts.concat(willUpDateProduct)})
//   localstorage.setItem("RecentList", JSON.stringify(recentProducts))
// }
////////////////////////////////////////////////////////////////////////////////////////////////////////////

const updateRecentList = (obj) => {
  const miliSecond = Date.now();
  const willAppendObj = { ...obj, recent: miliSecond };
  return willAppendObj;
  //  => { title: "구두", price: 30000, brand: "구찌", recent: 1234356674376}
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const toggleInteresting = async (obj, isInteresting) => {
  const recentLocal = localStorage.getItem("recentList");
  const data = JSON.parse(recentLocal);
  if (data) {
    await localStorage.setItem(
      "recentList",
      JSON.stringify([
        ...data.filter((item) => item.title !== obj.title),
        {
          ...obj,
          isInteresting: isInteresting,
        },
      ])
    );
  }
};

// isInterest
// const fetchData = async() => {
//   const dataFetch = await fetch(url);
//   const response = await dataFetch.json();
//   const addInterest = response.map(item => {return {...item, isInterest : false}});
//   this.setState({productData : addInterest});
//   localStorage.setItem("productData", addInterest);
// }

////////////////////////////////////////////////////////////////////////////////////////////////////////////

{
  // <button id={index} onClick={this.changeDislike}>관심 없음 등록</button>
  // const changeDislike = (event) => {
  //   const {target: {id}} = event;
  //   const {productData} = this.state;
  //   const newDislike = productData.map((item,index) => {
  //     return id !== index ? item : {...item, isInterest : !isInterest}
  //   this.setState({productData : newDislike})
  //   })
  // }
}

export default updateRecentList;
