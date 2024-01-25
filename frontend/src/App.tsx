import { useState } from "react";
import { Message } from "./components/common/Message";
import { SignIn } from "./components/modules/SignIn";
import { SignUp } from "./components/modules/SignUp";

function App() {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <>
      <div className="flex justify-center items-center h-screen bg-gray-900">
        <div className="flex justify-between bg-white h-screen flex-col-reverse lg:grid lg:grid-cols-2 lg:h-fit lg:w-fit lg:max-w-screen-lg lg:rounded-3xl lg:shadow-lg lg:min-h-96">
          {isSignIn ? (
            <>
              <Message
                title="Welcome to XYZ"
                description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est officiis totam quasi magni illo! Corporis magnam quis optio eaque molestiae dolorem culpa quod. Tempora a animi, maxime earum ducimus est?"
                button={{
                  children: "Sign up",
                  onClick: () => setIsSignIn(false)
                }}
              />
              <SignIn />
            </>
          ) : (
            <>
              <Message
                title="Welcome to XYZ"
                description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est officiis totam quasi magni illo! Corporis magnam quis optio eaque molestiae dolorem culpa quod. Tempora a animi, maxime earum ducimus est?"
                button={{
                  children: "Sign in",
                  onClick: () => setIsSignIn(true)
                }}
              />
              <SignUp />
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default App
