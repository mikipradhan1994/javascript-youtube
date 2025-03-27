function first(name) {
    this.name = name
    console.log("first function created")
}

function second(name, age, address) {
    first.call(this, name)
    this.age = age
    this.address = address

}

const getSecond = new second("miki", 30, "odisha");
console.log(getSecond)