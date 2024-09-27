import {Link,useNavigate}from 'react-router-dom';

function Home(){
    const navigate = useNavigate();
    const navToPage =()=>{
        let x= true;
        if(x){
            navigate('/About')
        }else{
        navigate('/Contact')
    }
    }
    return(
        <div>
            <h1>Home Page</h1>
            <p>Here we are in home page we can use link here for redirecting to another page </p>
            <p>So lets get strted </p>
            <Link to="/About">About</Link>
            <br />
            {/*this is the one way to naigate another way is<button onClick={()=>navigate('/About')}>Go to About Page</button>
            <br />
            <button onClick={()=>navigate('/Filter')}>Go to Filter  Page</button>
    <br />*/}
            <button onClick={()=>navToPage()}>Go to About  Page</button>
            <br />
            <button onClick={()=>navToPage()}>Go to Contact Page</button>
            <br />
        </div>
       
    );
}
export default Home;