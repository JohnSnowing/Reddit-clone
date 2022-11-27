import { Button, Flex, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { authModalState } from "../../../atoms/authModalAtoms";

type LoginProps = {};

const Login: React.FC<LoginProps> = () => {
    const setAuthModalState = useSetRecoilState(authModalState);
    const [loginForm, seTloginForm] = useState({
        email: "",
        pasword: "",
    });

    //Firebase logic

    const onSubmit = () => {};

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        seTloginForm((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
        }));
    };
    return (
        <form onSubmit={onSubmit}>
            <Input
                required
                name="email"
                placeholder="email"
                type="email"
                mb={2}
                onChange={() => {}}
                fontSize="10pt"
                _placeholder={{ color: "gray.500" }}
                _hover={{
                    bg: "white",
                    border: "1px solid",
                    borderColor: "blue.500",
                }}
                _focus={{
                    outline: "none",
                    bg: "White",
                    border: "1px solid",
                    borderColor: "blue.500",
                }}
                bg="gray.50"
            />
            <Input
                required
                name="password"
                placeholder="password"
                type="password"
                onChange={() => {}}
                fontSize="10pt"
                _placeholder={{ color: "gray.500" }}
                _hover={{
                    bg: "white",
                    border: "1px solid",
                    borderColor: "blue.500",
                }}
                _focus={{
                    outline: "none",
                    bg: "White",
                    border: "1px solid",
                    borderColor: "blue.500",
                }}
                bg="gray.50"
                mb={2}
            />
            <Button width="100%" height="36px" mt={2} mb={2}>
                Log In
            </Button>
            <Flex fontSize="9pt" justifyContent="center">
                <Text mr={1}>New Here?</Text>
                <Text
                    color="blue.500"
                    fontWeight={700}
                    cursor="pointer"
                    onClick={() =>
                        setAuthModalState((prev) => ({
                            ...prev,
                            view: "signup",
                        }))
                    }
                >
                    SIGN UP
                </Text>
            </Flex>
        </form>
    );
};
export default Login;
