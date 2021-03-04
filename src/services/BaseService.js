const BaseService = module.exports;


function sumValues (a, b) {
    return a+b;
}

BaseService.getASum = async (data) => {

    const result = sumValues(data.a, data.b);
    const sum = {
        sum: result,
      }

    return sum;
}

BaseService.getAProduct = async (data) => {

    const result = data.a *2;
    const product = {
        product: result,
      }

    return product;
}

BaseService.getAPower = async (data) => {

    const result = data.a;
    const power = {
        power: result,
      }

    return power;
}