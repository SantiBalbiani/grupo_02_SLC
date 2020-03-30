import React from 'react';
import logo from './logo.svg';
import categoryIMG from './images/category2.jpg';
import './App.css';
import Indicators from './components/Indicators';
import LineGraph from './components/LineGraph';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import API from './config/API';

class App extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      categories: [],
    }
  }

  render(){
    const images = {
      categoryLogo : './images/category.png',
    };
  return (
      <React.Fragment>
			<NavBar/>
      <section className="container">
      <div className="row">
      {this.state.categories.map( (cat, idx) => 
      <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12"> <Indicators idx = {idx} img = {categoryIMG} title = {cat.categoryName} idCategory = {cat.id} /> </div>)}
        </div>
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              <LineGraph  param = '1' months = '5' />
          </div>
        </div>
     </section>
     </React.Fragment>
    
  )
}
async componentDidMount(){
  let allCategories = await API.get('products/allCategories');
  allCategories = allCategories.data;
  this.setState({
    categories: allCategories,
  }); 
}

}
export default App;