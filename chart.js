{/* <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.5.0/Chart.min.js"></script> */}

data=[];
labels=[];
data1=[]
for(var product of products){
    data.push(product.unitsSold)
    data1.push(product.availableUnits)
    labels.push(product.name)
}
new Chart(document.getElementById("bar-chart"), {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [
        {
          label: "units sold",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3E4ECD", "#CD763E", "#CDBE3E"],
          data: data
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Number of Units sold'
      }
    }
});

new Chart(document.getElementById("bar-chart1"), {
  type: 'bar',
  data: {
    labels: labels,
    datasets: [
      {
        label: "available units",
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3E4ECD", "#CD763E", "#CDBE3E"],
        data: data1
      }
    ]
  },
  options: {
    legend: { display: false },
    title: {
      display: true,
      text: 'Number of units Available'
    }
  }
});
productsInCart=localStorage.getItem("productsInCart")
cc=document.getElementById("productId")
cc.innerHTML=productsInCart