import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";

const setting = async () => {
 const session = await auth();
    return (
        <>
            {JSON.stringify(session)}
            <form action={async()=>{
                "use server";
                console.log("Hello From Sign Out")
                await signOut();
            }}>
                <button type="submit">
                    sign out
                </button>
            </form>
        </>
    )
}

export default setting;