const chai = {
    name: "adrakChai",
    price: "20rs",
    isAvailable: true,
}
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, "name",{
    writable: false,
    enumerable: false
})
console.log(Object.getOwnPropertyDescriptor(chai, "name"));