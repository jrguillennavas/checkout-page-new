const add1 = document.getElementById("add1");
const less1 = document.getElementById("less1");
const add2 = document.getElementById("add2");
const less2 = document.getElementById("less2");
const sendForm = document.getElementById("send-form");
const save = document.getElementById("save");
const inputs = document.querySelectorAll("input");
const message = document.getElementById("message");



const equations = (ecu, id) => {
  const element = document.getElementById(id);
  let contador = parseInt(element.innerText);
  if (ecu === "plus") {
    contador += 1;
    element.innerText = contador;
  } else {
    if (contador <= 0) {
      contador = 0;
      element.innerText = contador;
    } else {
      contador -= 1;
      element.innerText = contador;
    }
  }
};

const total = () => {
  const total = document.getElementById("total");
  const item1 = parseInt(document.getElementById("count1").innerText);
  const item2 = parseInt(document.getElementById("count2").innerText);

  let totalItem1 = 54.99 * item1;
  let totalItem2 = 74.99 * item2;
  let showTotal = (totalItem1 + totalItem2 + 19).toFixed(2);
  total.innerText = `$${showTotal}`
};

 const saveData = () => {
  if (save.checked) {
    let data = [];
    localStorage.clear();
    inputs.forEach((value, key) => {
      if (value.type !== "submit" && value.type !== "checkbox") {
        data.push(value.value);
      }
    });
    localStorage.setItem("datas", data);
  }
};

const showDataFrom = () => {
  if (localStorage.getItem("datas")) {
    let data = localStorage.getItem("datas").split(",");
    const inputs = document.querySelectorAll("input");
    inputs.forEach((value, key) => {
      if (value.type !== "submit") {
        value.value = data[key];
      }
    });
  }
};

const resetForm = () => {
  inputs.forEach((value, key) => {
    if (value.type !== "submit") {
      value.value = "";
      save.checked = false;
    }
  });
};
const showMessage = () => {
  message.style.display = "block";
  setTimeout(() => {
    message.style.opacity = 0;
  }, 1000);
};

const resetCountItem = () => {
  const count1 = document.getElementById("count1");
  const count2 = document.getElementById("count2");
  count1.innerText = 1;
  count2.innerText = 1;
};



window.addEventListener('load', () => {

    showDataFrom()


  add1.addEventListener("click", () => {
    equations("plus", "count1")
    total()
  });
  less1.addEventListener("click", () => {
    equations('less', "count1")
    total()

  });
  add2.addEventListener("click", () => {
    equations("plus", "count2")
    total()
  });
  less2.addEventListener("click", () => {
    equations('less', "count2")
    total() 

  });
  sendForm.onsubmit = (e) => {
    e.preventDefault();
    saveData();
    showMessage();
    resetCountItem();
    resetForm();
  };

})