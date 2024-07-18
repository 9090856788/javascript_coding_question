// Implement a function that serialises a Javascript value into a JSON string.

const SerializeJson = (value) => {
  try {
    JSON.stringify(value);
    return value;
  } catch (error) {
    console.log(error);
    return null;
  }
};
let obj = {
  name: "Kanhu",
  age: 24,
  address: "Nayagarh",
};

let stringfyData = SerializeJson(obj);
console.log(stringfyData);
