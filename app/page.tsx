import LogingBtn from "@/components/LogingBtn";
import { Button } from "@/components/ui/button";

const Home = async () => {

  return (
    <>
      <div className="h-screen w-full bg-black flex justify-center items-center">
        <div className="">
          <div className="text-white font-extrabold text-6xl">
            🔐 Auth
            <div className="text-white text-sm flex flex-col justify-center items-center p-4">
              A Simple Auth Section
              <LogingBtn >
                <Button variant="secondary" className="px-4 mt-4">
                  Sign In
                </Button>
              </LogingBtn>
            </div>
          </div>
        </div>

      </div>
    </>
  )

}

export default Home 