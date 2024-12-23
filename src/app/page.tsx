import Link from "next/link";

const Home = () => {
    return (
        <div className="flex min-h-screen items-center justify-center">
            click <Link href="/documents/test" >&nbsp;here&nbsp;</Link> to go to the document id
        </div>
    );
}

export default Home;