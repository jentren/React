import './App.css';
import './bootstrap.min.css';
import Header from './header.js'
import Info from './info.js'
import Wall from './wall.js'
import Side from './sidebar.js'

const App =()=>{
  
  return(


    <div class="container">
      <Header/>
      <div class="row kek">
        <Side/>
        <div class="col-md-8">
          <Info/>


          <Wall/>
          


        </div>
      </div>
    </div>
  )
} 
export default App;
