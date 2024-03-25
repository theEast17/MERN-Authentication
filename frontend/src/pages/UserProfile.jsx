import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormContainer from "../components/FormContainer";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCredentials } from "../slices/authSlice";
import { toast } from "react-toastify";
import Loader from "../components/Loader";
import { useUpdateUserMutation } from "../slices/usersApiSlice";

const UserProfile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

    const [update,{isLoading}]=useUpdateUserMutation();
  const { userInfo } = useSelector((state) => state.auth);

  useEffect(()=>{
    setName(userInfo.name)
    setEmail(userInfo.email)
  },[userInfo.setName,userInfo.setEmail])


  const handleSubmit = async (e) => {
    e.preventDefault();
    if(password!==confirmPassword){
        toast.error('Passwords fo not match!')
    }else{
        try {
            const response=await update({
                _id:userInfo._id,
                name,
                email,
                password
            }).unwrap();
            dispatch(setCredentials({...response}))
            navigate('/')
            toast.success('Profile updated successfully')      

        } catch (err) {
            toast.error(err?.data?.message || err.error);
        }
    }

  };

  return (
    <FormContainer>
      <h1>Update Profile</h1>

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 mt-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3 mt-3" controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3 mt-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3 mt-3" controlId="confirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </Form.Group>
        {isLoading && <Loader/> }

        <Button type="submit" variant="primary" className="mt-2">
          Update
        </Button>

      </Form>
    </FormContainer>
  );
};

export default UserProfile;
