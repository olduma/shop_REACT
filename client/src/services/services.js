export class GetData {

    apiUrl = "https://fakestoreapi.com"

    errorMessage = (response) => {
        throw new Error(`Can not fetch ${this.apiUrl}, status ${response.status}`);
    }

    async fetchCategories(url) {
        const response = await fetch(`${this.apiUrl}/products/categories`);
        if (!response.ok) this.errorMessage(response)
        return await response.json();
    }

    async fetchProducts(visibleProducts) {
        const link = visibleProducts === "show all" ? "" : `/category/${visibleProducts}`;
        const response = await fetch(`${this.apiUrl}/products${link}`);
        if (!response.ok) this.errorMessage(response)
        return await response.json();
    }

    async fetchProductById(id) {
        const response = await fetch(`${this.apiUrl}/products/${id}`);
        if (!response.ok) this.errorMessage(response)
        return await response.json();
    }

}
