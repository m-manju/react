import a1 from '../images/a1.jpg';
function Image() {
  return (
    <>
    <h2>Images</h2>
    <div className='imgDiv'>
      <img src={a1}  alt="Image 1" className='image1' />
      <img src={a1}  alt="Image 1" className='image1' />
    </div>
    </>
  );
};

export default Image;