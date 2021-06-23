import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/About'
import ConfirmRegistration from './components/ConfirmRegistration'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'
import ShippingScreen from './screens/ShippingScreen'
import PaymentScreen from './screens/PaymentScreen'
import PlaceOrderScreen from './screens/PlaceOrderScreen'
import OrderScreen from './screens/OrderScreen'
import UserListScreen from './screens/UserListScreen'
import UserEditScreen from './screens/UserEditScreen'
import ProductListScreen from './screens/ProductListScreen'
import ProductEditScreen from './screens/ProductEditScreen'
import DoctorService from './screens/DoctorService'
import OrderListScreen from './screens/OrderListScreen'
import ServiceRegistration from './screens/ServiceRegistration'
import ConfirmServiceOrder from  './components/confirmServiceOrder'
import MedicineService from './screens/MedicineService'
import CarService from './screens/CarService'
import AmbulanceService from './screens/AmbulanceService'
import ElectricianService from './screens/ElectricianService'
import DesignerService from './screens/DesignerService'
import CngService from './screens/CngService'
import TechnicianService from './screens/TechnicianService'
import VanService from './screens/VanService'
import FlatService from './screens/FlatService'
import PhotographerService from './screens/PhotographerService'
import BoostingService from './screens/BoostingService'
import PlumberService from './screens/PlumberService'
import TeacherService from './screens/TeacherService'
import RepairerService from './screens/RepairerService'
import TilesService from './screens/TilesService'

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-12'>
        <Container>
          <Route exact path='/service/medicine/order' component={MedicineService} />
          <Route exact path='/service/car/order' component={CarService} />
          <Route exact path='/service/ambulance/order' component={AmbulanceService} />
          <Route exact path='/service/electrician/order' component={ElectricianService} />
          <Route exact path='/service/designer/order' component={DesignerService} />
          <Route exact path='/service/cng/order' component={CngService} />
          <Route exact path='/service/technician/order' component={TechnicianService} />
          <Route exact path='/service/van/order' component={VanService} />
          <Route exact path='/service/flat/order' component={FlatService} />
          <Route exact path='/service/photographer/order' component={PhotographerService} />
          <Route exact path='/service/boosting/order' component={BoostingService} />
          <Route exact path='/service/Plumber/order' component={PlumberService} />
          <Route exact path='/service/teacher/order' component={TeacherService} />
          <Route exact path='/service/repairer/order' component={RepairerService} />
          <Route exact path='/service/tiles/order' component={TilesService} />
          <Route exact path='/service/doctor/order' component={DoctorService} />
          <Route exact path='/service/order/confirm' component={ConfirmServiceOrder} />
          <Route exact path='/workers/registration/confirm' component={ConfirmRegistration} />
          <Route exact path='/workers/registration' component={ServiceRegistration} />
          <Route exact path='/about' component={About} />
          <Route exact path='/order/:id' component={OrderScreen} />
          <Route exact path='/shipping' component={ShippingScreen} />
          <Route exact path='/payment' component={PaymentScreen} />
          <Route exact path='/placeorder' component={PlaceOrderScreen} />
          <Route exact path='/login' component={LoginScreen} />
          <Route exact path='/register' component={RegisterScreen} />
          <Route exact path='/profile' component={ProfileScreen} />
          <Route exact path='/product/:id' component={ProductScreen} />
          <Route exact path='/cart/:id?' component={CartScreen} />
          <Route exact path='/admin/userlist' component={UserListScreen} />
          <Route exact path='/admin/user/:id/edit' component={UserEditScreen} />
          <Route
            path='/admin/productlist'
            component={ProductListScreen}
            exact
          />
          <Route
            path='/admin/productlist/:pageNumber'
            component={ProductListScreen}
            exact
          />
          <Route path='/admin/product/:id/edit' component={ProductEditScreen} />
          <Route path='/admin/orderlist' component={OrderListScreen} />
          <Route path='/search/:keyword' component={HomeScreen} exact />
          <Route path='/page/:pageNumber' component={HomeScreen} exact />
          <Route
            path='/search/:keyword/page/:pageNumber'
            component={HomeScreen}
            exact
          />
          <Route path='/' component={HomeScreen} exact />
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
