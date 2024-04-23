// A mock function to mimic making an async request for data
export function fetchCount(amount = 1) {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ data: amount }), 500)
  );
}

export function fetchProducts() {
  return new Promise((resolve) =>
    setTimeout(() => resolve([
      {
        id:"f7a23c59-9be0-43af-81db-33fa850e5199",
        price: 128.40,
        title: "Chega de Saudade",
        src: "images/tabs/tab1.png",
        fileName:"Chega-de-Saudade.pdf"
      },
      {
        id:"602262e7-d5fe-4d93-856c-92e412dfb376",
        price: 150.70,
        title: "How Deep Is Your Love",
        src: "images/tabs/tab3.png",
        fileName:"How-Deep-Is-Your-Love.pdf"
      },
      {
        id:"49b52fd4-e3e4-4ade-ac51-26fc1ec6182d",
        price: 180,
        title: "Shape of Water",
        src: "images/tabs/tab4.png",
        fileName:"Shape-of-water.pdf"
      },
    ]), 500)
  );
}