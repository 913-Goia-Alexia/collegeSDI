import React, {useState} from "react";
import {UserLogin} from "../App";
import {
    Avatar,
    Box,
    Button,
    Checkbox,
    Container,
    FormControlLabel,
    Grid,
    Link,
    TextField,
    Typography
} from "@mui/material";

interface LoginProps{
    setUserLoginCallback: (data: UserLogin) => void
}
interface ErrorMessages{
    name?: string,
    message?: string
}
const Login : React.FC<LoginProps> = ({setUserLoginCallback}) => {

    // React States
    const [errorMessages , setErrorMessages] = useState<ErrorMessages>({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const errors = {
        uname: "Invalid Username!",
        pass: "Invalid Password!"
    };

    const handleSubmit = (event : any) => {
        //Prevent page reload
        event.preventDefault();

        // Find user login info

        // Compare user info
                setIsSubmitted(true);
                console.log("Authentication successful!")
                setUserLoginCallback({username: "aaa", password: "aaa"});
    };

    // Generate JSX code for error message

    // JSX code for login form
    return (
            <Container component="main" maxWidth="xs">
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        AAAAAAAAAAA
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2}}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
    );

}

export default Login;