import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import Feature from '../src/assets/Feature.png'
import MenuCategory from '../src/assets/MenuCategory.png'
import Imagef from '../src/assets/Imagef.png'
import imagef2 from '../src/assets/imagef2.png'
import IconBox from '../src/assets/IconBox.png'
import IconBox2 from '../src/assets/IconBox2.png'
import IconBox3 from '../src/assets/IconBox3.png'



function App() {

  return (
    <>
  <Header></Header>
  <div className='w-100 container ' >
      <div className='w-100  row mt-5 '>
        <div className=' w-100 container p-5 col  md-8  '>
<h1 style={{color:'#181E4B'}}>Healthy Eating 
is important
part of lifestyle</h1>
<div className='container '  style={{marginLeft:'20px', color:'#5E6282'}}>
  <p>All you need is love. But a little chocolate now and then doesn't hurt." - Charles M. Schulz</p>
</div>
<Button  className='btn ' style={{backgroundColor:'green'}}>Show more</Button>{' '}  

      </div>

        <div className='col md-4 '>
          <img className='hedimg' height={500} src={Feature} alt="" />
          </div>
      </div>
      {/* card section */}
      <div className='w-100 container d-flex justify-content-center mt-4'>
<h1 style={{color:'#181E4B'}}>Our Menu</h1>
      </div>
<div className='w-100  row mt-5 ' >
  <div  className=' w-100 container  col  md-3  '><Card style={{ width: '18rem' }}>
      <Card.Img   variant="top" src={MenuCategory } />
      <Card.Body>
        <Card.Title>Braised Sliced Ablone</Card.Title>
        <Card.Text>
              </Card.Text>
      </Card.Body>
    </Card>
    </div>
  <div  className=' w-100 container  col  md-3  '><Card style={{ width: '18rem' }}>
      <Card.Img  variant="top" src={ Imagef } />
      <Card.Body>
        <Card.Title>Chicken Pical</Card.Title>
        <Card.Text>
                </Card.Text>
      </Card.Body>
    </Card>
    </div>
  <div  className=' w-100 container  col  md-3  '><Card style={{ width: '18rem' }}>
      <Card.Img   variant="top" src={imagef2}/>
      <Card.Body>
        <Card.Title>Kuruma Soya</Card.Title>
        <Card.Text>
       </Card.Text>
      </Card.Body>
    </Card>
    </div>
   </div>
   {/* card 2 */}
   <div className='w-100 container d-flex justify-content-center mt-4'>
<h1 style={{color:'#181E4B'}}>Features</h1>
      </div>
<div className='w-100  row mt-5 ' >
  <div  className=' w-100 container  col  md-3  '><Card style={{ width: '18rem' }}>
      <Card.Img  variant="top" src={IconBox}/>
      <Card.Body>
      </Card.Body>
    </Card>
    </div>
  <div  className=' w-100 container  col  md-3  '><Card style={{ width: '18rem' }}>
      <Card.Img  variant="top" src={IconBox2}/>
      <Card.Body>
      </Card.Body>
    </Card>
    </div>
  <div  className=' w-100 container col  md-3  '><Card style={{ width: '18rem' }}>
      <Card.Img  variant="top" src={IconBox3} />
      <Card.Body>
      </Card.Body>
    </Card>
    </div>
   </div>
   <div className='w-100 container d-flex justify-content-center mt-4'>
<div className='w-100  row mt-5 '>
  <div  className=' w-100 container p-5 col  md-4'>
  <h2> <span style={{color:'#fc9803'}}>Footer</span></h2>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente adipisci quidem eligendi accusamus at voluptatum quod quae, eos eaque fugiat pariatur illo sed alias corporis officiis.</p>
  </div>
  <div  className=' w-100 container p-5 col  md-4'>
<p>
  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, doloremque, nulla, odit quidem at perspiciatis voluptates nam repellat earum quas aperiam possimus sunt id corrupti quos vero distinctio porro ipsum.
</p></div>
<div  className=' w-100 container p-5 col  md-4 ' >
<i className="fa-brands fa-instagram fa-2xl" style={{marginLeft:'25px'}}></i>
<i className="fa-brands fa-twitter fa-2xl" style={{marginLeft:'25px'}}></i>
<i className="fa-brands fa-facebook fa-2xl" style={{marginLeft:'25px'}}></i>

</div>
</div>
</div>
   </div>
    {/* </div> */}
    </>
  )
}

export default App
