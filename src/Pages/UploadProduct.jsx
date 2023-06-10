import React, { useState }  from 'react'
import '../style.css'
import SelectDropDown from '../Components/SelectDropDown'
import Menu from '../Components/Menu'
import garri from '../resources/egusi.jpg'
import Select from 'react-select'
// import selectItems from '../Components/datastore'
import productArray from '../data/productData'

  const InputFieldWithLabel = (props) => {
    return (
      <div className='inputContainer'>
        <label className='label'> {props.label} </label>
           <input
          value={props.itemValue}
           onChange={props.handleInputChange}
            className='input'
            type="text"
            name={props.name}
            ></input>
            {/* <p>{props.itemValue}</p> */}
        
      </div>
    )
  }
 
  function MyComponents() {
    const [formData, setFormData] = useState({
      name: '',
      email: ''
    });
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setFormData({ ...formData, [name]: value });
      alert(event.target.value);
      console.log(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
     alert(formData.name + formData.email);
      // Do something with the form data, such as sending it to a server
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Submit</button>
      
      </form>
    );
  }



const UploadProductPage = () => {  
const [product, setproduct] = useState({category:'',name:'', price:'', quantity:'', location:''})
// const [addProduct, setaddProduct] = useState(product)
const [selectedOption, setselectedOption] = useState(product)
const [productIndex, setproductIndex] = useState(0)
const {category, id, products} = productArray[productIndex];
const [holdProduct, setHoldProducts] = useState(products)
const [test, settest] = useState(false)

const handleInputChange = (event) => {
  const { name, value } = event.target;
  setproduct({ ...product, [name]: value });
 
};

// const handleSubmit = (event) => {
//   event.preventDefault();
//   setHoldProducts([...products, product])
//   alert('hello')
//   alert(holdProduct[holdProduct.length - 1].price + " " + product.price+ " " + productIndex )

// };
const handleSubmit = (event) => {
  event.preventDefault();
  const updatedProducts = productArray.map((productObj, index) => {
    if (index === productIndex) {
      return {
        ...productObj,
        products: [...productObj.products, product]
      };
    }
    return productObj;
  });
  setHoldProducts(updatedProducts[productIndex].products);

  alert(holdProduct[productIndex].products[productIndex].price )
};

//state and handler for managing the search product page
const handleChange = e => {
  setselectedOption(e);
}

const handleAddProduct = () => {
 
    
}
  
  return (
    <div className='uploadproduct-container'>
         <Menu pageName='Add Product'/>
         <form className='addproduct-container' onSubmit={handleSubmit}>
          <div className='inputContainer'>
          <label className='label'>
              Select Product Category
              </label>
              <Select
                placeholder="Select Option"
                isClearable={true}
                value={selectedOption}
                options={productArray}
                onChange={handleChange}
                getOptionLabel={e => (
                  <div style={{}} onClick={()=>setproductIndex(e.id)}>
                      {e.icon}
                      <span style={{marginLeft:5}}>{e.category}</span>
                  </div>
      )
    } 
      />
      {selectedOption && <div style={{marginTop:20,lineHeight:'25px'}}>
        <b>Selected Option:</b>{productIndex}
        </div>}
    </div>

          <InputFieldWithLabel itemValue={product.name} name='name' handleInputChange={handleInputChange} label={"Product-Name"}/>
          <InputFieldWithLabel itemValue={product.quantity} name='quantity' handleInputChange={handleInputChange}  label={"Quantity"}/>
          <InputFieldWithLabel itemValue={product.price} name="price" handleInputChange={handleInputChange} label={"Price"}/>
          <InputFieldWithLabel itemValue={product.location} name='location'handleInputChange={handleInputChange}  label={"Location"}/>
          {/* <div style={{marginTop:'1em', marginLeft:'0.2em', width:'100%', height:'12em'}}>
          <label className='label'>
          Select Image
           </label>
          <img src={garri} alt='' style={{ width:'90%', marginTop:'0.5em', marginLeft:'0.2em', borderRadius:'0.5em', height:'100%'}}/>
      </div>  */}
      {/* alert(  productArray[productIndex].category +   " " + product.name + " " + product.price + " "  +  product.quantity + ""+ product.location + " " ) */}
           <button style={{marginTop:'6em',  marginLeft:'5em',width:'8em', height:'3em', color:'black', fontSize:'0.8em', fontWeight:'40em', backgroundColor:'#4c8352'}} 
           onClick={()=> handleAddProduct} type='submit'>Submit</button>
        </form>

        <span>{
          
          products.map(e => (
            <h2>{e.name}</h2>
          ))
          }</span>

    </div>
  )
}

export default UploadProductPage