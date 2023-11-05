
export const getApi = () => {

   try {
    const data = fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    return data
    
   } catch (error) {
    console.log(error)
    return [];
   }
}