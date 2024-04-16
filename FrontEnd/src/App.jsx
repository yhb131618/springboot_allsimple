import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet, Route, Routes, useLocation } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './App.css'
import NotAuthRoutes from './components/NotAuthRoutes'
import ProtectedRoutes from './components/ProtectedRoutes'
import Footer from './layout/Footer'
import Navbar from './layout/Navbar'
import CartPage from './pages/CartPage'
import DetailProductPage from './pages/DetailProductPage'
import HistoryPage from './pages/HistoryPage'
import LoginPage from './pages/LoginPage'
import PortFolio from './pages/PortFolioPage'
import ProtectedPage from './pages/ProtectedPage'
import RegisterPage from './pages/RegisterPage'
import UploadProductPage from './pages/UploadProductPage'
import VideoPlay from './pages/VideoPlayPage'
import VideoUpload from './pages/VideoUploadPage'
import { authUser } from './store/thunkFunctions'
function Layout() {
  return (
    
    <div className='flex flex-col  h-screen'>
      <ToastContainer
        position='bottom-right'
        theme='light'
        pauseOnHover
        autoClose={1500}
      />

    
      <Navbar/>
   
      <main className='flex-grow overflow-auto mr-3 ml-3 mt-3 mb-3 '>
        {/* w-10/12: 너비를 부모 요소의 10/12, 즉 83.33%로 설정합니다.
  max-w-4xl: 최대 너비를 4xl (대개는 56rem 또는 896px)로 설정합니다.
  mx-auto: 좌우 마진을 자동으로 설정하여 요소를 가로축 중앙에 위치시킵니다.
  mb-auto: 아래쪽(margin-bottom) 마진을 자동으로 설정합니다.  */}
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector(state => state.user?.isAuth);
  const { pathname } = useLocation();

  useEffect(() => {
    if (isAuth) {
      dispatch(authUser());
    }
  }, [isAuth, pathname, dispatch])


  return (
    <Routes>
      <Route path='/' element={<Layout />} >

        {/* <Route index element={<LandingPage />} /> */}
        <Route index element={<PortFolio />} />
        <Route path="/portfolio" element={<PortFolio />} />
        <Route path="/videoupload" element={<VideoUpload />} /> 
        <Route path="/videoplay" element={<VideoPlay />} /> 
        
        {/* 로그인한 사람만 갈 수 있는 경로 */}
        <Route element={<ProtectedRoutes isAuth={isAuth} />}>
          <Route path="/protected" element={<ProtectedPage />} />
          <Route path="/product/upload" element={<UploadProductPage />} />
          <Route path="/product/:productId" element={<DetailProductPage />} />
          <Route path="/user/cart" element={<CartPage />} />
          <Route path="/history" element={<HistoryPage />} />
        </Route>


        {/* 로그인한 사람은 갈 수 없는 경로 */}
        <Route element={<NotAuthRoutes isAuth={isAuth} />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>


      </Route>
    </Routes>
  )
}

export default App
