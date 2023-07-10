class ProductManager {
  constructor() {
    this.products = [];
    this.automaticId = 1;
  }

  addProduct(title, description, price, thumbnail, code, stock) {
    const codeExistent = this.products.find((product) => product.code === code);
    if (codeExistent) {
      return console.log(
        `El código ${code} coincide con el producto ${codeExistent.title}, ya existente en nuestra base de datos `
      );
    }
    const product = {
      id: this.automaticId++,
      title,
      description,
      price,
      thumbnail,
      stock,
      code,
    };

    if (!title || !description || !price || !thumbnail || !stock || !code) {
      return console.log(
        `Todos los campos son obñigatorios, por favor asegurese de completarlos en ${product.title}`
      );
    }

    this.products.push(product);
    console.log(
      `El producto ${product.title} se agregó correctamente a la base de datos`
    );
  }

  getProducts() {
    return this.products;
  }

  getProductById(id) {
    const findId = this.products.find((product) => product.id === id);

    if (!findId) {
      return console.log(
        `Not Found: El producto con el id ${id} no fue encontrado en nuestra base de datos`
      );
    } else {
      console.log(`El producto con el id ${id} fue encontrado`);
    }
  }
}

const product = new ProductManager();

console.log(product.getProducts());

product.addProduct(
  "Producto prueba",
  "Este es un producto prueba",
  "200",
  "Sin imagen",
  "abc123",
  "25"
);

console.log(product.getProducts());

product.addProduct(
  "Producto prueba",
  "Este es un producto prueba",
  "200",
  "Sin imagen",
  "abc123",
  "25"
);

product.getProductById(1);
product.getProductById(5);
