import { useRef,useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../context/AuthProvider";
import { Link,useNavigate } from "react-router-dom";


const Login=()=>{
    const emailRef = useRef();
    const passwordRef = useRef();
    const navigate=useNavigate();

    const authCtx =useAuth();
    console.log(authCtx);
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    const handleSubmit=async(e)=>{
        e.preventDefault();
        setLoading(true)
        setError("");
        try{
      const currentUser=await authCtx.login(
        emailRef.current.value,
         passwordRef.current.value
         );
         authCtx.setCurrentUser(currentUser)
        navigate("/dashboard");
        }
        catch (err){
            setError("Invalid UserName And Password")
            console.error(err);
        }
        setLoading(false)
    }
    return (
        <>
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4">Log In</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" ref={emailRef} required />
              </Form.Group>
              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" ref={passwordRef} required />
              </Form.Group>
              <Button disabled={loading} className="w-100" type="submit">
                Log In
              </Button>
            </Form>
            <div className="w-100 text-center mt-3">
    { /*<Link to="/forgot-password">Forgot Password?</Link>*/}
            </div>
          </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
        Need an account? <Link to="/signup">Sign Up</Link>
        </div>
      </>
    )
}
export default Login